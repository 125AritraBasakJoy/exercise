const questions = [
{   
    question: "Which keyword is used to declare a constant in ES6?"
},

{
     question: "Which method is used to merge arrays in ES6?"
}, 

{
     question: "Which ES6 feature is used for handling asynchronous code?"
}
];

function shuffleArray(array){
     for(let i = array.length-1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
     }
     return array;
}

const shuffledQuestions = shuffleArray(questions);

console.log("Questions: ");
shuffledQuestions.forEach((q, index) => {
     console.log(`${index + 1}. ${q.question}`);
});