
function leer(){
    var resul1=0.0;
    var resul2=0.0;
    var resul3=0.0;
    var resul4=0.0;
    var resul5=0.0;
    var resul6=0.0;
    if (document.getElementById("amortiguadores").checked) {
        var dato1=parseFloat(document.getElementById("precio1").value);
        var dato1b=parseFloat(document.getElementById("prod1Id").value);
    
        resul1=(dato1 * dato1b);
    }
    if(document.getElementById("baleros").checked){
        var dato2=parseFloat(document.getElementById("precio2").value);
        var dato2b=parseFloat(document.getElementById("prod2Id").value);
    
        resul2=(dato2 * dato2b);
    }
    if(document.getElementById("bujes").checked){
        var dato3=parseFloat(document.getElementById("precio3").value);
        var dato3b=parseFloat(document.getElementById("prod3Id").value);
    
        resul3=(dato3 * dato3b);
    }
    if(document.getElementById("generador").checked){
        var dato4=parseFloat(document.getElementById("precio4").value);
        var dato4b=parseFloat(document.getElementById("prod4Id").value);
    
        resul4=(dato4 * dato4b);
    }
    if(document.getElementById("portaequipaje").checked){
        var dato5=parseFloat(document.getElementById("precio5").value);
        var dato5b=parseFloat(document.getElementById("prod5Id").value);
    
        resul5=(dato5 * dato5b);
    }
    if(document.getElementById("anticongelante").checked){
        var dato6=parseFloat(document.getElementById("precio6").value);
        var dato6b=parseFloat(document.getElementById("prod6Id").value);
    
        resul6=(dato6 * dato6b);
    }
    
    document.getElementById("total").value=resul1 + resul2 + resul3 + resul4 + resul5 + resul6;   
}

function limpiar(){
    document.getElementById("prod1Id").value=" ";
    document.getElementById("prod2Id").value=" ";
    document.getElementById("prod3Id").value=" ";
    document.getElementById("prod4Id").value=" ";
    document.getElementById("prod5Id").value=" ";
    document.getElementById("prod6Id").value=" ";
    document.getElementById("total").value=" ";
    document.getElementById("amortiguadores").checked=false;
    document.getElementById("baleros").checked=false;
    document.getElementById("bujes").checked=false;
    document.getElementById("generador").checked=false;
    document.getElementById("portaequipaje").checked=false;
    document.getElementById("anticongelante").checked=false;
    let ticket = document.getElementById("ticket");
    ticket.style.display = "none";
    document.getElementById("amortiguadoresT").innerHTML=" ";
    document.getElementById("balerosT").innerHTML=" ";
    document.getElementById("bujesT").innerHTML=" ";
    document.getElementById("generadorT").innerHTML=" ";
    document.getElementById("portaEquipajeT").innerHTML=" ";
    document.getElementById("anticongelanteT").innerHTML=" ";
}

function comprar(){
    let ticket = document.getElementById("ticket");
    ticket.style.display = "block";
    var resul1=0.0;
    var resul2=0.0;
    var resul3=0.0;
    var resul4=0.0;
    var resul5=0.0;
    var resul6=0.0;
    var dato1=parseFloat(document.getElementById("precio1").value);
    var dato1b=parseFloat(document.getElementById("prod1Id").value);
    resul1=(dato1 * dato1b);
    var dato2=parseFloat(document.getElementById("precio2").value);
    var dato2b=parseFloat(document.getElementById("prod2Id").value);
    resul2=(dato2 * dato2b);
    var dato3=parseFloat(document.getElementById("precio3").value);
    var dato3b=parseFloat(document.getElementById("prod3Id").value);
    resul3=(dato3 * dato3b);
    var dato4=parseFloat(document.getElementById("precio4").value);
    var dato4b=parseFloat(document.getElementById("prod4Id").value);
    resul4=(dato4 * dato4b);
    var dato5=parseFloat(document.getElementById("precio5").value);
    var dato5b=parseFloat(document.getElementById("prod5Id").value);
    resul5=(dato5 * dato5b);
    var dato6=parseFloat(document.getElementById("precio6").value);
    var dato6b=parseFloat(document.getElementById("prod6Id").value);
    resul6=(dato6 * dato6b);
   

if (document.getElementById("amortiguadores").checked){
    let amortiguadores = document.getElementById("amortiguadoresT");
    amortiguadores.innerHTML = "Amortiguadores: "+dato1b+" pzas. "+" $"+dato1+"c/u"+" subtotal "+"$"+resul1;
}else{
    resul1=0;
}

if (document.getElementById("baleros").checked){
    let baleros = document.getElementById("balerosT");
    baleros.innerHTML = "Baleros: "+dato2b+" pzas. "+" $"+dato2+"c/u"+" subtotal "+"$"+resul2;
}else{
    resul2=0;
}

if (document.getElementById("bujes").checked){
    let bujes = document.getElementById("bujesT");
    bujes.innerHTML = "Bujes: "+dato3b+" pzas. "+" $"+dato3+"c/u"+" subtotal "+"$"+resul3;
}else{
    resul3=0;
}

if (document.getElementById("generador").checked){
    let generador = document.getElementById("generadorT");
    generador.innerHTML = "Generador: "+dato4b+" pzas. "+" $"+dato4+"c/u"+" subtotal "+"$"+resul4;
}else{
    resul4=0;
}

if (document.getElementById("portaequipaje").checked){
    let portaequipaje = document.getElementById("portaEquipajeT");
    portaequipaje.innerHTML = "Porta equipaje: "+dato5b+" pzas. "+" $"+dato5+"c/u"+" subtotal "+"$"+resul5;
}else{
    resul5=0;
}

if (document.getElementById("anticongelante").checked){
    let anticongelante = document.getElementById("anticongelanteT");
    anticongelante.innerHTML = "Anticongelante: "+dato6b+" pzas. "+" $"+dato6+"c/u"+" subtotal "+"$"+resul6;
}else{
    resul6=0;
}

let total = document.getElementById("totalCompra");
total.innerHTML="Total: "+(resul1 + resul2 + resul3 + resul4 + resul5 + resul6);
console.log(resul1 + resul2 + resul3 + resul4 + resul5 + resul6);

}

function pagar(){
    if (document.getElementById("Tarjeta").checked){
        alert("Elegiste tarjeta");
        //document.getElementById("Tarjeta").src='../HTML/tarjeta.html';
        //document.getElementById("pagoTarjeta").src='../img/pagoExitosoTarjeta.jpg';
        //<a href="../HTML/tarjeta.html"></a>;
    }else{
        alert("Elegiste Transferencia");
        //<a href="transferencia.html"></a>;
    }
}



