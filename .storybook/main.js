module.exports = {
  stories: ['../src/**/*.stories.js','../src/**/**/stories/*.story.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-contexts/register',
  ],
};
