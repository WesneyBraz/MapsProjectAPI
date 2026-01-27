# MapsProjectAPI

## Descrição 
O MapsProjectAPI é um projeto web desenvolvido com as tecnologias fundamentais da web (HTML, CSS e JavaScript) que permite consultar informações completas de uma localidade no Brasil a partir de um CEP.

O principal objetivo deste projeto é demonstrar a integração completa de APIs open source no front-end, coordenando os dados e utilizando JavaScript puro, sem a necessidade de backend ou frameworks adicionais, aplicando boas práticas de JavaScript, manipulação do DOM e consumo de serviços externos, sem o uso de servidores intermediários.

A partir da consulta do CEP, a aplicação:

- Obtém os dados de endereço;

- Identifica a cidade correspondente;

- Exibe informações climáticas em tempo real;

- Mostra a localização geográfica no mapa.


## APIs Utilizadas
### ViaCEP

Responsável por retornar os dados do endereço a partir do CEP informado.

Informações obtidas:

- Logradouro;

- Bairro;

- Cidade;

- UF;

- Região;

- DDD.

https://viacep.com.br/

### OpenWeatherMap

Responsável por fornecer informações climáticas da cidade associada ao CEP.

Informações exibidas:

- Temperatura atual;

- Temperatura mínima e máxima;

- Umidade relativa do ar;

- Velocidade do vento.

https://openweathermap.org/

 ### Leaflet + OpenStreetMap

Utilizados para exibir a localização geográfica da cidade no mapa.

Funcionalidades:

- Centralização automática no local pesquisado;

- Marcação da cidade no mapa;

- Navegação interativa.

https://leafletjs.com/

https://www.openstreetmap.org/

## Tecnologias Utilizadas

- HTML5;

- CSS3;

- JavaScript;

- Bootstrap;

- Leaflet.js.

### Funcionalidades

- Máscara automática para o campo de CEP;

- Validação de CEP inválido;

- Atualização dinâmica do clima e mapa;

- Limpeza automática das informações em caso de erro.