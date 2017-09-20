(function() {
  'use strict';
  customElements.define('outer-el-shadow', class extends HTMLElement {
    constructor() {
      console.log('Subcomponent test: SHADOW');
      super(); // always always
      console.log('outer-el `constructor` called');
      let shadowRoot = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
      console.log('outer-el `connectedCallback` called');
      this.shadowRoot.innerHTML = `
        <div id="outer-component__div">
          <sub-component></sub-component>
        </div>
      `;
      this.shadowRoot.querySelector('sub-component').helloUpper = this._hello;
    }
    static get observedAttributes() {
      return ['hello'];
    }
    get hello() {
      return this.getAttribute('hello');
    }
    set hello(val) {
      if (val) {
        this._hello = val;
      } else this.removeAttribute('hello');
    }
    attributeChangedCallback(name, oldVal, newVal) {
      this.hello = newVal;
    }
  });
}());
