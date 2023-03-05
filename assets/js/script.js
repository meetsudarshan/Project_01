// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputValue')
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var latestNews = document.getElementById("latestNews")
var displayNews = document.getElementById('.displayNews')
var article = document.getElementById('.article')

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 
//     // if(response.status >=200 && response.status <300) {
//     //     const myJson = response.json();
//     //    } else {
//     //     console.log(response.status, response.statusText);
//     // }
    
//     // displayData(myJson);
})

const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].main}`
  }

//   latestNews.addEventListener('click', function(){
//     fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=910b36c0884748b5b2150915ac110d51`)
//     .then(response => response.json())
//     .then(
//         displayNews)
//     .catch(err => alert('invalid response'))
// });

// const displayNews=(news)=>{
//     article.innerHTML=`${news.articles.title}`

// }

//   const fetchTopHeadlines = async () => {
// const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=910b36c0884748b5b2150915ac110d51`)
// newsDataArr = [];
//     if(response.status >=200 && response.status <300) {
//         const myJson = await response.json();
//         newsDataArr =myJson.articles;
//     } else {
//         console.log(response.status, response.statusText);
//     }
    
//     displayNews(newsDataArr);
// }

