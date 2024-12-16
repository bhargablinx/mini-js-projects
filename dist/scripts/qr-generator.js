document.querySelectorAll(".data-selection-btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    const btnClicked = e.target.innerText;
    if (btnClicked == "Text") {
      document.querySelector(".txt-data-fields").classList.remove("hidden");
      document.querySelector(".url-data-fields").classList.add("hidden");
      e.target.classList.add("text-slate-500");
      e.target.previousElementSibling.classList.remove("text-slate-500");
    } else {
      document.querySelector(".txt-data-fields").classList.add("hidden");
      document.querySelector(".url-data-fields").classList.remove("hidden");
      e.target.classList.add("text-slate-500");
      e.target.nextElementSibling.classList.remove("text-slate-500");
    }
  });
});
