function calculaTriangulo(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);

    isNaN(a)?alert("Número 1 não pode ser vazio"):null;
    isNaN(b)?alert("Número 2 não pode ser vazio"):null;
    isNaN(c)?alert("Número 3 não pode ser vazio"):null;

    let valido = (((a > Math.abs(b - c) && a < b+c)?true:false) && 
    ((b > Math.abs(a - c) && b < a+c)?true:false) &&
    ((c > Math.abs(a - b) && c < a+b)?true:false));

    if(valido){
        let triangulo = (a == b && b == c?"Equilátero":(a==b || b==c || c==a?"Isósceles":"Escaleno" ))

        document.getElementById("parag").innerHTML = (
            "O triângulo é : " + triangulo + 
            "<br> A: " + a +
            "<br> B: " + b +
            "<br> C: " + c);
    }else{
        document.getElementById("parag").innerHTML = (
            "As medidas não formam um triângulo");
    }

    
}