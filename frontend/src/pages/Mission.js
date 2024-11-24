import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../actions/missionActions';
import Spinner from '../components/Spinner';

const Mission = () => {
  const dispatch = useDispatch();
  const missionState = useSelector((state) => state.mission);
  const { loading, mission, error } = missionState;

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  const missionContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundImage: `url('/styles/mission.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const missionBoxStyle = {
    position: 'relative',
    background: 'linear-gradient(135deg, #d1e7ff 0%, #ffffff 100%)',
    width: '100%',
    maxWidth: '960px',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
  };

  const errorMessageStyle = {
    backgroundColor: '#ffccd5',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '20px',
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  const missionDetailsStyle = {
    maxWidth: '760px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const missionDescriptionStyle = {
    fontSize: '1.5rem',
    fontWeight: 'normal',
    color: '#003f88',
    lineHeight: '1.6',
    marginBottom: '30px',
  };

  const missionGoalsStyle = {
    listStyle: 'none',
    padding: '0',
    marginTop: '20px',
  };

  const goalItemStyle = {
    backgroundColor: '#e7f7ff',
    borderRadius: '8px',
    margin: '15px 0',
    padding: '15px',
    color: '#003f88',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };

  const mobileStyle = {
    '@media (max-width: 768px)': {
      missionBox: {
        padding: '20px',
        maxWidth: '100%',
      },
      missionTitle: {
        fontSize: '2rem',
      },
      missionDescription: {
        fontSize: '1.2rem',
      },
      goalItem: {
        fontSize: '1rem',
        padding: '10px',
      },
    },
  };

  return (
    <div style={missionContainerStyle}>
      <div
        style={{
          ...missionBoxStyle,
          ...(window.innerWidth <= 768 ? mobileStyle.missionBox : {}),
        }}
        id="mission-box"
      >
        <div className="mission-content">
          {loading && <Spinner />}
          {error && (
            <div style={errorMessageStyle} role="alert" aria-live="assertive">
              {error}
            </div>
          )}
          {mission ? (
            <div style={missionDetailsStyle}>
              <p style={missionDescriptionStyle}>{mission.description}</p>
              <ul style={missionGoalsStyle}>
                {mission.goals.map((goal, index) => (
                  <li
                    key={index}
                    style={{
                      ...goalItemStyle,
                      ...(window.innerWidth <= 768 ? mobileStyle.goalItem : {}),
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#cce4ff')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#e7f7ff')}
                  >
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            !loading && <p>No mission data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mission;
