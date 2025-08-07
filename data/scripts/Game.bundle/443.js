Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./618.js");
var s = require("./396.js");
var r = require("./4.js");
var l = require("./43.js");
var c = require("./11.js");
var u = require("./201.js");
var d = function (e) {
  function CastleSpyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSpyDialog.NAME) || this;
  }
  n.__extends(CastleSpyDialog, e);
  CastleSpyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._spyState = new _.CastleSpyDialogSpyState(this);
    this._sabotageState = new C.CastleSpyDialogSabotageState(this);
    this._plagueState = new g.CastleSpyDialogPlagueState(this);
    this.initBasicButtons([this.dialogDisp.btnOk, this.dialogDisp.btnTabSpy, this.dialogDisp.btnTabSabotage, this.dialogDisp.btnTabPlague, this.dialogDisp.btnClose, this.dialogDisp.btnCancel]);
  };
  CastleSpyDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    c.CastleExternalDialog.dialogHandler.registerDialogsWithType(h.CastleExternalPreloaderDialog, new u.CastleExternalPreloaderDialogProperties(null), false, l.CastleDialogConsts.PRIORITY_TOP, 0, l.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    this._spyState.removeEventListenerOnHide();
    this._sabotageState.removeEventListenerOnHide();
    this._plagueState.removeEventListenerOnHide();
    this.controller.addEventListener(s.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
    this.controller.addEventListener(s.CastleSpyDataEvent.PRE_SPYINFO_FAILED, this.bindFunction(this.onPreSpyInfoFailed));
    r.CastleModel.smartfoxClient.sendCommandVO(new a.C2SGetSpyInfo(this.dialogProperties.worldmapObjectVO.absAreaPosX, this.dialogProperties.worldmapObjectVO.absAreaPosY, this.dialogProperties.worldmapObjectVO.kingdomID));
  };
  CastleSpyDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this._spyState.removeEventListenerOnHide();
    this._sabotageState.removeEventListenerOnHide();
    this._plagueState.removeEventListenerOnHide();
    this.controller.removeEventListener(s.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
    this.controller.removeEventListener(s.CastleSpyDataEvent.PRE_SPYINFO_FAILED, this.bindFunction(this.onPreSpyInfoFailed));
  };
  CastleSpyDialog.prototype.onPreSpyInfoUpdate = function (e) {
    if (!e.params[1] || e.params[1].equals(this.dialogProperties.worldmapObjectVO.absAreaPos)) {
      this._startSpyVO = e.params[0];
      this._startSpyVO.worldmapObjectVO = this.dialogProperties.worldmapObjectVO;
      switch (this.dialogProperties.tabOpenAtStart) {
        default:
        case CastleSpyDialog.TAB_SPY:
          this.setState(this._spyState);
          this._spyState.selectSpyType(this.dialogProperties.wasEcoSpy ? 1 : 0);
          break;
        case CastleSpyDialog.TAB_SABOTAGE:
          this.setState(this._sabotageState);
          break;
        case CastleSpyDialog.TAB_PLAGUE:
          this.setState(this._plagueState);
      }
      p.CastleLayoutManager.getInstance().hideDialog(h.CastleExternalPreloaderDialog);
    }
  };
  CastleSpyDialog.prototype.onPreSpyInfoFailed = function (e) {
    p.CastleLayoutManager.getInstance().hideDialog(h.CastleExternalPreloaderDialog);
    this.hide();
  };
  CastleSpyDialog.prototype.setState = function (e) {
    if (this.currentState) {
      this.currentState.resetState();
    }
    this.currentState = e;
    this.currentState.updateElements();
    this.currentState.updateTexts();
    this.currentState.updateData();
    this.currentState.addEventListenerOnShow();
  };
  CastleSpyDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.currentState) {
      this.currentState.onClick(t);
    }
  };
  Object.defineProperty(CastleSpyDialog.prototype, "spyState", {
    get: function () {
      return this._spyState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "sabotageState", {
    get: function () {
      return this._sabotageState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "plagueState", {
    get: function () {
      return this._plagueState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialog.prototype, "startSpyVO", {
    get: function () {
      return this._startSpyVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyDialog.__initialize_static_members = function () {
    CastleSpyDialog.NAME = "CastleSpyEx";
    CastleSpyDialog.TAB_SPY = 0;
    CastleSpyDialog.TAB_SABOTAGE = 1;
    CastleSpyDialog.TAB_PLAGUE = 2;
  };
  return CastleSpyDialog;
}(c.CastleExternalDialog);
exports.CastleSpyDialog = d;
var p = require("./17.js");
var h = require("./154.js");
var g = require("./2560.js");
var C = require("./2563.js");
var _ = require("./2564.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();