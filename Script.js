/*Quando o botao com ID 'botao' dor clicado, executa a funçao*/
document.getElementById('Botao').addEventListener('click', () => {
    const gif= document.getElementById('gif'); /*pega o (div) com ID do 'gif', onde o GIF será inserido */

    const giff = document.createElement('img'); /*Cria um novo elemento de imagem*/ 
    giff.src = 'https://www.gifcen.com/wp-content/uploads/2023/08/shrek-gif-5.gif'; /*Define o link do GIF que irá aparecer na tela*/ 
    giff.alt = 'GIF Dançante' /*O texto irá aparecer na tela, caso a imagem não carregar*/ 

    gif.appendChild(giff); /*Adiciona o GIF no (div), fazendo ele aparecer na tela*/ 
})
/*Kaylla Stéfany Teixeira de Brito
    Tainara Rodrigues de Jesus
    3°A Informática - 2025*/ 