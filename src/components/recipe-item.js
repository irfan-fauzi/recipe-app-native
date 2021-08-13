import { clock, pizza, level } from './fontAwesome.js'

class RecipeItem extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set dataRecipe (data) {
    this._dataRecipe = data
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set eventDetail (event) {
    this._eventDetail = event
  }

  render () {
    const { title, thumb, times, portion, serving, dificulty, difficulty } = this._dataRecipe
    this.innerHTML = `
      <article class="recipe-item">
        <div class="img-wrap">
          <img src=${thumb} alt="food image">
        </div>
        <div class="info-recipe">
          <h2 class="title-recipe">${title}</h2>
          <div class="detail-recipe flex">
            <p>${clock} ${times}</p>
            <p>${pizza} ${portion || serving}</p>
            <p>${level} ${dificulty || difficulty}</p>
          </div>
        </div>
      </article>
    `

    const titleRecipe = this.querySelector('.title-recipe')

    titleRecipe.addEventListener('click', () => this._eventDetail())
  }
}

customElements.define('recipe-item', RecipeItem)
