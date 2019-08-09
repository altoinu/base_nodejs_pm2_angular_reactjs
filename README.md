Node.js version - v10.16.0
pm2 version - v3.5.1

Initial set up
- npm install
- bower install (or npm run bower install)

To start/restart:
- http://pm2.keymetrics.io/docs/usage/cluster-mode
   - Immediately shuts down currently running process and then starts new one.
   - Causes this too-
      - App [video_stitcher_website] with id [0] and pid [20743], exited with code [100] via signal [SIGINT]
- pm2 start [json file].json
- pm2 restart [json file].json
- pm2 startOrRestart [json file].json

To reload:
- http://pm2.keymetrics.io/docs/usage/cluster-mode/#reload
- https://stackoverflow.com/questions/44883269/what-is-the-difference-between-pm2-restart-and-pm2-reload
   - "With reload, pm2 restarts all processes one by one, always keeping at least one process running."
   - "If the reload system hasn’t managed to reload your application, a timeout will fallback to a classic restart."
- pm2 reload [json file].json
- pm2 startOrReload [json file].json

To gracefully reload (RECOMMENDED):
- http://pm2.keymetrics.io/docs/usage/cluster-mode/#graceful-shutdown
- http://pm2.keymetrics.io/docs/usage/signals-clean-restart/
   - Allows to do process.on('SIGINT', function() {... before shutdown
- pm2 gracefulReload [json file].json
- pm2 startOrGracefulReload [json file].json (reloads env var as well)

Notes when restarting:
As of pm2 -v 3.5.1
- --update-env option doesn't seem to be working as it should
   - https://github.com/Unitech/pm2/issues/3796
- watch: true does not update env that were changed in config .json
   - need to manually do pm2 startOrGracefulReload [json file].json
- Manual restart/reload/gracefulReload causes env to be updated to whatever is in config .json
   - However, if env var is removed from .json, it still remains in process.env and gets loaded.
   Not sure if this is pm2/node bug or just the way things are.
      - To prevent this, do pm2 delete to completely remove then pm2 start

Generating docs
- npm run build:doc
	- apidoc
	   - https://www.npmjs.com/package/apidoc
	   - http://apidocjs.com/
	      - http://apidocjs.com/#params
	   - npm run build:doc:apidoc
	      - outputs to server/apidoc
	- jsdoc
	   - https://www.npmjs.com/package/jsdoc
	   - https://jsdoc.app/
	      - https://jsdoc.app/about-getting-started.html
	      - https://jsdoc.app/tags-example.html
	      - Namepaths https://jsdoc.app/about-namepaths.html
	      - Namespace https://jsdoc.app/tags-namespace.html
	         - memberof https://jsdoc.app/tags-memberof.html
	      - Module https://jsdoc.app/tags-module.html
	         - param https://jsdoc.app/tags-param.html
	         - Function https://jsdoc.app/tags-function.html
	         - Class https://jsdoc.app/tags-class.html
	   - npm run build:doc:jsdoc
	      - outputs to server/jsdoc