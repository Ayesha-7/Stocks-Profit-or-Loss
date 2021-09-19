const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");

const checkButton = document.querySelector("#check-button");
const message = document.querySelectorAll(".msg");
const output = document.querySelector("#output");
const input = document.querySelectorAll(".input");
const themeImage = document.querySelector("#theme");
const body = document.querySelector("#body");

output.style.display = "none";
for (var i = 0; i < message.length; i++) {
    message[i].style.display = "none";
}


checkButton.addEventListener("click", function checkHandler() {

    output.style.display = "none";
    themeImage.src = "images/main.jpg";
    body.style.backgroundColor = "whitesmoke";

    var initial = Number(initialPrice.value);
    var quant = Number(quantity.value);
    var current = Number(currentPrice.value);

    for (var i = 0; i < message.length; i++) {
        message[i].style.display = "none";
    }

    var flag = 0;

    for (var i = 0; i < input.length; i++) {
        if (Number(input[i].value) <= 0)
            showMessage("Value must be greater than 0", i);
        else {
            flag = flag + 1;
        }
    }


    if (flag == 3)
        calculateProfitAndLoss(initial, quant, current);

})



function calculateProfitAndLoss(initial, quant, current) {
    console.log("in here")
    if (initial < current) {
        console.log("in here" + initial + quant + current)

        var profit = (current - initial) * quant;
        var profirPercentage = (profit / (initial * quant)) * 100;

        profit = Number.parseFloat(profit).toFixed(2);
        profirPercentage = Number.parseFloat(profirPercentage).toFixed(2);

        showOutput(`Your gain is ${profirPercentage}% and amount gained is ₹${profit}!`);

        if (profirPercentage > 50)
            themeImage.src = "images/happy3.jpg"
        else
            themeImage.src = "images/happy1.jpg"
        body.style.backgroundColor = "rgb(17, 223, 69, 0.4)";

    } else if (initial > current) {
        console.log("in here")

        var loss = (initial - current) * quant;
        var lossPercentage = (loss / (initial * quant)) * 100;

        loss = Number.parseFloat(loss).toFixed(2);
        lossPercentage = Number.parseFloat(lossPercentage).toFixed(2);

        showOutput(`The loss percentage is ${lossPercentage}% & amount lost is ₹${loss}`);

        if (lossPercentage > 30)
            themeImage.src = "images/sad1.jpg";
        else
            themeImage.src = "images/sad2.jpg";
        body.style.backgroundColor = "rgb(243, 3, 3,0.4)";

    } else {
        showOutput(`No Profit ~ No Loss`);
        themeImage.src = "images/main.jpg";
        body.style.backgroundColor = "rgba(50, 90, 223, 0.4)";
    }
}

function showOutput(msg) {
    output.style.display = "block";
    output.innerText = msg;
}

function showMessage(msg, i) {
    message[i].style.display = "block";
    message[i].innerText = msg;
}

// function setTheme(pL, percentage) {
//     switch (pL) {
//         case 'loss':
//             if (percentage > 30)
//                 themeImage.src = "images/sad1.jpg";
//             else
//                 themeImage.src = "images/sad2.jpg";
//             body.style.backgroundColor = "rgb(243, 3, 3,0.4)";
//             break;

//         case 'profit':
//             if (percentage > 50)
//                 themeImage.src = "images/happy3.jpg"
//             else
//                 themeImage.src = "images/happy1.jpg"
//             body.style.backgroundColor = "rgb(17, 223, 69, 0.4)";

//         case 'bE':
//             themeImage.src = "images/happy2.jpg";
//             body.style.backgroundColor = "rgba(50, 90, 223, 0.4)";

//     }
// }