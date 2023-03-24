import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';
import { joinMission, leaveMission } from '../redux/mission/missionSlice';

describe('Missions', () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: 1,
            mission_name: 'Mission 1',
            description: 'Mission 1 Description',
            joined: true,
          },
          {
            mission_id: 2,
            mission_name: 'Mission 2',
            description: 'Mission 2 Description',
            joined: false,
          },
        ],
      },
    });
  });

  it('should display missions table with correct data', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 1 Description')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE MEMBER')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Mission 2 Description')).toBeInTheDocument();
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });

  it('should dispatch joinMission action when Join Mission button is clicked', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const joinButton = screen.getByText('Join Mission');
    fireEvent.click(joinButton);

    expect(store.getActions()).toContainEqual(joinMission(2));
  });

  it('should dispatch leaveMission action when Leave Mission button is clicked', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const leaveButton = screen.getByText('Leave Mission');
    fireEvent.click(leaveButton);

    expect(store.getActions()).toContainEqual(leaveMission(1));
  });
});
