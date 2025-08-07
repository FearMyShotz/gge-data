Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./255.js");
var a = require("./256.js");
var s = require("./2.js").getLogger("WorldAssignment.CountryXMLParser");
exports.parseCountries = function (e) {
  var t;
  var n = [];
  var i = new DOMParser().parseFromString(e, "text/xml").querySelector("countries");
  if (!i) {
    s.debug("node 'countries' not found");
    return [];
  }
  if (i.children && i.children.length) {
    for (var a = 0; a < i.children.length; a++) {
      t = r(i.children.item(a));
      n.push(t);
    }
  } else {
    s.debug("node 'countries' is null or empty");
  }
  return n;
};
function r(e) {
  var t;
  var n;
  var i = (t = e.querySelector("country")) ? t.textContent : "";
  var s = (t = e.querySelector("lang")) ? t.textContent : "";
  var r = (t = e.querySelector("browserCodes")) ? t.textContent : "";
  var u = (t = e.querySelector("geoIpCodes")) ? t.textContent : "";
  var c = (t = e.querySelector("flashCode")) ? t.textContent : "";
  var _ = (t = e.querySelector("timezoneStart")) ? t.textContent : "";
  var d = (t = e.querySelector("timezoneEnd")) ? t.textContent : "";
  var m = (t = e.querySelector("np")) ? t.textContent : "";
  var h = !!(n = e.attributes.getNamedItem("default")) && n.textContent === "1";
  return new a.Country(i, s, o(r), o(u), o(c), parseFloat(_), parseFloat(d), l(m), h);
}
function o(e) {
  var t = [];
  if (e !== "") {
    for (var n = 0, i = (e = (e = e.replace(/\[/, "")).replace(/\]/, "")).split(","); n < i.length; n++) {
      var a = i[n];
      t.push(a.trim());
    }
  }
  return t;
}
function l(e) {
  switch (e) {
    case "fb":
      return i.CDN.Fallback;
    case "ak":
      return i.CDN.Akamai;
    case "cd":
      return i.CDN.CDNetworks;
    case "cl":
      return i.CDN.Cloudfront;
    case "ll":
      return i.CDN.Limelight;
    default:
      return i.CDN.None;
  }
}