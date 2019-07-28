$(document).ready(function() {
// setting questions, options, answers in a variable
var quizQuestions = [
    {question: "How many times did Ross get married?",
    option: ["One", "Two", "Three", "four"],
    answer: "Three"},
    {question: "Which friend member peed on Monica's leg after a jellyfish stung her?",
    option: ["Ross", "Joey", "Chandler", "Gunter"],
    answer: "Joey"},
    {question: "Who kissed Chandler's mom?",
    option: ["Joey", "Chandler", "Ross", "Paolo"],
    answer: "Ross"},
    {question: "Which coffee shop did all the members hang out at?",
    option: ["Central Park", "Dunkin Donuts", "Central Perk", "Starbucks"],
    answer: "Central Perk"},
    {question: "Was Phoebe married before Mike?",
    option: ["Yes", "No"],
    answer: "Yes"},
    {question: "How many babies did Phoebe have?",
    option: ["One", "Two", "Three", "Four"],
    answer: "Three"},
    {question: "What was Bary's (Rachel's ex fiance) occupation?",
    option: ["Doctor", "Nurse", "Orthodontist", "Opthalmologist"],
    answer: "Orthondonist"},
    {question: "Where did Chandler and Monica move to?",
    option: ["Hamptons", "Queens", "Long Island", "Westchester"],
    answer: "Westchester"},
    ]

// setting global variables
var currentQuestion= 0;
var correct= 0;
var wrong=0;
var clock= 45;
var timer;

function loadQuestion() {
    var questions = quizQuestions[currentQuestion].question;
    var options= quizQuestions[currentQuestion].options;
    $("#timeRemaining").html("Time Remaining: " + clock);
    $("#game").html('<h3>' + question + '</h3>');
    
}
function loadOptions(option) {
    var results = '';

    for (let i = 0; i < option.length; i++) {
        results+= '<p class="option" data-answer="${option[i]}">${option[i]}</p>';
        }
        return results;
}


loadQuestion()
}); 
