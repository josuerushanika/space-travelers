import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);

describe('Rockets component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      rockets: {
        rocketListData: [
          {
            id: 'rocket1',
            name: 'Falcon 9',
            description: 'The Falcon 9 is a reusable rocket designed and manufactured by SpaceX.',
            flickr_image: ['https://www.flickr.com/photos/spacex/8282820621'],
            reserved: false,
          },
          {
            id: 'rocket2',
            name: 'Atlas V',
            description: 'The Atlas V is an expendable rocket used to launch a variety of satellites into orbit.',
            flickr_image: ['https://www.flickr.com/photos/ulalaunch/17169498662'],
            reserved: true,
          },
        ],
      },
    });
  });

  it('renders rocket information for each rocket in the store', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const rocket1Name = screen.getByText('Falcon 9');
    const rocket1Desc = screen.getByText('The Falcon 9 is a reusable rocket designed and manufactured by SpaceX.');
    const rocket1ReserveButton = screen.getByRole('button', { name: 'Reserve Rocket' });
    const rocket2Name = screen.getByText('Atlas V');
    const rocket2Desc = screen.getByText('The Atlas V is an expendable rocket used to launch a variety of satellites into orbit.');
    const rocket2CancelReserveButton = screen.getByRole('button', { name: 'Cancel Reservation' });

    expect(rocket1Name).toBeInTheDocument();
    expect(rocket1Desc).toBeInTheDocument();
    expect(rocket1ReserveButton).toBeInTheDocument();
    expect(rocket2Name).toBeInTheDocument();
    expect(rocket2Desc).toBeInTheDocument();
    expect(rocket2CancelReserveButton).toBeInTheDocument();
  });

  it('dispatches reserveRocket when Reserve Rocket button is clicked', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const rocket1ReserveButton = screen.getAllByRole('button', { name: 'Reserve Rocket' })[0];

    fireEvent.click(rocket1ReserveButton);

    expect(store.getActions()).toContainEqual({ type: 'rockets/reserveRocket', payload: 'rocket1' });
  });

  it('dispatches cancelRocket when Cancel Reservation button is clicked', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const rocket2CancelReserveButton = screen.getAllByRole('button', { name: 'Cancel Reservation' })[0];

    fireEvent.click(rocket2CancelReserveButton);

    expect(store.getActions()).toContainEqual({ type: 'rockets/cancelRocket', payload: 'rocket2' });
  });
});
