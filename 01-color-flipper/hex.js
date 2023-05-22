const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let randomNum = generateRandomNum();
        hexColor += hex[randomNum];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function generateRandomNum() {
    return Math.floor(Math.random() * hex.length);
}

// setInterval(() => {
//     let hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//         let randomNum = generateRandomNum();
//         hexColor += hex[randomNum];
//     }
//     document.body.style.backgroundColor = hexColor;
//     color.textContent = hexColor;
// }, 1000);
