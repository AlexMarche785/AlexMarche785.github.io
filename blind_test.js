<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Blind Test - Copyright Free Edition</title>

    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        #game-container {
            background-color: #fff;
            padding: 25px 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 550px; /* Limit width */
            width: 90%; /* Responsive width */
        }

        h1 {
            color: #2c3e50;
            margin-bottom: 20px;
        }

        #scoreDisplay {
            font-size: 1.2em;
            font-weight: bold;
            color: #3498db;
            margin-bottom: 20px;
        }

        #controls {
            margin: 20px 0;
            display: flex; /* Arrange controls in a row */
            flex-wrap: wrap; /* Allow wrapping on smaller screens */
            justify-content: center; /* Center items */
            gap: 10px; /* Space between controls */
        }

        #controls button,
        #controls input[type="text"] {
            padding: 10px 15px;
            font-size: 1em;
            border-radius: 5px;
            border: 1px solid #ccc;
            cursor: pointer;
        }

        #controls input[type="text"] {
             flex-grow: 1; /* Allow input to take available space */
             min-width: 150px; /* Ensure input doesn't get too small */
        }


        #controls button {
            background-color: #3498db;
            color: white;
            border: none;
            transition: background-color 0.2s ease;
        }

        #controls button:hover:not(:disabled) {
            background-color: #2980b9;
        }

        #controls button:disabled {
            background-color: #bdc3c7;
            cursor: not-allowed;
        }

        #feedback {
            margin-top: 15px;
            font-weight: bold;
            min-height: 1.2em; /* Prevent layout shifts */
            color: #e74c3c; /* Default to error color, JS will change */
        }

        #songInfo {
            margin-top: 10px;
            color: #7f8c8d;
            font-style: italic;
            min-height: 1.2em; /* Prevent layout shifts */
        }

        /* Visually hide the audio player, but keep it accessible */
        #audioPlayer {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    </style>
</head>
<body>

    <div id="game-container">
        <h1>Music Blind Test</h1>
        <p>Listen to a snippet and guess the song!</p>

        <div id="scoreDisplay">Score: 0</div>

        <audio id="audioPlayer" preload="metadata"></audio>

        <div id="controls">
            <button id="playButton" title="Play a short audio clip">Play Snippet</button>

            <input type="text" id="guessInput" placeholder="Enter your guess here" aria-label="Your Guess">

            <button id="submitGuess" title="Submit your answer">Submit Guess</button>

            <button id="nextButton" style="display: none;" title="Load the next song">Next Song</button>
        </div>

        <div id="feedback">Loading game... Please wait.</div>

        <div id="songInfo"></div>

    </div> <script src="blind_test.js"></script>

</body>
</html>
