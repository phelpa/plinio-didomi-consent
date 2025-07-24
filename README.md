# Consent Manager App

A simple React + TypeScript application for collecting and displaying user consents, built with Vite and Material-UI.

## Features

- **Give Consent:** Users can submit their name, email, and consent preferences (newsletter, targeted ads, statistics).
- **View Collected Consents:** See a paginated table of all consents collected so far.
- **Persistent Storage:** Consents are stored in the browser's localStorage (mock backend).
- **Modern UI:** Built with Material-UI for a clean and responsive interface.

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd plinio-didomi-consent
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

### Building for Production

```sh
npm run build
# or
yarn build
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Project Structure

- `src/components/Sidebar.tsx` — Sidebar navigation
- `src/pages/GiveConsent.tsx` — Consent submission form
- `src/pages/CollectedConsents.tsx` — Table of collected consents
- `src/services/mockApi.ts` — Mock API using localStorage

## Notes

- This project uses a mock API (localStorage) and is intended for demo or educational purposes.
- To reset consents, clear your browser's localStorage for this site.

## License

MIT
