function findProductLinksInPage () {
    const articleElement = document.querySelector("article")
    const divElements = articleElement ? articleElement.querySelector("div") : []
    
    const links = []

    divElements.forEach((divElement)=>{
        const anchorElements = divElement.getElementsByName("a")
        for (let i=0; i<anchorElements.length; i++) {
            const link = anchorElements[i].href
            links.push(link)
        }
        browser.runtime.sendMessage({links}) 
    })
}

function listenForClicks () {
    document.addEventListener =()=> {
        var yesButton = document.getElementById("yes button")
        yesButton.addEventListener("click", findProductLinksInPage)

        var noButton = document.querySelector("#no_button")
        noButton.classList.remove("hidden")
    }
}

function reportScriptError (error) {
    document.querySelector("#yes_button").classList.add("hidden")
    document.querySelector("#no_button").classList.remove("hidden")
    console.log(`Failed to execute the content script: ${error}`)
}

browser.tabs
    .executeScript({file: "content_script/contentScript.js"})
    .then(listenForClicks)
    .catch(reportScriptError)
