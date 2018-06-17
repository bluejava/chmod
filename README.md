# Chmod

Forked from [https://github.com/popomore/chmod](https://github.com/popomore/chmod) - added .bin command so that it may be used within other `package.json` build scripts. To use, include this module in `dev-dependencies` and within a `package.json` `script` section:

```json
	"buildCLI": "rollup src/cli.js --f iife > cli.js && chmod(cli.js, 755)"
```

Inspired by [gulp-chmod](https://github.com/sindresorhus/gulp-chmod), but can be used everywhere.

---

## Install

```bash
$ npm install chmod -g
```

## Usage

```javascript
var chmod = require('chmod');
chmod(file, 777);
```

Or you can use object instead of number, see [stat-mode](https://github.com/TooTallNate/stat-mode)

```javascript
chmod(file, {
  owner: {
    read: true,
    write: true,
    execute: true
  },
  group: {
    read: true,
    write: true,
    execute: true
  },
  others: {
    read: true,
    write: true,
    execute: true
  }
});
```

You can also write a object Simply when the same for each

```javascript
chmod(file, {
  read: true
});

// equals

chmod(file, {
  owner: {
    read: true
  },
  group: {
    read: true
  },
  others: {
    read: true
  }
});
```

Otherwise will throw

## LICENSE

Copyright (c) 2014 popomore. Licensed under the MIT license.
