import {render, screen} from '@testing-library/react';
import Basic from '../../src/hooks_example/Basic';
import userEvent from '@testing-library/user-event';

describe('Hooks example Basic', () => {
    test('should initially render', () => {
       render(<Basic/>);

        expect(screen.getByText('Basic Example')).toBeInTheDocument();
    });

    test('should change number', () => {
        render(<Basic/>);

        screen.debug();

        expect(screen.getByText('Number is: 0')).toBeInTheDocument();

        const upButton = screen.getByRole('button', {name: /up/i});
        const downButton = screen.getByRole('button', {name: /down/i});

        userEvent.click(upButton);

        expect(screen.getByText('Number is: 1')).toBeInTheDocument();

        userEvent.click(downButton);

        expect(screen.getByText('Number is: 0')).toBeInTheDocument();
    })
});
