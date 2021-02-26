import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faLinkedin, faTwitter, faGithub, faGitlab)

export { FontAwesomeIcon }
