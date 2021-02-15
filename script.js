//import jsdom from "jsdom";
import fetch from 'node-fetch';

// Type.fit API info
const url = 'https://type.fit/api/quotes';

// Page elements
//const label = jsdom.window.document.querySelector('#label');
//const submit = jsdom.window.document.querySelector('#button');


// Add AJAX function here:
const getQuotes = async() => {
    try {
        const response = await fetch(url, {cache: 'no-cache'});
        if (response.ok) {
            console.log('Response from API: ', response);
            const jsonResponse = await response.json();
            console.log('JsonResponse: ', jsonResponse);
            return jsonResponse;
        }
        throw new Error("Request to 'https://type.fit/api/quotes' has failed!");
    } catch(error) {
        console.log('Error: ', error);
    }
}

const chooseRandomQuote = (jsonResponse) => {
    const randomIndex = Math.floor(Math.random() * jsonResponse.length);
    return [jsonResponse[randomIndex].text, jsonResponse[randomIndex].author];
}

const renderQuote = (randomQuote) => {
    console.log(`"${randomQuote[0]}"`);
    console.log(`by ${randomQuote[1]}`);
    //const labelContent = `<h4> ${randomQuote[0]} </h4>
    //                      <label> <strong> ${randomQuote[1]}  </strong> </label>`
    //label.append(labelContent);
}

getQuotes()
    .then(chooseRandomQuote)
    .then(renderQuote);

//console.log('hello');
//getQuotes();
