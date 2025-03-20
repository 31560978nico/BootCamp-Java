const array = ["🏠", "🚕", "🏍️"];
const icons = ["🤠", "👽", "💃", "🧛‍♂️", "🧙‍♂️", "🏊"];

const randomIcon = () => icons[Math.floor(Math.random() * icons.length)];

function outputArray() {
    console.log(array);
}

const pushIcon = () => {
    array.push(randomIcon());
    outputArray();
}

function unshiftIcon() {
    array.unshift(randomIcon());
    outputArray();
}

function insertAtIcon(position) {
    array.splice(position, 0, randomIcon());
    outputArray();
}

function popIcon() {
    array.pop();
    outputArray();
}

function shiftIcon() {
    array.shift();
    outputArray();
}

function removeIcon(position) {
    array.splice(position, 1);
    outputArray();
}

// pushIcon(); //✅
// unshiftIcon(); //✅
// insertAtIcon(1); //✅
// popIcon(); //✅
//shiftIcon();//✅
//removeIcon(1);//✅





