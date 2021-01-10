const path = require("path");

module.exports = {
  entry: {
    main: "./public/js/app/main.js",
    vehicle: "./public/js/app/vehicle/vehicle.js",
    reservation: "./public/js/app/reservation/reservation.js",
    contact: "./public/js/app/contact/contact.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "./public/dist"),
  },
  module: {
    // Babel config
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
