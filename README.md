## Namaste React Course - Session 2 - Ignition - 12/31/2022
- npm is a package manager.
- you begin with doing npm init -y
- It creates package.json
- Parcel is a bundler
- You install Parcel with npm i -D parcel.
- -D is for dev-dependency indication which means it would be used only in dev env
- When you run the above, it creates a package-lock.json
    - Its important file it locks the versions of various packages
    - It SHOULD NOT BE kept in git-ignore
- Package.json has ~ (tild - auto-update for major versions) and ^ (Caret - auto-update for minor versions). If we remove these from package.json, we are preventing auto-update
- npm i command generates node_modules which are all the reelvant packages mentioned in package.json.
- node_modules is a heavy folder since it contains un-minified code for all the dependenct packages and thus shoould be added to gitignore
- When we install a package, lets say parcel, it downloads parcel codebase and keeps in node_modules.
- Keeping the code in node_modules would always be beneficial since accessing the code from node_modules would be faster than accessing it from web, even CDN. So we would also install and keep React in node_modules.
npm i react
npm i react-dom
- Note that we do not use -D for installing react and react-dom
- NPX means execute using npm.
- To run our app with development build , run npx parcel idnex.html
- This would run a local server and build and deploy a development build of our code. You can see the page rendered
- Now you can remove script tags since you have already kept the React and ReactDOM packages
- But once you remove script tags for CDN links, it gives error as React/ReactDOM unknown vars
- In Normal JS, browser doesn't know import keyword. You need to declare the code type as "module" in scrip tag where the code having import keyword is used through script tag.
<script type="module" src="./App.js"></script>
- Parcel also comes up with HMR functionality - change any file and see it reflected without re-bundle, and without browser refresh. It makes use of a file watcher.
- To create production build - remove entryPoint in package.json and run npx parcel build index.html.
- It creates production build and creates following 3 main files in a dist folder along with some .map files.
It prints following data for these files:
dist/index.html                492 B    251ms
dist/index.a28d1165.css         98 B     16ms
dist/index.810d4a27.js     140.16 KB    816ms
- Parcel cleans code (e.g. removes console.log), minifies the code and creates a bundle.
- It takes very less time to generate dev build than prod build.
- Parcel takes care of minifying your image assets too
- It creates build and keeps the files in .parcel-cache folder
- It also caches the build in the .parcel-cache folder to speed up subsequent builds
- You can also run dev server on https using --https flag:
npx parcel index.html --https
- You SHOULD ignore .parcel-cache from versioning so you SHOULD put it in .gitignore
- Parcel also manages port numbers. Which means if any port is busy, it will take some other port
- Parcel is a zero config bundler!
- Transitive dependecies: It is a feature the package manager takes care of where it installs the dependencies and the packages these dependencies are in turn dependent on. i.e. it takes care of dependency tree
- You can add browserslist to package.json which is a string array and can accept string values like:
"last 2 versions" (to support 70% of browsers) or "last 2 Chrome versions" (only last 2 chrome versions - NOT RECOMMENDED). This list ensures the app works for the provided list of browsers while it may not support few features on other browsers.

Next: [Click here](https://github.com/sujit510/namaste-react/tree/session-3-laying-the-foundation) to go to next session notes.