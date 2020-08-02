const path = require('path');
const { config } = require('process');

module.exports = {
  webpack: (config) => {
    // config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
