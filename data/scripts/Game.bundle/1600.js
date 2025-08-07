Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./23.js");
var p = require("./23.js");
var h = require("./438.js");
var g = require("./21.js");
var C = require("./390.js");
var _ = require("./4.js");
var m = require("./27.js");
var f = require("./68.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./439.js");
var b = createjs.Point;
var D = function (e) {
  function CastleUpgradeLandmarkDialog() {
    var t = this;
    t._initialProgressArrived = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleUpgradeLandmarkDialog.NAME) || this;
  }
  n.__extends(CastleUpgradeLandmarkDialog, e);
  CastleUpgradeLandmarkDialog.prototype.applyPropertiesLoaded = function (e = null) {
    _.CastleModel.tradeData.addEventListener(C.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    _.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdated));
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleHolder);
    this.dialogDisp.mc_castleHolder.addChild(v.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.worldMapObjectVO, new b(90, 80), true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
    T.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crestHolder, this.dialogProperties.worldMapObjectVO.ownerInfo.crest, null, true);
    this.initBasicButtons(null);
    this.controller.addEventListener(this.dialogProperties.resetEventType, this.bindFunction(this.onLandmarkReset));
    this.dialogProperties.worldMapObjectVO.addEventListener(this.dialogProperties.updateEventType, this.bindFunction(this.onLandmarkUpdated));
    this.controller.addEventListener(this.dialogProperties.progressEventType, this.bindFunction(this.onGetProgress));
    this.bonusComponent = new this.dialogProperties.bonusComponentClass();
    this.bonusComponent.init(this.dialogDisp.mc_bonusDisplay, this.dialogProperties.worldMapObjectVO);
    this.dialogDisp.mc_bar.mc_scale.scaleX = 0;
    this._initialProgressArrived = false;
    _.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.progressCommandVO);
  };
  CastleUpgradeLandmarkDialog.prototype.onLandmarkUpdated = function (e) {
    if (!e.target.canBeUpgradedByMe()) {
      O.ButtonHelper.enableButton(this.getButtonByDisplayObjectInstance(this.dialogDisp.btn_donate), false);
      this.dialogDisp.btn_donate.toolTipText = this.dialogProperties.textErrorLostLandmark;
    }
  };
  CastleUpgradeLandmarkDialog.prototype.onTimeUpdated = function (e) {
    if (this.txt_time) {
      this.txt_time.textContentVO.stringValue = m.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.worldMapObjectVO.dataModel.remainingResetTime);
    }
  };
  CastleUpgradeLandmarkDialog.prototype.onGetMarketInfos = function (e) {
    if (e.openDialog) {
      E.CastleExternalDialog.dialogHandler.registerDefaultDialogs(S.CastleSendGoodsDialog, new y.CastleSendGoodsDialogProperties(this.dialogProperties.worldMapObjectVO, e.tradeInfoVO));
    }
  };
  CastleUpgradeLandmarkDialog.prototype.onLandmarkReset = function (e) {
    this.hide();
  };
  CastleUpgradeLandmarkDialog.prototype.onGetProgress = function (e) {
    if (e.objectID == this.dialogProperties.worldMapObjectVO.objectId) {
      this.dialogProperties.worldMapObjectVO.updateProgress(e.objectID, e.donatedAmount);
      this.setCopyTexts();
      this.setToolTips();
      this.setProgressBar(e.donatedAmount);
      this.bonusComponent.update();
    }
  };
  CastleUpgradeLandmarkDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(this.dialogProperties.textTitle));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new s.LocalizedTextVO("level_monument"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new l.NumberVO(this.dialogProperties.worldMapObjectVO.level));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new s.LocalizedTextVO(m.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.worldMapObjectVO.dataModel.remainingResetTime)));
    this.textFieldManager.registerTextField(this.dialogDisp.castleName_txt, new c.TextVO(this.dialogProperties.worldMapObjectVO.areaNameString));
    this.txt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new c.TextVO(m.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.worldMapObjectVO.dataModel.remainingResetTime)));
    if (this.dialogProperties.worldMapObjectVO.hasReachedMaxLevel) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(this.dialogProperties.textUpgradeMax));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new s.LocalizedTextVO(this.dialogProperties.textSendMax));
      this.txt_bar = this.textFieldManager.registerTextField(this.dialogDisp.mc_bar.txt_bar, new s.LocalizedTextVO("dialog_alliance_maxUpgradeLevel"));
      this.txt_bar.autoFitToBounds = true;
      this.txt_bar.textContentVO.textReplacements = "value_proportional_value";
      this.saturateResSymbol(false);
      O.ButtonHelper.enableButton(this.dialogDisp.btn_donate, false);
      this.dialogDisp.btn_donate.toolTipText = this.dialogProperties.textSendMaxTooltip;
      this.dialogDisp.mc_res.toolTipText = null;
    } else {
      this.saturateResSymbol(true);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(this.dialogProperties.textUpgrade));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new s.LocalizedTextVO(this.dialogProperties.textSend));
      this.txt_bar = this.textFieldManager.registerTextField(this.dialogDisp.mc_bar.txt_bar, new s.LocalizedTextVO("value_proportional_value", [0, this.dialogProperties.worldMapObjectVO.pointsRequiredForNextLevel]));
      this.txt_bar.autoFitToBounds = true;
      O.ButtonHelper.enableButton(this.dialogDisp.btn_donate, true);
      this.dialogDisp.btn_donate.toolTipText = this.dialogProperties.textSendTooltip;
      this.dialogDisp.mc_res.enabled = true;
      this.dialogDisp.mc_res.toolTipText = this.dialogProperties.textSendWoodStoneTooltip;
    }
  };
  CastleUpgradeLandmarkDialog.prototype.setToolTips = function () {
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_bar.mouseChildren = false;
    this.dialogDisp.btn_donate.mouseChildren = false;
    this.dialogDisp.mc_time.mouseChildren = false;
  };
  CastleUpgradeLandmarkDialog.prototype.saturateResSymbol = function (e) {
    if (e) {
      this.dialogDisp.mc_res.useFilters(f.BitmapFilterHelper.NO_FILTER);
    } else {
      this.dialogDisp.mc_res.useFilters(f.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    }
  };
  CastleUpgradeLandmarkDialog.prototype.setProgressBar = function (e = 0) {
    if (this.dialogProperties.worldMapObjectVO.hasReachedMaxLevel) {
      this.dialogDisp.mc_bar.mc_scale.scaleX = 1;
      this.dialogDisp.mc_bar.toolTipText = this.dialogProperties.textProgressTooltipMax;
    } else {
      var t = u.int(e - this.dialogProperties.worldMapObjectVO.dataModel.getLevelInfoByPointsAchieved(e, this.dialogProperties.worldMapObjectVO.kingdomID).requiredPoints);
      var i = u.int(this.dialogProperties.worldMapObjectVO.pointsRequiredForNextLevel - this.dialogProperties.worldMapObjectVO.dataModel.getLevelInfoByPointsAchieved(e, this.dialogProperties.worldMapObjectVO.kingdomID).requiredPoints);
      var n = Math.min(t / Math.max(i, 1), 1);
      if (n > 0) {
        if (this._initialProgressArrived) {
          p.TweenMax.fromTo(this.dialogDisp.mc_bar.mc_scale, 0.2, {
            scaleX: this.dialogDisp.mc_bar.mc_scale
          }, {
            scaleX: n,
            ease: d.Linear.easeIn
          });
        } else {
          this.dialogDisp.mc_bar.mc_scale.scaleX = n;
        }
      } else {
        this.dialogDisp.mc_bar.mc_scale.scaleX = 0;
      }
      this.txt_bar.textContentVO.textReplacements = [t, i];
      this.dialogDisp.mc_bar.toolTipText = {
        t: this.dialogProperties.textProgressTooltip,
        p: [this.dialogProperties.worldMapObjectVO.pointsRequiredForNextLevel - e, this.dialogProperties.worldMapObjectVO.level + 1]
      };
    }
    this._initialProgressArrived = true;
  };
  CastleUpgradeLandmarkDialog.prototype.initBasicButtons = function (t) {
    e.prototype.initBasicButtons.call(this, [this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_donate]);
  };
  CastleUpgradeLandmarkDialog.prototype.onClick = function (e) {
    if (O.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          I.CastleDialogHandler.getInstance().showHelper("", r.Localize.text(this.dialogProperties.textHelp));
          break;
        case this.dialogDisp.btn_donate:
          _.CastleModel.smartfoxClient.sendCommandVO(new h.C2SMarketInfoVO());
      }
    }
  };
  CastleUpgradeLandmarkDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    _.CastleModel.tradeData.removeEventListener(C.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    this.controller.removeEventListener(this.dialogProperties.resetEventType, this.bindFunction(this.onLandmarkReset));
    this.controller.removeEventListener(this.dialogProperties.progressEventType, this.bindFunction(this.onGetProgress));
    _.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdated));
    this.dialogProperties.worldMapObjectVO.removeEventListener(this.dialogProperties.updateEventType, this.bindFunction(this.onLandmarkUpdated));
  };
  Object.defineProperty(CastleUpgradeLandmarkDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleUpgradeLandmarkDialog.NAME = "CastleUpgradeLandmark";
  return CastleUpgradeLandmarkDialog;
}(E.CastleExternalDialog);
exports.CastleUpgradeLandmarkDialog = D;
var I = require("./9.js");
var T = require("./61.js");
var v = require("./70.js");
var S = require("./440.js");
a.classImplementsInterfaces(D, "ICollectableRendererList");