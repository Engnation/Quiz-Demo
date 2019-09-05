//Java Script is the logic
//Comment in Java script

let front = document.querySelector('.front p');
let back = document.querySelector('.back p');
let card = document.querySelector('.card');

document.querySelector('#btnPrev').addEventListener('click', prevCard);
document.querySelector('#btnFlip').addEventListener('click', flipCard);
document.querySelector('#btnNext').addEventListener('click', nextCard);

//Simulated data, since we aren't hooked up to the backend yet (now, let's throw away the training wheels! (comment out the fake data))

//let quiz = [
//    {question: 'q1', answer:'a1'},
//    {question: 'q2', answer:'a2'},
//    {question: 'q3', answer:'a3'},
//]

let quiz = [];
getData();

let currentCard = -1;

// This is a new part (in part 3) that grabs the data from the server
function getData() {
    fetch('https://us-central1-quiz-api-e7a3d.cloudfunctions.net/helloWorld')
    
    //Fetch is an asyncronous method, so it will go off and grab the data, so that is why you have to add the "then"
    //part after to make the script wait for the fetch to complete, otherwise the script will continue on with 
    //empty values.

    .then( resp => resp.json() )  //( resp => resp.json() ) <--can have curly brackets like other arrow functions
    .then( data => {
        quiz = data;
    })
    .catch( err => {
        console.error(err);
    });
}




function prevCard() {

}

function flipCard() {
    card.classList.toggle('flipped');
}

function nextCard() {
    card.classList.remove('flipped');
    setTimeout( ()=>{

        currentCard = currentCard + 1;
        if( currentCard >= quiz.length -1){
            currentCard = quiz.length - 1;
        }
        front.textContent = quiz[currentCard].question;
        back.textContent = quiz[currentCard].answer;

    },500);

    
}

function prevCard() {
    card.classList.remove('flipped');

    setTimeout(() => {

        currentCard = currentCard - 1;
        if( currentCard < 0 ){
            currentCard = 0;
        }
        front.textContent = quiz[currentCard].question;
        back.textContent = quiz[currentCard].answer;

    },500);
}
