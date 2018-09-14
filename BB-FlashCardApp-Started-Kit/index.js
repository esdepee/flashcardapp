
// info in the flashcard
//comment

const placesQuestion = ['What is the capital of Kenya?', 
                     'In which country can we find a city called Oaxaca?', 
                    'Which is the most populated city in the world?', 
                    'In which country can we find the Eiffel Tour?', 
                    'What is the highest mountain on Earth?'];
let placesAnswer = ['Nairobi',
                    'Mexico', 
                    'Tokyo', 
                    'France', 
                    'Mount Everest'];

let dutchEnglishQuestion = ['Good morning',
                            'Good bye/ see you!', 
                            'the bike', 
                            'aan appointment',
                            'the book'];
let dutchEnglishAnswer = ['goede morgen',
                        'Tot ziens',
                        'de fiets',
                        'een afspraak',
                        'het boek'];

let foodQuestion = ['Pic 1', 'Pic 2', 'Pic 3', 'Pic 4', 'Pic 5'];
let foodAnswer = ['food 1', 'food2', 'food 3', 'food 4', 'food 5'];


let questions = function randomQuestion(questionArray){
    for( i=0;  i<= questionArray.length - 1; i++) {
        return questionArray[i];
    }   
}

let answers = function randomQuestion(questionArray){
    for( i=0;  i<= questionArray.length - 1; i++) {
        return questionArray[i];
    }   
}

console.log(questions(placesQuestion))
console.log(questions(placesAnswer))
// console.log(placesQuestion[1])

const showText = (id) => {
    let card = document.getElementsByClassName(front);
    card.classList.add('active');   
}
const hideText = (id) => {
    let card = document.getElementsByClassName(back);
    card.classList.remove('active');   
}