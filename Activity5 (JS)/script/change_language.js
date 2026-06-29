const TIME_SECONDS = 2;

const ARRAY_TEXTS = [
    {
        text: "O Mundo há um clique de você!",
        font: "latin-font"
    },
    {
        text: "The world is just one click away!",
        font: "latin-font"
    },
    {
        text: "¡El mundo está a un clic de ti!",
        font: "latin-font"
    },
    {
        text: "Le monde est à portée de clic!",
        font: "latin-font"
    },
    {
        text: "Die Welt ist nur einen Klick von dir entfernt!",
        font: "latin-font"
    },
    {
        text: "Il mondo è a un clic da te!",
        font: "latin-font"
    },
    {
        text: "世界はクリックひとつであなたのもの!",
        font: "japanese-font"
    },
    {
        text: "世界就在您的一鍵之遙!",
        font: "chinese-font"
    },
    {
        text: "세상이 클릭 한 번 거리에 있습니다!",
        font: "corean-font"
    }
];

let lastIndex = -1;

function changeLanguage(element) {

    let index;

    do {
        index = Math.floor(Math.random() * ARRAY_TEXTS.length);
    } 
    while (index === lastIndex);

    lastIndex = index;

    element.style.fontFamily = ARRAY_TEXTS[index].font;
    element.innerText = ARRAY_TEXTS[index].text;
}

const title = document.getElementById("content_title");

changeLanguage(title);

setInterval(() => {
    changeLanguage(title);
}, TIME_SECONDS * 1000);