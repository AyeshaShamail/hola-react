# This is a Hola React

# Parcel

-Dev Build
-Local Server
-Automatically refresh the page HMR (Hot Module replacement)
-Parcel uses file Watching Algorithm which is written in C++
-Parcel is giving faster build experience by doing caching
-It helps in image optimization
-Bundling
-Minification
-Compresses the file
-Consistent hashing
-code splitting
-Differential bundling(Gives support for older browsers)
-Diagnostics
-error handling
-Https
-Tree Shaking - it removes unused code for you
-It creates different production and dev bundle(Less optimization on dev build nad more in production build)

# Food-App

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard

- Img
- Name of Res, Star Rating, cuisine, delery tie
  Footer
  Copyright
  Links
  Address
  Contact

# Imports and Exports

Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";

# React Hooks

(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()

# Routing

2 types Routing in web apps
Client Side Routing
Server Side Routing

# Redux Toolkit

Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector

# Types of testing (devloper)

Unit Testing
Integration Testing
End to End Testing - e2e testing

# Setting up Testing in our app

Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom
