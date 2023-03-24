import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import { joinMission } from '../redux/mission/missionSlice';
import Mission from '../components/Missions';

describe('Mission', () => {
  it('renders missions', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Mission />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should Join Mission payload send correct', () => {
    const expectedPayload = { payload: '8HYVG57', type: 'missions/joinMission' };
    const actualPayload = joinMission('8HYVG57');
    expect(actualPayload).toEqual(expectedPayload);
  });
});
