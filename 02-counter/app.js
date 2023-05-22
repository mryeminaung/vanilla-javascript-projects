// set initial value
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) count--;
        else if (styles.contains("increase")) count++;
        else if (styles.contains("reset")) count = 0;

        if (count > 0) value.style.color = "green";
        else if (count < 0) value.style.color = "red";
        else value.style.color = "#222";

        value.textContent = count;
    });
});

// select each button
/* const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.onclick = () => {
    count--;
    value.textContent = count;
    checkCount();
};

reset.onclick = () => {
    count = 0;
    value.textContent = count;
    checkCount();
};

increase.onclick = () => {
    count++;
    value.textContent = count;
    checkCount();
};

function checkCount() {
    if (count < 0) value.style.color = "red";
    else if (count > 0) value.style.color = "green";
    else value.style.color = "#222";
}
 */
