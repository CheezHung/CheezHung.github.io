//倒數計時

// 获取页面元素
const timerEl = document.getElementById('timer');

// 设定倒计时时间（秒）
const countdownTime = 90;

let remainingTime = countdownTime;
let timerId = null;
let isStarted = false;
let isPaused = false;

// 监听空格键、p键和c键的按下事件
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !isStarted) {
    startCountdown();
    isStarted = true;
  } else if (event.code === 'KeyP' && isStarted) {
    pauseCountdown();
  } else if (event.code === 'KeyB') {
    resetCountdown();
  }
});

function startCountdown() {
  timerId = setInterval(() => {
    remainingTime--;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerEl.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (remainingTime === 0) {
      clearInterval(timerId);
    }
  }, 1000);
}

function pauseCountdown() {
  if (isPaused) {
    timerId = setInterval(() => {
      remainingTime--;
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      timerEl.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      if (remainingTime === 0) {
        clearInterval(timerId);
      }
    }, 1000);
    isPaused = false;
  } else {
    clearInterval(timerId);
    isPaused = true;
  }
}

function resetCountdown() {
  clearInterval(timerId);
  remainingTime = countdownTime;
  timerEl.textContent = `01:30`;
  isStarted = false;
  isPaused = false;
}

//青方分數
// 初始化青方分數
let bscore = 0;

// 獲取計分器元素
const bluescore = document.getElementById("bluescore");

// 監聽鍵盤事件
document.addEventListener("keydown", (event) => {
  // 判斷按下的鍵
  switch (event.key) {
    case "q":
      bscore += 1;
      break;
    case "w":
      bscore += 2;
      break;
    case "e":
      bscore += 3;
      break;
    case "a":
      bscore -= 1;
      break;
    case "s":
      bscore -= 2;
      break;
    case "d":
      bscore -= 3;
      break;
    case "b":
      bscore = 0;
      break;
    default:
      break;
  }

  // 更新青分數顯示
  bluescore.innerText = bscore.toString();
});

//青方犯規
// 初始化青方犯規
let bg = 0;

// 獲取計分器元素
const bluegam = document.getElementById("bluegam");

// 監聽鍵盤事件
document.addEventListener("keydown", (event) => {
  // 判斷按下的鍵
  switch (event.key) {
    case "c":
      bg += 1;
      break;
    case "x":
      bg -= 1;
      break;
    case "b":
      bg = 0;
      break;
    default:
      break;
  }
  // 更新青方犯規
  bluegam.innerText = bg.toString();
});
//紅方犯規
// 初始化紅方犯規
let rg = 0;

// 獲取計分器元素
const redgam = document.getElementById("redgam");

// 監聽鍵盤事件
document.addEventListener("keydown", (event) => {
  // 判斷按下的鍵
  switch (event.key) {
    case "n":
      rg += 1;
      break;
    case "m":
      rg -= 1;
      break;
    case "b":
      rg = 0;
      break;
    default:
      break;
  }
  // 更新紅方犯規
  redgam.innerText = rg.toString();
});
//紅方分數
// 初始化紅方分數
let rscore = 0;

// 獲取計分器元素
const redscore = document.getElementById("redscore");

// 監聽鍵盤事件
document.addEventListener("keydown", (event) => {
  // 判斷按下的鍵
  switch (event.key) {
    case "u":
      rscore += 1;
      break;
    case "i":
      rscore += 2;
      break;
    case "o":
      rscore += 3;
      break;
    case "j":
      rscore -= 1;
      break;
    case "k":
      rscore -= 2;
      break;
    case "l":
      rscore -= 3;
      break;
    case "b":
      rscore = 0;
      break;
    default:
      break;
  }
 // 更新紅分數顯示
 redscore.innerText = rscore.toString();
});


// 初始回合數
let r = 1;

// 獲取計分器元素
const round = document.getElementById("round");

// 監聽鍵盤事件
document.addEventListener("keydown", (event) => {
  // 判斷按下的鍵
  switch (event.key) {
    case "t":
      if (r < 3) {
        r += 1;
      } else {
        r = 1;
      }
      break;
      default:
      break; 
  }

  // 更新青分數顯示
  round.innerText = r.toString();
});
