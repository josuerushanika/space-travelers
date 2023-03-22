import { useDispatch } from 'react-redux';
// import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/mission/missionSlice';

const Missions = () => {
  // const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  });
  return (
    <div>
      Missions
    </div>
  );
};
export default Missions;
