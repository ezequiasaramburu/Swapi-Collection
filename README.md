<h1 align="center">
  Swapi Collection
</h1>

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Summary

In order to avoid errors I used TypeScript. I try to split the code as much as possible to get cleaner code and more maintainable. That's the reason I use the following folder structure:

```
/screen
    /components
    index.ts
    hooks.ts
    styles.ts
```

On dependencies I tried the fewer as possible.

- react-navigation (Used to create stacks and drawer for navigation, useful if app stars growing)

Also I've implemented absolute paths in order to avoid long imports e.g: `../../../../Component/...`

## Dependencies

This app uses the following open source packages:

- [react-navigation](https://reactnavigation.org/)
