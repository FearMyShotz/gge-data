Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function AOfferHubItemStatusIcon(t, i = null, n = a.int(r.ACastleStatusIcon.PRIORITY_LOW), o = null) {
    var s = this;
    s._isNew = true;
    CONSTRUCTOR_HACK;
    o ||= {};
    o.icon = t;
    (s = e.call(this, "Btn_OfferHubItem", "txt_label", i, n, o) || this).iconClip.doWhenLoaded(s.bindFunction(s.initInnerIconOnLoaded));
    s.allowCaching = false;
    return s;
  }
  n.__extends(AOfferHubItemStatusIcon, e);
  AOfferHubItemStatusIcon.prototype.preInit = function (t = null) {
    e.prototype.preInit.call(this, t);
    this._innerIconClassName = this.getOfferHubIconName(t.icon);
    this._innerIconClip = r.ACastleStatusIcon.getAsExternalClip(this._innerIconClassName);
  };
  AOfferHubItemStatusIcon.prototype.getOfferHubIconName = function (e) {
    var t = e + AOfferHubItemStatusIcon.OFFERHUB_ICON_SUFFIX;
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(t)) {
      return t;
    } else {
      return e;
    }
  };
  AOfferHubItemStatusIcon.prototype.initInnerIconOnLoaded = function (e) {
    if (this._innerIconClip) {
      this._innerIconClip.doWhenLoaded(this.bindFunction(this.onInnerIconClipLoaded));
    }
  };
  AOfferHubItemStatusIcon.prototype.initLoaded = function (t = null) {
    this.allowCaching = false;
    e.prototype.initLoaded.call(this, t);
    this.icon.basicButton.removeMouseEventListener();
    this.icon.btn_favourite.visible = false;
    this.icon.mouseChildren = true;
    this.icon.mc_hit.mouseChildren = false;
    this.icon.mc_hit.actLikeButton = true;
  };
  AOfferHubItemStatusIcon.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.icon.icon_new.visible = true;
    this._isNew = true;
  };
  AOfferHubItemStatusIcon.prototype.setAsSeen = function () {
    this.icon.icon_new.visible = false;
    this._isNew = false;
  };
  AOfferHubItemStatusIcon.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
  };
  Object.defineProperty(AOfferHubItemStatusIcon.prototype, "innerIconClassName", {
    get: function () {
      return this._innerIconClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AOfferHubItemStatusIcon.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    enumerable: true,
    configurable: true
  });
  AOfferHubItemStatusIcon.prototype.hitDisp = function () {
    return this.icon.mc_hit;
  };
  AOfferHubItemStatusIcon.OFFERHUB_ICON_SUFFIX = "_Hub";
  return AOfferHubItemStatusIcon;
}(require("./175.js").AOfferHubBaseStatusIcon);
exports.AOfferHubItemStatusIcon = s;
var r = require("./110.js");