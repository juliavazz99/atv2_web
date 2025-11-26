// Efeito do microfone
document.querySelector(".mic").addEventListener("click", () => {
    alert("Função de microfone não implementada :)");
});

// Efeito ao clicar na barra de pesquisa
document.querySelector("input").addEventListener("focus", () => {
    document.querySelector(".search-box").style.boxShadow = "0 0 8px #1a73e8";
});

document.querySelector("input").addEventListener("blur", () => {
    document.querySelector(".search-box").style.boxShadow = "0 1px 5px #00000020";
});
