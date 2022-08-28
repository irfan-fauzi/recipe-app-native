import './css/style.css'
import 'regenerator-runtime'
import './components/header.js'
import './components/hero.js'
import './components/search-bar.js'
import './components/recipe-list.js'
import './components/detail-recipe.js'
import './components/loading-text.js'
import './components/footer.js'
import './components/store/save-recipe-list.js'
import './components/store/save-detail.js'
import axios from 'axios'

class RecipeApp {
  constructor () {
    this.baseUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://masak-apa.tomorisakura.vercel.app/api');
    this.PROXY_URL = 'https://cors.bridged.cc/'
    this.searchBar = document.querySelector('search-bar')
    this.recipeList = document.querySelector('recipe-list')
    this.shadow = document.querySelector('.shadow')
    this.containerRecipe = document.querySelector('.container-recipe')
    this.localState = []
    this.saveList = document.querySelector('save-list')
    this.header = document.querySelector('app-header')
  }

  getLocalStorage () {
    this.localState = JSON.parse(localStorage.getItem('RECIPE')) || []
  }

  setLocalStorage (database, key) {
    localStorage.setItem(key, JSON.stringify(database))
  }

  getDataOnLoad () {
    axios.get(this.baseUrl)
      .then(res => {
        const dataRecipe = res.data.results
        this.renderRecipeList(dataRecipe)
      })
      .catch(err => {
        this.fallbackResult(`maaf ada kesalahan: ${err}`)
      })
  }

  getDataDetail (key) {
    axios.get(`${this.baseUrl}/recipe/${key}`)
      .then(res => {
        const dataRecipe = res.data.results
        this.renderRecipeDetail(dataRecipe)
      })
      .catch(err => console.log(err))
  }

  getSearchingRecipe (keyword) {
    if (keyword.length === 0) {
      this.fallbackResult('teks input kosong')
    } else {
      axios.get(`${this.PROXY_URL + this.baseUrl}/search/?q=${keyword}`)
        .then(res => {
          const dataRecipe = res.data.results
          if (dataRecipe.length === 0) {
            this.fallbackResult('maaf resep yang dicari tidak ada.. 😢 ')
          } else {
            const n = dataRecipe.slice(0, 15)
            this.renderRecipeList(n)
          }
        })
        .catch(err => {
          this.fallbackResult(`maaf ada kesalahan : ${err}`)
        })
    }
  }

  renderRecipeList (data) {
    this.recipeList.dataRecipe = data
  }

  renderSaveList (data) {
    this.saveList.dataRecipe = data
  }

  renderHeaderdata () {
    this.header.num = recipeApp.localState.length
  }

  fallbackResult (msg) {
    this.recipeList.renderError = msg
  }

  eventLocalstore () {
    const dataRecipe = this._detailData
    recipeApp.localState.push(dataRecipe)
    recipeApp.setLocalStorage(recipeApp.localState, 'RECIPE')
    recipeApp.renderSaveList(recipeApp.localState)
    recipeApp.renderHeaderdata()
  }

  renderRecipeDetail (data) {
    const detailElement = document.createElement('detail-recipe')
    detailElement.detailData = data
    detailElement.eventSimpan = this.eventLocalstore
    document.body.appendChild(detailElement)
  }

  renderLoadingText () {
    const loadingText = document.createElement('loading-text')
    this.recipeList.appendChild(loadingText)
  }
}

// instansiasi object --------------------------------------------
const recipeApp = new RecipeApp()
recipeApp.getDataOnLoad()

// event listener from component --------------------------------

recipeApp.recipeList.eventDetail = function () {
  recipeApp.shadow.style.display = 'block'
  const key = this._dataRecipe.key
  recipeApp.getDataDetail(key)
}

recipeApp.saveList.eventDetail = function () {
  const data = this._dataRecipe
  const saveDetail = document.createElement('save-detail')
  saveDetail.detailData = data
  document.body.appendChild(saveDetail)
}

recipeApp.searchBar.eventSubmit = function (e) {
  recipeApp.renderLoadingText()
  const keyword = this.valueRecipe
  recipeApp.getSearchingRecipe(keyword)
  e.preventDefault()
}

recipeApp.saveList.eventDelete = function () {
  const target = this._dataRecipe
  const i = recipeApp.localState.indexOf(target)
  recipeApp.localState.splice(i, 1)
  recipeApp.setLocalStorage(recipeApp.localState, 'RECIPE')
  recipeApp.renderSaveList(recipeApp.localState)
  recipeApp.renderHeaderdata()
}

recipeApp.header.eventHome = function () {
  recipeApp.getDataOnLoad()
}

// -------------------------------------------------------------------
// method yang dijalankan saat javascript dimuat
recipeApp.renderLoadingText()
recipeApp.getLocalStorage()
recipeApp.renderSaveList(recipeApp.localState)
recipeApp.renderHeaderdata()
