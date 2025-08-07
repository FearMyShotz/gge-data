Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./21.js");
var p = require("./26.js");
var h = require("./4.js");
var g = require("./27.js");
var C = require("./275.js");
var _ = require("./24.js");
var m = require("./1696.js");
var f = function (e) {
  function CastleRandomDungeonEventDialog() {
    return e.call(this, CastleRandomDungeonEventDialog.NAME) || this;
  }
  n.__extends(CastleRandomDungeonEventDialog, e);
  CastleRandomDungeonEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_visit, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new c.LocalizedTextVO("reward"));
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new c.LocalizedTextVO(""));
    this.itxt_speechBubble.autoFitToBounds = true;
    this.itxt_coordinates = this.textFieldManager.registerTextField(this.dialogDisp.mc_CoordinatesDeco.txt_coordinates, new c.LocalizedTextVO(s.GenericTextIds.VALUE_COORDS, [0, 0]));
    this.itxt_castleName = this.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new u.TextVO(""));
    this.itxt_remainingTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remainingTime, new u.TextVO(""));
    this.dialogDisp.mc_CoordinatesDeco.mouseChildren = false;
    this.dialogDisp.mc_CoordinatesDeco.toolTipText = "coordinates";
    this.dialogDisp.btn_visit.toolTipText = "panel_action_jumpTo";
  };
  CastleRandomDungeonEventDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_TipHeadline, new c.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_tip_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_Tip, new c.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_tip_desc"));
    this.dialogDisp.btn_visit.visible = !this.dialogProperties.eventVO.hasUserSolvedEvent;
    h.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    h.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    for (var i = 0; i < this.rewards.length; i++) {
      this.dialogDisp.mc_rewards["item" + i].mc_received.visible = this.dialogProperties.eventVO.hasUserSolvedEvent;
    }
    if (!this.dialogProperties.eventVO.hasUserSolvedEvent) {
      this.showTime();
    }
    this.setTime();
  };
  CastleRandomDungeonEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initDialog();
  };
  CastleRandomDungeonEventDialog.prototype.initDialog = function () {
    if (this.dialogProperties.eventVO.hasUserSolvedEvent) {
      this.itxt_speechBubble.textContentVO.textId = "dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_win_desc";
    } else {
      this.itxt_speechBubble.textContentVO.textId = "dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_title";
    }
    this.drawTargetCastle();
    if (this.dialogProperties.eventVO.hasUserSolvedEvent && this.dialogDisp.mc_time.txt_remainingTime.visible) {
      this.hideTime();
    }
  };
  CastleRandomDungeonEventDialog.prototype.drawTargetCastle = function () {
    var e = this.dialogProperties.eventVO.targetAreaVO;
    this.itxt_castleName.textContentVO.stringValue = e.ownerInfo.playerName;
    this.itxt_coordinates.textContentVO.textId = s.GenericTextIds.VALUE_COORDS;
    this.itxt_coordinates.textContentVO.textReplacements = [e.absAreaPosX, e.absAreaPosY];
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castle);
    var t = e.getDisplayObjectClipContainer(false, null, false);
    t.asDisplayObject().scaleX = t.asDisplayObject().scaleY /= C.CastleWorldmapConst.ZOOM_MAX;
    if (this.dialogProperties.eventVO.hasUserSolvedEvent) {
      t.addItem(this.getFlamesClip());
    }
    this.dialogDisp.mc_castle.addChild(t.asDisplayObject());
  };
  CastleRandomDungeonEventDialog.prototype.getFlamesClip = function () {
    return new _.CastleGoodgameExternalClip("FlamesLayer", this.worldmapObjectAssetFileURL, null, 0, false);
  };
  Object.defineProperty(CastleRandomDungeonEventDialog.prototype, "worldmapObjectAssetFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FlamesLayer");
    },
    enumerable: true,
    configurable: true
  });
  CastleRandomDungeonEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_visit:
        a.CommandController.instance.executeCommand(O.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.dialogProperties.eventVO.targetAreaVO);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleRandomDungeonEventDialog.prototype.hideLoaded = function (t = null) {
    h.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    h.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.hideTime();
    e.prototype.hideLoaded.call(this);
  };
  CastleRandomDungeonEventDialog.prototype.onUpdateSpecialEvent = function (e) {
    this.setTime();
  };
  CastleRandomDungeonEventDialog.prototype.onRefreshSpecialevent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.dialogProperties.eventVO = e.specialEventVO;
      this.initDialog();
    }
  };
  CastleRandomDungeonEventDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastleRandomDungeonEventDialog.prototype.setTime = function () {
    g.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remainingTime, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    g.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  CastleRandomDungeonEventDialog.prototype.showTime = function () {
    this.dialogDisp.mc_time.txt_remainingTime.visible = true;
    h.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  CastleRandomDungeonEventDialog.prototype.hideTime = function () {
    this.dialogDisp.mc_time.txt_remainingTime.visible = false;
    h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  Object.defineProperty(CastleRandomDungeonEventDialog.prototype, "rewards", {
    get: function () {
      return this.dialogProperties.eventVO.rewardList;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.ARandomDungeonRewardDialog.prototype, "rewards").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRandomDungeonEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRandomDungeonEventDialog.NAME = "CastleRandomDungeonEventExternal";
  return CastleRandomDungeonEventDialog;
}(m.ARandomDungeonRewardDialog);
exports.CastleRandomDungeonEventDialog = f;
var O = require("./29.js");
l.classImplementsInterfaces(f, "ICollectableRendererList");