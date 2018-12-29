import React from 'react';
import CSSModules from 'react-css-modules';
import Styles from './App.scss;

@CSSModules(Styles)
class App extends React.PureComponent {
    public render () {
        return (
            <div className='App' styleName='App'>App</div>
        )
    }
}

export default App;
