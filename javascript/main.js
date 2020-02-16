// position is where the user in the quiz or which question they're up to

let position = 0, quiz, quiz_status, question, choice, choices, optA, optB, optC, correct = 0;

// this is a multidimensional array  which contains the questions, the options for each question, and the answer key for each question

let questions = [
    ["What's the capital of Australia", "Sydney", "Canberra", "Perth", "B"],
    ["Where are the Nazca lines", "Peru", "Spain", "Germany", "A"],
    ["Entomology is the science that studies", "Human Behaviour", "Rocks", "Insects", "C"],
    ["The only planet that has a day longer than its year is...", "Saturn", "Mars", "Venus", "C"]
    ];

// this get function is short for the getElementById function  
function get(html){
  return document.getElementById(html);
}

function drawQuestion(){
  quiz = get("quiz");
  
  if(position >= questions.length){
    quiz.innerHTML = "<h2>You got "+ correct + " of "+ questions.length + " questions correct</h2>";
    get("quiz_status").innerHTML = "quiz completed";
    // resets the variable to allow users to restart the quiz
    position = 0;
    correct = 0;
    // stops rest of renderQuestion function running when quiz is completed
    return false;
  }
  
  get("quiz_status").innerHTML = "Question " + (position + 1) + " of " + questions.length;
  question = questions[position][0];
  optA = questions[position][1];
  optB = questions[position][2];
  optC = questions[position][3];
  
  quiz.innerHTML = "<h3>" + question + "</h3>";
  // the += appends to the data we started on the line above
  quiz.innerHTML += "<input type='radio' name='choices' value='A'> " + optA + "<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='B'> " + optB + "<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='C'> " + optC + "<br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if (choice == questions[position][4]) {
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  position++;
  
  // then the function runs again to go to next question
  drawQuestion();
}

window.addEventListener("load", drawQuestion, false);