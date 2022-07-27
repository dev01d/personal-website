import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import monokaiSublime from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime'
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json'

SyntaxHighlighter.registerLanguage('json', json)

const About = () => {
  const codeString = `
    {
      "Name": "Jason Behnke",
      "Hobbies": [
        "Bouldering",
        "Photography"
      ],
      "Titles": [
        "SRE",
        "SysAdmin",
        "Full Stack Developer"
      ],
      "Technology": [
        "Docker",
        "Ansible",
        "Terraform",
        "Kubernetes"
      ],
      "Languages": [
        "Go",
        "Swift",
        "Python",
        "JavaScript"
      ]
    }
    `
  return (
    <SyntaxHighlighter
      language={json}
      style={monokaiSublime}
      customStyle={{
        margin: '2rem 1rem',
        padding: '1rem',
        fontSize: '16px',
        borderRadius: '10px',
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.4)',
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
export default About
