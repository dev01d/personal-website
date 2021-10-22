import Highlight from 'react-highlight'
import styles from '../styles/modules/About.module.css'

const About = () => (
  <div className="mt-11">
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
  </div>
)

export default About
