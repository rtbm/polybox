import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {Button} from "@material/mwc-button";

class MyInboxList extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
    
          padding: 10px;
        }
      </style>
    
      <div class="card">
        <h1>hello world 2</h1>
      </div>
      
      <mwc-button id="myButton" label="Click Me!" raised></mwc-button>
    `;
    }
}

window.customElements.define('my-inbox-list', MyInboxList);
