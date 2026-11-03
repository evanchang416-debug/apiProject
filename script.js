const apikey = "eatYn4CAwOquiOqfDepS9";

async function getVerses() {
    try {
        const searchTerm = document.getElementById("search").value
        console.log(searchTerm)
        const url = "https://rest.api.bible/v1/bibles/65eec8e0b60e656b-01/search?query=" + searchTerm;

        const response = await fetch(url, {
        headers: { "api-key": apikey },
        });

        const json = await response.json();

        console.log(JSON.stringify(json));

        const verseHolder = document.getElementById("verseHolder");

        verseHolder.innerHTML = "";

        for (verse of json.data.verses) {
            let divContainer = document.createElement('div');
            divContainer.classList.add("card")
        
            
            let card = document.createElement('div')
            card.classList.add('container')
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = verse.reference;

            let verseText = document.createElement("p");
            verseText.textContent = verse.text;     

            card.appendChild(titleHeader)
            card.appendChild(verseText)

            divContainer.appendChild(card)

            verseHolder.appendChild(divContainer)
        }


    }
    catch (error) {
        console.log(error)
    }
}