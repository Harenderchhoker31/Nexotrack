# NexoTrack - Cryptocurrency Tracking Platform

A modern, responsive cryptocurrency tracking application built with React and Firebase.

## Features

- **Real-time Cryptocurrency Data**: Live prices, market cap, and 24h changes
- **User Authentication**: Secure login/signup with Firebase Auth
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Search Functionality**: Find cryptocurrencies quickly
- **Detailed Coin Information**: View comprehensive coin details
- **Currency Converter**: Convert between different cryptocurrencies
- **Trending Coins**: Stay updated with trending cryptocurrencies
- **Educational Resources**: Learn about cryptocurrency fundamentals

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **API**: CoinGecko API
- **Routing**: React Router DOM
- **Notifications**: React Toastify

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nexotrack.git
cd nexotrack
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure Firebase:
   - Create a Firebase project
   - Enable Authentication
   - Copy your Firebase config to the `.env` file

5. Start the development server:
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Project Structure

```
src/
├── components/          # React components
├── contexts/           # React contexts (Auth)
├── api/               # API functions
├── images/            # Static images
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── firebase.js        # Firebase configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For support or questions, contact us at support@nexotrack.com