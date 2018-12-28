import _ from 'lodash';

const test = {
    name: {
        ouyang: 'zhouanqi'
    }
};

console.log(_.get(test, 'name.ouyang'));
