let button = document.getElementById("debounceTime");
function debounce(func, delay) {
    let timer;
    return function() {
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(this, args);
        }, delay);
    }
}
function alertMessage() {
    alert("Timer over 3 seconds!!");
}
const debounceFunc = debounce(alertMessage, 3000);
button.addEventListener("click", debounceFunc);
