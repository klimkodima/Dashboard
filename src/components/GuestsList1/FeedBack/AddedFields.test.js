import React from 'react';
import renderer from 'react-test-renderer';
import AddedFields from './AddedFields';

describe('<AddedFields/>', () => {

    test('should render AddedFields without props', () => {

        const fields1 = []

        const component = renderer.create(
            <AddedFields formFields={fields1} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should render AddedFields with props', () => {

        const fields1 = [
            {
                id: "1",
                type: "text",
                name: "1"
            }
        ]

        const component = renderer.create(
            <AddedFields formFields={fields1} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});