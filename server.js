const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  try {
    // Read the content of the local Default.htm file
    const indexPath = path.join(__dirname, 'public', 'Default.htm');
    res.sendFile(indexPath);
  } catch (error) {
    console.error('Error reading Default.htm:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
