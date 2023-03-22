import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rocketListData);

  return (
    <>
      <div>
        {rockets.length > 0 && (
          rockets.map((rocket) => (
            <div key={rocket.id}>
              <img src={rocket.flickr_image[0]} alt="img" />
              <h2>{rocket.name}</h2>
              <p>{rocket.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Rockets;
