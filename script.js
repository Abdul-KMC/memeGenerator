// const { json } = require("stream/consumers");

const displayArea = document.getElementById('main_page');

// Fetch request to get all memes templates when the website is loaded
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
            text0.style.margin = "5px 0";

            const text1 = document.createElement('input');
            text1.placeholder = "Text 1";
            text1.style.margin = "5px 0";

            const createButton = document.createElement('button');
            createButton.textContent = "Create";
            createButton.addEventListener('click', () => createButtonClickHandler(result.data.memes[i].id, text0.value, text1.value));

            memeDiv.appendChild(name);
            memeDiv.appendChild(imgElement);
            memeDiv.appendChild(text0);
            memeDiv.appendChild(text1);
            memeDiv.appendChild(createButton);

            displayArea.appendChild(memeDiv);
        }
    })
    .catch(error => console.log("Error: " + error));

// function to make a POST request when "Create" button is clicked
function createButtonClickHandler(templateId, text0Value, text1Value) {
    const formData = new URLSearchParams();
    formData.append('template_id', templateId);
    formData.append('username', 'Rerem');
    formData.append('password', 'Rdluxe@12069');
    formData.append('text0', text0Value);
    formData.append('text1', text1Value);

    fetch('https://api.imgflip.com/caption_image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString(),
        })
        .then(res => res.json())
        .then(result => {
            const responseUrl = result.data.url;
            console.log(responseUrl);
            console.log("POST request successful");
        })
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
//             text0: "Hello", 
//             text1: "World",
//         }),
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log("Error: " + error))

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

//----------------------------------------------------------------------------------------------//
// -------------------------------------------------------------------------------------------- //

// fetch('https://api.imgflip.com/get_memes')
//     .then(res => res.json())
//     .then(result => {
//         let customURL = result.data.memes.id
//     })
//     .catch(error => console.log("Error: " + error))