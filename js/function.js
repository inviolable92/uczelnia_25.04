alert("hello world")
const example = () => {
    const fromInput = document.getElementById("example").value;
    document.getElementById("text").innerText = fromInput;
}
document.getElementById("btn").addEventListener("click", example)

