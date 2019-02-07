import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: {
        currentQuote:'',
        currentAuthor:''
      },
      quotes: [
        {
          quote: 'Guess what, I have flaws. What are they? Oh I dont know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I will hit somebody with my car. So sue me.',
          name: 'Michael Scott'
        },
        {
          quote: 'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but its not like this compulsive need to be liked, like my need to be praised.',
          name: 'Michael Scott'
        },
        {
          quote: 'Who says exactly what they’re thinking? What kind of a game is that?',
          name: 'Kelly Kapoor'
        },
        {
          quote: 'Its better to be hurt by someone you know accidentally, than by a stranger on purpose.',
          name: 'Dwight Schrute '
        },
        {
          quote: 'Tough day. Yes. But I feel good. I put the office in their place, took a bunch of painkillers, drank a bottle of wine, took my pants off. I just feel good.',
          name: 'Andy Bernard'
        },
        {
          quote: 'Theres a lot of beauty in ordinary things. Isnt that kind of the point?',
          name: 'Pam Halpert'
        },
        {
          quote: 'My perfect Valentines day? Im at home, three cell phones in front of me, fielding desperate calls from people who want to buy one of the fifty restaurant reservations I made over six months ago.',
          name: 'Dwight Schrute'
        },
        {
          quote: 'Sometimes I feel like everyone I work with is an idiot. And by sometimes I mean all times. All the times. Every of the times!',
          name: 'Kevin Malone'
        },
        {
          quote: 'We are all homos. Homo... Sapiens.',
          name: 'Michael Scott'
        },
        {
          quote: 'There are two things I am passionate about: recycling and revenge.',
          name: 'Andy Bernard'
        },
        {
          quote: 'I think sometimes people are really mean to the hot, popular girl.',
          name: 'Kelly Kapoor'
        },
        {
          quote: 'I am running away from my responsibilities. And it feels good.',
          name: 'Michael Scott'
        }
      ]
    }
      this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
   const quoteArr = this.state.quotes
    //gets random object in 'quotes'
   let randomIndex = quoteArr[Math.floor(Math.random() * quoteArr.length)]

   //splits object's properties
   let randomQuote = randomIndex.quote
   let randomAuthor = randomIndex.name

   this.setState({ currentQuote: this.state.current.currentQuote.concat([randomQuote]) })
   this.setState({ currentAuthor: this.state.current.currentAuthor.concat([randomAuthor]) })
  }

  render(){
    return(
      <div>
        <div id="quote-box">
          <h3>Random Quote Generator!</h3>
          <div id="text">{this.state.currentQuote}</div>
          <div id="author">{this.state.currentAuthor}</div>
          <button id="new-quote" onClick={this.newQuote}>New Quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <img src="http://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png" id="twitter-icon" alt="twitter logo"/>
          </a>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
