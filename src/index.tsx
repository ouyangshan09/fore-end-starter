/**
 * Created by Ouyang on 2018/3/29.
 * 项目入口
 * @author Ouyang
 */
import './prolyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import Runtime from './tools/runtime';
import { getRunTimeEnv } from './tools/enviroment';
import { AppContainer } from 'react-hot-loader';
import IndexRoute from './routes';

const runtime = Runtime();
const ENV = getRunTimeEnv();
const history = runtime.history;
const store = runtime.store;

if (ENV === 'production') {
    ReactDOM.render(
        <Root history={history}><div>Production</div></Root>,
        document.getElementById('app')
    )
} else {
    const render = (Component: React.ReactNode) => {
        ReactDOM.render(
            <AppContainer>
                {
                <Root history={history} store={store}>
                    <IndexRoute />
                </Root>
                }
            </AppContainer>,
            document.getElementById('app')
        )
    }

    render(Root);

    if ((module as any).hot) {
        (module as any).hot.accept('./components/Root/Root', () => {
            render(Root);
        })
    }
}
