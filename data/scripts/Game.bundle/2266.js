module.exports = function isAxiosError(e) {
  return typeof e == "object" && e.isAxiosError === true;
};