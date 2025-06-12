function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('imcDisplay').textContent = 'Por favor, insira valores válidos.';
        document.getElementById('messageDisplay').textContent = '';
        return;
    }

    const imc = peso / (altura * altura);
    const imcFixado = imc.toFixed(2);

    let mensagem = '';

    if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso. Considere adotar uma alimentação mais nutritiva e balanceada, e procure a orientação de um profissional de saúde para alcançar o equilíbrio ideal.';
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = 'Parabéns! Você está com o peso ideal. Continue com seus hábitos saudáveis!';
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem = 'Você está com sobrepeso. Tente adotar hábitos saudáveis e realizar atividades físicas regularmente.';
    } else {
        mensagem = 'Cuidado! Você está com obesidade. É recomendado buscar acompanhamento médico para melhorar sua saúde.';
    }

    document.getElementById('imcDisplay').textContent = `Seu IMC é: ${imcFixado}`;
    document.getElementById('messageDisplay').textContent = mensagem;
}
