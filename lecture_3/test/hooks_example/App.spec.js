import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../src/hooks_example/App';

describe('Hooks Example App', () => {
    test('should render app', () => {
        render(<App />);

        expect(screen.getByText('Hooks Example')).toBeInTheDocument();
    });
    test('should toggle view', () => {
        render(<App />);

        const button = screen.getByRole('button', {name: /Toggle View/i})

        expect(screen.getByText('Basic Example')).toBeInTheDocument();

        userEvent.click(button);

        expect(screen.getByText('Basic Example')).not.toBeInTheDocument();
        expect(screen.getByText('Advanced example')).toBeInTheDocument();
    });
});
