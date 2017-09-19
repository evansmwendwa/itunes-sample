let player = new AudioPlayer();

function renderItems(data) {
    // render items to the browser
}


const searchForm = document.querySelector('form');

searchForm.onsubmit = (e) => {

    // prevent normal form submission
    e.preventDefault();

    // fetch items here

    let endpoint = 'https://itunes.apple.com/search?term=bob+dylan';
}
