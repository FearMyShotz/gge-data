Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = function (e) {
  function GDPRLinkComponent(t, i, n) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(GDPRLinkComponent, e);
  GDPRLinkComponent.prototype.onClick = function (t, i) {
    if (o.EnvironmentProvider.instance.current.data.languageCode == "ar") {
      var n = "https://www.goodgamestudios.com/terms_ar/";
      n += i;
      var r = new a.URLRequest(n);
      s.navigateToURL(r, "goodgamestudios");
    } else {
      e.prototype.onClick.call(this, t, i);
    }
  };
  return GDPRLinkComponent;
}(require("./2275.js").DarkDialogLinkComponent);
exports.GDPRLinkComponent = r;