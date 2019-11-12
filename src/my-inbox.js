import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './my-inbox-list.js';

class MyInbox extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>hello world</h1>
        <my-inbox-list></my-inbox-list>
      </div>
    `;
  }
}

window.customElements.define('my-inbox', MyInbox);
