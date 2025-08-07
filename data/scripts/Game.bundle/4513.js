Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./11.js");
var p = createjs.TimerEvent;
var h = function (e) {
  function CastleResearchExpertEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleResearchExpertEventDialog.NAME) || this;
  }
  n.__extends(CastleResearchExpertEventDialog, e);
  CastleResearchExpertEventDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btnClose]);
    e.prototype.initLoaded.call(this);
    this.timer = new a.Timer(100, 1);
    this.timer.addEventListener(p.TIMER, this.bindFunction(this.onClickMouseTimer));
    this.dialogDisp.clickHitArea.mouseChildren = false;
  };
  CastleResearchExpertEventDialog.prototype.applyPropertiesLoaded = function (e = null) {
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.dialogDisp.clickHitArea.actLikeButton = u.CastleModel.researchData.isResearchTowerBuilt;
  };
  CastleResearchExpertEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new l.LocalizedTextVO("dialog_ResearchExpert_speechBubble"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new l.LocalizedTextVO("dialog_ResearchExpert_description"));
    if (this.dialogDisp.mouseX > this.dialogDisp.clickHitArea.x - this.dialogDisp.clickHitArea.width / 2 && this.dialogDisp.mouseX < this.dialogDisp.clickHitArea.x + this.dialogDisp.clickHitArea.width / 2 && this.dialogDisp.mouseY > this.dialogDisp.clickHitArea.y - this.dialogDisp.clickHitArea.height / 2 && this.dialogDisp.mouseY < this.dialogDisp.clickHitArea.y + this.dialogDisp.clickHitArea.height / 2) {
      this.timer.start();
    }
  };
  CastleResearchExpertEventDialog.prototype.onClickMouseTimer = function (e) {
    this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleResearchExpertEventDialog.prototype.hideLoaded = function (t = null) {
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    e.prototype.hideLoaded.call(this);
  };
  CastleResearchExpertEventDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.clickHitArea:
        if (u.CastleModel.researchData.isResearchTowerBuilt) {
          d.CastleExternalDialog.dialogHandler.registerDefaultDialogs(g.CastleResearchDialog);
          this.hide();
        }
    }
  };
  CastleResearchExpertEventDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleResearchExpertEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchExpertEventDialog.prototype, "eventVO", {
    get: function () {
      if (this.dialogProperties.researchExpertEventVO) {
        return this.dialogProperties.researchExpertEventVO;
      } else if (u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_ALCHEMIST)) {
        return u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_ALCHEMIST);
      } else {
        this.hide();
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchExpertEventDialog.__initialize_static_members = function () {
    CastleResearchExpertEventDialog.NAME = "CastleResearchExpertEvent";
  };
  return CastleResearchExpertEventDialog;
}(d.CastleExternalDialog);
exports.CastleResearchExpertEventDialog = h;
var g = require("./450.js");
s.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();