const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Mock data
const courses = [
  { id: 1, name: "Introduction to DevOps" },
  { id: 2, name: "Advanced Cloud Infrastructure" },
];

app.use(cors()); // Enable CORS if your frontend is hosted separately

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
