const search = document.getElementById('search');
const matchList = document.getElementById('matchList');

//search the states.json and filter

const searchStates = async searchText => {
    const res = await fetch('./data/states.json');
    const states = await res.json();

    //console.log(states);
    //get matches to current text input
    let matches = states.filter((state) => {
        const regex = new RegExp(`^${searchText}`, 'gi'); //gi matches global and case insensitive
        return state.name.match(regex) || state.abbr.match(regex);
    });

    //console.log(matches);

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }

    outputHTML(matches);
}

//show results in html 
const outputHTML = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
            <div class="card card-body mb-4">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
                <small>lat: ${match.lat} / long: ${match.long}</small>
            </div>
        `).join('');
        
        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));
