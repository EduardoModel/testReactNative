import React from 'react';

import TechList from '~/components/TechList';

import {render, fireEvent} from '@testing-library/react-native';

/*
  The tests of the redux and the sagas as well with the mock's works
  in the same way as for the react for the web
*/

describe('TechList', () => {
  it('should be able to add a new tech inside the list', () => {
    const {getByText, getByTestId} = render(<TechList />);

    // The event here will fires the "onChangeText" event and the text can be
    // passed directly as argument
    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByText('Add new tech'));

    // Verify if the tech was inserted inside the list checking if the text is truthy
    expect(getByText('Node.js')).toBeTruthy();

    // Because of the strucure of the react native, it isn't possible to verify
    // directly the content of the input element but with the library @testing-library/jest-native/extend-expect
    // it gives the "toHaveProp" function to make the check of the input's value
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
