import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { reserveRocket } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rocketListData);
  const dispatch = useDispatch();

  const bookHandler = (id) => dispatch(reserveRocket(id));

  return (
    <>
      <div>
        {rockets.length > 0 && (
          rockets.map((rocket) => (
            <div key={rocket.id}>
              <img src={rocket.flickr_image[0]} alt="img" />
              <h2>{rocket.name}</h2>
              <p>{rocket.description}</p>
              <Button onClick={() => bookHandler(rocket.id)}>
                Reserve Rocket
              </Button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Rockets;
