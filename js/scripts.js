const hamburger = document.querySelector(".hamburger")
const span1 = document.querySelector("#span1")
const span2 = document.querySelector("#span2")
const span3 = document.querySelector("#span3")

hamburger.addEventListener("click", () => {
    span1.classList.toggle("rotateRight")
    span2.classList.toggle("hidden")
    span3.classList.toggle("rotateLeft")
})

const currentYearSpan = document.querySelector("#currentYear")
const currentYear = new Date().getFullYear()
currentYearSpan.append(currentYear)