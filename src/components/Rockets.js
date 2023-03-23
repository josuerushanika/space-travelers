import { useSelector, useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rocketListData);
  const dispatch = useDispatch();

  const bookHandler = (id, reserve) => {
    if (reserve) {
      dispatch(cancelRocket(id));
    }
    dispatch(reserveRocket(id));
  };

  return (
    <>
      <div>
        {rockets.length > 0 && (
          rockets.map((rocket) => (
            <div key={rocket.id}>
              <img src={rocket.flickr_image[0]} alt="img" />
              <h2>{rocket.name}</h2>
              <p>

                {rocket.reserved && (
                <Badge
                  bg="success"
                  className="p-2"
                  style={{ marginRight: '1vw' }}
                >
                  Reserved
                </Badge>
                )}

                {rocket.description}

              </p>
              <Button
                type="button"
                variant={rocket.reserved ? ('outline-secondary') : ('btn btn-primary')}
                size="md"
                onClick={() => bookHandler((rocket.id))}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </Button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Rockets;
