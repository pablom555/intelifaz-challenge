# Project Name

Intelifaz Challenge.

## Installation

```bash
npm install
```

## Run

```bash
npm start
navigate to: http://localhost:1234
```


# Redux and React

Redux is like a big warehouse where you store all the necessary information for your application. Think of it as a great file where you organize your important data in one place. This helps us have a single source of truth, as it's commonly called.

When we need to change something in Redux, we can't do it directly. Instead, we do it through "actions," which are nothing more than messages where we tell Redux that we want to change something.

To make these changes, Redux uses reducers. When they receive an action, they check the store and make the necessary changes.

Regarding Redux and React, Redux provides a tool called Provider with which all React components children of this provider can access the Redux store and dispatch actions if necessary.

When a React component needs information from the Redux store, it uses a function called connect. This function allows the component to access the data and make changes as needed.







