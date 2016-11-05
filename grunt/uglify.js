module.exports = {
  options: {
    compress: {
      drop_console: true,
    },
  },
  release: {
    files: {
      'dist/jquery.responsiveStickyFooter-<%= pkg.version %>.min.js': [
        'src/jquery.responsiveStickyFooter.js',
      ],
    },
  },
};
