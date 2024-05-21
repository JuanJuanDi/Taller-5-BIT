function calcularPromedioYCalificacion(notas) {

    // Verificar que hay al menos 3 notas
    if (notas.length < 3) {
        return "Error: Debes proporcionar al menos 3 notas.";
    }

    // Calcular el promedio de las notas
    let suma = notas.reduce((acc, nota) => acc + nota, 0);
    let promedio = suma / notas.length;

    // Determinar la calificación basada en el promedio
    let calificacion;
    if (promedio >= 4.8 && promedio <= 5.0) {
        calificacion = "E = Excelente";
    } else if (promedio > 4.5 && promedio < 4.8) {
        calificacion = "MB = Muy bueno";
    } else if (promedio >= 4.0 && promedio < 4.4) {
        calificacion = "B = Bueno";
    } else if (promedio >= 3.5 && promedio < 4.0) {
        calificacion = "A = Aprobado";
    } else if (promedio > 0 && promedio < 3.5) {
        calificacion = "R = Reprobado";
    } else {
        calificacion = "Error: Promedio fuera de rango válido.";
    }

    // Retornar la calificación
    return calificacion;
}

let notas = [4.2, 3.8, 4.5, 5.0];
let resultado = calcularPromedioYCalificacion(notas);
console.log(resultado); 