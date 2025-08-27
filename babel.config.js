export default {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        modules: false,
      },
    ],
    "@babel/preset-typescript",
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: { node: "current" },
            modules: "commonjs",
          },
        ],
        "@babel/preset-typescript",
      ],
    },
  },
};
