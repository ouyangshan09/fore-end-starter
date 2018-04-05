import React from 'react';
import ReactDom from 'react-dom';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Styles from './index.scss';

@CSSModules(Styles)
class Index extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {};

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div styleName='index' className='index'>
                <div className='name'>React</div>
            </div>
        );
    }
}

ReactDom.render(<Index />, document.getElementById('app'));

export default Index;
