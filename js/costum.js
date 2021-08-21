

let x = 0;
let y;

let quote = document.getElementById("quote");
let authorName = document.getElementById("name");
let authorImg = document.getElementById("person-img");


let quoteArr = [
    {fullName:"Mahatma Gandhi", img:"1", quote:"Live as if you were to die tomorrow. Learn as if you were to live forever"},
    {fullName:" Friedrich Nietzsche", img:"2", quote:"That which does not kill us makes us stronger."},
    {fullName:"Albert Einstein",img:"3", quote:"Strive not to be a success, but rather to be of value."},
    {fullName:"Virginia Satir",img:"4", quote:"We must not allow other people’s limited perceptions to define us."},
];


addQuote();

function generateQuote() {

            y = x;
            
            // random number between 0 to Array Lenght
            x = Math.floor(Math.random() * quoteArr.length)
            console.log(`x = ${x}`);
            

            // dont repeat same quote
            if (x === y && x < (quoteArr.length - 1)) {
                x++;
                addQuote();
            }else if ( x === y && x === (quoteArr.length - 1)) {
                x--;
                addQuote();
            }else {
                addQuote();
            }
            
            
    }



    function addQuote(){
        quote.innerHTML = quoteArr[x].quote;
        authorName.innerHTML = quoteArr[x].fullName;
        authorImg.style.background = `url(./images/${quoteArr[x].img}.jpg) no-repeat center`;
        authorImg.style.backgroundSize = "cover";
    }
    
