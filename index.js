// Calculadora
function calcular(numero1, numero2, operacao) {
    let resultado;

    if (operacao === 'soma') {
        resultado = numero1 + numero2;
    } 
    else if (operacao === 'subtracao') {
        resultado = numero1 - numero2;
    } 
    else if (operacao === 'multiplicacao') {
        resultado = numero1 * numero2;
    } 
    else if (operacao === 'divisao') {
        resultado = numero1 / numero2;
    }
    else{
        return 'Operação inválida';
    }
    

    return resultado;
}

// Testes
console.log("soma (10+5): " + calcular(10, 5, 'soma')); 
console.log("subtracao (10-5): " + calcular(10, 5, 'subtracao')); 
console.log("multiplicacao (10*5): " + calcular(10, 5, 'multiplicacao')); 
console.log("divisao (10/5): " + calcular(10, 5, 'divisao')); 