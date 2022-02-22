// Requisição URL
const BASE_URL = "https://thatcopy.pw/catapi/rest/"

// DOM Botão e campo da imagem
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

// Fetch para buscar os dados da URL
// Try Catch = tratando o erro
const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } 
    catch (error) {
        console.log(error.message);
    }
}

// A função aguarda a getCats buscar a URL da img e a loadImg coloca essa imagem no campo (source) da tag <img>
const loadImg = async () => {
    catImg.src = await getCats();
}

// Evento no botão para troca de imagens
catBtn.addEventListener("click", loadImg);

// Chamando a função para já carregar uma img ao entrar na pág
loadImg();

// Sintaxe alternativa da função getCats
// const getCats = async () => {
//     const data = await fetch(BASE_URL);
//         .then((res) => res.json());
//         .catch((error) => console.log(error));

//     returndata.webpurl;
// }