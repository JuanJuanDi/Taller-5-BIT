const corrales = [
    ['oveja', 'oveja', '', 'oveja', ''],
    ['oveja', 'oveja', 'oveja', 'oveja', ''],
    ['oveja', 'muerta', 'lobo', '', 'muerta']
];

// Función para contar las ovejas vivas
function contarOvejasVivas(corrales) {
    let ovejasVivas = 0;
    for (let corral of corrales) {
        for (let animal of corral) {
            if (animal === 'oveja') {
                ovejasVivas++;
            }
        }
    }
    return ovejasVivas;
}

// Función para contar los espacios libres
function contarEspaciosLibres(corrales) {
    let espaciosLibres = 0;
    for (let corral of corrales) {
        for (let i = 0; i < corral.length; i++) {
            if (corral[i] === '' || corral[i] === 'muerta') {
                espaciosLibres++;
            }
        }
    }
    return espaciosLibres;
}

// Función para neutralizar al lobo y contar los espacios libres resultantes
function neutralizarLobo(corrales) {
    let espaciosLibres = 0;
    for (let corral of corrales) {
        for (let i = 0; i < corral.length; i++) {
            if (corral[i] === 'lobo') {
                corral[i] = '';
                espaciosLibres += 1;
            } else if (corral[i] === 'muerta') {
                corral[i] = '';
                espaciosLibres += 1;
            } else if (corral[i] === '') {
                espaciosLibres += 1;
            }
        }
    }
    return espaciosLibres;
}

// Función para incorporar nuevas ovejas
function incorporarNuevasOvejas(corrales, nuevasOvejas) {
    for (let corral of corrales) {
        for (let i = 0; i < corral.length && nuevasOvejas > 0; i++) {
            if (corral[i] === '') {
                corral[i] = 'oveja';
                nuevasOvejas--;
            }
        }
    }
    return nuevasOvejas; // Retorna el número de ovejas que no se pudieron colocar
}

// Llamando a las funciones
let ovejasVivasIniciales = contarOvejasVivas(corrales);
let espaciosLibresIniciales = contarEspaciosLibres(corrales);

let espaciosLibresPostLobo = neutralizarLobo(corrales);
let nuevasOvejasCompradas = espaciosLibresPostLobo * 2;

let ovejasSinColocar = incorporarNuevasOvejas(corrales, nuevasOvejasCompradas);

console.log(`Ovejas vivas iniciales: ${ovejasVivasIniciales}`);
console.log(`Espacios libres iniciales: ${espaciosLibresIniciales}`);
console.log(`Espacios libres después de neutralizar lobos: ${espaciosLibresPostLobo}`);
console.log(`Nuevas ovejas compradas: ${nuevasOvejasCompradas}`);
console.log(`Nuevas ovejas sin colocar: ${ovejasSinColocar}`);
console.log('Estado final de los corrales:', corrales);
