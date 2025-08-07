Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./4.js");
var _ = require("./601.js");
var m = require("./602.js");
var f = require("./931.js");
var O = require("./8.js");
var E = require("./185.js");
var y = require("./40.js");
var b = require("./42.js");
var D = createjs.MouseEvent;
var I = createjs.Point;
var T = function (e) {
  function CastleMovementDetailsComponent(t) {
    var i = this;
    i.shouldHideDistance = false;
    i.CASTLE_SIZE = new I(100, 70);
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itxtDistance = A.CastleComponent.textFieldManager.registerTextField(i.componentMC.info_distance.txt_distance, new p.LocalizedNumberVO(0, true, 1));
    i.itxtProgress = A.CastleComponent.textFieldManager.registerTextField(i.componentMC.txt_progress, new h.TextVO(""));
    i.itxtNameSourceCastle = A.CastleComponent.textFieldManager.registerTextField(i.componentMC.info_sourceCastle.txt_castleName, new h.TextVO(""));
    i.itxtNameSourceCastle.autoFitToBounds = true;
    i.itxtNameSourceCastle.verticalAlign = b.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.itxtNameTargetCastle = A.CastleComponent.textFieldManager.registerTextField(i.componentMC.info_targetCastle.txt_castleName, new h.TextVO(""));
    i.itxtNameTargetCastle.autoFitToBounds = true;
    i.itxtNameTargetCastle.verticalAlign = b.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return i;
  }
  n.__extends(CastleMovementDetailsComponent, e);
  CastleMovementDetailsComponent.prototype.initComponent = function (e, t) {
    this._mapMovementVO = e;
    this._hideFunction = t;
    var i = c.instanceOfClass(e, "TreasureHuntMovementVO") ? e.tmapNode : null;
    this.initCastleInfo(this.componentMC.info_sourceCastle, this.itxtNameSourceCastle, this._mapMovementVO.sourceArea, i);
    this.initCastleInfo(this.componentMC.info_targetCastle, this.itxtNameTargetCastle, this._mapMovementVO.targetArea, i);
    this.itxtDistance.textContentVO.numberValue = e.distance;
    this.componentMC.info_distance.toolTipText = "distance";
    this.componentMC.btn_retreat.visible = e.canBeRetreated && !e.sourceArea.isUnderConquerControl;
    this.componentMC.btn_sendHome.visible = e.canBeSendHome;
    this.componentMC.btn_sendHome.toolTipText = "dialog_moveOverview_sendHome";
    this.disp.addEventListener(D.CLICK, this.bindFunction(this.onClick));
    this.componentMC.tooltipTravelTime.toolTipText = this._mapMovementVO.isStationed ? "dialog_postAttack_supportTime" : "travelTime";
    this.updateComponent();
  };
  CastleMovementDetailsComponent.prototype.updateComponent = function () {
    this.componentMC.mc_progressbar.scaleX = this._mapMovementVO.movementProgress;
    var e = 0;
    if (c.instanceOfClass(this._mapMovementVO, "SupportDefenceMapmovementVO") && this._mapMovementVO.movementProgress == 1) {
      e = g.int(Math.max(this._mapMovementVO.getTimeUnitMovmentReachTargetInSeconds(), this._mapMovementVO.getTimeUntilWaitOverInSeconds()));
      this.correctProgressbarScaleForWaitTime();
    } else {
      e = this._mapMovementVO.getTimeUnitMovmentReachTargetInSeconds();
    }
    this.itxtProgress.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(e, s.TimeStringHelper.TWO_TIME_FORMAT, d.Localize.text);
    if (this.componentMC.btn_retreat.visible) {
      O.ButtonHelper.enableButton(this.componentMC.btn_retreat, this._mapMovementVO.canBeRetreated && !this._mapMovementVO.tooLateToBeRetreated);
      if (this._mapMovementVO.canBeRetreated && !this._mapMovementVO.tooLateToBeRetreated) {
        this.componentMC.btn_retreat.toolTipText = "dialog_moveOverview_retreat";
      } else {
        this.componentMC.btn_retreat.toolTipText = "ringmenu_building_cantRetreat";
      }
    }
    this.componentMC.info_distance.visible = !this.shouldHideDistance;
    E.SubscriptionHelper.showSubscriptionStarToTextField(this.itxtProgress, this._mapMovementVO.isSubscriptionBuffed(), 25, new I(-10, 0));
  };
  CastleMovementDetailsComponent.prototype.correctProgressbarScaleForWaitTime = function () {
    var e = r.castAs(this._mapMovementVO, "SupportDefenceMapmovementVO");
    if (e) {
      this.componentMC.mc_progressbar.scaleX = (e.getTotalWaitTimeInSeconds() - e.getTimeUntilWaitOverInSeconds()) / e.getTotalWaitTimeInSeconds();
    }
  };
  CastleMovementDetailsComponent.prototype.onClick = function (t) {
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.componentMC.btn_sendHome:
        case this.componentMC.btn_retreat:
          if (this._mapMovementVO.advisorType > 0) {
            A.CastleComponent.dialogHandler.registerDefaultDialogs(_.AdvisorAttackOverviewCancelDialog, new m.AdvisorAttackOverviewCancelDialogProperties([this._mapMovementVO], this.bindFunction(this._hideFunction)));
          } else {
            A.CastleComponent.dialogHandler.registerDefaultDialogs(v.CastleAskRetreatDialog, new f.CastleAskRereatDialogProperties(this._mapMovementVO, this.bindFunction(this._hideFunction)));
          }
      }
    }
  };
  CastleMovementDetailsComponent.prototype.initCastleInfo = function (e, t, i, n = null) {
    t.textContentVO.stringValue = i.areaNameStringShort;
    t.verticalAlign = o.GGSVerticalAlign.TOP;
    a.MovieClipHelper.clearMovieClip(e.icon_castle);
    var s = !!n && n.isEndNode;
    e.icon_castle.addChild(S.WorldmapObjectIconHelper.drawMapObjectIcon(i, this.CASTLE_SIZE, true, false, true, CastleMovementDetailsComponent.getJumpToTooltip(i, s), n));
  };
  CastleMovementDetailsComponent.getJumpToTooltip = function (e, t) {
    if (e.areaType == u.WorldConst.AREA_TYPE_TREASURE_DUNGEON) {
      if (t) {
        return "dialog_treasureMap_TreasureTooltip";
      } else {
        return e.ownerInfo.playerName;
      }
    } else if (e.areaType == u.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      return "dialog_seasonEvent_2_Camp";
    } else if (C.CastleModel.kingdomData.isKingdomUnlocked(e.kingdomID)) {
      return "dialog_jumpto_targetSelected";
    } else {
      return "dialog_kingdom_notYetAvailable";
    }
  };
  CastleMovementDetailsComponent.prototype.destroy = function () {
    this._mapMovementVO = null;
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleMovementDetailsComponent.prototype, "componentMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementDetailsComponent.prototype.hideDistance = function (e) {
    this.shouldHideDistance = e;
  };
  return CastleMovementDetailsComponent;
}(y.CastleItemRenderer);
exports.CastleMovementDetailsComponent = T;
var v = require("./935.js");
var S = require("./70.js");
var A = require("./14.js");
l.classImplementsInterfaces(T, "ICollectableRendererList");