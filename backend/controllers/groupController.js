const Group = require('../models/groupModel');

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching groups' });
  }
};

exports.joinGroup = async (req, res) => {
  const { groupId, user } = req.body; // Extract user details from the request
  try {
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    // Add the user to the group
    group.members.push(user);
    await group.save();

    res.status(200).json({ message: 'Joined group successfully', group });
  } catch (error) {
    res.status(500).json({ error: 'Error joining group' });
  }
};
