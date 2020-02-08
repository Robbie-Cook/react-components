module.exports = {
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        include: /\.tsx?$/
      }
    },
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ]
};
