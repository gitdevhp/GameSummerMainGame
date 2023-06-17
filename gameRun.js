//import data from './enemy.json' assert {type: 'json'};
//console.log(data);



async function main() {
    const response = await fetch("enemy.json");
    const currEnem = await response.json();
    console.log(currEnem);

    var curLvl = 0;
    

    function setLvlEnem() {
        var solCount = currEnem[curLvl].SoldierNum;
        var hosCount = currEnem[curLvl].HostageNum;
        for (let i = 0; i < solCount; i++) {
            spawnGuy();     
        }
        for (let p = 0; p < hosCount; p++) {
            spawnHos();        
        }
    }

    function spawnGuy() {
        var position = Math.floor(Math.random()*3)+1;
        console.log(position);
        const newGuy = document.createElement('p');
        if(position==1) {
            newGuy.setAttribute("id", "guyLower");
        } else if (position==2) {
            newGuy.setAttribute("id", "guyMiddle");
        } else {
            newGuy.setAttribute("id", "guyTop");
        }
        newGuy.setAttribute('style',"display: none;")
        newGuy.innerHTML='enemGuy';
        document.getElementById("enemHold").appendChild(newGuy);
        console.log("created Guy");
    }

    function spawnHos(){
        //const existGuy = document.get
    }
}

  main();


