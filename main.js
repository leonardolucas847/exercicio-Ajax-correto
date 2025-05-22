$(document).ready(function(){
    const url = 'https://api.github.com/users/leonardolucas847'
    const nome = $('#nome');
    const usuario = $('#usuario');
    const avatar = $('#avatar');
    const repositorios = $('#repositorios');
    const seguidores = $('#seguidores');
    const seguindo = $('#seguindo');
    const link = $('#link');
    fetch(url).then(function(resposta){
        if (!resposta.ok) {
                throw new Error('Usuário não encontrado ou erro na API');
            }
        return resposta.json();
    })
    .then(function(json){
        nome.text(json.name);
        usuario.text(json.login);
        repositorios.text(json.public_repos);
        avatar.attr('src', json.avatar_url);
        seguidores.text(json.followers);
        seguindo.text(json.following) ;
        link.attr('href', json.html_url);
    })
    .catch(function(erro){
            console.error('Erro ao buscar dados do GitHub:', erro);
            nome.text('Erro ao carregar dados');
        });
})