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

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
````

### Running the App

```bash
npm start
# or
yarn start
```

Visit [http://localhost:3000](http://localhost:3000) to play with customizable board sizes.

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

To run unit tests for game logic:

1. Install Jest and dependencies (if not yet installed):

```bash
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
```

2. Run the test suite:

```bash
npx jest
```

This will execute the unit tests located in `src/utils/__tests__/game.test.ts`, which cover:

* Horizontal, vertical, and diagonal win detection
* Draw scenarios
* Ongoing/incomplete games
* 4x4 and 5x5 winning conditions
