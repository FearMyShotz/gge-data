Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./2695.js");
var r = require("./31.js");
var l = require("./19.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./11.js");
var p = createjs.Point;
var h = function (e) {
  function AConstructionItemsActionDialog(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(AConstructionItemsActionDialog, e);
  AConstructionItemsActionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_accept, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel]);
  };
  AConstructionItemsActionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    c.CastleModel.timerData.removeEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._itxt_Timer = null;
    this._expiringCI = null;
  };
  AConstructionItemsActionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_accept:
          this.onClickAccept();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.onClickCancel();
      }
    }
  };
  AConstructionItemsActionDialog.prototype.onClickAccept = function () {
    this.hide();
  };
  AConstructionItemsActionDialog.prototype.onClickCancel = function () {
    this.hide();
  };
  AConstructionItemsActionDialog.prototype.sendReplaceCommand = function (e) {
    c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SReplaceConstructionItemVO(this.dialogProperties.buildingVO.objectId, this.dialogProperties.constructionItemVO.id, this.dialogProperties.slotVO.index, e, c.CastleModel.kingdomData.activeKingdomID, c.CastleModel.areaData.activeAreaInfo.objectId));
  };
  AConstructionItemsActionDialog.prototype.renderBuilding = function (e, t) {
    _.WodPicHelper.addWodPic(e, t.mc_icon, t.width, t.height);
  };
  AConstructionItemsActionDialog.prototype.renderConstructionItem = function (e, t, i = false, n = null) {
    var o = new C.CollectableRenderer(new r.CollectableRenderClips(t), new l.CollectableRenderOptions(l.CollectableRenderOptions.SET_ICON, AConstructionItemsActionDialog.CONSTRUCTION_ITEM_SIZE));
    o.changeItemVO(new g.CollectableItemConstructionItemVO(e.id));
    o.options.icon.renderAsBroken = i;
    o.update();
    this.collectableRenderList.push(o);
    if (n) {
      if (e.isTemporary) {
        n.visible = true;
        n.toolTipText = "resttime";
        n.mouseChildren = false;
        var s = this.textFieldManager.registerTextField(n.txt_time, new a.TextVO(m.CastleTimeStringHelper.getShortTimeString(e.getRemainingTime())));
        if (e.isExpiring()) {
          this._itxt_Timer = s;
          this._expiringCI = e;
          c.CastleModel.timerData.addEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
        }
      } else {
        n.visible = false;
      }
    }
  };
  AConstructionItemsActionDialog.prototype.onTimer = function (e) {
    if (this._itxt_Timer && this._expiringCI) {
      this._itxt_Timer.textContentVO.stringValue = m.CastleTimeStringHelper.getShortTimeString(this._expiringCI.getRemainingTime());
    }
  };
  Object.defineProperty(AConstructionItemsActionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AConstructionItemsActionDialog.__initialize_static_members = function () {
    AConstructionItemsActionDialog.CONSTRUCTION_ITEM_SIZE = new p(52, 52);
  };
  return AConstructionItemsActionDialog;
}(d.CastleExternalDialog);
exports.AConstructionItemsActionDialog = h;
var g = require("./337.js");
var C = require("./186.js");
var _ = require("./63.js");
var m = require("./27.js");
var f = require("./21.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();