const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/mels.jpg" alt="front of a diner" />
              </div>
                <div>
                  Photo by <a href="https://unsplash.com/photos/k5sV7-drOr8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Kevin Sarduy</a> on 
                  <a href="https://unsplash.com/photos/k5sV7-drOr8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Uplash</a>
                </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
