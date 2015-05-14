Az-Tac-Toe

My Tic Tac Toe game is inspired by aztec symbolism. Below is a description of how to play the game and the steps i took to create the site.

Playing the game:
 First player selects a square, then a second player selects another square. Aim of the game is to get a horizontal, vertical or diagnol line of the same symbol. First to get this wins. If the board fills up and no one has won, then the game ends in a tie.


Creating the game:
First step i took was to build the logic in Javascript. I based the logic on an array where the main game function would return true if a player got three symbols in a line.

After this, i built the html and css structure of the game and used jQuery to listen for a click on any given square. For each click, a new picture would be appended to that square until someone won or the board filled up.

Lastly i created all the artwork from scratch. The background, title and square pieces were done using ill illustrator and Photoshop. Once i was happy i updated the images in the code and pushed up to github.