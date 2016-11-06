// Copy files
module.exports = {
  release: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['*.js'],
      dest: 'dist/',
      nonull: true,
    },],
  },
};
