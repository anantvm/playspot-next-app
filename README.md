## 🏅 PlaySpot

PlaySpot is a full-stack web application that helps users find and join local sports activities.
Users can log in, create posts about upcoming games, and discover people nearby who are looking for players.
It’s a simple and efficient way to connect players for cricket, badminton, football, tennis, and more.

## ✨ Features

- Create and browse sports activity listings

- Search for games by ZIP code

- Filter by categories: Cricket, Football, Tennis, Badminton, Table Tennis, Hiking, etc.

- Secure user authentication powered by NextAuth

- Store posts and user info using Firebase

- Clean, modern UI built with Tailwind CSS

- Fully responsive and optimized for all devices

## 🛠️ Tech Stack

- Framework: Next.js (React)

- Styling: Tailwind CSS

- Auth: NextAuth

- Database: Firebase Firestore

- Hosting: Vercel 

🚀 How to Run Locally

## Clone this repository
```
git clone https://github.com/anantvm/PlaySpot.git
cd playspot
```

Install dependencies
```
npm install
```

Set up environment variables
Create a .env.local file and add the required Firebase + NextAuth config:
```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

FIREBASE_API_KEY=your_key
FIREBASE_AUTH_DOMAIN=your_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_bucket
FIREBASE_MESSAGING_SENDER_ID=your_id
FIREBASE_APP_ID=your_app_id
```

Run the development server
```
npm run dev
```

Open your browser and visit:
```
http://localhost:3000
```
