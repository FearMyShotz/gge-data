Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./799.js");
var u = createjs.Container;
var d = function (e) {
  function CastleLagInformationPanel() {
    var t = e.call(this) || this;
    t.initBackground();
    t.initTextArea();
    t._panelBackground.addChild(t._tfLagValues);
    t._panelBackground.addChild(t._tfLagValue);
    t.addChild(t._panelBackground);
    t.name = "CastleLagInformationPanel";
    return t;
  }
  n.__extends(CastleLagInformationPanel, e);
  CastleLagInformationPanel.prototype.initialize = function () {
    o.BasicModel.smartfoxClient.onAvgNetworkLagTimeResponse.add(this.bindFunction(this.handleAvgNetworkLagTimeResponse));
    this.setVisibility(false);
  };
  CastleLagInformationPanel.prototype.destroy = function () {
    this.stopCheckingLag();
    o.BasicModel.smartfoxClient.onAvgNetworkLagTimeResponse.remove(this.bindFunction(this.handleAvgNetworkLagTimeResponse));
  };
  CastleLagInformationPanel.prototype.setVisibility = function (e) {
    this.visible = e;
    this._tfLagValues.text = "";
  };
  CastleLagInformationPanel.prototype.checkLag = function (e, t) {
    if (e > 0 && t > 1) {
      o.BasicModel.smartfoxClient.checkAvgNetworkLagTime(e, t);
    }
  };
  CastleLagInformationPanel.prototype.stopCheckingLag = function () {
    o.BasicModel.smartfoxClient.stopAvgNetworkLagTimer();
  };
  CastleLagInformationPanel.prototype.addInformation = function (e) {
    this._tfLagValues.appendText(e + "\n");
    this._tfLagValues.scrollV = this._tfLagValues.numLines;
    this._tfLagValue.text = e;
  };
  CastleLagInformationPanel.prototype.handleAvgNetworkLagTimeResponse = function (e) {
    if (!this.visible) {
      this.setVisibility(true);
    }
    a.info("Average lag: " + e + " milliseconds");
    this.addInformation("Average lag: " + e + " milliseconds");
  };
  CastleLagInformationPanel.prototype.initBackground = function () {
    this._panelBackground = new u();
    this._panelBackground.graphics.beginFill(3342336, 0.75);
    this._panelBackground.graphics.drawRoundRect(0, 0, 170, 100, 3, 3);
    this._panelBackground.graphics.drawRoundRect(0, -30, 170, 25, 3, 3);
    this._panelBackground.y = -105;
    this._panelBackground.x = 5;
  };
  CastleLagInformationPanel.prototype.initTextArea = function () {
    this._tfLagValues = new s.TextField();
    this._tfLagValues.width = 160;
    this._tfLagValues.x = 5;
    this._tfLagValues.y = 5;
    this._tfLagValues.textColor = 16777215;
    this._tfLagValues.height = 90;
    this._textFormat = new r.TextFormat();
    this._textFormat.size = 9;
    this._tfLagValues.defaultTextFormat = this._textFormat;
    this._tfLagValue = new s.TextField();
    this._tfLagValue.width = 160;
    this._tfLagValue.x = 5;
    this._tfLagValue.y = -25;
    this._tfLagValue.textColor = 16776960;
    this._tfLagValue.height = 20;
    this._textFormat.size = 13;
    this._tfLagValue.defaultTextFormat = this._textFormat;
  };
  return CastleLagInformationPanel;
}(c.CastleSprite);
exports.CastleLagInformationPanel = d;
l.classImplementsInterfaces(d, "Container");