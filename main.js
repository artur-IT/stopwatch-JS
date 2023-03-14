const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const time = document.querySelector(".time div");
let s = 0;
let start;
let flag = false;

const view = () => {
  // 3 ARUMENTS OPERATOR ! condition ? true : false
  time.textContent = s % 10 ? `${s / 100}` : `${(s / 100).toFixed(2)}`;
  s++;
  return;
};

// RESET
resetBtn.addEventListener("click", () => {
  clearInterval(start);
  s = 0;
  startBtn.textContent = "Start";
  time.textContent = "---";
  flag = false;
});

// START
startBtn.addEventListener("click", () => {
  if (flag == true) {
    clearInterval(start); // STOP IF ANY INTERVAL IS RUN
    startBtn.textContent = "Start";
    flag = false;
  } else {
    start = setInterval(view, 1); // STAR INTERVAL
    startBtn.textContent = "Pause";
    flag = true;
  }
});

// 100% my work :)
