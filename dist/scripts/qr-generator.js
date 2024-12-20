let dataType = "url";

function showQR(imgUrl) {
  const container = document.querySelector(".qr-code-area");
  const img = document.createElement("img");
  img.src = imgUrl;
  img.classList.add("mt-10", "ml-3", "your-qr");
  container.appendChild(img);
}

function getQR(domain, size) {
  if (dataType == "url") {
    const modifiedDomain = `https://${domain}`;
    const URL = `http://api.qrserver.com/v1/create-qr-code/?data=${modifiedDomain}&size=${size}x${size}`;
    return URL;
  } else {
    const URL = `http://api.qrserver.com/v1/create-qr-code/?data=${domain}&size=${size}x${size}`;
    return URL;
  }
}

function removeOldQR() {
  document.querySelector(".your-qr").remove();
}

document.querySelectorAll(".data-selection-btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    const btnClicked = e.target.innerText;
    if (btnClicked == "Text") {
      dataType = "text";
      document.querySelector(".txt-data-fields").classList.remove("hidden");
      document
        .querySelector(".txt-data-fields")
        .classList.add("flex", "flex-col", "items-center"); // fixing css conflicts
      document.querySelector(".url-data-fields").classList.add("hidden");
      e.target.classList.add("text-slate-500");
      e.target.previousElementSibling.classList.remove("text-slate-500");
    } else {
      dataType = "url";
      document.querySelector(".txt-data-fields").classList.add("hidden");
      document.querySelector(".url-data-fields").classList.remove("hidden");
      e.target.classList.add("text-slate-500");
      e.target.nextElementSibling.classList.remove("text-slate-500");
    }
  });
});

document.querySelector(".generate-btn").addEventListener("click", (e) => {
  if (document.querySelector(".your-qr") != null) removeOldQR();
  if (dataType == "url") {
    let url =
      e.target.previousElementSibling.previousElementSibling.childNodes[1]
        .childNodes[3].value;
    let size =
      e.target.previousElementSibling.previousElementSibling.childNodes[3]
        .childNodes[3].value;
    if (size == "") size = "200";
    if (url != "") {
      const imgUrl = getQR(url, size);
      showQR(imgUrl);
    } else {
      alert("Invalid Url");
    }
  } else {
    let textData =
      e.target.previousElementSibling.childNodes[1].childNodes[3].value;
    let size =
      e.target.previousElementSibling.childNodes[3].childNodes[3].value;
    if (size == "") size = "200";
    if (textData != "") {
      const imgUrl = getQR(textData, size);
      showQR(imgUrl);
    } else {
      alert("Invalid Text");
    }
  }
});
