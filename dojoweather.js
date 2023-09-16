let end = document.querySelector("#end");

function Hide(){
    end.remove();
}

let rightNum = document.querySelectorAll(".rightTemp");
let leftNum = document.querySelectorAll(".leftTemp");

function chooseTemp(){
    let rightNew = rightNum - 32 * .5556;
    let leftNew = (leftNum - 32) * .5556;
    rightNum.innerText = rightNew;
    leftNum.innerText = leftNew;
}
// onclick="chooseTemp()" ?? event listener?
