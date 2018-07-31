## Install
- Clone the project on your machine.
  **Development mode**
- Run 'npm install'.
- Run 'npm start'.


## Details

This project was build with the google maps apis, in React.

The application provides a map with 5 interactive markers of points of interest in Bucharest, Romania.
Every marker provides a short description about the location it represents, an image, and a link to the Wikipedia page to read more about the place.

The image and the description were fetched from the Wikipedia API.

## Beginnings

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

##Production mode

- The service worker with the create-react-app only works in the production build, not in the development mode.
- We can run it in production by using the following commands:
**npm run serve**
**And then visit localhost:5000**
- or
- npm run build
- serve -s build
- And then visit http://localhost:5000
