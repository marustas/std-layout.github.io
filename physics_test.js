const Questions = [{
        id: 0,
        q: "A car is traveling at a constant speed of 20 m/s. What distance will the car travel in 10 seconds?",
        a: [{ text: "200m", isCorrect: true },
            { text: "2m", isCorrect: false },
            { text: "10m", isCorrect: false },
            { text: "100m", isCorrect: false }
        ]

    },
    {
        id: 1,
        q: "What is the kinetic energy of an object with a mass of 5 kg and a velocity of 10 m/s?",
        a: [{ text: "250 J", isCorrect: true, isSelected: false },
            { text: "50 J", isCorrect: false },
            { text: "100 J", isCorrect: false },
            { text: "500 J", isCorrect: false }
        ]

    },
    {
        id: 2,
        q: "A ball is thrown upwards with an initial velocity of 20 m/s. What is the maximum height the ball will reach?",
        a: [{ text: "20 m", isCorrect: false },
            { text: "200 m", isCorrect: false },
            { text: "40 m", isCorrect: true },
            { text: "400 m", isCorrect: false }
        ]

    },
    {
        id: 3,
        q: "What is the force required to accelerate an object with a mass of 10 kg at a rate of 5 m/s^2?",
        a: [{ text: "50 N", isCorrect: true },
            { text: "5 N", isCorrect: false },
            { text: "100 N", isCorrect: false },
            { text: "500 N", isCorrect: false }
        ]

    },
    {
        id: 4,
        q: "What is the power output of a machine that does 1000 J of work in 10 seconds?",
        a: [{ text: "100 W", isCorrect: true },
            { text: "10 W", isCorrect: false },
            { text: "10000 W", isCorrect: false },
            { text: "1 W", isCorrect: false }
        ]

    }

]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }

})
