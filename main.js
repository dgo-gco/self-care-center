const btn = document.querySelector('.msg-btn');
const message = document.querySelector('.message');
let radioBtns = document.querySelectorAll("input[name='phrases']");
const effacerBtn = document.querySelector('.effacer-btn');
let radioAffirm = document.querySelector('#affirma-inp');
let radioMantra = document.querySelector('#mantra-inp');

let inputs = document.querySelector('.inputs');

let affirmations = [
        "I am excited to start the day.",
        "Today is a beautiful day.",
        "I am happy and full of joy.",
        "I attract abundance and wonderful things.",
        "I am surrounded by beautiful people.",
        "Nothing will stand in my way of having a great day.",
        "I am grateful for all of the wonderful things in my life.",
        "Thank you for blessing me with good health.",
        "My heart is filled with love and joy.",
        "I radiate positive energy to all of those around me."
];

let mantras = [
        "All is well, right here, right now",
        "I am enough",
        "Don't be afraid to give up the good and go for the great",
        "Laughter lightens my load",
        "Be a warrior, not a worrier",
        "I choose to be calm and at peace",
        "My Life is Good",
        "I am blessed with an incredible family and wonderful friends"
];

function getAff() {
    let randomAffirmation = Math.floor(Math.random() * affirmations.length);
    return randomAffirmation
}

function getMant() {
    let randomMantra = Math.floor(Math.random() * mantras.length);
    return randomMantra;
}

function checkIfChecked(){
    for (let i = 0; i < radioBtns.length; i++){
        let chaqueRadio = radioBtns[i];
        if (chaqueRadio.checked){
            return chaqueRadio.value;
        } 
    }
}


btn.addEventListener('click', function(){
     if (checkIfChecked() === 'affirmations') {
            message.innerHTML = `
            <p id="phrase-active">${affirmations[getAff()]}</p>`;
            effacerBtn.style.opacity = '1'
            effacerBtn.disabled = false;      
     } else if (checkIfChecked() === 'mantras'){
              message.innerHTML = `
              <p id="phrase-active">${mantras[getMant()]}</p>`;
              effacerBtn.style.opacity = '1'
              effacerBtn.disabled = false; 
     } 
 })

effacerBtn.addEventListener('click', function(){
    message.innerHTML = `<img src="assets/meditate.svg" alt="" class="meditation">`
    effacerBtn.style.opacity = '0.5'
    effacerBtn.disabled = true;
})

btn.style.opacity = '0.5'
btn.disabled = true;

effacerBtn.style.opacity = '0.5'
effacerBtn.disabled = true;

inputs.addEventListener('click', (e) => {
    const value = e.target.value;
    if (value === 'affirmations' || value === 'mantras'){
        btn.disabled = false;
        btn.style.opacity = '1'
    }
})


const addPhrase = document.querySelector('.your-phrase-btn');
const lightbox = document.querySelector('#lightbox');
const inputText = document.querySelector('#text-add');
const addPhraseConfirm = document.querySelector('.add-phrase-confirmation');
const closeBtn = document.querySelector('.close');
const addPhraseContainer = document.querySelector('.lightbox-container');

let inputsConfirmation = document.querySelector('#inputs-confir');
let affirmaConfirm = document.querySelector('#affirma-add');
let mantraConfirm = document.querySelector('#affirma-add');


let radioBtnsConf = document.querySelectorAll("input[name='phrases-conf']");


addPhrase.addEventListener('click', function(){
    lightbox.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
     lightbox.style.display = 'none';
})


function checkIfCheckedConfirmation(){
    for (let i = 0; i < radioBtnsConf.length; i++){
        let chaqueRadioConf = radioBtnsConf[i];
        if (chaqueRadioConf.checked){
            return chaqueRadioConf.value;
        } 
    }
} //This function checks what radios is checked and then I use it below to decide what kind of message they're submitting

inputsConfirmation.addEventListener('click', (e) => {
    let inputValueRadio = e.target.value;
    if (inputValueRadio){
        addPhraseConfirm.innerHTML = `<p>Add phrase</p>`;
        addPhraseConfirm.style.backgroundColor = '#134d71'   
    } 
    // This if will check if i've already selected a type of message so the user will be able to submit it
})

addPhraseConfirm.addEventListener('click', function(){
        if (checkIfCheckedConfirmation() === 'affirmations-conf') {
            let getTextFromUser = inputText.value;
            affirmations.push(getTextFromUser);
            message.innerHTML = `
                      <p id="phrase-active">${getTextFromUser}</p>`;
            lightbox.style.display = 'none';
            effacerBtn.style.opacity = '1'
            effacerBtn.disabled = false; 
            addPhraseConfirm.innerHTML = `<p>Add phrase</p>`;
            addPhraseConfirm.style.backgroundColor = '#134d71'
            inputText.value = ''; 
        } else if (checkIfCheckedConfirmation() === 'mantras-conf') {
            let getTextFromUser = inputText.value;
            mantras.push(getTextFromUser);
            message.innerHTML = `
                    <p id="phrase-active">${getTextFromUser}</p>`;
            lightbox.style.display = 'none';
            effacerBtn.style.opacity = '1'
            effacerBtn.disabled = false; 
            inputText.value = ''; 
        } else {
            console.log("Specifiez un type de message s'il vous plait")
            addPhraseConfirm.innerHTML = `<p>Specify the type of message</p>`;
            addPhraseConfirm.style.backgroundColor = 'red'
            //This will block the button because the user needs to specify a type of message
        }
}) 

