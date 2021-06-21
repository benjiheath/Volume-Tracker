## Volume Tracker

This is a small project I've started to continue practicing React basics. Here I attempt to replicate a simple spreadsheet that I would use to track total volume (reps\*weight) for gym exercises, allowing me to monitor strength improvements.

In making this project I learned some valuable lessons the hard way - particularly the importance of planning, and the potential complexity of state management. In my first attempt, I soon realised I needed to consider much more carefully the data structuring of the main state and how I would update it. After starting again from scratch I made the state much more centralised and structured it to better suit interactions with the UI, which prevented the slew of problems I encountered the first time around, and made it much simpler to implement changes in the behaviour of the app.

[Demo here](https://goofy-shaw-3167b1.netlify.app/)

<h3>How to use:</h3>
Intended to be used like a pre-configured spreadsheet.

1. Name your exercise (e.g 'Squat', 'Bench press' etc)
2. Specify weight used for each workout/session
3. Specify reps completed for each set
4. Add sets & sessions to your exercise as required

Total volume comparisons (absolute and percentage) are made for all sessions after session 1

<br>

<h3>**todo**</h3>

- include simple instructions at top of page

- input annotation?

- Fix graph hover interactions

- Change bar chart to single line graph?

- Allow user to use different weights for each set

- implement search/select for exercise name input

- Improve layout when there are >2-3 exercises

- add grid adjustment for exercises with >5 sets

- add responsiveness

- focus weight input field when user adds new session

- Improve naming & refactor

- clean up stylesheet
