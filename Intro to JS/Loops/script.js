let i = 0;

function sendSignal() {
    console.log("HELP ! ");

}

while(i < 1000) {
    sendSignal();
    i++;

}

for(i = 0; i < 1000; i++) {
    sendSignal();
}



let fuel = 1000;
let distance = 0;

while(fuel > 0) {
    distance++;

    if(distance >= 100 && distance <= 200) {
        continue;
    }

    fuel--;

    if(distance == 500){
        break;
    }
}


let population = 100;

for(i = 0; i <= 10; i++) {
    population *= 1.05;
    
}