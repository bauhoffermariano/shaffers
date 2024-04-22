function pedido() {
  let url;
  const celular = +542224465613;
  let cantidades = [];
  let precios = [100, 200, 300, 400];
  let precioPapas = 50;
  let nombresBurgas = ["Keseso", "Ineludible", "Sudamericana", "Shäker"];
  let infoCliente = [
    document.getElementById("nombre").value,
    document.getElementById("direccion").value,
    document.getElementById("zona").value,];
  let nombre = document.getElementById("nombre").value;
  let transferencia = document.getElementById("transferencia").checked;
  let efectivo = document.getElementById("efectivo").checked;
  let burgas0 = (document.getElementById("subtotalBox").textContent);
  let cajaMsj= document.getElementById("cajaMsj");
  let cajaMsjTexto= document.getElementById("cajaMsjTexto");
  let btnBack = document.getElementById("volver");
  let cajaMsjBox=  document.getElementById("popUpCenter")
  let metodoPago = document.querySelectorAll("input[name='metodoPago']");
  
  let metodoPagoMsj;
  metodoPago.forEach(function (checkbox) {
    if (checkbox.checked) {
      metodoPagoMsj = checkbox.value;
    }
  });
  let burga = document.getElementsByClassName("cantidad");

  for (let i = 0; i < burga.length; i++) {
    let valor = [burga[i].value];
    if (valor != 0) {
      cantidades.push("x" + parseInt(valor) + nombresBurgas[i]);
      if (document.getElementById(`papas${i + 1}`).checked)
        cantidades.push("COMBO%0a");
      else {
        cantidades.push("%0a");
      }
    }
  }

  
  if ((burgas0 === "0")|(burgas0===" ")) {
    cajaMsj.style.display = "inline-block";
    cajaMsjBox.style.zIndex="1"
    cajaMsj.style.zIndex="1";
    cajaMsjTexto.textContent = "Falta elegir la burga";
    btnBack.addEventListener("click", () => {
      cajaMsj.style.display = "none";
      cajaMsj.style.zIndex="-1"
      cajaMsjBox.style.zIndex="-1"
    });
    return;
  }

  if ((transferencia===false)&(efectivo===false)){
    cajaMsj.style.display = "inline-block";
    cajaMsjBox.style.zIndex="1"
    cajaMsj.style.zIndex="1";
    cajaMsjTexto.textContent = "Falta elegir método de pago";
    btnBack.addEventListener("click", () => {
      cajaMsj.style.display = "none";
      cajaMsj.style.zIndex="-1"
      cajaMsjBox.style.zIndex="-1"
    });
    return;
  }

  if ((burgas0 != " ")&((transferencia===true)|(efectivo===true))){
      btnEnviar.style.display="inline-block";
    cajaMsj.style.display = "inline-block";
    cajaMsjBox.style.zIndex="1"
    cajaMsj.style.zIndex="1";
    cajaMsjTexto.textContent = "¿Seguro?";
    btnEnviar.addEventListener("click", ()=>{     
        url = "https://wa.me/+542224465613?text="+"Nombre:"+"%20"+nombre+"%0a"+
        "Dire:"+ "%20" + infoCliente[1]+ "%0a"+
        "Zona:"+ "%20" +infoCliente[2]+ "%0a"+"%0a"+
        (cantidades.join("%20"))+"%0a"+
        "Total%20:$"+"%20"+(document.getElementById("subtotalBox").textContent)+"%0a"+
        metodoPagoMsj+"%0a"+
        "Este es el alias de Schaffers";
        window.open(url, '_blank').focus();
        console.log(url)
        // location.reload();
        } )
        btnBack.addEventListener("click", () => {
          cajaMsj.style.display = "none";
          cajaMsj.style.zIndex="-1"
          cajaMsjBox.style.zIndex="-1"
        });
        return;
    
      console.log(url);
    
    
    // btnBack.addEventListener("click", () => {
    //   cajaMsj.style.display = "none";
    //   cajaMsj.style.zIndex="-1"
    //   cajaMsjBox.style.zIndex="-1"
    // });
    // return;
  }




  //_________________________

}
  //_____
 

