module.exports = function isCancel(e) {
  return !!e && !!e.__CANCEL__;
};