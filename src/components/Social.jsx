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
          />
        </li>
        <li>
          <a
            href="https://500px.com/jasonbehnke"
            className="fab fa-500px"
            alt="link to 500px"
          />
        </li>
      </ul>
    </div>
  )
}

export default Social
