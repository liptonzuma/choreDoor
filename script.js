var doorImage1 = document.getElementById('door1');

var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

var doorImage2 = document.getElementById('door2');

var doorImage3 = document.getElementById('door3');

var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    if (isClicked(doorImage1)) {

    }
};

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
    if (isClicked(doorImage2)) {

    }
};

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
    if (isClicked(doorImage3)) {

    }
};
const gameOver = status => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again';
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
};

var startButton = document.getElementById('start');
var numClosedDoors = 3;

var openDoor1;
var openDoor2;
var openDoor3;

var randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * 3);
    if (choreDoor == 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor == 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
};
randomChoreDoorGenerator();

const isBot = (door) => {
    if (door.src == botDoorPath) {
        return true;
    } else {
        return true;
    }
}

const isClicked = door => {
    if (door.src == closedDoorPath) {
        return false;
    } else {
        return true;
    }
}
closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';


const playDoor = () => {
    for (let i = numClosedDoors; i <= numClosedDoors; numClosedDoors--) {
        if (numClosedDoors === 1) {
            gameOver('win');
        } else if (isBot(door) == true) {
            gameOver();
        }
    }
};