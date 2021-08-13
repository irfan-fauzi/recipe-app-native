import './save-recipe-item.js'
import emptyBro from '../../public/empty-bro.svg'

class SaveRecipeList extends HTMLElement {
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
  set eventDelete (event) {
    this._eventDelete = event
  }

  // eslint-disable-next-line accessor-pairs
  set renderError (messege) {
    this._message = messege
    this.innerHTML = `
    <h2 class="renderEror">${this._message}</h2>
    `
  }

  render () {
    // eslint-disable-next-line eqeqeq
    if (this._dataRecipe.length == 0) {
      this.innerHTML = `
      <div class="data-kosong">
        <img src=${emptyBro} alt="brother">
        <h2>belum ada resep yang disimpan</h2>
      </div>  
      `
    } else {
      this.innerHTML = ''
      this._dataRecipe.forEach(data => {
        const recipeItem1 = document.createElement('save-item')
        recipeItem1.dataRecipe = data
        recipeItem1.eventDetail = this._eventDetail
        recipeItem1.eventDelete = this._eventDelete
        this.appendChild(recipeItem1)
      })
    }
  }
}

customElements.define('save-list', SaveRecipeList)
