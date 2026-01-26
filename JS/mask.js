const cepInput = document.getElementById('searchInput');

cepInput.addEventListener('input', () => {
    let value = cepInput.value.replace(/\D/g, '');

    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }

    cepInput.value = value;
});