import styles from '../styles/modules/Social.module.css'

const Social = () => {
  return (
    <div className={styles.socialIcon}>
      <ul>
        <li>
          <a
            href="https://github.com/dev01d"
            className="fab fa-github"
            alt="link to github.com"
            target="_blank"
          />
        </li>
        <li>
          <a
            href="mailt&#111;&#58;&#99;o&#110;tact&#64;jaso&#110;behnk&#101;&#46;io"
            className="far fa-envelope"
            alt="send me an email"
          />
        </li>
        <li>
          <a
            href="https://instagram.com/jason.behnke"
            className="fab fa-instagram"
            alt="link to instagram"
            target="_blank"
          />
        </li>
        <li>
          <a
            href="https://dev.to/dev01d"
            className="fab fa-dev"
            alt="link to Dev.to"
            target="_blank"
          />
        </li>
      </ul>
    </div>
  )
}

export default Social
