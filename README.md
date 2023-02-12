## Dream Journal App

Dream Journal is a simple, minimal, journaling web application. 

## Features

- Authentication
- Search: full-text search of a user's dreams stored in Firestore for quick access to past entries
- Mobile Friendly: designed to look great on mobile as well as desktop, with easy navigation on both


## Developing

Clone the project:

```bash
git clone https://github.com/Andrea-Galindo/dream-journal.git
```

Install dependencies:

```bash
npm install
```

or

```bash
yarn install 
```

Then configure a file in a new `.env.local` file with the following keys from the firebase console:

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID

```

https://dream-journal-d15d5.web.app

