let div = document.getElementById('title')

let title = document.querySelector('h1');
title.innerHTML = "Programming Memes"
let p = document.createElement("p")
div.append(p)
let paragraph = document.querySelector('p')
paragraph.append("This is a page with fun programming memes.")

const imgContainer = document.getElementsByClassName('memes-container')[0]

memes.forEach((image) => {
    const img = document.createElement('img')
    img.setAttribute('src', image)
    imgContainer.appendChild(img)
})

