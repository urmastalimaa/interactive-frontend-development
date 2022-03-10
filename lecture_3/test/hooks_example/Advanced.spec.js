import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Advanced from '../../src/hooks_example/Advanced';

describe('Hooks Example Advanced', () => {
    test('should initially render', () => {
        render(<Advanced/>);

        expect(screen.queryByText('Advanced example')).toBeInTheDocument();
    })

    test('should display fibonacci value', async () => {
        render(<Advanced/>);

        const input = screen.getByLabelText('Enter Number:');

        userEvent.type(input, '6');

        expect(screen.getByText('Fibonacci is 13')).toBeInTheDocument();
    });

    test('should focus input', () => {
        render(<Advanced/>);

        const button = screen.getByText(/focus input/i);

        expect(screen.getByRole('textbox')).not.toHaveFocus();

        userEvent.click(button);

        const input = screen.getByLabelText('Enter Number:');

        expect(input).toHaveFocus();
    });

    test('should count re-renders', () => {
        render(<Advanced/>);

        const button = screen.getByText('Re-render');

        userEvent.click(button);
        userEvent.click(button);
        userEvent.click(button);

        expect(screen.getByText('Form re-renders 3')).toBeInTheDocument();
    })
})
