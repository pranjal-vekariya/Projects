 const data = [
  {
      question: "Q1: js is used for?",
      a: "Frontend",
      b: "Animation",
      c: "Dynamically update content",
      d: "Backend",
      ans: "ans3"
    },
    {
      question : "Q2: Fullform of js ?",
      a : "Javascript",
      b : "Javas",
      c : "Javascience",
      d : "Javasecure",
      ans : "ans1"
    },
    {
      question : "Q3 : Who developed js?",
      a : "Santa",
      b : "Brenden Eich",
      c : "George",
      d : "Neck",
      ans : "ans2"
    },
    {
      question : "Q4 : When js develope ?",
      a : "1995",
      b : "1990",
      c : "1892",
      d : "1899",
      ans : "ans1"
    },
    {
      question : "Q5 : What is the full form of CSS?",
      a : "Cascading Style Sheets",
      b : "Cascading Style Sheep",
      c : "Cascading Super Sheet",
      d : "Cartoon Style Sheets",
      and : "ans1"
    },
    {
      question : "Q6 : What is the full form of HTTP?",
      a : "Hypertext Transfer Product",
      b : "Hypertext Test Protocol",
      c : "Hey Transfer Product",
      d : "Hypertext Transfer Protocol",
      ans : "and4"
    },
    {
      question : "Q7 : What is the full form of HTML?",
      a : "Hypertext Makeup Language",
      b : "Hypertext Markup Language",
      c : "Hypertest Markup Language",
      d : "Hello To My Land",
      ans : "ans2"
    },
    {
      question : "Q8 : How can a datatype be declare to be a constant type?",
      a : "const",
      b : "var",
      c : "let",
      d : "constant",
      ans : "ans1"
    },
    {
      question : "Q9 : How can we change the background color of an element?",
      a : "background-color",
      b : "color",
      c : "both A and B",
      d : "none of the above",
      ans : "ans1"
    },
    {
      question : "Q10  :How can we change the text color of an element?",
      a : "background-color",
      b : "color",
      c : "both A and B",
      d : "none",
      ans : "ans2 "
    }
  ]
const question = document.querySelector(".question")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const submit = document.querySelector("#submit")

const answers = document.querySelectorAll(".answer")

const showscore = document.querySelector("#showscore")

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

  const questionList = data[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsEle) => {
    if(curAnsEle.checked){
      answer = curAnsEle.id;
    }
  });
    return answer;
};

const deselected = () => {
  answers.forEach((curAnsEle) => curAnsEle.checked = false)
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer()
  console.log(checkedAnswer)

  if(checkedAnswer === data[questionCount].ans){
    score++;
  };

  questionCount++;

  deselected()

  if(questionCount < data.length){
    loadQuestion();
  }else{

    // showscore.innerHTML

    showscore.innerHTML = `
      <h3>You Scored ${score}/${data.length} </h3>
      // <button class="btn" onclick="location.reload()">Play Again</button>
    `;

    showscore.classList.remove('scoreArea')
  }
});

function back(){
  window.location.replace("dashboard.html")
}



























// let data = [
//     {
//       Q: "Q: js is used for?",
//       a: "Frontend",
//       b: "animation",
//       c: "dynamically update content",
//       d: "backend",
//       ans: "ans3"
//     },
//     {
//       Q : "Q : Fullform of js ?",
//       a : "javascript",
//       b : "javas",
//       c : "javascience",
//       d : "javasecure",
//       ans : "ans1"
//     },
//     {
//       Q : "Q : Who developed js?",
//       a : "santa",
//       b : "brenden Eich",
//       c : "george",
//       d : "Neck",
//       ans : "ans2",
//     },
//     {
//       Q : "Q : When js develope ?",
//       a : "1995",
//       b : "1990",
//       c : "1892",
//       d : "1899",
//       ans : "ans1"
//     }
//   ]

// let question = document.getElementById("question")
// let option1 = document.getElementById("opt1")
// let option2 = document.getElementById("opt2")
// let option3 = document.getElementById("opt3")
// let option4 = document.getElementById("opt4")
// let answer = document.querySelectorAll(".option")

// let num = 0;

// question.innerHTML = data[num].Q;
// option1.innerHTML = data[num].a;
// option2.innerHTML = data[num].b;
// option3.innerHTML = data[num].c;
// option4.innerHTML = data[num].d;

// function checkAns(){
//   let ans;
//   answer.forEach((curelement) => {
//     if(curelement.checked){
//       ans = curelement.id
//       console.log(ans)
//     }
//   })
//   return ans 
// }


// function next(){
//   let checkedAns = checkAns()  
//   num++;

// question.innerHTML = data[num].Q;
// option1.innerHTML = data[num].a
// option2.innerHTML = data[num].b
// option3.innerHTML = data[num].c
// option4.innerHTML = data[num].d

// }