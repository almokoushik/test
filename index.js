var spawn = require("child_process").spawn;
var mm = require("micromatch");

function getStagedFiles(opts, cb) {
  var proc = spawn(
    "git",
    ["diff", "--cached", "--name-only", "--diff-filter=d"],
    { cwd: opts.cwd }
  );
  var stdout = "";
  proc.stdout.on("data", function (chunk) {
    stdout += chunk;
  });
  proc.on("error", cb);
  proc.on("exit", function () {
    var list = stdout.split("\n").filter(Boolean);
    cb(null, list);
  });
}

function filterFilesByPattern(files, patterns) {
  return mm(files, patterns);
}

module.exports = {
  getStagedFiles,
  filterFilesByPattern,
};
