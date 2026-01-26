fillData = (dados) => {
    document.getElementById('logradouro').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('localidade').value = dados.localidade;
    document.getElementById('uf').value = dados.uf;
    document.getElementById('regiao').value = dados.regiao;
    document.getElementById('ddd').value = dados.ddd;
}

document.getElementById('searchBtn').addEventListener('click', async () => {
    const cep = document.getElementById('searchInput').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(url);
    const dados = await response.json();
    fillData(dados);

    buscarLocalNoMapa(`${dados.localidade}, ${dados.uf}`);
    buscarClimaPorCidade(dados.localidade);
});