console.log("JS Script Initialized")



submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Click")
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
    let key = "ema_live_nhklFdcF6XUhes4fhHnsQfOVG4X4hpxTbWOcYvHY"
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})




