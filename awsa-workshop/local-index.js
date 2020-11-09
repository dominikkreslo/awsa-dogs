const dogs = [
    { name: 'Cody'},
    { name: 'Molly'},
    { name: 'Luna'},
    { name: 'Zora'},
]

function displayDogs() {
    for (let dog of dogs) {
        const dogUI = document.createElement('li');
        dogUI.className = 'list-group-item';
        dogUI.innerText = dog.name;

        document.getElementById('dogs-list').appendChild(dogUI);
    }
}

async function main() {
    displayDogs();
}

main();