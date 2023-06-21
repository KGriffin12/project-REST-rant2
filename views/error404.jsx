const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/cat.jpg" alt="error" />
              </div>
                <div>
                  Photo by <a href="https://unsplash.com/photos/-Y-3eWVK2iY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Tai Bui</a> on 
                  <a href="https://unsplash.com/photos/-Y-3eWVK2iY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Uplash</a>
                </div>    
          </main>
      </Def>
    )
  }

  
  module.exports = error404