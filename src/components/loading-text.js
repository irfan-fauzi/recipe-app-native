class LoadingText extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <h2>tunggu Sebentar ya bun ...</h2>
    `
  }
}

customElements.define('loading-text', LoadingText)
