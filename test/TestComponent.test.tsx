/**
 * 测试TestComponent
 * @author Ouyang
*/
import React from 'react';
import {
    shallow
} from 'enzyme';
import TestComponent from '../src/components/TestComponent';

describe(`# Test Component`, () => {
    test(`TestComponent props.gridFriend`, () => {
        console.log('prop:', shallow(<TestComponent gridFriend='zdm' />));
        expect(shallow(<TestComponent gridFriend='zdm' />).contains(<span>zdm</span>)).toBe(true);
    })

    test(`TestComponent props.name props.gridFriend`, () => {
        expect(shallow(<TestComponent name='ouyang' gridFriend='zdm' />).contains(
            <div>
                <span>ouyang</span>
                <span>zdm</span>
            </div>
        )).toBe(true);
    });
});
