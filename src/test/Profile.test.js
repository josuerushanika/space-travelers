import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Profile from '../components/Profile';

const mockStore = configureStore([]);

describe('Profile', () => {
  test('renders joined missions', () => {
    const missions = [
      { mission_id: '1', mission_name: 'Mission One', joined: true },
      { mission_id: '2', mission_name: 'Mission Two', joined: true },
    ];
    const rockets = [
      { rocket_id: '1', name: 'Rocket One', reserved: true },
      { rocket_id: '2', name: 'Rocket Two', reserved: true },
    ];
    const store = mockStore({
      missions: { missions },
      rockets: { rocketListData: rockets },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>,
    );

    const joinedMissions = screen.getAllByTestId('joined-mission-name');
    expect(joinedMissions).toHaveLength(2);
    expect(joinedMissions[0]).toHaveTextContent('Mission One');
    expect(joinedMissions[1]).toHaveTextContent('Mission Two');
  });

  test('renders no missions joined message', () => {
    const store = mockStore({
      missions: { missions: [] },
      rockets: { rocketListData: [] },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>,
    );

    const noJoined = screen.getByText('No Missions Joined');
    expect(noJoined).toBeInTheDocument();
  });

  test('renders reserved rockets', () => {
    const missions = [
      { mission_id: '1', mission_name: 'Mission One', joined: false },
      { mission_id: '2', mission_name: 'Mission Two', joined: false },
    ];
    const rockets = [
      { rocket_id: '1', name: 'Rocket One', reserved: true },
      { rocket_id: '2', name: 'Rocket Two', reserved: true },
    ];
    const store = mockStore({
      missions: { missions },
      rockets: { rocketListData: rockets },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>,
    );

    const reservedRockets = screen.getAllByTestId('reserved-rocket');

    expect(reservedRockets).toHaveLength(2);
    expect(reservedRockets[0]).toHaveTextContent('Rocket One');
    expect(reservedRockets[1]).toHaveTextContent('Rocket Two');
  });

  test('renders no rockets reserved message', () => {
    const store = mockStore({
      missions: { missions: [] },
      rockets: { rocketListData: [] },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>,
    );

    const noReserved = screen.getByText('No Rockets Reserved');
    expect(noReserved).toBeInTheDocument();
  });
});
