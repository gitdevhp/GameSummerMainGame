import data from './enemy.json' assert {type: 'json'};
console.log(data);

var curLvl = 0;
let currEnem = JSON.parse(data);

function setLvlEnem() {
    var solCount = currEnem[curLvl].SoldierNum;
    var hostageCount = currEnem[curLvl].HostageNum;
    for (let i = 0; i < SoldierNum; i++) {
        spawnSoldier();     
    }
    for (let p = 0; p < array.length; p++) {
        spawnHostage();        
    }
}

function spawnSoldier(){
    
}

function spawnHostage(){

}