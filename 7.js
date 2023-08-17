
for (let i=1 ; i<=2; i++){
    let producto = prompt("Ingresa nombre del producto");
    let precio = prompt("Ingrese precio del producto");
    let iva = parseInt (precio)* (.19)
    let total = parseInt (precio)+ (iva)
    console.log("El precio del iva es de " + iva) ;
console.log("El precio a pagar con iva incluido es de " + total);

}

