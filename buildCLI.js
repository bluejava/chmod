const fs = require("fs")

fs.writeFileSync("cli.js", "#!/usr/bin/env node\n", "utf-8")
fs.chmodSync("cli.js", 0o755)
