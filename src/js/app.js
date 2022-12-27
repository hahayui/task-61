import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  
  const allHotPrices = document.querySelectorAll(".hot");
  
  for (let index = 0; index < allHotPrices.length; ) {
    
    allHotPrices[index].innerHTML = allHotPrices[index].innerHTML + "🔥";

    index++
  }
});
