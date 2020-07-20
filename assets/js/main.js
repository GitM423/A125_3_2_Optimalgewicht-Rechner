function checkBuild() {
    if (document.getElementById("wide").checked == true) {
        console.log('selected: \n\t"Breite"')
    }
    else if (document.getElementById("slim").checked == true) {
        console.log('selected: \n\t"Schmale"')
    }
}

function sendData() {
    let height = document.getElementById("height").value
    let age = document.getElementById("age").value
    let idealWeight

    if (height == "" || age == "") {
        console.log("ERROR: \n\theight and/or age missing")
        document.getElementById("res").innerHTML = "ERROR: height and/or age missing"
    }
    else {
        if (document.getElementById("wide").checked == true) {
            build = "wide"
            idealWeight = ((height - 100) + (age / 10)) * 0.9 * 1.1
        }
        else if (document.getElementById("slim").checked == true) {
            build = "slim"
            idealWeight = ((height - 100) + (age / 10)) * 0.9 * 0.9
        }

        console.log("height: \n\t" + height + " cm")
        console.log("age: \n\t" + age + " years")
        console.log("build: \n\t" + build)
        console.log("idealWeight: \n\t" + idealWeight.toFixed(2) + " kg")

        document.getElementById("res").innerHTML = `Dein Idealgewicht ist ${idealWeight.toFixed(2).split(".").join(",")} kg.`
    }
}

document.querySelectorAll('input').forEach(function (item) {
    item.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault()
            document.getElementById("btn").click()
        }
    })
})
