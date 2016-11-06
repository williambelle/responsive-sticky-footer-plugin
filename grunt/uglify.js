module.exports = {
  options: {
    compress: {
      drop_console: true,
    },
    sourceMap: true,
    sourceMapName: 'dist/jquery.responsiveStickyFooter.map',
  },
  release: {
    files: {
      'dist/jquery.responsiveStickyFooter.min.js': [
        'src/jquery.responsiveStickyFooter.js',
      ],
    },
  },
};
