// variables for game
var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered:0,
    currentPick:0,
    timer:45,
    timerOn: false,
    questions: {
    q1: "How many times did Ross get married?",
    q2: "Which friend member peed on Monica's leg after a jellyfish stung her?",
    q3: "Who kissed Chandler's mom?",
    q4: "Which coffee shop did all the members hang out at?",
    q5: "Was Phoebe married before Mike?",
    q6: "How many babies did Phoebe have?",
    q7: "What was Bary's (Rachel's ex fiance) occupation?",
    q8: "Where did Chandler and Monica move to?"
    },

    options: {
        q1: ["One", "Two", "Three", "four"],
        q2: ["Ross", "Joey", "Chandler", "Gunter"],
        q3: ["Joey", "Chandler", "Ross", "Paolo"],
        q4: ["Central Park", "Dunkin Donuts", "Central Perk", "Starbucks"],
        q5: ["Yes", "No"],
        q6: ["One", "Two", "Three", "Four"],
        q7: ["Doctor", "Nurse", "Orthodontist", "Opthalmologist"],
        q8: ["Hamptons", "Queens", "Long Island", "Westchester"]
    },
    answers: {
        q1: "Three",
        q2: "Joey",
        q3: "Ross",
        q4: "Central Perk",
        q5: "Yes",
        q6: "Three",
        q7: "Orthondonist",
        q8: "Westchester"
    }
}
console.log(trivia)