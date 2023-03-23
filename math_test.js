const Questions = [{
        id: 0,
        q: `What is the integral of
        <math xmlns='http://www.w3.org/1998/Math/MathML'>
 <mrow>
  <mrow>
   <mn>2</mn>
   <mo>&#8290;</mo>
   <msup>
    <mi>x</mi>
    <mn>2</mn>
   </msup>
  </mrow>
  <mo>+</mo>
  <mrow>
   <mn>3</mn>
   <mo>&#8290;</mo>
   <mi>x</mi>
  </mrow>
  <mo>-</mo>
  <mn>1</mn>
 </mrow>
</math> 
with respect to x?`,
        a: [{ text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mrow>
         <mi>C</mi>
         <mo>+</mo>
         <msup>
          <mi>x</mi>
          <mn>3</mn>
         </msup>
         <mo>+</mo>
         <mrow>
          <mn>1.5</mn>
          <mtext> </mtext>
          <msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
         </mrow>
         <mo>-</mo>
         <mi>x</mi>
        </mrow>
       </math>`, isCorrect: true },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mrow>
             </mrow>
             <msup>
              <mi>x</mi>
              <mn>3</mn>
             </msup>
             <mo>+</mo>
             <mrow>
              <mn>1.5</mn>
              <mtext> </mtext>
              <msup>
               <mi>x</mi>
               <mn>2</mn>
              </msup>
              <mo>-</mo>
              <mi>C</mi>
             </mrow>
            </mrow>
           </math>`, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <msup>
              <mi>x</mi>
              <mn>2</mn>
             </msup>
             <mo>+</mo>
             <mrow>
              <mn>1.5</mn>
              <mtext> </mtext>
              <mi>x</mi>
             </mrow>
             <mo>-</mo>
             <mi>x</mi>
            </mrow>
           </math>
           `, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mfrac>
              <mn>2</mn>
              <mrow>
               <mn>3</mn>
               <mo>&#8290;</mo>
               <msup>
                <mi>x</mi>
                <mn>3</mn>
               </msup>
              </mrow>
             </mfrac>
             <mo>+</mo>
             <mfrac>
              <mn>1.5</mn>
              <mrow>
               <mn>2</mn>
               <mo>&#8290;</mo>
               <msup>
                <mi>x</mi>
                <mn>2</mn>
               </msup>
              </mrow>
             </mfrac>
             <mo>-</mo>
             <mi>x</mi>
            </mrow>
           </math>
           `, isCorrect: false }
        ]

    },
    {
        id: 1,
        q: `Evaluate the integral of <math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mrow>
         <msup>
          <mi>e</mi>
          <mi>x</mi>
         </msup>
         <mo>&#8290;</mo>
         <mrow>
          <mi>cos</mi>
          <mo>&#8289;</mo>
          <mo>(</mo>
          <mi>x</mi>
          <mo>)</mo>
         </mrow>
        </mrow>
       </math>
        with respect to x:`,
        a: [{ text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mrow>
         <mi>C</mi>
         <mo>+</mo>
         <mrow>
          <msup>
           <mi>e</mi>
           <mi>x</mi>
          </msup>
          <mo>&#8290;</mo>
          <mrow>
           <mi>sin</mi>
           <mo>&#8289;</mo>
           <mo>(</mo>
           <mi>x</mi>
           <mo>)</mo>
          </mrow>
         </mrow>
        </mrow>
       </math>
       `, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <msup>
               <mi>e</mi>
               <mi>x</mi>
              </msup>
              <mo>&#8290;</mo>
              <mrow>
               <mi>cos</mi>
               <mo>&#8289;</mo>
               <mo>(</mo>
               <mi>x</mi>
               <mo>)</mo>
              </mrow>
             </mrow>
            </mrow>
           </math>`, isCorrect: true },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <msup>
               <mi>e</mi>
               <mi>x</mi>
              </msup>
              <mo>&#8290;</mo>
              <mrow>
               <mo>(</mo>
               <mrow>
                <mrow>
                 <mi>sin</mi>
                 <mo>&#8289;</mo>
                 <mo>(</mo>
                 <mi>x</mi>
                 <mo>)</mo>
                </mrow>
                <mo>+</mo>
                <mrow>
                 <mi>cos</mi>
                 <mo>&#8289;</mo>
                 <mo>(</mo>
                 <mi>x</mi>
                 <mo>)</mo>
                </mrow>
               </mrow>
               <mo>)</mo>
              </mrow>
             </mrow>
            </mrow>
           </math>`, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <msup>
               <mi>e</mi>
               <mi>x</mi>
              </msup>
              <mo>&#8290;</mo>
              <mrow>
               <mo>(</mo>
               <mrow>
                <mrow>
                 <mi>cos</mi>
                 <mo>&#8289;</mo>
                 <mo>(</mo>
                 <mi>x</mi>
                 <mo>)</mo>
                </mrow>
                <mo>-</mo>
                <mrow>
                 <mi>sin</mi>
                 <mo>&#8289;</mo>
                 <mo>(</mo>
                 <mi>x</mi>
                 <mo>)</mo>
                </mrow>
               </mrow>
               <mo>)</mo>
              </mrow>
             </mrow>
            </mrow>
           </math>
           `, isCorrect: false }
        ]

    },
    {
        id: 2,
        q: `Calculate the integral of <math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mfrac>
         <mn>1</mn>
         <mi>x</mi>
        </mfrac>
       </math> with respect to x:`,
        a: [{ text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mrow>
         <mi>C</mi>
         <mo>+</mo>
         <mrow>
          <mi>ln</mi>
          <mrow>
          <mo>|</mo>
          <mi>x</mi>
          <mo>|</mo>
          </mrow>
         </mrow>
        </mrow>
       </math>`, isCorrect: true },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <mi>ln</mi>
              <mo>(</mo>
              <mi>x</mi>
              <mo>)</mo>
             </mrow>
            </mrow>
           </math>`, isCorrect: false },
            { text: `
            <math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <mi>x</mi>
             </mrow>
            </mrow>
           </math>`, isCorrect: false },
            { text: `
            <math xmlns='http://www.w3.org/1998/Math/MathML'>
 <mrow>
  <mi>C</mi>
  <mo>+</mo>
  <mfrac>
   <msup>
    <mi>x</mi>
    <mn>2</mn>
   </msup>
   <mn>2</mn>
  </mfrac>
 </mrow>
</math>
`, isCorrect: false }
        ]

    },
    {
        id: 3,
        q: `Find the integral of <math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mfrac>
         <mrow>
          <msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mrow>
           <mn>2</mn>
           <mo>&#8290;</mo>
           <mi>x</mi>
          </mrow>
          <mo>+</mo>
          <mn>1</mn>
         </mrow>
         <mrow>
          <mi>x</mi>
          <mo>+</mo>
          <mn>1</mn>
         </mrow>
        </mfrac>
       </math> with respect to x:`,
        a: [{ text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mrow>
         <mi>C</mi>
         <mo>+</mo>
         <msup>
          <mi>x</mi>
          <mn>2</mn>
         </msup>
         <mo>+</mo>
         <mrow>
          <mn>2</mn>
          <mo>&#8290;</mo>
          <mi>x</mi>
         </mrow>
         <mo>-</mo>
         <mrow>
          <mn>3</mn>
          <mo>&#8290;</mo>
          <mrow>
           <mi>ln</mi>
           <mo>|</mo>
           <mrow>
            <mi>x</mi>
            <mo>+</mo>
            <mn>1</mn>
           <mo>|</mo>
           </mrow>
          </mrow>
         </mrow>
        </mrow>
       </math>`, isCorrect: true },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <msup>
              <mi>x</mi>
              <mn>2</mn>
             </msup>
             <mo>+</mo>
             <mrow>
              <mn>2</mn>
              <mo>&#8290;</mo>
              <mi>x</mi>
             </mrow>
             <mo>+</mo>
             <mrow>
              <mi>ln</mi>
              <mo>&#8289;</mo>
              <mo>|</mo>
              <mrow>
               <mi>x</mi>
               <mo>+</mo>
               <mn>1</mn>
              </mrow>
              <mo>|</mo>
             </mrow>
            </mrow>
           </math>
           `, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <msup>
              <mi>x</mi>
              <mn>2</mn>
             </msup>
             <mo>+</mo>
             <mrow>
              <mn>2</mn>
              <mo>&#8290;</mo>
              <mi>x</mi>
             </mrow>
             <mo>-</mo>
             <mrow>
              <mi>ln</mi>
              <mo>&#8289;</mo>
              <mo>|</mo>
              <mrow>
               <mi>x</mi>
               <mo>+</mo>
               <mn>1</mn>
              <mo>|</mo>
              </mrow>
             </mrow>
            </mrow>
           </math>`, isCorrect: false },
            { text: `
            <math xmlns='http://www.w3.org/1998/Math/MathML'>
 <mrow>
  <mi>C</mi>
  <mo>+</mo>
  <msup>
   <mi>x</mi>
   <mn>2</mn>
  </msup>
  <mo>+</mo>
  <mrow>
   <mn>2</mn>
   <mo>&#8290;</mo>
   <mi>x</mi>
  </mrow>
  <mo>+</mo>
  <mrow>
   <mn>3</mn>
   <mo>&#8290;</mo>
   <mrow>
    <mi>ln</mi>
    <mo>&#8289;</mo>
    <mo>|</mo>
    <mrow>
     <mi>x</mi>
     <mo>+</mo>
     <mn>1</mn>
    </mrow>
    <mo>|</mo>
   </mrow>
  </mrow>
 </mrow>
</math>
`, isCorrect: false }
        ]
    },
    {
        id: 4,
        q: `Evaluate the integral of <math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mfrac>
         <mrow>
          <mrow>
           <mn>2</mn>
           <mo>&#8290;</mo>
           <mi>x</mi>
          </mrow>
          <mo>+</mo>
          <mn>1</mn>
         </mrow>
         <mrow>
          <msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mi>x</mi>
          <mo>+</mo>
          <mn>1</mn>
         </mrow>
        </mfrac>
       </math> with respect to x:`,
        a: [{ text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
        <mrow>
         <mi>C</mi>
         <mo>+</mo>
         <mrow>
          <mi>ln</mi>
          <mo>&#8289;</mo>
          <mo>|</mo>
          <mrow>
           <msup>
            <mi>x</mi>
            <mn>2</mn>
           </msup>
           <mo>+</mo>
           <mi>x</mi>
           <mo>+</mo>
           <mn>1</mn>
           <mo>|</mo>
          </mrow>
         </mrow>
        </mrow>
       </math>`, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <mn>2</mn>
              <mo>&#8290;</mo>
              <mrow>
               <mi>ln</mi>
               <mo>&#8289;</mo>
               <mo>|</mo>
               <mrow>
                <msup>
                 <mi>x</mi>
                 <mn>2</mn>
                </msup>
                <mo>+</mo>
                <mi>x</mi>
                <mo>+</mo>
                <mn>1</mn>
               </mrow>
               <mo>|</mo>
              </mrow>
             </mrow>
            </mrow>
           </math>`, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <mi>ln</mi>
              <mo>&#8289;</mo>
              <mo>|</mo>
              <mrow>
               <msup>
                <mi>x</mi>
                <mn>2</mn>
               </msup>
               <mo>+</mo>
               <mi>x</mi>
               <mo>+</mo>
               <mn>1</mn>
              </mrow>
              <mo>|</mo>
             </mrow>
             <mo>-</mo>
             <mrow>
              <mn>2</mn>
              <mo>&#8290;</mo>
              <mrow>
               <mi>ln</mi>
               <mo>&#8289;</mo>
               <mo>|</mo>
               <mrow>
                <mi>x</mi>
                <mo>+</mo>
                <mn>1</mn>
               </mrow>
               <mo>|</mo>
              </mrow>
             </mrow>
            </mrow>
           </math>`, isCorrect: false },
            { text: `<math xmlns='http://www.w3.org/1998/Math/MathML'>
            <mrow>
             <mi>C</mi>
             <mo>+</mo>
             <mrow>
              <mi>ln</mi>
              <mo>|</mo>
              <mrow>
               <msup>
                <mi>x</mi>
                <mn>2</mn>
               </msup>
               <mo>+</mo>
               <mi>x</mi>
               <mo>+</mo>
               <mn>1</mn>
              </mrow>
              <mo>|</mo>
             </mrow>
             <mo>+</mo>
             <mrow>
              <mn>2</mn>
              <mrow>
               <mi>ln</mi>
               <mo>|</mo>
               <mrow>
                <mi>x</mi>
                <mo>+</mo>
                <mn>1</mn>
               </mrow>
               <mo>|</mo>
              </mrow>
             </mrow>
            </mrow>
           </math>`, isCorrect: true }
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
    question.innerHTML = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerHTML = Questions[id].a[0].text;
    op2.innerHTML = Questions[id].a[1].text;
    op3.innerHTML = Questions[id].a[2].text;
    op4.innerHTML = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "#3b90e5";
        op3.style.backgroundColor = "#3b90e5";
        op4.style.backgroundColor = "#3b90e5";
        selected = op1.value;
        if (selected == "true") {
            count++;
        }
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#3b90e5";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "#3b90e5";
        op4.style.backgroundColor = "#3b90e5";
        selected = op2.value;
        if (selected == "true") {
            count++;
        }
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "#3b90e5";
        op2.style.backgroundColor = "#3b90e5";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "#3b90e5";
        selected = op3.value;
        if (selected == "true") {
            count++;
        }
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "#3b90e5";
        op2.style.backgroundColor = "#3b90e5";
        op3.style.backgroundColor = "#3b90e5";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
        if (selected == "true") {
            count++;
        }
    })

    const finish = document.getElementsByClassName("finish");
    finish[0].addEventListener("click", () => {
        if (count === 3) {
            result[0].innerHTML = `<div class= "circle per-50">  <div class = "inner"> LVL2 </div> </div>`;
        } else if (count < 3) {
            result[0].innerHTML = `<div class= "circle per-25">  <div class = "inner"> LVL1 </div> </div>`;
        } else {
            result[0].innerHTML = `<div class= "circle per-75">  <div class = "inner"> LVL3 </div> </div>`;
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