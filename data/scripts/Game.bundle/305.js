Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./41.js");
var c = require("./109.js");
var u = function (e) {
  function ACastleLabeledStatusIcon(t, i = "txt_label", n = null, o = s.int(c.ACastleStatusIcon.PRIORITY_LOW), r = null) {
    var l = e.call(this, t, o) || this;
    l.preInit(r);
    l.textVO = n || new a.TextVO("");
    l._textFieldName = i;
    l.init();
    l.setVisibility();
    return l;
  }
  n.__extends(ACastleLabeledStatusIcon, e);
  ACastleLabeledStatusIcon.prototype.preInit = function (e = null) {};
  ACastleLabeledStatusIcon.prototype.init = function () {
    if (this.textVO && this._textFieldName) {
      e.prototype.init.call(this);
    }
  };
  ACastleLabeledStatusIcon.prototype.setVisibility = function () {
    if (this.textVO && this._textFieldName) {
      e.prototype.setVisibility.call(this);
    }
  };
  ACastleLabeledStatusIcon.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initTextField();
    var i = h.castAs(d.CastleLayoutManager.getInstance().getPanel(p.CastleStatusPanel), "CastleStatusPanel");
    if (i) {
      i.updatePosition();
    }
  };
  ACastleLabeledStatusIcon.prototype.initTextField = function () {
    if (this._textFieldName.indexOf(".") > -1) {
      this.tf = l.CastleMovieClipHelper.iterateThroughMc(this.iconDisp, this._textFieldName);
    } else {
      this.tf = this.iconDisp.getChildByName(this._textFieldName);
    }
    if (this.tf != null) {
      this._itxt_label = this.textFieldManager.registerTextField(this.tf, this.textVO);
      if (this._itxt_label && this._itxt_label.multiline) {
        this._itxt_label.verticalAlign = o.GGSVerticalAlign.MIDDLE;
      }
      this.textVO.propertyChangedSignal.add(this.bindFunction(this.updateCache));
    }
  };
  ACastleLabeledStatusIcon.prototype.disposeLoaded = function () {
    e.prototype.disposeLoaded.call(this);
    if (this.textVO) {
      this.textVO.propertyChangedSignal.remove(this.bindFunction(this.updateCache));
    }
    this.textFieldManager.unregisterTextField(this.tf);
    this._itxt_label = null;
    this.tf = null;
  };
  Object.defineProperty(ACastleLabeledStatusIcon.prototype, "timerData", {
    get: function () {
      return r.CastleModel.timerData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleLabeledStatusIcon.prototype, "itxt_label", {
    get: function () {
      return this._itxt_label;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleLabeledStatusIcon;
}(c.ACastleStatusIcon);
exports.ACastleLabeledStatusIcon = u;
var d = require("./17.js");
var p = require("./473.js");
var h = require("./1.js");