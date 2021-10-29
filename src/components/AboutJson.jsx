import Highlight from 'react-highlight'
import styles from '../styles/modules/About.module.css'

const About = () => (
  <Highlight className={styles.json}>
    {`
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
  `}
  </Highlight>
)

export default About
