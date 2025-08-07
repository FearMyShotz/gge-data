Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AModernInfoCatalogDialogSublayer(t) {
    var i = this;
    i._pages = new Map();
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(AModernInfoCatalogDialogSublayer, e);
  AModernInfoCatalogDialogSublayer.prototype.init = function () {
    this._topics = new s.InfoCatalogTopicComponent(this.subLayerDisp.mc_topic);
  };
  AModernInfoCatalogDialogSublayer.prototype.addPage = function (e, t, i) {
    this._pages.set(e, new t(i));
  };
  AModernInfoCatalogDialogSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._topics.onTopicChanged.add(this.bindFunction(this.onTopicChanged));
    this._topics.onShow();
    if (this._pages != null) {
      for (var i = 0, n = Array.from(this._pages.values()); i < n.length; i++) {
        n[i].onShow();
      }
    }
  };
  AModernInfoCatalogDialogSublayer.prototype.hide = function () {
    this._topics.onTopicChanged.remove(this.bindFunction(this.onTopicChanged));
    this._topics.onHide();
    if (this._pages != null) {
      for (var t = 0, i = Array.from(this._pages.values()); t < i.length; t++) {
        i[t].onHide();
      }
    }
    e.prototype.hide.call(this);
  };
  AModernInfoCatalogDialogSublayer.prototype.updateInfoPages = function () {
    for (var e = this.getInfoPagesMc(), t = 0; t < e.numChildren; ++t) {
      e.getChildAt(t).visible = false;
    }
    var i = this._topics.getSelectedTopic().topicType;
    var n = this.getInfoPage(i.pageName);
    if (n) {
      n.setVisibility(true);
    }
    this.updateInfoPage(n, this.topics.getSelectedTopic());
  };
  AModernInfoCatalogDialogSublayer.prototype.updateInfoPage = function (e, t) {};
  AModernInfoCatalogDialogSublayer.prototype.getInfoPagesMc = function () {
    return this.subLayerDisp.mc_pages;
  };
  AModernInfoCatalogDialogSublayer.prototype.getInfoPage = function (e) {
    return this._pages.get(e);
  };
  AModernInfoCatalogDialogSublayer.prototype.onTopicChanged = function () {
    this.updateInfoPages();
  };
  Object.defineProperty(AModernInfoCatalogDialogSublayer.prototype, "topics", {
    get: function () {
      return this._topics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernInfoCatalogDialogSublayer.prototype, "pages", {
    get: function () {
      return this._pages;
    },
    enumerable: true,
    configurable: true
  });
  return AModernInfoCatalogDialogSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.AModernInfoCatalogDialogSublayer = a;
var s = require("./2503.js");
o.classImplementsInterfaces(a, "ICollectableRendererList", "ISublayer");