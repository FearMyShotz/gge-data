Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./18.js");
var r = require("./4.js");
var l = function (e) {
  function CastleAdvancedDefenceDialogHelper(t) {
    var i = e.call(this) || this;
    i._defenceDialog = t.disp;
    i._fightDialog = t;
    i._displayType = c.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE;
    return i;
  }
  n.__extends(CastleAdvancedDefenceDialogHelper, e);
  CastleAdvancedDefenceDialogHelper.prototype.handleTarget = function (e) {
    if (r.CastleModel.tutorialData.isInTutorial()) {
      this.handleDefault(e);
    } else {
      switch (e) {
        case this._defenceDialog.categoryMenu.mc_wall.wall_left:
        case this._defenceDialog.categoryMenu.mc_wall.wall_left.items_leftWall:
          this.setFightScreenConnectorByConnectorType(u.CastleAdvancedFightScreenConnectorHandler.TOOLLEFT);
          this.display();
          break;
        case this._defenceDialog.categoryMenu.mc_wall.wall_middle:
        case this._defenceDialog.categoryMenu.mc_wall.wall_middle.items_middleWall:
          this.setFightScreenConnectorByConnectorType(u.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT);
          this.display();
          break;
        case this._defenceDialog.categoryMenu.mc_wall.wall_right:
        case this._defenceDialog.categoryMenu.mc_wall.wall_right.items_rightWall:
          this.setFightScreenConnectorByConnectorType(u.CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT);
          this.display();
          break;
        default:
          this.handleDefault(e);
      }
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.setFightScreenConnectorByConnectorType = function (e) {
    if (!r.CastleModel.tutorialData.isInTutorial()) {
      switch (e) {
        case u.CastleAdvancedFightScreenConnectorHandler.TOOLLEFT:
          this._advancedFightScreenConnector = new u.CastleAdvancedFightScreenConnectorHandler(r.CastleModel.defenceData.itemsLeftWall, [this._defenceDialog.leftFlankToolConnector], e, this._displayType);
          break;
        case u.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT:
          this._advancedFightScreenConnector = new u.CastleAdvancedFightScreenConnectorHandler(r.CastleModel.defenceData.itemsMiddleWall, [this._defenceDialog.frontFlankToolConnector], e, this._displayType);
          break;
        case u.CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT:
          this._advancedFightScreenConnector = new u.CastleAdvancedFightScreenConnectorHandler(r.CastleModel.defenceData.itemsRightWall, [this._defenceDialog.rightFlankToolConnector], e, this._displayType);
      }
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.handleDefault = function (e) {
    var t = this._fightDialog.getDefenceCategory() == s.ClientConstCastle.DEFENCE_CATEGORY_WALL;
    if (a.instanceOfClass(e, "FightScreenSlotContainer") && t) {
      this.handleDialogSlotContainer(e);
      this.display();
    } else {
      this.hide();
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.update = function () {
    if (this._fightDialog.getDefenceCategory() == s.ClientConstCastle.DEFENCE_CATEGORY_WALL) {
      e.prototype.update.call(this);
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.handleDialogSlotContainer = function (e) {
    var t = e.itemContainer;
    var i = e.itemVO;
    this.setFightScreenConnectorByFightItemContainer(t, i);
  };
  CastleAdvancedDefenceDialogHelper.prototype.setFightScreenConnectorByFightItemContainer = function (e, t) {
    if (!r.CastleModel.tutorialData.isInTutorial()) {
      switch (e) {
        case r.CastleModel.defenceData.itemsLeftWall:
          this._advancedFightScreenConnector = new u.CastleAdvancedFightScreenConnectorHandler(r.CastleModel.defenceData.itemsLeftWall, [this._defenceDialog.leftFlankToolConnector], u.CastleAdvancedFightScreenConnectorHandler.TOOLLEFT, this._displayType, t);
          break;
        case r.CastleModel.defenceData.itemsMiddleWall:
          this._advancedFightScreenConnector = new u.CastleAdvancedFightScreenConnectorHandler(r.CastleModel.defenceData.itemsMiddleWall, [this._defenceDialog.frontFlankToolConnector], u.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT, this._displayType, t);
          break;
        case r.CastleModel.defenceData.itemsRightWall:
          this._advancedFightScreenConnector = new u.CastleAdvancedFightScreenConnectorHandler(r.CastleModel.defenceData.itemsRightWall, [this._defenceDialog.rightFlankToolConnector], u.CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT, this._displayType, t);
      }
    }
  };
  return CastleAdvancedDefenceDialogHelper;
}(require("./959.js").CastleBasicAdvancedFightScreenDialogHelper);
exports.CastleAdvancedDefenceDialogHelper = l;
var c = require("./348.js");
var u = require("./960.js");
o.classImplementsInterfaces(l, "IAdvancedFightscreenHandler");