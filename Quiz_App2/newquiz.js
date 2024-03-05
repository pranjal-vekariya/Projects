function back(){
  window.location.replace("dashboard.html")
}

const showscore = document.getElementById('showscore')

let score = 0;
  function question(){
    if(document.getElementById('correct1').checked){
      score++
    }
    if(document.getElementById('correct2').checked){
      score++
    }
    if(document.getElementById('correct3').checked){
      score++
    }
    if(document.getElementById('correct4').checked){
      score++
    }
    if(document.getElementById('correct5').checked){
      score++
    }
    if(document.getElementById('correct6').checked){
      score++
    }
    if(document.getElementById('correct7').checked){
      score++
    }
    if(document.getElementById('correct8').checked){
      score++
    }
    if(document.getElementById('correct9').checked){
      score++
    }
    if(document.getElementById('correct10').checked){
      score++
    }
  }


function result(){
  question()
  showscore.innerHTML =  `<h3>Score ${score}</h3>`
}