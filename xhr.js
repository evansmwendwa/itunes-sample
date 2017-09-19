let player = new AudioPlayer();

function renderItems(data) {

    data.forEach((item) => {
        if(item.trackName) {
            const li = document.createElement('li');
            li.textContent = item.trackName;

            li.onclick = (e) => {
                player.play(item);
            }

            const ul = document.querySelector('ul.playlist');
            ul.appendChild(li);
        }
    })
}

const searchForm = document.querySelector('form');

searchForm.onsubmit = (e) => {
    e.preventDefault();

    const container = document.querySelector('ul.playlist');
    container.innerHTML = '';
    container.textContent = 'Loading...';

    const searchInput = document.querySelector('.search-input');
    let term = searchInput.value;

    let endpoint = 'https://itunes.apple.com/search?term='+term;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', (e) => {
        container.innerHTML = '';
        let result = JSON.parse(xhr.responseText);
        console.log(result);
        renderItems(result.results);
    });

    xhr.addEventListener('error', () => {
        console.log('transfer failed');
    });

    xhr.open('GET', endpoint, true);

    xhr.send();

}
