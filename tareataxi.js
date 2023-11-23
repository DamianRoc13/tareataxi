`use strict`

let vehiculo = {
    marca: "Chevrolet",
    modelo: "Aveo Family",
    color: "Rojo",
    placa: "GSB-2995",
    year: 2017,
    valido: true,
};

function validartaxi(vehiculo) {
    vehiculo.year = 2023 - vehiculo.year;
    if (vehiculo.year <= 10) {
        alert("El auto es apto");
    } else {
        alert("El auto no es apto");
    }
}

validartaxi(vehiculo);