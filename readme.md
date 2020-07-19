# React Boilerplate

Hi there! :wave: This boilerplate contains libraries and tools like React-Router and Redux to build complex React Web applications. Moreover, it also has a database (Firebase),where you can setup user authentication,manage data. You can also test your React application with Jest test framework.

---

# Tools/ Scripts :hammer:

- `npm install` - to install modules to start your Project
- `npm run build:prod` - to build a React application to production
- `npm run dev-server` - to run development server on  `localhost:8080`
- `npm test` - to run test suits
- `npm test -- --watchAll` to run test in watch mode

---

# Additional Instructions

To setup Firebase, create a firebase application. Copy config and create following files: `.env.development` for development and `.env.test` for test suits.The content of the files should be as following:

    FIREBASE_API_KEY=valueFromConfig
    FIREBASE_AUTH_DOMAIN=valueFromConfig
    FIREBASE_DATABASE_URL=valueFromConfig
    FIREBASE_PROJECT_ID=valueFromConfig
    FIREBASE_STORAGE_BUCKET=valueFromConfig
    FIREBASE_MESSAGING_SENDER_ID=valueFromConfig
