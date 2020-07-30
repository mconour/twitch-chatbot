/* 
listen for messages in channel
app starts listening when a specific word is called (!start-count)
then when a users types in the chat the number '1', it increments by 1 each time 
app stops listening when a specific word is called (!end-count)

app resets when a specific word is called (!reset-count)
*/


const countElement = document.querySelector('#count');
const usersElement = document.querySelector('#users');


const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ['spacekook123']
});

client.connect();


let listeningForCount = false;

// keeping track of users
const users = {};


client.on('message', (channel, tags, message, self) => {
    if (self) return;

    //extracting out specific user
    const {
        username
    } = tags;

    if (username === 'spacekook123') {
        if (message === "!start-count") {
            listeningForCount = true;            
        } else if (message === '!end-count') {
            listeningForCount = false;

            // say count out loud
        } else if (message === '!clear-count') {
            countElement.textContent = 'waiting for count...';
           usersElement.textContent = '';          
        }
    } else if (listeningForCount && message === "1") {
        users[tags.username] = true;

        // display current count on page
        countElement.textContent = Object.keys(users).length;
        usersElement.textContent = Object.keys(users).join(', ');
    }

    console.log(`${tags['display-name']}: ${message}`);
});