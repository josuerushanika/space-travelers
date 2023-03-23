import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Badge } from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/mission/missionSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  return (
    <div>
      Missions
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.joined ? <Badge bg="primary">ACTIVE MEMBER</Badge> : <Badge bg="secondary"> NOT A MEMBER</Badge> }</td>
              <td>
                {mission.joined ? <button type="button" onClick={() => dispatch(leaveMission(mission.mission_id))}>Leave Mission</button> : <button type="button" onClick={() => dispatch(joinMission(mission.mission_id))}>Join Mission</button> }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
};
export default Missions;
