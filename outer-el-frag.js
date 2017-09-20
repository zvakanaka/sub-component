(function() {
  'use strict';
  customElements.define('outer-el-frag', class extends HTMLElement {
    constructor() {
      console.log('Subcomponent test: FRAGMENT');
      super(); // always always
      console.log('outer-el `constructor` called');
      let shadowRoot = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
      console.log('outer-el `connectedCallback` called');
      let frag = document.createDocumentFragment();
      let div = document.createElement('div');
      div.setAttribute('id', 'outer-component__div');
      let sub = document.createElement('sub-component');
      div.appendChild(sub);
      frag.appendChild(div);
      this.shadowRoot.appendChild(frag);
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
