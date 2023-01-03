const main  = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const millionariesBtn = document.getElementById('show-millionaries')
const sortBtn = document.getElementById('sort')
const wealthBtn = document.getElementById('calculate-wealth')

let data= []

getRandomData();
getRandomData();
getRandomData();

async function getRandomData(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser);
}

function doubleMoney(){
    data = data.map(user => {
        return {...user, money: user.money * 2};
    });

    updateDOM();
}

function showMillionaries(){
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

function sortWealth() {
    data.sort((a, b) => b.money - a.money);
}

function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    const wealthE1 = document.createElement('div')
}