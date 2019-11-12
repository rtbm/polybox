import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {IconButton} from '@material/mwc-icon-button';

class MyInboxListItemStarIcon extends PolymerElement {
  static get template() {
    return html`
      <mwc-icon-button icon="[[starredIcon]]"></mwc-icon-button>
    `;
  }

  constructor() {
    super();
  }

  ready() {
    super.ready();
    this.setIcon();
    this.addEventListener('click', this.toggle.bind(this));
  }

  static get properties() {
    return {
      starredIcon: {
        type: String
      },

      starred: {
        type: Boolean,
      },
    };
  }

  toggle() {
    this.starred = !this.starred;
    this.setIcon();
  }

  setIcon() {
    this.starredIcon = this.starred ? 'star' : 'star_outline';
  }
}

window.customElements.define('my-inbox-list-item-star-icon', MyInboxListItemStarIcon);
