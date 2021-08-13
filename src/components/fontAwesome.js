import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faPizzaSlice, faAlignLeft, faCheck, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faClock, faTrashAlt, faBookmark } from '@fortawesome/free-regular-svg-icons'

library.add(
  faPizzaSlice,
  faAlignLeft,
  faClock,
  faCheck,
  faTrashAlt,
  faArrowAltCircleLeft,
  faBookmark,
  faGithub,
  faLinkedin,
  faMediumM

)

export const pizza = icon({ prefix: 'fas', iconName: 'pizza-slice' }).html
export const level = icon({ prefix: 'fas', iconName: 'align-left' }).html
export const clock = icon({ prefix: 'far', iconName: 'clock' }).html
export const check = icon({ prefix: 'fas', iconName: 'check' }).html
export const trash = icon({ prefix: 'far', iconName: 'trash-alt' }).html
export const arow = icon({ prefix: 'fas', iconName: 'arrow-alt-circle-left' }).html
export const bookMark = icon({ prefix: 'far', iconName: 'bookmark' }).html
export const github = icon({ prefix: 'fab', iconName: 'github' }).html
export const linkedin = icon({ prefix: 'fab', iconName: 'linkedin' }).html
export const medium = icon({ prefix: 'fab', iconName: 'medium-m' }).html
