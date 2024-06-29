function Integrantes() {
    const infointegrantes = document.getElementById('info-members');
    const infoText = document.getElementById('info-text');
    const dowloadapp = document.getElementById('app-dowload');

    infoText.classList.add('hidden');
    dowloadapp.classList.add('hidden');

    if (infointegrantes.classList.contains('hidden')) {
        infointegrantes.classList.remove('hidden');
    } else {
        infointegrantes.classList.add('hidden');
    }
}

function Info() {
    const infointegrantes = document.getElementById('info-members');
    const infoText = document.getElementById('info-text');
    const dowloadapp = document.getElementById('app-dowload');

    infointegrantes.classList.add('hidden');
    dowloadapp.classList.add('hidden');

    if (infoText.classList.contains('hidden')) {
        infoText.classList.remove('hidden');
    } else {
        infoText.classList.add('hidden');
    }
}

function Baixar() {
    const infointegrantes = document.getElementById('info-members');
    const infoText = document.getElementById('info-text');
    const dowloadapp = document.getElementById('app-dowload');

    infointegrantes.classList.add('hidden');
    infoText.classList.add('hidden');

    if (dowloadapp.classList.contains('hidden')) {
        dowloadapp.classList.remove('hidden');
    } else {
        dowloadapp.classList.add('hidden');
    }
}
