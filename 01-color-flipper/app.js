const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
    let colorNum = generateRandomNum();
    document.body.style.backgroundColor = colors[colorNum];
    color.textContent = colors[colorNum];
});

function generateRandomNum() {
    return Math.floor(Math.random() * colors.length);
}
