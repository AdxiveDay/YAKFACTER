let aInput = document.getElementById("a")
let bInput = document.getElementById("b")
let cInput = document.getElementById("c")
let text = document.getElementById("results")
let button = document.getElementById("submit")

function resulter() {

    let a = parseInt(aInput.value)
    let b = parseInt(bInput.value)
    let c = parseInt(cInput.value)

    if (a === 0) {
        text.innerHTML = "กากกก"
        return
    }

    let determinant = (b ** 2) - (4 * a * c)

    if (determinant < 0) {
        text.innerHTML = "Cannot solve"
        return
    }

    let root1 = -((-b + Math.sqrt(determinant)) / (2 * a))
    let root2 = -((-b - Math.sqrt(determinant)) / (2 * a))

    // แสดงรากที่คำนวณได้
    text.innerHTML = `
    <p>รากที่ 1: ${root1.toFixed(5)}</p>
    <p>รากที่ 2: ${root2.toFixed(5)}</p>
    `

    // แสดงการแยกแฟกเตอร์
    text.innerHTML += `
    <p>แฟกเตอร์: ${a}(x - ${root1.toFixed(5)})(x - ${root2.toFixed(5)})</p>
    `
}

button.addEventListener("click", resulter)
