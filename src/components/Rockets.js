import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.rockets.status);
  const rockets = useSelector((state) => state.rockets.rocketListData);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);
  return (
    <>
      {rockets.map((rocket) => (
        <h1 key={rocket.id}>{rocket.name}</h1>
      ))}
    </>
  );
};

export default Rockets;
