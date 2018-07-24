import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return <Main />
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <section id="home">
          <div className="row">
            <div>
              <img src="https://res.cloudinary.com/dev01d/q_auto,f_auto/full/main.png" />
            </div>
          </div>
        </section>
        <ul className="social-icon">
          <li>
            <a
              href="https://github.com/dev01d"
              className="fab fa-github"
              alt="github"
            />
          </li>
          <li>
            <a
              href="mailto:contact@jasonbehnke.net?subject=Inquiry"
              className="far fa-envelope"
              alt="email"
            />
          </li>
          <li>
            <a
              href="https://instagram.com/jason.behnke"
              className="fab fa-instagram"
              alt="link to instagram"
            />
          </li>
          <li>
            <a
              href="https://500px.com/jasonbehnke"
              className="fab fa-500px"
              alt="500px"
            />
          </li>
          <li>
            <a
              href="https://vimeo.com/jasonbehnke"
              className="fab fa-vimeo-v"
              alt="vimeo"
            />
          </li>
        </ul>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Hi I'm Jason</h2>
        <p>PlaceHolderText</p>
      </div>
    )
  }
}

console.log('App')

ReactDOM.render(<App />, document.getElementById('app'))
