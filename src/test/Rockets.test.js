import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets';
import store from '../redux/store';

describe('Rockets', () => {
  it('renders Rockets', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Rockets />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Rockets', () => {
  const mockRockets = [
    {
      id: 'rocket-1',
      name: 'Rocket 1',
      description: 'Description of Rocket 1',
      flickr_image: ['https://www.example.com/image1.jpg'],
      reserved: true,
    },
    {
      id: 'rocket-2',
      name: 'Rocket 2',
      description: 'Description of Rocket 2',
      flickr_image: ['https://www.example.com/image2.jpg'],
      reserved: false,
    },
  ];

  it('should not render the "Reserved" badge when the rocket is not reserved', () => {
    const updatedState = {
      ...store.getState(),
      rockets: {
        ...store.getState().rockets,
        rocketListData: mockRockets,
      },
    };
    store.dispatch({ type: 'SET_STATE', payload: updatedState });

    const { queryByTestId } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const reservedBadge = queryByTestId('reserved-badge-rocket-2');
    expect(reservedBadge).toBeNull();
  });
});
