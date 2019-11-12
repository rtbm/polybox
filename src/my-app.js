/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import './shared-styles';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
// import '@polymer/iron-selector/iron-selector.js';
import {Drawer} from '@material/mwc-drawer';
import {TopAppBar} from "@material/mwc-top-app-bar";
import {IconButton} from '@material/mwc-icon-button';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

      <mwc-drawer hasHeader type="dismissible">
        <span slot="title">Drawer Title</span>
        <span slot="subtitle">subtitle</span>

        <div class="drawer-content">
            <p>Drawer content!</p>
            <mwc-icon-button icon="gesture"></mwc-icon-button>
            <mwc-icon-button icon="gavel"></mwc-icon-button>
        </div>
        
        <!--<iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
          <a name="my-inbox" href="[[rootPath]]my-inbox">Inbox</a>
        </iron-selector>-->

        <!-- Main content -->
        <div slot="appContent">
          <mwc-top-app-bar>
              <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
              <div slot="title">Title</div>
          </mwc-top-app-bar>

          <div class="main-content">
            foo
          </div>
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-inbox name="my-inbox"></my-inbox>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </div>
      </mwc-drawer>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'my-inbox';
    } else if (['my-inbox'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'my-inbox': {
        import('./my-inbox.js');
        break;
      }
      case 'view404': {
        import('./my-view404.js');
        break;
      }
    }
  }

  ready() {
    super.ready();

    const drawer = this.shadowRoot.querySelector('mwc-drawer');
    const container = drawer.parentNode;

    container.addEventListener('MDCTopAppBar:nav', () => drawer.open = !drawer.open);
  }
}

window.customElements.define('my-app', MyApp);
