class SaveCara extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set caraBuat (data) {
    this._caraBuat = data
    this.render()
  }

  render () {
    this.innerHTML = `
      <p>${this._caraBuat}</p>
    `
  }
}
customElements.define('save-cara', SaveCara)
