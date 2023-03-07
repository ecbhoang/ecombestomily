const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
    output: {
      path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
      filename: isProd ? "personalization.js" : "dev.personalization.js", // Tên file được build ra
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
};
