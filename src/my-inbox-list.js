import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './my-inbox-list-item.js';

class MyInboxList extends PolymerElement {
  static get template() {
    return html`
      <dom-repeat items="{{emails}}">
        <template>          
          <my-inbox-list-item starred="{{item.starred}}">
            <span slot="title">{{item.title}}</span>
          </my-inbox-list-item>
        </template>
      </dom-repeat>
    `;
    }

  static get properties() {
    return {
      emails: {
        value() {
          return [
            {
              title: 'foo',
              starred: false,
            },
            {
              title: 'bar',
              starred: true,
            }
          ];
        }
      }
    }
  }
}

window.customElements.define('my-inbox-list', MyInboxList);
