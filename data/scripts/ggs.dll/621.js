Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function CountrySorters() {}
  CountrySorters.sortAlphabetically = function (e, t) {
    var n = [e.ggsCountryCode, t.ggsCountryCode];
    n.sort();
    if (e.ggsCountryCode === t.ggsCountryCode) {
      return 0;
    } else if (n.indexOf(e.ggsCountryCode) < n.indexOf(t.ggsCountryCode)) {
      return -1;
    } else {
      return 1;
    }
  };
  return CountrySorters;
}();
exports.CountrySorters = i;