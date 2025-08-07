Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./3.js");
var s = function () {
  function RingmenuBuildingInfoArea(e) {
    this.infostate = 0;
    this.ringMenu = e;
    this.progressInfo = new l.RingmenuBuildingProgressInfo(e.progressInfo);
    this.priceInfo = new r.RingmenuBuildingPriceInfo(e.mc_priceInfo);
    this.iinfotxtInfo = o.GoodgameTextFieldManager.getInstance().registerTextField(e.mc_infoText.txt_info, new a.LocalizedTextVO(""));
    this.iinfotxtInfo.textAlign = n.GGSTextAlign.CENTER;
    this.iinfotxtInfo.autoFitToBounds = true;
  }
  RingmenuBuildingInfoArea.prototype.onMouseOver = function (e) {
    var t = e.getInfoText();
    if (t) {
      this.showInfoText(t);
    } else {
      this.showPriceInfo(e.getAction());
    }
  };
  RingmenuBuildingInfoArea.prototype.onMouseOut = function () {
    this.hideInfoTexts();
  };
  RingmenuBuildingInfoArea.prototype.init = function (e) {
    this.targetBuilding = e;
    this.progressInfo.init(e);
    this.priceInfo.init(e);
    this.hideInfoTexts();
  };
  RingmenuBuildingInfoArea.prototype.update = function () {
    if (this.infostate == RingmenuBuildingInfoArea.INFOSTATE_PROGRESS) {
      this.progressInfo.update();
    } else if (this.infostate == RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO) {
      this.priceInfo.update();
    }
  };
  RingmenuBuildingInfoArea.prototype.showPriceInfo = function (e) {
    this.setInfoState(RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO);
    this.priceInfo.setAction(e);
  };
  RingmenuBuildingInfoArea.prototype.showInfoText = function (e) {
    this.setInfoState(RingmenuBuildingInfoArea.INFOSTATE_SIMPLEINFO);
    this.iinfotxtInfo.textContentVO.textId = e;
  };
  RingmenuBuildingInfoArea.prototype.hideInfoTexts = function () {
    this.setInfoState(RingmenuBuildingInfoArea.INFOSTATE_PROGRESS);
    this.progressInfo.update();
  };
  RingmenuBuildingInfoArea.prototype.setInfoState = function (e) {
    this.infostate = e;
    this.ringMenu.progressInfo.visible = false;
    this.ringMenu.mc_infoText.visible = false;
    this.ringMenu.mc_priceInfo.visible = false;
    switch (e) {
      case RingmenuBuildingInfoArea.INFOSTATE_SIMPLEINFO:
        this.ringMenu.mc_infoText.visible = true;
        break;
      case RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO:
        this.ringMenu.mc_priceInfo.visible = true;
        break;
      case RingmenuBuildingInfoArea.INFOSTATE_PROGRESS:
        this.ringMenu.progressInfo.visible = true;
    }
  };
  RingmenuBuildingInfoArea.INFOSTATE_PROGRESS = 0;
  RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO = 1;
  RingmenuBuildingInfoArea.INFOSTATE_SIMPLEINFO = 2;
  return RingmenuBuildingInfoArea;
}();
exports.RingmenuBuildingInfoArea = s;
var r = require("./2082.js");
var l = require("./2621.js");