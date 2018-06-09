/**
 * 页面根组件, 提供Redux-store, history, 国际化, ... 注入
 * @author Ouyang
*/
import React from 'react';
import { Provider, Store } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Router } from 'react-router';
import { History } from 'history';

interface IProps {
    store: Store<any>,
    history: History,
    children: React.ReactNode
};

class Root extends React.PureComponent<IProps> {
    render () {
        return (
            <LocaleProvider locale={zhCN}>
                <Provider store={this.props.store}>
                    <Router history={this.props.history} children={this.props.children} />
                </Provider>
            </LocaleProvider>
        )
    }
}

export default Root;
