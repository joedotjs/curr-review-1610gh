import React from 'react';
import {render} from 'react-dom';
import AppContainer from './containers/AppContainer';

import store from './state';

console.log(store);

render(
  <AppContainer />,
  document.getElementById('start')
);