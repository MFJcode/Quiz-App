const quizData = [

    {
        question: 'How old is the earth?',
        a: '4,543 billion years',
        b: '4,034 billion years',
        c: '3,580 billion years',
        d: '2,943 billion years',
        correct: 'a'
    },

    {
        question: 'What is the most used programing language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },

    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'

    },


    {
        question: 'What year was JavaScript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'

    },

    {
        question: 'What year was CSS launched',
        a: '1999',
        b: '1996',
        c: '2018',
        d: 'none of the above',
        correct: 'b'

    },



];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData [currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answersEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEls.forEach((answerEl) => {
          if(answerEl.checked) {
            answerEl = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        currentQuiz++; 
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else{
            //TODO: Show results    
            alert("You finished! Get yourself an Orange Lemonade");
        }              
    }
});