const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    // make a passenger object
    //add it to the bus
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    };

    if (seat === 'back') {
        struggleBus.push(passenger);
    } else if (seat === 'front') {
        struggleBus.unshift(passenger);
    } else if (seat === 'middle') {
        struggleBus.splice(2, 0, passenger);
    }
};

const unloadPassenger = (bus, seat) => {
    // remove a passener from the bus
    //return the passenger object
    if (seat === 'front') {
        return bus.shift(); //poor matt
    } else if (seat === 'back') {
        return bus.pop();
    };
};

const allAboard = (bus) => {
    //loop over the passengers
    //bus costs 5
    //if the passenger can afford it, charge them
    //if not KICK them off!
    const busFare = 5;
    const validPassengers = [];

    bus.forEach((passenger) => {
        if (passenger.wallet >= busFare) {
            passenger.wallet -= busFare;
            validPassengers.push(passenger)
        };
    });
    return validPassengers;
};


const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
        domString += `<div class = 'bust-seat'>`;
        domString += `<h4>${bus[i].name}</h4>`;
        domString += `<p>${bus[i].wallet}</p>`;
        domString += `<p>${bus[i].isStruggling}</p>`;
        domString += `</div>`;
    };
    printToDom('the-bus', domString);
};



const init = () => {
 addPassenger('Micheal', 3, true, 'front');
 addPassenger('Zoe', 20, false, 'back');
 addPassenger('Greg', 4, false, 'back');
 addPassenger('Saul', 12, true, 'front');
 addPassenger('Mark', 789, true, 'front');
 addPassenger('Mary', 15, false, 'middle');
 addPassenger('PopBoy', 13, true, 'front');
 
 const firstPassenger = unloadPassenger(struggleBus, 'front');
console.log(firstPassenger);

const busPeople = allAboard(struggleBus);
 busBuilder(busPeople);   
 console.log(struggleBus);
};

init();