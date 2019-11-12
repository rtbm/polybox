import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './my-inbox-list.js';

class MyInbox extends PolymerElement {
  static get template() {
    return html`
      <div class="card">        
        <my-inbox-list></my-inbox-list>
      </div>
    `;
  }
}

window.customElements.define('my-inbox', MyInbox);
