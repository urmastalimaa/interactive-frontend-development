import {render,screen} from '@testing-library/react';
import Header from '../../src/hooks_example/Header';
import userEvent from '@testing-library/user-event';

const props = {
    onToggle: jest.fn(),
    currentView: 'Basic',
}

describe('Hooks Example Header', () => {
    test('should render', () => {
        render(<Header currentView={props.currentView} onToggle={props.onToggle}/>);

        expect(screen.getByText('Hooks Example')).toBeInTheDocument();
    });

    test('should pass onToggle', () => {
        render(<Header currentView={props.currentView} onToggle={props.onToggle}/>);

        const button = screen.getByText(/Toggle View/i);

        userEvent.click(button);

        expect(props.onToggle).toHaveBeenCalled();
    });
});
