(function() {
  'use strict';
  customElements.define('sub-component', class extends HTMLElement {
    constructor() {
      console.log('Subcomponent test: TEMPLATE');
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
    static get observedAttributes() {
      return ['is-cool'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'is-cool') this.isCool = newValue;
    }
    get isCool() {
      console.log('GET ISCOOL');
      return this._isCool;
    }
    set isCool(val) {
      console.log('SET ISCOOL');
      this._isCool = val;
      this.shadowRoot.querySelector('#sub-component__div').textContent = this._isCool;
    }
  });
}());
