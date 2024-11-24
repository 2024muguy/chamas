import {
    MISSION_REQUEST,
    MISSION_SUCCESS,
    MISSION_FAILURE,
  } from '../constants/misssionConstants';
  
  export const fetchMission = () => async (dispatch) => {
    dispatch({ type: MISSION_REQUEST });
  
    try {
      // Simulating API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              description: '🎯 Our Mission',
              goals: [
                'Increase access to education for girls and women.',
                'Provide leadership training and mentorship programs.',
                'Support women-owned businesses and startups.',
                'Promote gender equality and awareness campaigns.',
              ],
            }),
          1000
        )
      );
  
      dispatch({ type: MISSION_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: MISSION_FAILURE, payload: 'Failed to fetch mission details' });
    }
  };
  