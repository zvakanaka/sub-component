(function() {
  'use strict';
  customElements.define('sub-component', class extends HTMLElement {
    constructor() {
      super(); // always always
      console.log('inner-el `constructor` called');
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>
          :host div { background-color: var(--background-color, white); color: var(--color, black); }
          sub-component div { background-color: var(--background-color, white); color: var(--color, black); }
        </style>
        <div id="sub-component__div">
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
      this.shadowRoot.querySelector('#sub-component__div').textContent = this._helloUpper;
    }
  });
}());
