const counter = document.getElementById(`counter`);
const minus = document.getElementById(`minus`);
const reset = document.getElementById(`reset`);
const plus = document.getElementById(`plus`);

plus.addEventListener(`click`, () => {
    counter.innerHTML++;
    fontColor();
});

minus.addEventListener(`click`, () => {
    counter.innerHTML--;
    fontColor();
});

reset.addEventListener(`click`, () => {
    counter.innerHTML = 0;
    fontColor();
});

function fontColor(){
    if (counter.innerHTML > 0) {
        counter.style.color = `green`;
    }
    else if (counter.innerHTML < 0) {
        counter.style.color = `red`;
    }
    else
    {
        counter.style.color = `black`;
    }
}