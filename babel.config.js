module.exports = function(api) {
  assets: ['./assets/fonts'], // Fontları içerdiğiniz dizin
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
