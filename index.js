function calculateAsalary(salario, valorVendas) {
    let salarioFinal = 0;
    salarioFinal += salario + valorVendas * 0.003;
    if (valorVendas > 1200) {
        salarioFinal *= 1.005;
        return salarioFinal.toFixed(2);
    } else {
        return salarioFinal.toFixed(2);
    }
}

function cashMachine(valorSaque, salarioFixo, vendas) {
    let salario = calculateAsalary(salarioFixo, vendas);
    let cemReais = 0;
    let cinquenta = 0;
    let duzentos = 0;
    let vinte = 0;
    let dez = 0;
    let cinco = 0;
    let dois = 0;
    let str = "";
    for (let i = 1; i < valorSaque; i++) {
        if (valorSaque >= 200) {
            valorSaque -= 200;
            duzentos += 1;
            salario -= 200;
        } else if (valorSaque >= 100) {
            valorSaque -= 100;
            cemReais += 1;
            salario -= 100;
        } else if (valorSaque >= 50) {
            valorSaque -= 50;
            cinquenta += 1;
            salario -= 50;
        } else if (valorSaque >= 20) {
            valorSaque -= 20;
            vinte += 1;
            salario -= 20;
        } else if (valorSaque >= 10) {
            valorSaque -= 10;
            dez += 1;
            salario -= 10;
        } else if (valorSaque >= 5) {
            valorSaque -= 5;
            cinco += 1;
            salario -= 5;
        } else if (valorSaque >= 2) {
            valorSaque -= 2;
            dois += 1;
            salario -= 2;
        }
    }
    if (duzentos > 1) {
        str += ` ${duzentos} notas de R$200, `;
    } else if (duzentos === 1) {
        str += ` ${duzentos} nota de R$200, `;
    }
    if (cemReais > 1) {
        str += ` ${cemReais} notas de R$100, `;
    } else if (cemReais === 1) {
        str += ` ${cemReais} nota de R$100, `;
    }
    if (cinquenta > 1) {
        str += ` ${cinquenta} notas de R$50, `;
    } else if (cinquenta === 1) {
        str += ` ${cinquenta} nota de R$50, `;
    }
    if (vinte > 1) {
        str += ` ${vinte} notas de R$20, `;
    } else if (vinte === 1) {
        str += ` ${vinte} nota de R$20, `;
    }
    if (dez > 1) {
        str += ` ${dez} notas de R$10, `;
    } else if (dez === 1) {
        str += ` ${dez} nota de R$10, `;
    }
    if (cinco > 1) {
        str += ` ${cinco} notas de R$5, `;
    } else if (cinco === 1) {
        str += ` ${cinco} nota de R$5, `;
    }
    if (dois > 1) {
        str += ` ${dois} notas de R$2, `;
    } else if (dois === 1) {
        str += ` ${dois} nota de R$2, `;
    }
    return "Notas sacadas:" + str + ` saldo atual: ${salario.toFixed(2)}`;
}

console.log(cashMachine(500, 1200, 1200));

function calculateStock(quantidadeAtual, quantidadeMaxima, quantidadeMinina) {
    let quantidadeMedia = (quantidadeMaxima + quantidadeMinina) / 2;
    if (quantidadeAtual > quantidadeMedia) {
        return "Nao efetuar compra";
    } else {
        return "Efetuar compra";
    }
}

function calculateAge(anoNascimento, anoAtual) {
    let idade = anoAtual - anoNascimento;
    let idadeMeses = idade * 12;
    let idadeDias = idade * 364;
    let idadeSemanas = idade * 52;
    return `idade: ${idade}, idade em meses: ${idadeMeses}, idade dias ${idadeDias}, idade semanas ${idadeSemanas}`;
}
console.log(calculateAge(2007, 2024));

function getDiagonal(matriz) {
    let diagonal = [];
    diagonal.push(matriz[0][0]);
    diagonal.push(matriz[1][1]);
    diagonal.push(matriz[2][2]);

    return diagonal;
}

console.log(
    getDiagonal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
