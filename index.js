AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let realData = "";
let quotesData = "";

const tweetNow = () => {
    let tweetPost =`https://twitter.com/intent/tweet?text=${quotesData.text} By -  ${quotesData.author} `;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let randNum = Math.floor(Math.random() * 1000);
    // console.log(realData[randNum].text);
    // console.log(realData[randNum].author);
    quotesData = realData[randNum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author ==null ?
    author.innerText ="Unknown Author" :
    author.innerText = `${quotesData.author}`;
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        
        
    } catch (error) {
        console.log(error);
    }
};
tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();