Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./32.js");
var a = require("./15.js");
var s = require("./4.js");
var r = require("./2.js");
var l = function (e) {
  function CastleBasicLayout() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleBasicLayout, e);
  CastleBasicLayout.prototype.setLayout = function (e, t) {
    this._lcontext = e;
    this.removeInterface(e);
    e.showPanelRedirecter(c.CastleChatPanel, null, false);
    e.showPanelRedirecter(d.CastleQuestStartPanel, null, false);
    if (s.CastleModel.userData.level > 1) {
      e.showPanelRedirecter(p.CastleStatusPanel, null, false);
    } else {
      a.CastleBasicController.getInstance().addEventListener(o.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    }
    e.showPanelRedirecter(h.CastleUserStatePanel, null, false);
    e.showPanelRedirecter(u.CastleOptionPanel, null, true);
    e.showPanelRedirecter(d.CastleQuestStartPanel, null, false);
    e.showPanelRedirecter(g.CastleMultiInfoPanel, null, false);
    this.addBuddyListPanel(e);
  };
  Object.defineProperty(CastleBasicLayout.prototype, "castleEnv", {
    get: function () {
      return r.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLayout.prototype.onLevelUp = function () {
    this._lcontext.showPanelRedirecter(p.CastleStatusPanel, null, false);
    a.CastleBasicController.getInstance().removeEventListener(o.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  return CastleBasicLayout;
}(require("./555.js").ACastleLayoutStrategy);
exports.CastleBasicLayout = l;
var c = require("./1117.js");
var u = require("./514.js");
var d = require("./462.js");
var p = require("./472.js");
var h = require("./842.js");
var g = require("./673.js");