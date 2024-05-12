import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faGithub,
  faInstagram,
  faDev,
} from '@fortawesome/free-brands-svg-icons'
import styles from '@/styles/modules/Social.module.css'

const Social = () => {
  return (
    <div className={styles.socialIcon}>
      <base target="_blank" />
      <ul>
        <li>
          <a href="https://github.com/dev01d" aria-label="link to github.com">
            <FontAwesomeIcon icon={faGithub} inverse fixedWidth />
          </a>
        </li>
        <li>
          <a
            href="mailt&#111;&#58;&#99;o&#110;tact&#64;jaso&#110;behnk&#101;&#46;io"
            aria-label="send me an email"
          >
            <FontAwesomeIcon icon={faEnvelope} inverse fixedWidth />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/jason.behnke"
            aria-label="link to instagram"
          >
            <FontAwesomeIcon icon={faInstagram} inverse fixedWidth />
          </a>
        </li>
        <li>
          <a href="https://dev.to/dev01d" aria-label="link to Dev.t">
            <FontAwesomeIcon icon={faDev} inverse fixedWidth />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
