module.exports = function isAbsoluteURL(e) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
};