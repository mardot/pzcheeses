# PZ Cheeses

Production build viewable from:
https://pzcheeses.herokuapp.com/

I have included comments as to how I would build this app if time permitted

## Available Scripts

## For development

In client directory run

### `npm start`

In server directory run

### `npm run dev`

## For production build run:

### in the client directory `npm run build:ui`

### build dir will copy from client to server dir

### then

### in the server directory `npm start`

## Additions/upgrades:

If time permitted:
Markup: _ Incorporate a loading function
_ link to mongoDB using mongoose
_ Integrate a login function using JWT or OAUTH, to allow a user to login and add/delete/edit cheeses.
_ Incorporate middleware for logging errors
_ Add testing to check everything is working
_ Use Restful API (async/await)
