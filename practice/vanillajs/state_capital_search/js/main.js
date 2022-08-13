const search = document.getElementById('search');
const matchList = document.getElementById('matchList');

//search the states.json and filter

const searchStates = async searchText => {
    const res1 = await fetch('./data/states.json');
    const res = await fetch('https://nigerian-states-info.herokuapp.com/api/v1/states');
    const states = await res.json();
    const states1 = await res1.json();

    //console.log(states.data[0].info);
    //console.log(states1[0]);

    const ngstates = states.data.map(state => state.info);
    //console.log(ngstates[0]);
    //get matches to current text input
    let matches = ngstates.filter((state) => {
        const regex = new RegExp(`^${searchText}`, 'gi'); //gi matches global and case insensitive
        return state.officialName.match(regex);
    });

    console.log(matches);

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
                <h2>${match.officialName}</h2>
                <h3 style="color: #186303;">Capital: ${match.Capital}</h3>
                <p>Slogan: ${match.Slogan}</p>
                <p>Website: <a href="https://${match.Website}" target="_blank">${match.Website}</a><p>
                <small>Lat: ${match.Latitude} / Long: ${match.Longitude}</small>
            </div>
        `).join('');
        
        matchList.innerHTML = html;
        //console.log(html);
    }
}

search.addEventListener('input', () => searchStates(search.value));
