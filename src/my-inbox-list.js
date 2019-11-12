import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './my-inbox-list-item.js';
import '@polymer/iron-ajax/iron-ajax';

class MyInboxList extends PolymerElement {
  static get template() {
    return html`
      <iron-ajax
        auto
        url="https://jsonplaceholder.typicode.com/todos"
        params='{}'
        handle-as="json"
        last-response="{{ajaxResponse}}"
        debounce-duration="300">
      </iron-ajax>

      <dom-repeat items="{{ajaxResponse}}">
        <template>          
          <my-inbox-list-item starred="{{item.starred}}">
            <span slot="title">{{item.title}}</span>
          </my-inbox-list-item>
        </template>
      </dom-repeat>
    `;
  }

  handleResponse(res) {
    console.log(res);
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
