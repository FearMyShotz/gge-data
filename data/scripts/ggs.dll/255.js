var i;
Object.defineProperty(exports, "__esModule", {
  value: true
});
(function (e) {
  e[e.None = 0] = "None";
  e[e.Fallback = 1] = "Fallback";
  e[e.Akamai = 2] = "Akamai";
  e[e.CDNetworks = 3] = "CDNetworks";
  e[e.Cloudfront = 4] = "Cloudfront";
  e[e.Limelight = 5] = "Limelight";
})(i ||= {});
exports.CDN = i;
(function (e) {
  e.abbreviation = function abbreviation(t) {
    switch (t) {
      case e.None:
        return "";
      case e.Fallback:
        return "fb";
      case e.Akamai:
        return "ak";
      case e.CDNetworks:
        return "cd";
      case e.Cloudfront:
        return "cl";
      case e.Limelight:
        return "ll";
    }
  };
})(i ||= {});
exports.CDN = i;