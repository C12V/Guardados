function calcularIdade() {
    const dataNascimento = document.getElementById('dataDeNascimento').value;
    
    if (!dataNascimento) {
        document.getElementById('idadeDisplay').textContent = 'Por favor, insira uma data de nascimento válida.';
        return;
    }

    const dataNascimentoObj = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimentoObj.getFullYear();
    const diferencaMes = hoje.getMonth() - dataNascimentoObj.getMonth();
    const diferencaDia = hoje.getDate() - dataNascimentoObj.getDate();

    if (diferencaMes < 0 || (diferencaMes === 0 && diferencaDia < 0)) {
        idade--;
    }

    document.getElementById('idadeDisplay').textContent = `Sua idade é: ${idade} anos.`;
}
