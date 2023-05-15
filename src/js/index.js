const botaoAlerarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
const imagenBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlerarTema.addEventListener("click",()=>{
    body.classList.toggle("modo-escuro");
    if(body.classList.contains("modo-escuro")){
        imagenBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png"); 
    }else{
        imagenBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png"); 
    }
})