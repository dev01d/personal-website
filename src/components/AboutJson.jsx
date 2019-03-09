import React from 'react'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/monokai-sublime.css'

export default () => (
  <div>
    <Highlight className="json">
      {`
  {
    "Name": "Jason Behnke",
    "Priorities": [
      "Code",
      "Photography",
      "Climbing"
    ],
    "Languages": [
      "JavaScript",
      "Swift",
      "Python"
    ],
    "Frameworks": [
      "React",
      "NextJS",
    ],
    "Technology": [
      "Linux",
      "Ansible",
      "Docker"
    ],
    "Titles": [
      "Full Stack Developer",
      "SysAdmin"
    ]
  }
    `}
    </Highlight>
  </div>
)
