import './index.scss';
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class Index extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {};

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
