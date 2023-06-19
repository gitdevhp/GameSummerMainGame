//import data from './enemy.json' assert {type: 'json'};
//console.log(data);



async function setLvlEnem() {
    const response = await fetch("enemy.json");
    const currEnem = await response.json();
    console.log(currEnem);
  
    var curLvl = 0;
  
    var solCount = currEnem.Levels[curLvl].SoldierNum;
    var hosCount = currEnem.Levels[curLvl].HostageNum;
    for (let i = 0; i < solCount; i++) {
      spawnGuy();
    }
    for (let p = 0; p < hosCount; p++) {
      spawnHos();
    }
    document.getElementById("enemCount").innerHTML("enemies: "+solCount);
  }
  
  function spawnGuy() {
    var position = Math.floor(Math.random() * 3) + 1;
    console.log(position);
    const newGuy = document.createElement('p');
    if (position == 1) {
      newGuy.setAttribute("id", "guyLower");
    } else if (position == 2) {
      newGuy.setAttribute("id", "guyMiddle");
    } else {
      newGuy.setAttribute("id", "guyTop");
    }
    newGuy.setAttribute('style', "display: none;");
    newGuy.innerHTML = 'enemGuy';
    document.getElementById("enemHold").appendChild(newGuy);
    console.log("created Guy");
  }
  
  function spawnHos() {
    const botEnemCount = document.querySelectorAll('[id$="guyLower"]');
    var botPoss;
    if(botEnemCount!=null) {
      botPoss = 1;
    }
  }
  