import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Profile from '../components/Profile';
import store from '../redux/store';

describe('Profile', () => {
  it('renders Profile', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Profile />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
