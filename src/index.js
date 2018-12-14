var exp = "";
function addData(data) {
    exp = exp + data;
    document.getElementById("input").value = exp;
}
function calc() {
    var expression = document.getElementById("input").value;
    try {
        document.getElementById("result").value = eval(expression);
    } catch (e) {
        document.getElementById("result").value = "Invalid Expression";
    }
}
function clear() {
    exp = "";
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
}