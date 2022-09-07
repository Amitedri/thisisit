module.exports = {
  resolve: {
    alias: {
      path: require.resolve('path-browserify'),
    },
    fallback: { path: require.resolve('path-browserify') },
  },
};
