const path = require("path");
const webpack = require("webpack");

const branchName = process.env.BRANCH_NAME || "develop";
const filename =
  branchName === "develop" ? "dev.personalization.js" : "personalization.js";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"],
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
