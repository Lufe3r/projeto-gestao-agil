function Integrantes() {
    const infointegrantes = document.getElementById('info-members');
    if (infointegrantes.classList.contains('hidden')) {
        infointegrantes.classList.remove('hidden');
    } else {
        infointegrantes.classList.add('hidden');
    }
}
function Info() {
    const infoText = document.getElementById('info-text');
    if (infoText.classList.contains('hidden')) {
        infoText.classList.remove('hidden');
    } else {
        infoText.classList.add('hidden');
    }
}
function Baixar() {
    const dowloadapp = document.getElementById('app-dowload');
    if (dowloadapp.classList.contains('hidden')) {
        dowloadapp.classList.remove('hidden');
    } else {
        dowloadapp.classList.add('hidden');
    }
}