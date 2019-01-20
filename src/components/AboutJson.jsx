import React from 'react'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/monokai-sublime.css'

export default () => (
  <div>
    <Highlight className="json">
      {`
    {
      "Name": "Jason Behnke",
      "Priorities" : [
        "Code", "Climbing", "Photography"
      ],
      "Languages" : [
        "HTML", "CSS", "JavaScript",
        "Swift", "Python"
      ],
      "Frameworks" : [
        "React", "NextJS", "Django"
      ],
      "Technology" : [
        "Ansible", "Docker",
        "Dokku", "Sentry"
      ],
      "Titles" : [
        "SysAdmin",
        "Full Stack Developer"
      ]
    }
    `}
    </Highlight>
  </div>
)
