# CC-tic-tac-toe-dynamic-sizes

## Overview

This project extends the classic Tic-Tac-Toe game into a **dynamically sized NxN** board using **React** and **TypeScript**. Players can choose board sizes (e.g., 3x3, 4x4, 5x5), and the game logic scales accordingly.

## Features

- Configurable board size (3x3 and up)
- Dynamic win condition detection for any size
- Winner and draw detection
- Turn-based player logic
- Modular, testable component structure
- Board selector with automatic reset
- Shared logic extracted to `utils/game.ts`

## Demo

Try it live: [https://javalisson.github.io/CC-tic-tac-toe-dynamic-sizes/](https://javalisson.github.io/CC-tic-tac-toe-dynamic-sizes/)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the App (Development)

This project uses **Vite** for fast development and builds.

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to play with customizable board sizes.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Previewing Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
  components/
    Board.tsx       # Renders dynamic board
    Cell.tsx        # Square cell unit
  utils/
    game.ts         # Generalized win/draw logic for NxN boards
  App.tsx           # Handles board size, state, and game flow
  index.tsx         # App entry point
  styles.css        # UI styling
```

## Running Tests

Unit tests use **Jest** and **ts-jest**.

1. Install dependencies (already included in `package.json`):

```bash
npm install
```

2. Run the test suite:

```bash
npm test
# or
yarn test
```

This will execute the unit tests located in `src/utils/__tests__/game.test.ts`, which cover:

* Horizontal, vertical, and diagonal win detection
* Draw scenarios
* Ongoing/incomplete games
* 4x4 and 5x5 winning conditions
