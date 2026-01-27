async function buscarCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await response.json();

        if (dados.erro) {
            resetarDados();
            mostrarErro('CEP não identificado');
            return;
        }

        fillData(dados);
        document.querySelector('#alert').innerHTML = '';

        buscarClimaPorCidade(dados.localidade);
        buscarLocalNoMapa(`${dados.localidade}, ${dados.uf}`);

    } catch (error) {
        resetarDados();
        mostrarErro('Erro ao consultar o CEP');
    }
}

fillData = (dados) => {
    document.getElementById('logradouro').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('localidade').value = dados.localidade;
    document.getElementById('uf').value = dados.uf;
    document.getElementById('regiao').value = dados.regiao;
    document.getElementById('ddd').value = dados.ddd;
}

function resetarDados() {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('regiao').value = '';
    document.getElementById('ddd').value = '';

    document.querySelector('#location').innerHTML = 'Cidade';
    document.querySelector('#temp').innerHTML = '-- <sup>C°</sup>';
    document.querySelector('#tempMax').innerHTML = '-- <sup>C°</sup>';
    document.querySelector('#tempMin').innerHTML = '-- <sup>C°</sup>';
    document.querySelector('#wind').innerHTML = '-- km/h';
    document.querySelector('#humidity').innerHTML = '--%';

    document.querySelector('#alert').innerHTML = '';
    
    resetarMapa();
}

function mostrarErro(msg) {
    document.querySelector('#alert').innerHTML = msg;
}
