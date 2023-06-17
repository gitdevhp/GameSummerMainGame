import data from './enemy.json' assert {type: 'json'};
console.log(data);

var curLvl = 0;
let currEnem = JSON.parse(data);

function setLvlEnem() {
    var solCount = currEnem[curLvl].SoldierNum;
    var hostageCount = currEnem[curLvl].HostageNum;
    for (let i = 0; i < SoldierNum; i++) {
        spawnGuy();     
    }
    for (let p = 0; p < array.length; p++) {
        spawnHos();        
    }
}

function spawnGuy(){
    var position = Math.floor(Math.random()*3)+1;
    console.log(position);
}

function spawnHos(){

}