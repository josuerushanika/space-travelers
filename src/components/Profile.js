import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const [joinedMissions, setJoinedMissions] = useState([]);

  useEffect(() => {
    const filteredMissions = missions.filter((mission) => mission.joined);
    setJoinedMissions(filteredMissions);
  }, [missions]);

  if (!joinedMissions.length) {
    return (
      <div className="missionBox">
        <h1>My Missions</h1>
        <div className="noJoined">No Missions Joined</div>
      </div>
    );
  }
  return (
    <div>
      Profile
      <h1>My Missions</h1>
      <div className="missionBox">
        {joinedMissions.map((mission) => (
          <div key={mission.mission_id} className="joinedMission">
            {mission.mission_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
