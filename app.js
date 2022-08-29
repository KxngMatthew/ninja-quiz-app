//This array stores all correct answers, in this case all correct answers are B.
const correctAnswers = ['B','B','B','B'];

//Select form base on class name quiz-form
const form = document.querySelector('.quiz-form');
//Select form base on class name result
const result = document.querySelector('.result');


form.addEventListener('submit',e => {
    e.preventDefault(); // prevent page from reloading after form is submitted

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; //Stores user's answers base on the form input values for the different questions.

    //Check user's answers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    //scroll to top to view result
    scrollTo(0,0); // window object method

    //console.log(score);
    
    
    //Remove d-none from class list to display result
    result.classList.remove('d-none');

    //window.console.log(document.querySelector('form'));
    //Show animated results on screen.
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = output +'%';
        if(output === score){
            clearInterval(timer);// Used to stop interval
        }
        else{
            output++;// counter to which counts output to indicate when score and output are both equal.
        }
    },10);
});