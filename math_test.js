const Questions = [{
        id: 0,
        q: "What is the integral of 2x^2 + 3x - 1 with respect to x?",
        a: [{ text: "x^3 + 1.5x^2 - x + C", isCorrect: true },
            { text: "x^3 + 1.5x^2 - C", isCorrect: false },
            { text: "x^2 + 1.5x - x + C", isCorrect: false },
            { text: "2/3x^3 + 1.5/2x^2 - x + C", isCorrect: false }
        ]

    },
    {
        id: 1,
        q: "Evaluate the integral of e^x * cos(x) with respect to x:",
        a: [{ text: "e^x * sin(x) + C", isCorrect: false },
            { text: "e^x * cos(x) + C", isCorrect: true },
            { text: "e^x * (sin(x) + cos(x)) + C", isCorrect: false },
            { text: "e^x * (cos(x) - sin(x)) + C", isCorrect: false }
        ]

    },
    {
        id: 2,
        q: "Calculate the integral of 1/x with respect to x:",
        a: [{ text: "ln|x| + C", isCorrect: true },
            { text: " ln(x) + C", isCorrect: false },
            { text: "x + C", isCorrect: false },
            { text: "1/2x^2 + C", isCorrect: false }
        ]

    },
    {
        id: 3,
        q: "Find the integral of (x^2 + 2x + 1) / (x + 1) with respect to x:",
        a: [{ text: "x^2 + 2x - 3ln|x+1| + C", isCorrect: true },
            { text: "x^2 + 2x + ln|x+1| + C", isCorrect: false },
            { text: "x^2 + 2x - ln|x+1| + C", isCorrect: false },
            { text: "x^2 + 2x + 3ln|x+1| + C", isCorrect: false }
        ]

    },
    {
        id: 4,
        q: "Evaluate the integral of (2x + 1) / (x^2 + x + 1) with respect to x:",
        a: [{ text: "ln|x^2 + x + 1| + C", isCorrect: false },
            { text: "2ln|x^2 + x + 1| + C", isCorrect: false },
            { text: "ln|x^2 + x + 1| - 2ln|x+1| + C", isCorrect: false },
            { text: "ln|x^2 + x + 1| + 2ln|x+1| + C", isCorrect: true }
        ]

    }

]

// Set start
var start = true;
var count = 0;
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
        if (selected == "true") {
            count++;
        }
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
        if (selected == "true") {
            count++;
        }
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
        if (selected == "true") {
            count++;
        }
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
        if (selected == "true") {
            count++;
        }
    })

    const finish = document.getElementsByClassName("finish");
    finish[0].addEventListener("click", () => {
        if (count == 3) {
            result[0].innerHTML = "LVL2";
        } else if (count < 3) {
            result[0].innerHTML = "LVL1";
        } else {
            result[0].innerHTML = "LVL3";
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

const previous = document.getElementsByClassName('previous')[0];
previous.addEventListener("click", () => {
    start = false;
    if (id >= 1) {
        id--;
        iterate(id);
        console.log(id);
    }
})