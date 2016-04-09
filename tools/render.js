/**
 * React Starter Kit (http://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2015 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import task from './lib/task';
import ReactDOM from 'react-dom/server';
import React from 'react';
import Html from './../src/components/Html';

import Router from './../src/routes';

export default task('render', async () => {
  // await require('./clean')();
  // await require('./copy')();
  // await require('./bundle')();


  let pages = {
    index : {
      path : '/',
      component : 'components/HomePage'
    }
  }

  let assets = require('./../src/assets');

  console.log('assets : ', assets);

  for(var pageKey in pages){
    let page = pages[pageKey];
    render(page.path, pageKey, page.component, assets);
  }

});


function render (path, filePath, componentPath, assets){
  const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    Router.dispatch({ path: path, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    //var ReactComponent = require('../src/' + componentPath);
    data.body = ReactDOM.renderToString(<ReactComponent/>);


    data.entry = assets.main.js;
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    console.log('html to write in' + filePath + ".html" + ': \n' , html);


}
