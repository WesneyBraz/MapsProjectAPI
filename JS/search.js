const search = document.getElementById('searchBtn');
const cepInput = document.getElementById('searchInput');

cepInput.addEventListener('input', () => {
    let value = cepInput.value.replace(/\D/g, '');

    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }

    cepInput.value = value;
});

search.addEventListener('click', () => {
    let cep = cepInput.value.replace(/\D/g, '');

    if (cep.length < 8) {
        resetarDados();
        return;
    }

    if (cep.length === 8) {
        buscarCep(cep);
    }
});



