const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const count = document.getElementById("count");
const value = document.getElementById("value");
const reset = document.getElementById("reset");

addBtn.addEventListener("click", function () {
    count.innerHTML = +count.innerHTML + 1;
});
saveBtn.addEventListener("click", function () {
    if (count.innerHTML != 0) {
        if (value.innerHTML == 0) {
            value.innerHTML = count.innerHTML
        } else {
            value.innerHTML = value.innerHTML + "," + count.innerHTML
        }
        count.innerHTML = 0;
    }
})
reset.addEventListener("click", function () {
    value.innerHTML = 0
    count.innerHTML = 0;
})

