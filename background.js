let greetingsIndex = await (await fetch("https://raw.githubusercontent.com/FDHoho007/thunderbird-random-greeter/main/greetings/index.json")).json();
let greetings = [];
for(let greetingsUrl of greetingsIndex) {
    let newGreetings = await (await fetch(greetingsUrl)).json();
    greetings = greetings.concat(newGreetings);
}

async function updateTab(tabId) {
    let greeting = greetings[Math.floor(Math.random()*greetings.length)];
    let details = await messenger.compose.getComposeDetails(tabId);
    let overrideComposeDetails = details.plainTextBody.includes("%randomgreeting%") || details.body.includes("%randomgreeting%");
    if(details.plainTextBody.includes("%randomgreeting%"))
        details.plainTextBody = details.plainTextBody.replace("%randomgreeting%", greeting);
    if(details.body.includes("%randomgreeting%"))
        details.body = details.body.replace("%randomgreeting%", greeting);
    if(overrideComposeDetails)
        messenger.compose.setComposeDetails(tabId, details);
}

messenger.compose.onIdentityChanged.addListener(tab => {
    updateTab(tab.id);
});

messenger.tabs.onCreated.addListener(tab => {
    if(tab.type == "messageCompose")
        updateTab(tab.id);
});