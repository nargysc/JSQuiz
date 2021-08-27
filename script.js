let countRights = 0;
let countQuest = 0;
let countWrongs = 0;



let answer = document.querySelector("#" + 'answer');
answer.style.fontSize = "1em";
answer.innerHTML = `Right Answers: ${countRights} of ${countQuest} questions!`;

let first_question = document.querySelector('#first_question');
first_question.addEventListener("click", firstSquare);
function firstSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.first_question) {
        first_question.append(first_questionAnswer = document.createElement('p'));
        first_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'first_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        first_question.append(first_questionAnswer = document.createElement('p'));
        first_questionAnswer.innerHTML = "Oh noooo,  by the way it's Constantinople";
        document.querySelector("#" + 'first_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;
}

let second_question = document.querySelector('#second_question');
second_question.addEventListener("click", secondSquare);

function secondSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.second_question) {
        second_question.append(second_questionAnswer = document.createElement('p'));
        second_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'second_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        second_question.append(second_questionAnswer = document.createElement('p'));
        second_questionAnswer.innerHTML = "Oops,  it's Central Perk";
        document.querySelector("#" + 'second_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;

}

let third_question = document.querySelector('#third_question');
third_question.addEventListener("click", thirdSquare);

function thirdSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.third_question) {
        third_question.append(third_questionAnswer = document.createElement('p'));
        third_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'third_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        third_question.append(third_questionAnswer = document.createElement('p'));
        third_questionAnswer.innerHTML = "Nooo,  it's Mercury";
        document.querySelector("#" + 'third_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;

}

let fourth_question = document.querySelector('#fourth_question');
fourth_question.addEventListener("click", fourthSquare);

function fourthSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.fourth_question) {
        fourth_question.append(fourth_questionAnswer = document.createElement('p'));
        fourth_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'fourth_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        fourth_question.append(fourth_questionAnswer = document.createElement('p'));
        fourth_questionAnswer.innerHTML = "oh no, it's red!";
        document.querySelector("#" + 'fourth_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;

}

let fifth_question = document.querySelector('#fifth_question');
fifth_question.addEventListener("click", fifthSquare);

function fifthSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.fifth_question) {
        fifth_question.append(fifth_questionAnswer = document.createElement('p'));
        fifth_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'fifth_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        fifth_question.append(fifth_questionAnswer = document.createElement('p'));
        fifth_questionAnswer.innerHTML = "Teslaaaaaaa!";
        document.querySelector("#" + 'fifth_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;

}

let sixth_question = document.querySelector('#sixth_question');
sixth_question.addEventListener("click", sixthSquare);

function sixthSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.sixth_question) {
        sixth_question.append(sixth_questionAnswer = document.createElement('p'));
        sixth_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'sixth_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        sixth_question.append(sixth_questionAnswer = document.createElement('p'));
        sixth_questionAnswer.innerHTML = "No, its in NY, at the Metropolitian Museum Art!";
        document.querySelector("#" + 'sixth_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;

}

let seventh_question = document.querySelector('#seventh_question');
seventh_question.addEventListener("click", seventhSquare);

function seventhSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.seventh_question) {
        seventh_question.append(seventh_questionAnswer = document.createElement('p'));
        seventh_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'seventh_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        seventh_question.append(seventh_questionAnswer = document.createElement('p'));
        seventh_questionAnswer.innerHTML = "no, It's Riga";
        document.querySelector("#" + 'seventh_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;
}

let eighth_question = document.querySelector('#eighth_question');
eighth_question.addEventListener("click", eighthSquare);

function eighthSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.eighth_question) {
        eighth_question.append(eighth_questionAnswer = document.createElement('p'));
        eighth_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'eighth_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        eighth_question.append(eighth_questionAnswer = document.createElement('p'));
        eighth_questionAnswer.innerHTML = "its Big Whale";
        document.querySelector("#" + 'eighth_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;
}

let ninth_question = document.querySelector('#ninth_question');
ninth_question.addEventListener("click", ninthSquare);

function ninthSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.ninth_question) {
        ninth_question.append(ninth_questionAnswer = document.createElement('p'));
        ninth_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'ninth_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        ninth_question.append(ninth_questionAnswer = document.createElement('p'));
        ninth_questionAnswer.innerHTML = "its Big Whale";
        document.querySelector("#" + 'ninth_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;
}

let tenth_question = document.querySelector('#tenth_question');
tenth_question.addEventListener("click", tenthSquare);

function tenthSquare() {
    let userAnswer = prompt("Enter your answer");
    countQuest++;
    if (userAnswer == answers.tenth_question) {
        tenth_question.append(tenth_questionAnswer = document.createElement('p'));
        tenth_questionAnswer.innerHTML = "Boom, you're right!";
        document.querySelector("#" + 'tenth_question').style.backgroundColor = "lightgreen";
        countRights++;
    } else {
        tenth_question.append(tenth_questionAnswer = document.createElement('p'));
        tenth_questionAnswer.innerHTML = "Opps, it's Trips to Malta";
        document.querySelector("#" + 'tenth_question').style.backgroundColor = "tomato";
        countWrongs++;
    }
    answer.innerHTML = `Right answers: ${countRights}  Wrong answers: ${countWrongs} of ${countQuest} questions!`;
}



const answers = {
    first_question:  "c",
    second_question: "b",
    third_question:  "c",
    fourth_question: "b",
    fifth_question:  "c",
    sixth_question:  "b",
    seventh_question:"c",
    eighth_question: "a",
    ninth_question:  "c",
    tenth_question:  "b",
}
