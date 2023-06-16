import data from './enemy.json' assert {type: 'json'};
console.log(data);

var curLvl = document.getElementById('lvl').innerHTML;
let currEnem = JSON.parse(data);