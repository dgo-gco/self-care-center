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