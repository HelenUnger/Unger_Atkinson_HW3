# Unger_Atkinson_HW3

built with HTML5, CSS and JS.
contributors: Designer: Jacob Atkinson Developer: Helen Unger


Whack a Bug Game
game logic

on game load up
  score = 0
  timer = 10 seconds
  high score = 0

on game start/restart
  bugs pop up in random holes (6) with a random delay of how long they're up (200-2000)
  timer counts down

when a bug gets clicked
  score++
  make bug go down

when timer runs out
  try again overlay gets displayed
  high score = score (high score gets updated every game unless page is refreshed.)

if they click play again
  game restart
