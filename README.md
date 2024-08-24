# Shipment Tracking App

This is a React Native application for tracking shipments. The app includes a splash screen with animation, a login screen with validation, and a shipment list screen with pull-to-refresh functionality.

## Features

- Splash Screen: Includes an animation.
- Login Screen: Validates user input.
- Shipment List: Displays a list of shipments with their status. The list supports pull-to-refresh.

## Prerequisite

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- Git
- npm (https://www.npmjs.com/) or yarn (https://yarnpkg.com/)
- Expo CLI (https://docs.expo.dev/more/expo-cli/) (if using Expo)

## Installation

1. # Clone the repository

git clone https://github.com/kinglylam/TrackingApp

2.  # Navigate to the project directory

cd TrackingApp

3. # Install dependencies: Using npm:

   npm install

   # Or using yarn

   yarn install

## Running the App

## Using Expo

1. # Start the Expo development server:

   expo start

2. # Run the app:

- Scan the QR code in the terminal using the Expo Go app on your mobile device (iOS or Android).

- Alternatively, press a to run the app on an Android emulator, or i to run it on an iOS simulator.

## Without Expo

# If you're using React Native CLI, follow these steps:

1. # Start the Metro Bundler:

   npx react-native start

2. # Run on Android:

   npx react-native run-android

3. # Run on IOS

   npx react-native run-ios

## Project Structure

- `assets`: Asset folder to store all images, vectors, etc.
- `components`: Folder to store any common component that you use through your app (such as a generic button)
- `constants`: Folder to store any kind of constant that you have.
- `context`: This folder contains React Contexts that manage and provide global state across the application.
- `core`:This directory houses the core logic and foundational components of the application, such as navigation, API service setup, and key configuration files.
- `helpers`: Contains helper functions that perform specific tasks, often used in multiple places across the app. These are similar to utilities but usually more task-specific.
- `navigation`: Folder to store the navigators.
- `screens`: Folder that contains all your application screens/features.
- `types`: This directory contains TypeScript type definitions that ensure type safety throughout the application.
- `utils`: Utility functions that are reusable across the application.
- `metro.config.js`:Configuration file for Metro, the JavaScript bundler used by React Native. It helps in customizing the behavior of the bundler, such as asset resolution, custom module paths, etc.
- `index.d.ts`: Contains global type declarations that need to be available throughout the entire TypeScript project. This is where you can add custom types or extend existing ones without importing them in every file
- `babel.config.js`: Babel configuration file that defines the presets and plugins for transforming the JavaScript and TypeScript codebase into a format compatible with older browsers or environments.
- `tsconfig.json`: TypeScript configuration file that specifies the compiler options, paths, and the structure of the project. It ensures that TypeScript compiles the code according to the specified rules and paths.
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## TypeScript

The project is written in TypeScript. All TypeScript files have the .tsx or .ts extension. Type definitions for the project are included in the types directory.
