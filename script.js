// const { json } = require("stream/consumers");

const displayArea = document.getElementById('main_page');

// fetch request to get all memes templates when website is loaded
fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(result => {
        console.log(result);
        for (let i = 0; i < result.data.memes.length; i++) {
            const memeDiv = document.createElement('div');
            memeDiv.classList.add('meme');

            const name = document.createElement('h3');
            name.textContent = result.data.memes[i].name;

            const imgElement = document.createElement('img');
            imgElement.src = result.data.memes[i].url;
            imgElement.alt = 'Meme image';

            const text0 = document.createElement('input');
            text0.placeholder = "Text 0";

            const text1 = document.createElement('input');
            text1.placeholder = "Text 1";

            const createButton = document.createElement('button');
            createButton.textContent = "Create";

            const memeLink = document.createElement('p');
            memeLink.textContent = "your link will appear here";

            memeDiv.appendChild(name);
            memeDiv.appendChild(imgElement);
            memeDiv.appendChild(text0);
            memeDiv.appendChild(text1);
            memeDiv.appendChild(createButton);
            memeDiv.appendChild(memeLink);

            displayArea.appendChild(memeDiv);
        }
    })
    .catch(error => console.log("Error: " + error))


function createButtonClickHandler() {
    const formData = new URLSearchParams();
    formData.append('template_id', '181913649');
    formData.append('username', 'Rerem');
    formData.append('password', 'Rdluxe@12069');
    formData.append('text0', 'Hello');
    formData.append('text1', 'World');

    fetch('https://api.imgflip.com/caption_image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString(),
        })
        .then(res => res.json())
        .then((json) => console.log(json))
        .catch(error => console.log("Error: " + error));
}

//----------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------- //

// fetch('https://api.imgflip.com/caption_image', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             template_id: templateId,
//             username: 'Rerem',
//             password: 'Rdluxe@12069',
//             text0: "Hello", // topText
//             text1: "World", // bottomText
//         }),
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log("Error: " + error))

//----------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------- //

// fetch('https://api.imgflip.com/get_memes')
//     .then(res => {
//         if (res.ok) {
//             console.log("SUCCESS")
//         } else {
//             console.log("API request Unsuccessful")
//         }
//         res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log("Error: " + error))

// const pMemeBtn = document.getElementById("pMeme");
// const nMemeBtn = document.getElementById("nMeme");
// const memeImage = document.getElementById("meme");
// const text0 = document.getElementById("text0");
// const text1 = document.getElementById("text1");
// let currentIndex = 0;

//----------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------- //


// const axios = require('axios');

// const url = "https://api.imgflip.com/get_memes";

// let memeData = [];
// let currentTemplateIndex = 0;

// axios.get(url)
//     .then(response => {
//         memeData = response.data.data.memes;
//         updateMeme();
//     })
//     .catch(error => {
//         console.log("Error: ", error);
//     });

// const memeImage = document.getElementById("meme");
// const text0 = document.getElementById("text0");
// const text1 = document.getElementById("text1");
// const createBtn = document.getElementById("create_meme");
// const memeLink = document.getElementById("memeLink");

// const pMemeBtn = document.getElementById("pMeme");
// const nMemeBtn = document.getElementById("nMeme");

// prevBtn.addEventListener("click", showPrevTemplate);
// nextBtn.addEventListener("click", showNextTemplate);

// function updateMeme() {
//     memeImage.src = memeData[currentTemplateIndex].url;
// }

// function showPrevTemplate() {
//     currentTemplateIndex = (currentTemplateIndex - 1 + memeData.length) % memeData.length;
//     updateMeme();
// }

// function showNextTemplate() {
//     currentTemplateIndex = (currentTemplateIndex + 1) % memeData.length;
//     updateMeme();
// }


fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(result => {
        let customURL = result.data.memes.id
    })
    .catch(error => console.log("Error: " + error))