function findProductLinksInPage () {
    const articleElement = document.querySelector("article")
    const divElements = articleElement ? articleElement.querySelectorAll("div") : []
    
    const links = []

    divElements.forEach((divElement)=>{
        const anchorElements = divElement.querySelectorAll("a")
        for (let i=0; i<anchorElements.length; i++) {
            const link = anchorElements[i].href
            links.push(link)
        }
        browser.runtime.sendMessage({links}) 
    })
}

function listenForClicks () {
    const yesButton = document.getElementById("yes_button")
    yesButton.addEventListener("click", findProductLinksInPage)

    var noButton = document.querySelector("#no_button")
    noButton.classList.remove("hidden")
}

listenForClicks()

function reportScriptError (error) {
    document.querySelector("#yes_button").classList.add("hidden")
    document.querySelector("#no_button").classList.remove("hidden")
    console.log(`Failed to execute the content script: ${error}`)
}

browser.tabs
    .executeScript({file: "content_script/contentScript.js"})
    .catch(reportScriptError)
