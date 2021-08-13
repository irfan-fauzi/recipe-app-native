import logoImg from '../public/logo.svg'
import { github, linkedin, medium } from './fontAwesome.js'
class Footer extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="container-footer">
     <img class="footer-logo" src=${logoImg} alt="logo">
     <div class="social-media">
       <a href="https://github.com/irfan-fauzi/recipe-app-native" target="_blank">${github}</a>
       <a href="https://www.linkedin.com/in/irfan-fauzi-rahman/" target="_blank">${linkedin}</a>
       <a href="https://irfanfauzir.medium.com/" target="_blank">${medium}</a>
     </div>
     <p>© Copyright Resepku - 2021, build in majalengka 💌</p>
   </div>
    `
  }
}

customElements.define('footer-app', Footer)
