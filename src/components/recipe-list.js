import './recipe-item.js'

class RecipeList extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set dataRecipe (data) {
    this._dataRecipe = data
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set eventDetail (event) {
    this._eventDetail = event
  }

  // eslint-disable-next-line accessor-pairs
  set renderError (messege) {
    this._message = messege
    this.innerHTML = `
    <h2 class="renderEror">${this._message}</h2>
    `
  }

  render () {
    this.innerHTML = ''
    this._dataRecipe.forEach(data => {
      const recipeItem = document.createElement('recipe-item')
      recipeItem.dataRecipe = data
      recipeItem.eventDetail = this._eventDetail
      this.appendChild(recipeItem)
    })
  }
}

customElements.define('recipe-list', RecipeList)
