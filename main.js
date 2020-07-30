/* 
listen for messages in channel
app starts listening when a specific word is called, using !start-count for this demo

*/


const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ['spacekook123']
});

client.connect();
let count = 0;


client.on('message', (channel, tags, message, self) => {
    if (self) return true;    

    if (message === "!start-count") {

    } else {

    }

    console.log(`${tags['display-name']}: ${message}`);
});