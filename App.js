import './App.css';
import { useState } from 'react';
import Naving from './Naving';
import Nave from './Nave';



const list=[["It is never too late to be what you might have been.", "– George Eliot"],
["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","– Ralph Waldo Emerson"],
["To live is the rarest thing in the world. Most people exist, that is all.","– Oscar Wilde"],
["That it will never come again is what makes life so sweet.","– Emily Dickinson"],
["Pain is inevitable. Suffering is optional.","– Haruki Murakami"],
["All the world's a stage, and all the men and women merely players.","– William Shakespeare"],
["Be kind, for everyone you meet is fighting a hard battle.","– Plato"],
["Unable are the loved to die for love is immortality.","– Emily Dickinson"],
["Let me live, love, and say it well in good sentences.","– Sylvia Plath"],
["We are all broken, that's how the light gets in.","– Ernest Hemingway"],
["One day I will find the right words, and they will be simple.","– Jack Kerouac"],
["You cannot find peace by avoiding life.","– Virginia Woolf"],
["Tears are words that need to be written.","– Paulo Coelho"],
["Self-awareness and self-love matter. Who we are is how we lead.","– Brene Brown"],
["Life is tough my darling, but so are you.","– Stephanie Bennett Henry"]];
function App() {
  const [q,setQ]=useState(list[0][0]);
  const [a,setA]=useState(list[0][1]);
  const generate=()=>{
    let x = Math.floor((Math.random() * 15));
    setQ(list[x][0]);
    setA(list[x][1]);
  }
  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=- }`;
    window.open(twitterUrl, "_blank");
  };

  
    return (
        <div>
          <Naving/>
          
          
          <center id="out">
        <div id="h"><u>RANDOM QUOTE GENERATOR</u></div>
      <div id="main">
      <div className="button-container">
          <button className="twitter-button" onClick={tweetQuote}>tweetQuote
            <i className="fab fa-twitter"></i>
          </button>
          </div>
        
        <div id="quote"><h1>{q}</h1></div>
        <div id="author"><h2>{a}</h2></div>
      </div>
      <div id="b">
        <button onClick={generate}>NEXT QUOTE</button><br></br>
        
        </div>
    </center>
    <Nave/>
    
    </div>
  );
}

export default App;