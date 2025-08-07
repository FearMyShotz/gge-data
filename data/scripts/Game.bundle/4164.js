Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = function (e) {
  function AGBLinkAcceptComponent(t) {
    var i = this;
    i.ID_TERMS = "#terms";
    i.ID_PRIVACY = "#privacy";
    CONSTRUCTOR_HACK;
    return i = e.call(this, t, "empire_accept_agb_terms_privacy", "") || this;
  }
  n.__extends(AGBLinkAcceptComponent, e);
  AGBLinkAcceptComponent.prototype.onClick = function (t, i) {
    e.prototype.onClick.call(this, t, i);
    a.ClientFunnelTrackingController.getInstance().trackState(o.ClientFunnelGameStates.VIEW_AGB);
  };
  AGBLinkAcceptComponent.prototype.getLinkURL = function (e) {
    switch (e) {
      case this.ID_TERMS:
        return s.EnvGlobalsHandler.globals.urlAGB;
      case this.ID_PRIVACY:
        return s.EnvGlobalsHandler.globals.urlPolicy;
    }
    return "";
  };
  return AGBLinkAcceptComponent;
}(require("./381.js").LinkComponent);
exports.AGBLinkAcceptComponent = r;