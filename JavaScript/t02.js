function operation(operator, firstValue, secondValue) {
    let result;
4
    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':


            // Verificar si el segundo valor no es cero para evitar división por cero
            if (secondValue !== 0) {
                result = firstValue / secondValue;
            } else {
                return "Error: División por cero no permitida";
            }
            break;
        default:
            return "Error: Operador no válido";
    }

    return result;
}

console.log(operation('+', 3, 6)); // 9
console.log(operation('-', 7, 3)); // 4
console.log(operation('*', 9, 9)); // 81
console.log(operation('/', 15, 3)); // 5
console.log(operation('/', 15, 0)); // Error: División por cero no permitida
console.log(operation('%', 15, 3)); // Error: Operador no válido
