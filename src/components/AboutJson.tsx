import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
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
      language="json"
      style={theme}
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
