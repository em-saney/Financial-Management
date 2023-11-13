
exports.getUser = (req, res) => {
    const userId = req.params.id;
  
    // Find the user in the mock database
    const user = database.users.find(user => user.id === userId);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };
  
  exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
  
    // Find the user in the mock database and update it
    const userIndex = database.users.findIndex(user => user.id === userId);
  
    if (userIndex !== -1) {
      database.users[userIndex] = { ...database.users[userIndex], ...updatedUser };
      res.json({ message: 'User updated successfully', user: database.users[userIndex] });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };
  
  exports.partialUpdateUser = (req, res) => {
    const userId = req.params.id;
    const partialUpdate = req.body;
  
    // Find the user in the mock database and apply the partial update
    const userIndex = database.users.findIndex(user => user.id === userId);
  
    if (userIndex !== -1) {
      database.users[userIndex] = { ...database.users[userIndex], ...partialUpdate };
      res.json({ message: 'User partially updated successfully', user: database.users[userIndex] });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };
  
  exports.deleteUser = (req, res) => {
    const userId = req.params.id;
  
    // Find the user in the mock database and remove it
    const userIndex = database.users.findIndex(user => user.id === userId);
  
    if (userIndex !== -1) {
      const deletedUser = database.users.splice(userIndex, 1)[0];
      res.json({ message: 'User deleted successfully', user: deletedUser });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };