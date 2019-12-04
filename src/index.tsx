import React from 'react';
import { render } from 'react-dom';

import Router from './router';
import * as serviceWorker from './serviceWorker';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

render(<Router />, document.getElementById('root'));

serviceWorker.register();
