document.getElementById("nextBtn").addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  let direccion = document.getElementById("direccion").value;
  let zona = document.getElementById("zona").value;
  let cajaMsj = document.getElementById("cajaMsj");
  let cajaMsjBox=  document.getElementById("popUpCenter")
  let cajaMsjTexto = document.getElementById("cajaMsjTexto");
  let btnBack = document.getElementById("volver");
  
  if (nombre === "") {
    cajaMsj.style.display = "inline-block";
    cajaMsjBox.style.zIndex="1"
    cajaMsj.style.zIndex="1";
    cajaMsjTexto.textContent = "Falta tu nombre";
    btnBack.addEventListener("click", () => {
      cajaMsj.style.display = "none";
      cajaMsj.style.zIndex="-1"
      cajaMsjBox.style.zIndex="-1"
    });
    return;
  }
  if (direccion === "") {
    cajaMsj.style.display = "inline-block";
    cajaMsjBox.style.zIndex="1"
    cajaMsj.style.zIndex="1";
    cajaMsjTexto.textContent = "Falta tu direccion";
    btnBack.addEventListener("click", () => {
      cajaMsj.style.display = "none";
      cajaMsj.style.zIndex="-1"
      cajaMsjBox.style.zIndex="-1"
    });
    return;
  }
  if (zona === "") {
    cajaMsj.style.display = "inline-block";
    cajaMsjBox.style.zIndex="1"
    cajaMsj.style.zIndex="1";
    cajaMsjTexto.textContent = "Falta la zona";
    btnBack.addEventListener("click", () => {
      cajaMsj.style.display = "none";
      cajaMsj.style.zIndex="-1"
      cajaMsjBox.style.zIndex="-1"
    });
    return;
  }
  
 
  document.getElementById("logo").style.display="none";
  document.getElementById("infoCliente").style.display="none";
  document.getElementById("infoPedido").style.display="grid"; 
  document.getElementById("pagoBox").style.display="inline";
});
