Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./4.js");
var d = require("./216.js");
var p = require("./447.js");
var h = require("./40.js");
var g = require("./8.js");
var C = createjs.MouseEvent;
var _ = function (e) {
  function FusionForgeHubDialogMainItem(t, i, n, o) {
    var a = this;
    a._forgeId = 0;
    a._showDetailedInfo = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t) || this)._forgeId = i;
    a._forgeDialog = n;
    a._forgeDialogOpenedFunc = o;
    a.init();
    return a;
  }
  n.__extends(FusionForgeHubDialogMainItem, e);
  FusionForgeHubDialogMainItem.prototype.init = function () {
    g.ButtonHelper.initBasicButton(this.infoBtn);
    g.ButtonHelper.initBasicButton(this.infoMc, 1);
    m.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new r.LocalizedTextVO("dialog_fusionHub_fusionForges_title"));
    this.disp.mc_info.mouseChildren = false;
  };
  FusionForgeHubDialogMainItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(C.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(C.MOUSE_UP, this.bindFunction(this.onMouseUp));
    m.CastleComponent.controller.addEventListener(p.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    m.CastleComponent.controller.addEventListener(p.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
  };
  FusionForgeHubDialogMainItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(C.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(C.MOUSE_UP, this.bindFunction(this.onMouseUp));
    m.CastleComponent.controller.removeEventListener(p.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    m.CastleComponent.controller.removeEventListener(p.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
    e.prototype.removeEventListener.call(this);
  };
  FusionForgeHubDialogMainItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._showDetailedInfo = false;
    this.update();
  };
  FusionForgeHubDialogMainItem.prototype.update = function () {
    this.mainMc.visible = !this._showDetailedInfo;
    this.detailMc.visible = this._showDetailedInfo;
    m.CastleComponent.textFieldManager.registerTextField(this.infoMc.txt_name, new r.LocalizedTextVO(this.getNameTextId())).autoFitToBounds = true;
    var e = u.CastleModel.fusionForgeData.getForge(this._forgeId);
    if (this._showDetailedInfo) {
      var t = l.int(u.CastleModel.currencyData.getAmountById(u.CastleModel.fusionForgeData.xml.getFusionForge(this._forgeId).dustCurrencyID));
      m.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_level_title, new r.LocalizedTextVO("forgeLevel")).autoFitToBounds = true;
      m.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_level, new s.LocalizedNumberVO(e.level)).autoFitToBounds = true;
      m.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_dust, new s.LocalizedNumberVO(t)).autoFitToBounds = true;
      m.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_hint, new r.LocalizedTextVO("forgeLevel_available", [d.ClientConstFusion.getAvailableLevelUps(e.level, t)])).autoFitToBounds = true;
    } else {
      this.mainMc.mc_icon.gotoAndStop(this._forgeId);
      var i = e.currentEnergy;
      var n = e.getFullEnergy();
      var o = m.CastleComponent.textFieldManager.registerTextField(this.mainMc.txt_amount, new r.LocalizedTextVO("value_proportional_value", [i, n]));
      o.autoFitToBounds = true;
      o.color = i >= n ? c.ClientConstColor.MODERN_GREEN : c.ClientConstColor.MODERN_DEFAULT;
    }
    this.updateInfoButtonState();
    this.downStateMc.visible = false;
  };
  FusionForgeHubDialogMainItem.prototype.updateInfoButtonState = function () {
    this.infoBtn.gotoAndStop(l.int(this._showDetailedInfo ? 4 : 1));
  };
  FusionForgeHubDialogMainItem.prototype.getNameTextId = function () {
    switch (this._forgeId) {
      case a.FusionConst.DECORATION_FORGE_ID:
        return "dialog_fusionHub_fusionForges_deco";
      default:
        return "";
    }
  };
  FusionForgeHubDialogMainItem.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.infoBtn:
          this._showDetailedInfo = !this._showDetailedInfo;
          this.update();
          break;
        case this.disp.mc_info:
          if (this._forgeDialog) {
            m.CastleComponent.dialogHandler.registerDefaultDialogs(this._forgeDialog);
            if (this._forgeDialogOpenedFunc) {
              this._forgeDialogOpenedFunc();
            }
          }
      }
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.infoBtn) {
      this.infoBtn.gotoAndStop(2);
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.infoBtn:
        this.updateInfoButtonState();
        break;
      default:
        this.downStateMc.visible = false;
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseDown = function (e) {
    switch (e.target) {
      case this.infoBtn:
        this.infoBtn.gotoAndStop(3);
        break;
      case this.infoMc:
        this.downStateMc.visible = true;
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseUp = function (e) {
    switch (e.target) {
      case this.infoBtn:
        this.updateInfoButtonState();
        break;
      case this.infoMc:
        this.downStateMc.visible = false;
    }
  };
  FusionForgeHubDialogMainItem.prototype.onEnergyUpdated = function (e) {
    this.update();
  };
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "infoBtn", {
    get: function () {
      return this.disp.btn_info;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "infoMc", {
    get: function () {
      return this.disp.mc_info;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "detailMc", {
    get: function () {
      return this.infoMc.mc_detail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "mainMc", {
    get: function () {
      return this.infoMc.mc_main;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "downStateMc", {
    get: function () {
      return this.infoMc.mc_downState;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeHubDialogMainItem;
}(h.CastleItemRenderer);
exports.FusionForgeHubDialogMainItem = _;
var m = require("./14.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");