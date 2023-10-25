# Twitch ChatCounter Bot

Twitch ChatCounter Bot is a simple bot that listens to a Twitch chat and counts the number of times a specific word is mentioned. This bot can be used in a Twitch channel to keep track of user interactions and provide a real-time count of occurrences.

## Features

- Listens for messages in a specific Twitch channel.
- Starts listening when a specific command is entered (`!start-count`).
- Increments the count each time a user types the number '1'.
- Stops listening when a specific command is entered (`!end-count`).
- Resets the count when a specific command is entered (`!clear-count`).
- Displays the current count on the webpage.
- Keeps track of users who contribute to the count.

## Usage

1. Configure the bot by setting the Twitch channel in the URL query parameter.
2. Start the bot by entering `!start-count` in the Twitch chat.
3. Users can increase the count by typing '1' in the chat.
4. Stop the count by entering `!end-count`.
5. Reset the count by entering `!clear-count`.

## Dependencies

This bot uses the following dependencies:

- [tmi.js](https://github.com/tmijs/tmi.js) for Twitch chat interaction.

## Marquee Functionality

The bot also includes marquee functionality for scrolling text.

## Installation

To run the bot locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Configure the Twitch channel by setting the channel name in the URL query parameter.
4. Run the bot using `node bot.js`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This bot was created for educational purposes and inspired by the Twitch community.