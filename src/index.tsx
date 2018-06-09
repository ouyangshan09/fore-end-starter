/**
 * Created by Ouyang on 2018/3/29.
 * 项目入口
 * @author Ouyang
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './prolyfill';

// const RootComponent: any = (Component: any) => <div>Root</div>

ReactDOM.render(<div>ROOT TEST</div>, document.getElementById('app'));

console.log('Hello ts starter');
