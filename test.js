const { getStagedFiles } = require("./index");

// Test getStagedFiles function
const opts = { cwd: "/path/to/your/git/repository" }; // Replace with your actual Git repository path
getStagedFiles(opts, function (err, files) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Staged files:", files);
  }
});
