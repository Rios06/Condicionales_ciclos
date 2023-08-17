let mayores_edad =0
let menores_edad=0
let contador_mayor=0
let contador_menor=0
for (let i=1 ; i<=10; i++){
let edad = prompt("Ingrese la edad");
if (edad <18) {
    menores_edad=menores_edad+edad
    contador_menor=contador_menor+1
} else {
    mayores_edad=mayores_edad+edad
    contador_mayor=contador_mayor+1
}
}

console.log("Los estudiantes mayores son " + contador_mayor);
console.log("Los estudiantes menores son " + contador_menor);