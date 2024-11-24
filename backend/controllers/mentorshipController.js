exports.getMentorshipSessions = async (req, res) => {
    try {
      // Fetch mentorship sessions from the database (if stored)
      const sessions = [
        { title: 'Investment 101: Starting Your Journey', videoId: 'your-video-id' },
        { title: 'Advanced Investment Strategies', videoId: 'your-video-id' }
      ];
      res.status(200).json(sessions);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching mentorship sessions' });
    }
  };
  