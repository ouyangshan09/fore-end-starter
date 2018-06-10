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
import { AppContainer } from 'react-hot-loader';

const ENV = process.env.NODE_ENV;
const history = History.create();

if (ENV === 'production') {
    ReactDOM.render(
        <Root history={history}><div>Production</div></Root>,
        document.getElementById('app')
    )
} else {
    const render = (Component: React.ReactNode) => {
        ReactDOM.render(
            <AppContainer>
                {<Root history={history}><div>Development</div></Root>}
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
    console.log('module:', module);
}

// ReactDOM.render(<Root history={history}><div>Root Test</div></Root>, document.getElementById('app'));
