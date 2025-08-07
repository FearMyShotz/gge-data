Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./148.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./375.js");
var d = require("./24.js");
var p = require("./40.js");
var h = require("./8.js");
var g = function (e) {
  function SamuraiDaimyoEventDialogContractsItem(t, i, n) {
    var o = e.call(this, null) || this;
    o._disp = (o._clip = new d.CastleGoodgameExternalClip(SamuraiDaimyoEventDialogContractsItem.ASSET_CLIP_NAME, C.IsoHelper.view.getAssetFileURL(f.SamuraiDaimyoEventDialog.NAME))).currentshownDisplayObject;
    o._contractType = t;
    o._progressVO = i;
    o._onClickCallbackFunc = n;
    o.init();
    o.setSelection(false);
    return o;
  }
  n.__extends(SamuraiDaimyoEventDialogContractsItem, e);
  SamuraiDaimyoEventDialogContractsItem.prototype.init = function () {
    h.ButtonHelper.initBasicButton(this.disp, 1);
    m.CrestHelper.setCrestGraphics(this.disp.mc_icon, c.CastleModel.otherPlayerData.getOwnerInfoVO(this.contractType == u.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? r.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE : r.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP).crest);
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, this.getNameTextVO()).autoFitToBounds = true;
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.getRankTextVO()).autoFitToBounds = true;
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._clip = null;
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.setSelection = function (e) {
    this.disp.mc_selected.visible = e;
    this.disp.mc_default.visible = !e;
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getNameTextVO = function () {
    return new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(this.contractType == u.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "contracts_category_daimyo_attack_header" : "contracts_category_township_defend_header"));
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getRankTextVO = function () {
    var e = [this.getXmlContractVO().rank, c.CastleModel.samuraiDaimyoData.xml.getContractSeriesIndex(this.contractType, this.progressVO.id) + 1, c.CastleModel.samuraiDaimyoData.xml.getContractSeries(this.contractType, this.progressVO.id).length];
    return new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("rankAndStep", e));
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getDescriptionTextVO = function () {
    return new s.LocalizedTextVO(this.contractType == u.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "contracts_category_daimyo_attack_desc" : "contracts_category_township_defend_desc");
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getXmlContractVO = function () {
    return c.CastleModel.samuraiDaimyoData.xml.getContractsList(this.contractType).get(this.progressVO.id);
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getXmlDaimyoAreaVO = function () {
    var e = this.getXmlContractVO();
    var t = c.CastleModel.samuraiDaimyoData.server.getArea(this.contractType, e.rank);
    if (this.contractType == u.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE) {
      return c.CastleModel.daimyoCastleXmlData.getDaimyoCastle(t.rank, t.level, t.eventAutoScalingCampID);
    } else {
      return c.CastleModel.daimyoTownshipXmlData.getDaimyoTownship(t.rank, t.level, t.eventAutoScalingCampID);
    }
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this._onClickCallbackFunc) {
      this._onClickCallbackFunc(this);
    }
  };
  Object.defineProperty(SamuraiDaimyoEventDialogContractsItem.prototype, "progressVO", {
    get: function () {
      return this._progressVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsItem.prototype, "contractType", {
    get: function () {
      return this._contractType;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoEventDialogContractsItem.ASSET_CLIP_NAME = "SamuraiDaimyoEvent_QuestItemSub";
  return SamuraiDaimyoEventDialogContractsItem;
}(p.CastleItemRenderer);
exports.SamuraiDaimyoEventDialogContractsItem = g;
var C = require("./46.js");
var _ = require("./14.js");
var m = require("./61.js");
var f = require("./827.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");