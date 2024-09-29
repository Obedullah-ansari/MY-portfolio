import gamelogo from "./assets/game-logo.png"
import logo from "./assets/logo.png"
import diary from "./assets/no-projects.png"
import tic from "./assets/tic-tac.mp4"
import timer from "./assets/timer.mp4"
import place from "./assets/place.mp4"
import recordiary from "./assets/recorddiary.mp4"
import logoplace from "./assets/logoplace.png"
export const projectdata =[
{   
    id: 111,
    vedio : tic,
    image : gamelogo,
    title : "Tic-tac-toe",
    text :" I crafted a responsive Tic-Tac-Toe game using React, integrating conditional CSS for dynamic styling. The state management and lifting state up techniques enhance interactivity, ensuring a seamless and enjoyable user experience across various devices ",
    visit : "https://obedullah-ansari.github.io/Tic-tac-toe-game/"
},
{   
    id: 112,
    vedio : timer,
    image : logo,
    title : "Timer challenge",
    text :" I crafted a challenging game in React with a timer feature. Players face the added challenge of completing tasks within a set time limit, employing useState and useRef for state management and timer control. This project serves as an engaging way to enhance React skills and tackle time-sensitive gameplay ",
    visit : "https://obedullah-ansari.github.io/Timer-challenge/",
},
{   
    id: 113,
    vedio : recordiary,
    image : diary,
    title : "To-Do app",
    text :" I developed a To-Do app in React, featuring task and project management. Utilizing useState, useRef, and useEffect for dynamic updates, the application offers an organized task bar. Tailwind CSS enhances the UI, providing a seamless and visually appealing experience for efficient project tracking. ",
    visit : "https://obedullah-ansari.github.io/record-diary/",
},
{   
    id: 114,
    vedio : place,
    image : logoplace,
    title : "place picker",
    text :"I created a simple Place Picker project in React, allowing users to add desired locations and discover nearby places. Implemented with useState, useEffect, useRef, dynamic CSS, and modals, the app provides an intuitive experience for planning and exploration. ",
    visit :"https://obedullah-ansari.github.io/Place-pickker/"
},
]