import React, { Component } from 'react'

export default class Social extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date().getFullYear() }
  }
  render() {
    return (
      <div className="social-icon">
        <ul>
          <li>
            <a
              href="https://github.com/dev01d"
              className="fab fa-github"
              alt="github"
            />
          </li>
          <li>
            <a
              href="mailto:contact@jasonbehnke.io?subject=Inquiry"
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
          {/*
          <li>
            <a
              href="https://vimeo.com/jasonbehnke"
              className="fab fa-vimeo-v"
              alt="vimeo"
            />
          </li>
         */}
        </ul>
      </div>
    )
  }
}
