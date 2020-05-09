function suma(num1, num2) {
    return num1 + num2;
}

console.log(suma(4, 5));

const sumav2 = function (num1, num2) {
    return num1 + num2;
}
console.log(sumav2(3, 8));

const sumav3 = (num1, num2) => num1 + num2;
console.log(sumav3(45, 78));

const numeros = [3, 4, 78, 43, 24, 98];

// Iterar el array con un FOR
const pares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}
console.log(pares);

// Funciones de arrays para filtrar
const paresv2 = numeros.filter(function (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
console.log(paresv2);

// Funciones a través de Arrow Function
const paresv3 = numeros.filter(num => num % 2 === 0);
console.log(paresv3);

// CALLBACKS
const sumaRetardo = (num1, num2, resultado) => {
    setTimeout(() => {
        resultado(num1 + num2);
    }, 2000);
}

sumaRetardo(4, 3, (res) => {
    console.log(res);
});

// PROMESAS
const sumaPromesas = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 === 0 && num2 === 0) {
                reject('Los dos números no pueden ser cero');
            } else {
                resolve(num1 + num2);
            }
        }, 2000);
    });
};
sumaPromesas(9, 5)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch(err => console.log(err));

sumaPromesas(0, 0)
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err));