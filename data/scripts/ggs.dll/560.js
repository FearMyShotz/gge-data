exports.formatLocale = function (e) {
  if (typeof e != "string") {
    return e;
  } else {
    return e.split("-").slice(0, 2).map(function (e, t) {
      if (t !== 0 && e.length === 2) {
        return e.toUpperCase();
      } else {
        return e;
      }
    }).join("-");
  }
};