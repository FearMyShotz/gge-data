Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./601.js");
var r = require("./602.js");
var l = require("./931.js");
var c = require("./8.js");
var u = function (e) {
  function WorldMapArmyAttackMenu() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.RingMenu_ArmyAttack()) || this;
  }
  n.__extends(WorldMapArmyAttackMenu, e);
  WorldMapArmyAttackMenu.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.ringMenu.btn_info:
          o.CommandController.instance.executeCommand(d.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, this.mapMovementVO);
          this.hide();
          break;
        case this.ringMenu.btn_sendHome:
        case this.ringMenu.btn_retreat:
          if (this.mapMovementVO.advisorType > 0) {
            p.CastleDialogHandler.getInstance().registerDefaultDialogs(s.AdvisorAttackOverviewCancelDialog, new r.AdvisorAttackOverviewCancelDialogProperties([this.mapMovementVO], this.bindFunction(this.hide)));
          } else {
            p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleAskRetreatDialog, new l.CastleAskRereatDialogProperties(this.mapMovementVO, this.bindFunction(this.hide)));
          }
      }
    }
  };
  WorldMapArmyAttackMenu.prototype.show = function () {
    e.prototype.show.call(this);
    this.ringMenu.mc_infoText.visible = false;
    this.ringMenu.mc_infoText.txt_cost0.visible = false;
    this.ringMenu.btn_retreat.enableButton = true;
    this.ringMenu.btn_retreat.visible = this.mapMovementVO.canBeRetreated && !this.mapMovementVO.sourceArea.isUnderConquerControl;
    this.ringMenu.btn_sendHome.visible = this.mapMovementVO.canBeSendHome;
  };
  WorldMapArmyAttackMenu.prototype.updateMenuPosition = function () {
    e.prototype.updateMenuPosition.call(this);
    if (this.mapMovementVO) {
      if (this.ringMenu.btn_retreat.visible && this.ringMenu.btn_retreat.enabled) {
        var t = this.mapMovementVO.canBeRetreated && !this.mapMovementVO.tooLateToBeRetreated;
        this.ringMenu.btn_retreat.enableButton = t;
        this.ringMenu.btn_retreat.toolTipText = t ? null : "ringmenu_building_cantRetreat";
      }
    } else {
      this.hide();
    }
  };
  WorldMapArmyAttackMenu.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this.hideInfoTexts();
    switch (t.target) {
      case this.ringMenu.btn_info:
        this.showInfoText("ringmenu_info");
        break;
      case this.ringMenu.btn_retreat:
        this.showInfoText("ringmenu_retreat");
        break;
      case this.ringMenu.btn_sendHome:
        this.showInfoText("dialog_moveOverview_sendHome");
    }
  };
  WorldMapArmyAttackMenu.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.hideInfoTexts();
  };
  WorldMapArmyAttackMenu.prototype.showInfoText = function (e) {
    this.ringMenu.mc_infoText.visible = true;
    this.iTxt = this.textFieldManager.registerTextField(this.ringMenu.mc_infoText.txt_info, new a.LocalizedTextVO(e));
  };
  WorldMapArmyAttackMenu.prototype.hideInfoTexts = function () {
    this.ringMenu.mc_infoText.visible = false;
  };
  Object.defineProperty(WorldMapArmyAttackMenu.prototype, "mapMovementVO", {
    get: function () {
      if (this._target) {
        return this._target.mapMovementVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapArmyAttackMenu.prototype, "ringMenu", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapArmyAttackMenu.__initialize_static_members = function () {
    WorldMapArmyAttackMenu.NAME = "WorldMapArmyAttackMenu";
  };
  return WorldMapArmyAttackMenu;
}(require("./4203.js").WorldMapMovementRingMenu);
exports.WorldMapArmyAttackMenu = u;
var d = require("./29.js");
var p = require("./9.js");
var h = require("./935.js");
u.__initialize_static_members();