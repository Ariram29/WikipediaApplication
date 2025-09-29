let searchEl=document.getElementById('search');
let result_conEl=document.getElementById('result_con');
let spinnerEl=document.getElementById('spinner');

function createAndAppendSearchResult(result) {
    //createTitleEl
    let {
        link,
        title,
        description
    } = result;

    let resultEl = document.createElement('div');
    resultEl.classList.add('result-item');
    result_conEl.appendChild(resultEl)

    let titleEl = document.createElement('a');
    titleEl.href = link;
    titleEl.target = '_blank';
    titleEl.classList.add("result-title");
    titleEl.textContent = title;
    resultEl.appendChild(titleEl);

    // create break 
    let titleBrEl = document.createElement('br');
    resultEl.appendChild(titleBrEl);

    //create url Element 
    let urlEl = document.createElement('a');
    urlEl.classList.add('result-url');
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultEl.appendChild(urlEl);

    // create break 
    let linkBrEl = document.createElement('br');
    resultEl.appendChild(linkBrEl);

    // create description

    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultEl.appendChild(descriptionEl);
    result_conEl.appendChild(resultEl);
}



function displayRes(searchResults) {
    spinnerEl.classList.add('d-none');

    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function displaywiki(event){
    if(event.key==='Enter'){
        result_conEl.textContent=""
        spinnerEl.classList.remove('d-none');
        let userval=searchEl.value;
        let url="https://apis.ccbp.in/wiki-search?search="+userval;

        let option = {
            method: 'GET'
        };

        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayRes(search_results);
            });
        }
}

searchEl.addEventListener('keydown',displaywiki);

