# Understanding package.json in a React App

**package.json** is a configuration file for JSON.

**create-react-app** uses **webpack** behind the scenes.

- **Dev dependency vs normal dependency:** Dev dependencies are generally required during the development phase, and normal dependencies are used in production. To install a dev dependency, use the command: `npm install -D parcel` (where `-D` means install parcel as a dev dependency).

- **package-lock.json:** This file keeps track of the exact version of packages being installed.

- **node_modules:** Contains all the code of dependencies. It's not pushed to production. If you have package.json and package-lock.json, node_modules can be recreated/regenerated using `npm i`.

- **Transitive dependency:** Installing a package (e.g., parcel) may require other packages, leading to a cascade of installations in the node_modules directory.

- **npx:** Executes a package. For example, `npx parcel index.html` means parcel is executed.

---

## Using CDN vs Managing Dependencies in package.json

Using CDN for React is not recommended for the following reasons:

1. It makes network calls to unpkg.com.
2. Version management becomes an issue.

It's better to have React in package.json for better control.

Example import statement: `import React from "react"`.

---

## What Parcel Does

Parcel performs various tasks, including:

1. Creating dev build.
2. Setting up a local server.
3. HMR (Hot Module Replacement) for automatic refresh on save.
4. Using a file-watching algorithm written in C++ for efficient parsing.
5. Faster builds due to caching in `.parcel-cache`.
6. Image optimizations, minification, bundling during prod build, and compression.
7. Consistent hashing, code splitting, and differential bundling.
8. Better error handling and suggestions.
9. Support for HTTPS.
10. Different configurations for prod and dev builds.

---

## Running the Project with Parcel

To start and build the project using Parcel, scripts are added to package.json:

```json
"scripts": {
  "start": "parcel index.js",
  "build": "parcel build index.html"
}
