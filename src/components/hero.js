import chefImg from '../public/chef-2.png'
class Hero extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__content">
        <div class="text-wrap">
          <h1>mau masak apa hari ini bun ? 🍲 </h1>
          <h2>kami sediakan resep masakan indonesia untuk keluarga tercinta anda dirumah</h2>
          <button class="hero__btn"><a href="#recipe-list">lihat resep ⤵ </a></button>
        </div>
        <div class="img-wrap">
          <img src=${chefImg} alt="">
        </div>
      </div>
    </div>
    
    `
  }
}

customElements.define('hero-app', Hero)
