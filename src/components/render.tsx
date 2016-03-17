'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Action from '../actions/actions';
import App from './app';

/**
 * Render react component on activate
 */
export function render(target: HTMLElement) {
  ReactDOM.render(
      <App />,
    target
  );
}

var root = null;
const rootName = 'pluginName';

export function unmount() {
  ReactDOM.unmountComponentAtNode(root);
}
export function initRoot(): HTMLElement {
  root = document.createElement('div');
  root.setAttribute('id', rootName);
  // mark panel visibility as hidden, triggers immediately
  root.hidden = true;
  return root;
}
export function togglePanel() {
  root.hidden = !root.hidden;
}
