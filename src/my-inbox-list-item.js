import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {IconButton} from '@material/mwc-icon-button';
import './my-inbox-list-item-star-icon.js';

class MyInboxListItem extends PolymerElement {
  static get template() {
    return html`
      <div class="card">
        <slot name="title"></slot>
        <mwc-icon-button icon="done"></mwc-icon-button>
        <mwc-icon-button icon="reply"></mwc-icon-button>
        <mwc-icon-button icon="archive"></mwc-icon-button>
        <my-inbox-list-item-star-icon starred="{{starred}}"></my-inbox-list-item-star-icon>
      </div>
    `;
  }

  constructor() {
    super(...arguments);
    console.log(this.starred);
  }

  static get properties() {
    return {
      starredIcon: {
        type: String,
      },

      starred: {
        type: Boolean,
      },
    };
  }
}

window.customElements.define('my-inbox-list-item', MyInboxListItem);
