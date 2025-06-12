function mostrarDataHora() {
    const agora = new Date();
    const opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    const dataHoraFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    document.getElementById('dataHoraDisplay').textContent = `Data e Hora Local: ${dataHoraFormatada}`;
}
