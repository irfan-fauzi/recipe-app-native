class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set eventSubmit (event) {
    this._eventSubmit = event
  }

  get valueRecipe () {
    return this.querySelector('.search__input').value
  }

  render () {
    this.innerHTML = `
    <div class="search">
      <form class="search__form">
        <input class="search__input" type="text" placeholder="cari resepmu disini" required>
        <button class="search__btn">cari</button>
      </form>
    </div>
    `
    this.querySelector('.search__btn').addEventListener('click', (e) => {
      this._eventSubmit(e)
    })
  }
}

customElements.define('search-bar', SearchBar)
