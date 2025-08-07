Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./157.js");
var l = require("./8.js");
var c = function (e) {
  function BetaTestNewsItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    i = e.call(this, new (a.getDefinitionByName("BetaTestNewsItemMC"))(), t) || this;
    u.CastleComponent.textFieldManager.registerTextField(i._headerMC.txt_label, new s.LocalizedTextVO("dialog_testServer_news_title_" + i.itemProperties.id)).autoFitToBounds = true;
    var n = u.CastleComponent.textFieldManager.registerTextField(i._contentMC.txt_text, new s.LocalizedTextVO("dialog_testServer_news_desc_" + i.itemProperties.id));
    n.height = n.textHeight;
    i._contentMC.bg.height = n.textHeight + BetaTestNewsItem.CONTENT_TEXT_PADDING_TOP + BetaTestNewsItem.CONTENT_TEXT_PADDING_BOTTOM;
    l.ButtonHelper.initBasicButton(i._headerMC, 1);
    return i;
  }
  n.__extends(BetaTestNewsItem, e);
  BetaTestNewsItem.prototype.onClick = function (e) {
    if (l.ButtonHelper.isButtonEnabled(e.target) && this.isEnabled) {
      switch (e.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  BetaTestNewsItem.prototype.expand = function (t, i, n = false) {
    e.prototype.expand.call(this, t, i, n);
    this._headerMC.gotoAndStop(1 + (this._isExpanded ? 1 : 0));
  };
  Object.defineProperty(BetaTestNewsItem.prototype, "itemProperties", {
    get: function () {
      return this._properties;
    },
    enumerable: true,
    configurable: true
  });
  BetaTestNewsItem.__initialize_static_members = function () {
    BetaTestNewsItem.CONTENT_TEXT_PADDING_TOP = 12;
    BetaTestNewsItem.CONTENT_TEXT_PADDING_BOTTOM = 14;
  };
  return BetaTestNewsItem;
}(r.ACollapsibleItem);
exports.BetaTestNewsItem = c;
var u = require("./14.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
c.__initialize_static_members();