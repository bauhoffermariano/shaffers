let imgBurga1 = document.getElementById("imgBurga1");
let imgBurga2 = document.getElementById("imgBurga2");
let imgBurga3 = document.getElementById("imgBurga3");
let imgBurga4 = document.getElementById("imgBurga4");
let popUpIngr = document.getElementById("popUpIngr");
let body = document.getElementById("body");

imgBurga1.addEventListener("click", () => {
  popUpIngr.style.display = "grid";
  popUpIngr.addEventListener("click", () => {
    popUpIngr.style.display = "none";
  });
});
imgBurga2.addEventListener("click", () => {
    popUpIngr.style.display = "grid";
    popUpIngr.addEventListener("click", () => {
      popUpIngr.style.display = "none";
    });
  });
  imgBurga3.addEventListener("click", () => {
    popUpIngr.style.display = "grid";
    popUpIngr.addEventListener("click", () => {
      popUpIngr.style.display = "none";
    });
  });
  imgBurga4.addEventListener("click", () => {
    popUpIngr.style.display = "grid";
    popUpIngr.addEventListener("click", () => {
      popUpIngr.style.display = "none";
    });
  });
