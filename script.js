function submitAnswers(){
    var total = 5;
    var score = 0;
    // Get user input 
    var question  = {
        // Retrieves all form objects in the index.html document.
        1: document.forms['quizForm']['q1'].value,
        2: document.forms['quizForm']['q2'].value,
        3: document.forms['quizForm']['q3'].value,
        4: document.forms['quizForm']['q4'].value,
        5: document.forms['quizForm']['q5'].value
    };

    // Stores correct answers 
    var correctAnswers = {
        1: "c",
        2: "a",
        3: "b",
        4: "b",
        5: "b"
    }
   
    // Validation of the ansewrs
    for (var key in question){
        var results = document.getElementById('results');
          // checks if answer matches the correct dictionary key
        if(question[key] === null || question[key] === ''){
             alert("You missed question: " + key);
            results.innerHTML = "<h3>Please answer all the questions in order to get a result</h3>";
        }else if(question[key] === correctAnswers[key]){
            //each time there is a correct answer this value increases
            score++;
            if(score === 5){
                results.innerHTML = `<h3> You had no wrong answers! Congratulations! :) </h3>`;
            }else if(score !== 0){
                results.innerHTML = `<h3> You had <span> ${score} </span> out of <span> ${total} </span Right answers </h3>`;;
            }
        }else if(score === 0){
            results.innerHTML = `<h3>You did not answer any question correctly </h3>`;
        }

    }
    // Avoid form submit. We don't want to submit the form anywhere
    return false;
        
    }
