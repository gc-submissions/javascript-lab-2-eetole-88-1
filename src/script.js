"use strict";

// TODO - write your code here.

// TODO - write your code here.

const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Scott", "Emilie", 100, 100);

//Extended Challenges

//printSquare
function printSquare(width, length, char) {
  for (let width = 0; width < 3; width++) {
    let line = "";
    for (let length = 0; length < 3; length++) {
      line += "#";
    }
    console.log(line);
  }
}
printSquare(10, 5, "#");

//printTriangle
function printTriangle(width) {
  let line = "";
  for (let i = 1; i <= width; i++) {
    line += "#".repeat(i) + "\n";
  }
  return line;
}
console.log(printTriangle(4));

//getGrade
function getGrade(number) {
  if (number >= 90) {
    return "A";
  } else if (number < 90 && number >= 80) {
    return "B";
  } else if (number < 80 && number >= 70) {
    return "C";
  } else if (number < 70 && number >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(83));
console.log(getGrade(72));
console.log(getGrade(50));
console.log(getGrade(100));

//prioritize

const prioritize = (urgent, important) => {
  //loop
  if (urgent && important) {
    console.log(1);
  } else if (important) {
    console.log(2);
  } else if (urgent) {
    console.log(3);
  } else {
    console.log(4);
  }
};
