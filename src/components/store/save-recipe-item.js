import { clock, pizza, level, trash } from '../fontAwesome.js'
import gbr from '../../public/not-found.jpg'

class SaveItem extends HTMLElement {
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

  render () {
    const { title, thumb, times, portion, servings, dificulty, difficulty } = this._dataRecipe
    this.innerHTML = `
      <article class="recipe-item">
        <div class="img-wrap">
          <img src=${thumb != null ? thumb : gbr} alt="food image">
        </div>
        <div class="info-recipe">
          <h2 class="title-recipe">${title}</h2>
          <div class="detail-recipe flex">
            <p>${clock} ${times}</p>
            <p>${pizza} ${portion || servings}</p>
            <p>${level} ${dificulty || difficulty}</p>
          </div>
          <button class="btn-delete">${trash} hapus</button>
        </div>
      </article>
    `

    const titleRecipe1 = this.querySelector('.title-recipe')
    titleRecipe1.addEventListener('click', () => this._eventDetail())
    const btnDel1 = this.querySelector('.btn-delete')
    btnDel1.addEventListener('click', () => this._eventDelete())
  }
}

customElements.define('save-item', SaveItem)
