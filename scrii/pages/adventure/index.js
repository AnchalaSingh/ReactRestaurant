//Extract city from url

const currentUrl = window.location.href;

const url = new URL(currentUrl)

const query = new URLSearchParams(url.search)

const city = query.get("city")

// console.log(city)

//call API using city name

const apiEndPoint = `http://makemytrip-`
${}

fetch(apiEndpoint).then((response)=>response.json()).thenn((adventures)=>{
    console.log(adventures)
})

function createCard(data){
    const {id, name, costPerHead, currency, image, } = data;
    const card = document createElement 
}

function Card({url, text}){
    return (
        <div>
            <img src={} ></img>
        </div>
    )
}

function Card({url, text}){
    return (  
        <div>
             <img src={url}/>
             <p>{text}</p>
             <p>New Card</p>
        </div>
    )
 }