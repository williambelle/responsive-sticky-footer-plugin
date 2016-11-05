module.exports = {
  options: {
    compress: {
      drop_console: true,
    },
  },
  release: {
    files: {
      'dist/jquery.responsiveStickyFooter.min.js': [
        'src/jquery.responsiveStickyFooter.js',
      ],
    },
  },
};
