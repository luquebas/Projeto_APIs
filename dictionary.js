const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('results');
const sound = document.getElementById('sound');
const btnSearch = document.getElementById('search-btn');

btnSearch.addEventListener('click', () => {
    let inpSearch = document.getElementById("inpSearch").value;
    fetch(`${url}${inpSearch}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = `
        <div class="word">
            <h3>${inpSearch}</h3>
            <button id="loud-speaker" onclick="playSound()">
                <i class="fas fa-volume-up"></i>
            </button>
        </div>
        <div class="detalhes">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
            <p class="significado">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="exemplo">${data[0].meanings[0].definitions[0].example}</p>
        </div>`
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        console.log(sound);
    }).catch (() => {
        result.innerHTML = `<h3 class="error">Couldn't Find the Word</h3>`
    })
});

function playSound() {
    sound.play();
}
