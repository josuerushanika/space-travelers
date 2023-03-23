import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  return (
    <div>
      Profile
      <h1>My Missions</h1>
      <div className="missionBox">
        {missions.filter((mission) => mission.joined)
          .map((mission) => <div key={mission.mission_id} className="joinedMission">{mission.mission_name}</div>)}
      </div>
    </div>
  );
};

export default Profile;
