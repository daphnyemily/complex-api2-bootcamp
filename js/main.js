//Use data returned from one api to make a request to another api and display the data returned

document.querySelector('button').addEventListener('click', searchButton)

// let animeSearch = document.querySelector('input').value

function searchButton(){ 

    let animeSearch = document.querySelector('button').value

    fetch(`https://animechan.vercel.app/api/random`)
        .then(res => res.json())
        .then(data => {
            animeSearch = data.anime
            console.log(data.anime)
            document.querySelector('h2').innerText = animeSearch

            fetch(`https://api.giphy.com/v1/gifs/search?api_key=1970StKZ0uxOaYPrqpKOWBss81PcWoj6&q=${animeSearch}`)
            .then(res => res.json())
            .then(gifData => {
                console.log(gifData)
                document.querySelector('iframe').src = gifData.data[0].embed_url
            })
            .catch(err => {
                console.log(`error${err}`)
            });
        })
        .catch(err => {
            console.log(`err ${err}`)
        })
}