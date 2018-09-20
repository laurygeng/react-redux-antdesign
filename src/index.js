
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer'
import './config'
import App from './app'
import store from './ant-design/demo/store';




//mock数据
window.mockData={};
// if(/(\?mock$)|(\?mock(\&|\=))|(\&mock$)|(\&mock(\&|\=))/.test(location.search)){//是否mock
// 	require.ensure([],function(require){
// 		window.mockData=require('mock/index.js').default;
// 	});
// }

window.mockData=require('./mock/index.js').default;

registerServiceWorker()

// const store = createStore(reducers, compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// ))
window.store=store;
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

/*react-redux的作用就是建立一套所有组件都可以访问的state系统，
这个系统被称为store
简单的说就是store里面存放了一堆state，
同时store提供了获取state的方法getState，
修改state的方法dispatch，
以及监听state被改动的方法subscribe
但是这三个方法对于我们使用react-redux的小伙伴而言，
只需要用到dispatch方法，我们会把state直接注入到组件的props中，
而监听state变化后重新渲染界面react-redux已经自动完成了。
*/

/*
    这个index是整个项目的入口文件，在入口文件中不是写组件，而是把组件挂在到DOM里面
    利用react-dom来渲染app这个组件到div中
*/ 

/*
  Provider组件把你的这个App项目的组件包含起来，那么这些包含起来的组件以及他们的子组件就可以被提供react-redux的注入
*/ 