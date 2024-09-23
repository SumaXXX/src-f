import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: {
    app: path.resolve(import.meta.dirname, "src", "index.js"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(import.meta.dirname, "public", "index.html"),
    }),

  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

    ],
  },

  output: {
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
};
