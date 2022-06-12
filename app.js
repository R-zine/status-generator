const API = [
    {name: "chuck norris facts",
    url: "http://api.icndb.com/jokes/random?exclude=[explicit]"},
    {name: "inspirational quotes",
    url: "https://goquotes-api.herokuapp.com/api/v1/random?count=1"},
    {name: "cat pictures",
    url: "https://cataas.com/cat?json=true"},
    {name: "memes",
    url: "https://some-random-api.ml/meme"},
]

generate = async url => {
    let list = await fetch(url)
    let result = await list.json()
    
    switch (category) {
        case 'chuck norris facts':
            container.innerHTML = `<h3>${result.value.joke}</h3>`;
            break;
        case 'inspirational quotes':
            container.innerHTML = `<h3>${result.quotes[0].text}</h3><br><p>${result.quotes[0].author}</p>`;
            break;
        case 'cat pictures':
            container.innerHTML = `<img src="https://cataas.com/${result.url}" alt="cat picture">`;
            break;
        case 'memes':
            container.innerHTML = `<img src="${result.image}" alt="meme">`;
            break;
    }

}

let category = 'chuck norris facts'
let url = "http://api.icndb.com/jokes/random?exclude=[explicit]"

generate(url)

let buttons = document.querySelectorAll(".btn")
let container = document.querySelector(".content")
let another = document.querySelector(".generate")


buttons.forEach(btn => btn.addEventListener("click", e => {
    category = e.target.textContent
    url = API.filter(x => x.name == category)[0].url
    generate(url)
    buttons.forEach(x => x.textContent == category ? x.classList.add("active") : x.classList.remove("active"))
    
    switch (category) {
        case 'chuck norris facts':
             document.body.classList = '';
            document.body.classList.add("chuck");
            break;
        case 'inspirational quotes':
            document.body.classList = '';
            document.body.classList.add("quotes");
            break;
        case 'cat pictures':
            document.body.classList = '';
            document.body.classList.add("cat");
            break;
        case 'memes':
            document.body.classList = '';
            document.body.classList.add("meme");
            break;
    }
}))

another.addEventListener("click", () => generate(url))