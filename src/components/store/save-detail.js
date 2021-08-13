import { clock, pizza, level, arow } from '../fontAwesome'
import gbr from '../../public/not-found.jpg'
import './save-bahan.js'
import './save-cara.js'

class SaveDetail extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set detailData (data) {
    this._detailData = data
    this.render()
  }

  render () {
    const { title, thumb, servings, times, dificulty, author, ingredient, step } = this._detailData
    this.innerHTML = `
    <article class="detail">
      <div class="detail__card">
        <div class="img-wrap">
          <img src=${thumb != null ? thumb : gbr} alt=${title}>
        </div>
        <div class="detail__title">
          <h2>${title}</h2>
          <p>${author.user} - <span>${author.datePublished}</span></p>
          <div class="detail__dificulty">
            <p>${level} ${dificulty}</p>
            <p>${pizza} ${servings}</p>
            <p>${clock} ${times}</p>
          </div>
        </div>
        <h3 class="my-1">bahan - bahan :</h3>
        <div class="detail__bahan">
        </div>
        <h3>cara membuat :</h3>
        <div class="detail__caraBuat">
        </div>
      </div>
      <button class="btn-kembali">${arow} Kembali</button>
    </article>
    
    `

    const detailBahanParent1 = this.querySelector('.detail__bahan')
    const caraBuatParent1 = this.querySelector('.detail__caraBuat')
    const backBtn1 = this.querySelector('.btn-kembali')

    backBtn1.addEventListener('click', () => {
      this.remove()
    })

    ingredient.forEach(bahan => {
      const detailBahanInner1 = document.createElement('save-bahan')
      detailBahanInner1.dataBahan = bahan
      detailBahanParent1.appendChild(detailBahanInner1)
    })

    step.forEach(cara => {
      const caraBuatInner1 = document.createElement('save-cara')
      caraBuatInner1.caraBuat = cara
      caraBuatParent1.appendChild(caraBuatInner1)
    })
  }
}

customElements.define('save-detail', SaveDetail)
