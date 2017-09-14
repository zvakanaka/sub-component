(function() {
  'use strict';
  customElements.define('sub-component', class extends HTMLElement {
    constructor() {
      super(); // always always
      console.log('inner-el `constructor` called');
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>
          :host div { background-color: var(--background-color, tan); color: var(--color, blue); width: fit-content; }
          sub-component div { background-color: var(--background-color, tan); color: var(--color, blue); width: fit-content; }
        </style>
        <div id="sub-component__div">
        helloUpper:
        </div>
      `;
    }
    connectedCallback() {
      console.log('inner-el `connectedCallback` called');
    }
    get helloUpper() {
      console.log('GET helloUpper: inner', this._helloUpper);
      return this._helloUpper;
    }
    set helloUpper(val) {
      console.log('SET helloUpper: inner', this._helloUpper);
      this._helloUpper = val.toUpperCase();
      this.shadowRoot.querySelector('#sub-component__div').textContent = `helloUpper: ${this._helloUpper}`;
    }
  });
}());
