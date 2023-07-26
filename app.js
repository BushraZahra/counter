let countE1 = document.getElementById("count");
let saveE1 = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-Btn");
let saveBtn = document.querySelector(".save-Btn");

let count =0;
incrementBtn.addEventListener("click", () => {
    count += 1;
    countE1.textContent = count;
});

    saveBtn.addEventListener("click", () => {
        let countStr = count + ", ";
        saveE1.textContent += countStr;
        countE1.textContent = 0;
        count = 0;
    });

    
