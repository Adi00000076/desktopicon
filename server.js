// const express = require('express');
// const cors = require('cors');
// const { exec } = require('child_process');
// const app = express();
// const port = 3000;

// // Use the cors middleware
// app.use(cors());

// app.get('/run-exe', (req, res) => {
//   exec('C:\\Users\\infyz\\Desktop\\app.exe', (error, stdout, stderr) => {
//     if (error) {
//       res.status(500).send(`Error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       res.status(500).send(`stderr: ${stderr}`);
//       return;
//     }
//     res.send(`stdout: ${stdout}`);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });




const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

app.get('/run-exe', (req, res) => {
  // Construct the path to the .exe file in the current directory
  const exePath = path.join(__dirname, 'app.exe');

  exec(exePath, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      res.status(500).send(`stderr: ${stderr}`);
      return;
    }
    res.send(`stdout: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
