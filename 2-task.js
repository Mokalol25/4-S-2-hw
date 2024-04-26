const box = document.querySelector("#box")
function moveBox(event) {
    box.style.left = `${event.clientX}px`;
    box.style.top = `${event.clientY}px`;
    // console.log("asuidhfias")
}
document.addEventListener('mousemove', _.debounce(moveBox, 100));