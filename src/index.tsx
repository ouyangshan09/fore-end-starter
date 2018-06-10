/**
 * Created by Ouyang on 2018/3/29.
 * 项目入口
 * @author Ouyang
 */
import './prolyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import History from './utils/History';

// const RootComponent: any = (Component: any) => <div>Root</div>

const history = History.create();

ReactDOM.render(<Root history={history}><div>Root Test</div></Root>, document.getElementById('app'));

console.log('Hello ts starter');
