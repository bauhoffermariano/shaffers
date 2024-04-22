let takeAwayBtn= document.getElementById("takeAwayBtn");
let direccionInp= document.getElementById("direccion");
let localidadInp= document.getElementById("zona");

            takeAwayBtn.addEventListener("change", () =>{
                if (takeAwayBtn.checked){
                    direccionInp.style.display="none";
                    localidadInp.style.display="none";
                    localidadInp.value="AlejandroKorn";
                    direccionInp.value="TakeAway";
                }
                else{
                    direccionInp.style.display="";
                    direccionInp.value="";
                    localidadInp.style.display="";
                }
            } );