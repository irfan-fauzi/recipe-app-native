import logo from '../public/logo.svg'

class Header extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set num (n) {
    this._num = n
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set eventHome (event) {
    this._eventHome = event
  }

  render () {
    this.innerHTML = `
      <header>
        <nav>
          <div class="container flex-row py-2">
            <div>
              <img src=${logo} alt="logo perusahaan" class="logo-resepku"/>
            </div>
            <div>
              <ul class="sm flex-row gap-2 text-orange sm">
                <li><a href="#save-list">tersimpan <span>${this._num}</span></a></li>
              </ul>
            </div>  
          </div>
        </nav>
      </header>
    `
    const homeLogo = this.querySelector('.logo-resepku')
    homeLogo.addEventListener('click', () => this._eventHome())
  }
}

customElements.define('app-header', Header)
