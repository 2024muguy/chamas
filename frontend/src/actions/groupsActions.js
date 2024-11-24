// Importing necessary constants
import { GET_GROUPS, JOIN_GROUP } from '../constants/groupsConstants';

// Action to get all groups
export const getGroups = () => {
  return {
    type: GET_GROUPS,
    payload: [
      {
        name: 'Inuka Women’s Empowerment SACCO',
        vision: 'To empower women through collective savings and investment.',
        members: 45,
        achievements: 'Funded 30 women-owned businesses.',
        goals: 'Increase membership to 100 and invest in sustainable projects.',
      },
      {
        name: 'Innovate Entrepreneurs Society',
        vision: 'To create an ecosystem for women entrepreneurs to thrive.',
        members: 30,
        achievements: 'Successfully funded 15 startups in 2023.',
        goals: 'Grow the fund to $500,000 and mentor 100 startups.',
      },
      {
        name: 'Support Women Community Group',
        vision: 'A group that uplifts women in times of crisis and need.',
        members: 60,
        achievements: 'Assisted 200 women in emergency relief in 2023.',
        goals: 'Provide continuous support and expand network to 500 women.',
      },
    ],
  };
};

// Action to join a group
export const joinGroup = (group) => {
  return {
    type: JOIN_GROUP,
    payload: group, // Ensure the group is passed in the payload
  };
};
