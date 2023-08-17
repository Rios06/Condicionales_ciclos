let nombre_cliente = prompt("Ingrese el nombre del cliente");
let cantidad_huevos = prompt("Ingrese la cantidad de huevos");
const valor_unitario = 250
let precio_neto , precio_descuento
precio_neto = valor_unitario*cantidad_huevos
console.log("El precio neto es: " + precio_neto);

if (cantidad_huevos>0 && cantidad_huevos <= 100) {
    precio_descuento = precio_neto-precio_neto*3/100

} else if (cantidad_huevos>100 && cantidad_huevos <=200) {
    precio_descuento = precio_neto-precio_neto*5/100

} else if  (cantidad_huevos>200 && cantidad_huevos<=300) {
    precio_descuento = precio_neto-precio_neto*8/100
} else {
    precio_descuento = precio_neto-precio_neto*10/100
}

console.log("El precio final con descuento es " + precio_descuento)