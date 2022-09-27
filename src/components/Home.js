import React from "react";

function Home() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'sportsbook555.p.rapidapi.com'
        }
    };
    
    fetch('https://sportsbook555.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return(
        <div>Hello</div>
    )
}

export default Home