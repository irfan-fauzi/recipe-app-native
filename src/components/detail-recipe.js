import { clock, pizza, level, check, arow, bookMark } from './fontAwesome.js'
import gbr from '../public/not-found.jpg'
import './bahan-item.js'
import './cara-buat.js'

class DetailRecipe extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set detailData (data) {
    this._detailData = data
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set eventSimpan (event) {
    this._eventSimpan = event
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
        
        <button class="btn-simpan">${bookMark} Simpan Resep</button>
      </div>
      <button class="btn-kembali">${arow} Kembali</button>
    </article>
    
    `

    const simpanBtn = this.querySelector('.btn-simpan')
    const detailBahanParent = this.querySelector('.detail__bahan')
    const caraBuatParent = this.querySelector('.detail__caraBuat')
    const backBtn = this.querySelector('.btn-kembali')
    const shadow = document.querySelector('.shadow')

    simpanBtn.addEventListener('click', (e) => {
      this._eventSimpan()
      e.target.innerHTML = `tersimpan ${check}`
      e.target.style.background = 'grey'
      e.target.disabled = true
    })

    backBtn.addEventListener('click', () => {
      this.remove()
      shadow.style.display = 'none'
    })

    ingredient.forEach(bahan => {
      const detailBahanInner = document.createElement('detail-bahan')
      detailBahanInner.dataBahan = bahan
      detailBahanParent.appendChild(detailBahanInner)
    })

    step.forEach(cara => {
      const caraBuatInner = document.createElement('cara-buat')
      caraBuatInner.caraBuat = cara
      caraBuatParent.appendChild(caraBuatInner)
    })
  }
}

customElements.define('detail-recipe', DetailRecipe)
