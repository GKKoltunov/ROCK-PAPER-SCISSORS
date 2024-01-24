const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const robot = document.querySelector(".robot");
const human = document.querySelector(".human");
const content = document.querySelector('.content');
const ai = document.querySelector('.ai');
const you = document.querySelector(".you");
const next = document.querySelector('.next');
const restart = document.querySelector('.restart');
const message =document.querySelector('.message')

function randomChoise() {  //рандомный вариант компьютера
  let random = Math.ceil(Math.random() * 3) 

  let arr = [
    "./images/robot-rock.png",
    "./images/robot-scissors.png",
    "./images/robot-paper.png",
  ];
  robot.src = `${arr[random - 1]}`
  console.log(random)
  return random
}

function changeBtns() {
  rock.style.display = "none";
  paper.style.display = "none";
  scissors.style.display = "none";
  next.style.display = "block";
  restart.style.display = "block";
  message.style.display = "block";
  content.style.flexDirection = "column";
  content.style.alignItems = "center";
}

function revBtns() {
   rock.style.display = "block";
   paper.style.display = "block";
   scissors.style.display = "block";
   next.style.display = "none";
   restart.style.display = "none";
   message.style.display = "none";
   content.style.flexDirection = "row";
   content.style.alignItems = "end";
}

rock.addEventListener('click', function () {  //нажатие на кнопку "камень"
 changeBtns();
  if (random === 1) {
    message.textContent = 'IT`S A DRAW'
  } else if (random === 2) {
    message.textContent = "YOU WIN!";
    counter();
  } else if (random === 3) {
    message.textContent = "YOU LOSE!"
    looseCounter();
  }
})

paper.addEventListener("click", function () {  // нажатие на кнопку "бумага"
  let random = randomChoise();
  human.src = "./images/human-paper.png";
  changeBtns();
  if (random === 1) {
    message.textContent = "YOU WIN!";
    counter();
  } else if (random === 2) {
    message.textContent = "YOU LOSE!";
    looseCounter();
  } else if (random === 3) {
    message.textContent = "IT`S A DRAW";
  }
});

scissors.addEventListener("click", function () {  //нажатие на кнопку "ножницы"
  let random = randomChoise();
  human.src = "./images/human-scissors.png";
changeBtns();
  if (random === 1) {
    message.textContent = "YOU LOSE!";
    looseCounter();
  } else if (random === 2) {
    message.textContent = "IT`S A DRAW";
  } else if (random === 3) {
    message.textContent = "YOU WIN!"
      counter();
  }
});


next.addEventListener('click', function () {  // нажатие на кнопку "следующий раунд"
  revBtns();
 robot.src = "./images/robot-rock.png";
 human.src = "./images/human-rock.png";

})

let win=0  //счетчик побед
function counter() {
  win+=1
  you.textContent = `${win}`
}

let loose = 0;  // счетчик поражений
function looseCounter() {
  loose += 1;
  ai.textContent =`${loose}`
}

restart.addEventListener('click', function () { // нажатие на кнопку рестарт
  win = [];
  loose = [];
  ai.textContent = '0'
  you.textContent = '0'
 robot.src = "./images/robot-rock.png";
 human.src = "./images/human-rock.png";
revBtns();
})