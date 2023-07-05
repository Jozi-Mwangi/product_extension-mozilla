browser.runtime.onMessage.addListener(message=>{
    const {links} = message
    links.forEach(link=>{
        browser.tabs.create({url : link})
    })
})


browser.runtime.onMessage.addListener((message)=>{
    // process the extracted data
    console.log("Extracted data: " , message);
})