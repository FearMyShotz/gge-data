Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./23.js");
var h = require("./23.js");
var g = require("./28.js");
var C = require("./312.js");
var _ = require("./4.js");
var m = function (e) {
  function CastleAllianceHelpFeedbackComponent() {
    var t = this;
    t.currentColor = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.AllianceRequestFeedbackComponent()) || this).currentColor = CastleAllianceHelpFeedbackComponent.DEFAULT_COLOR;
    t.dispBounds = t.disp.getBounds(null);
    return t;
  }
  n.__extends(CastleAllianceHelpFeedbackComponent, e);
  Object.defineProperty(CastleAllianceHelpFeedbackComponent.prototype, "customProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceHelpFeedbackComponent.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceHelpFeedbackComponent.prototype, "component", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceHelpFeedbackComponent.prototype.show = function () {
    var t;
    e.prototype.show.call(this);
    if (t = this.createTextContent()) {
      this.showText(t);
    }
  };
  CastleAllianceHelpFeedbackComponent.prototype.showText = function (e) {
    e.color = this.currentColor;
    e.autoSize = s.TextFieldAutoSize.CENTER;
    h.TweenMax.fromTo(this.disp, 1, {
      alpha: 0
    }, {
      alpha: 1,
      ease: p.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeIn)
    });
    this.updatePosition();
  };
  CastleAllianceHelpFeedbackComponent.prototype.createTextContent = function () {
    this.currentColor = CastleAllianceHelpFeedbackComponent.DEFAULT_COLOR;
    if (this.customProperties && this.customProperties.requestVO && this.customProperties.requestVO.requestTypeId == l.AllianceConst.ALLIANCE_HELP_BUILD) {
      return this.createConstructionTextContent();
    } else {
      return this.createRepairTextContent();
    }
  };
  CastleAllianceHelpFeedbackComponent.prototype.createConstructionTextContent = function () {
    if (this.customProperties && this.customProperties.requestVO) {
      if (!(this.customProperties.requestVO.progress + 1 >= this.customProperties.requestVO.neededProgress)) {
        return this.getTextField("dialog_allianceHelp_helpConfirmation_construction");
      }
      _.CastleModel.allianceHelpRequestData.addEventListener(C.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.finishedOrFreeSkipText));
    }
    return null;
  };
  CastleAllianceHelpFeedbackComponent.prototype.finishedOrFreeSkipText = function (e = null) {
    _.CastleModel.allianceHelpRequestData.addEventListener(C.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.finishedOrFreeSkipText));
    var t = null;
    var i = d.int(this.customProperties.requestVO.remainingTime * g.ClientConstTime.MILLISEC_2_SEC - _.CastleModel.allianceHelpRequestData.decreaseBuildingTimeAbsolute);
    var n = d.int(_.CastleModel.specialEventData.getSkipCostsForTimeLeft(i, _.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
    if (i > 0 && n == 0) {
      this.currentColor = CastleAllianceHelpFeedbackComponent.FREE_SKIP_COLOR;
      t = "dialog_allianceHelp_helpConfirmation_constructionBoniFreeSkip";
    } else {
      t = "dialog_allianceHelp_helpConfirmation_constructionBoniGained";
    }
    this.showText(this.getTextField(t));
  };
  CastleAllianceHelpFeedbackComponent.prototype.getTextField = function (e) {
    var t = [];
    var i = null;
    var n = null;
    var o = null;
    if (this.customProperties && this.customProperties.requestVO) {
      i = this.customProperties.name;
      var a;
      var s = r.castAs(this.customProperties.requestVO.optionalParams, "AllianceHelpRequestConstructionParamsVO");
      if (s) {
        a = _.CastleModel.userData.castleList.getCastleVOByID(s.areaID, s.kingdomID);
      }
      if (a) {
        o = a.areaNameString;
      }
      var l = r.castAs(_.CastleModel.wodData.createVObyWOD(this.customProperties.wodID, f.CastleWodData.TYPE_BUILDING), "ABasicBuildingVO");
      if (l) {
        n = l.getNameString();
      }
    }
    if (e && i && n && o) {
      t.push(o);
      t.push(i);
      t.push(n);
    } else {
      e = "dialog_allianceHelp_requestButton_requestCompleted";
    }
    return this.textFieldManager.registerTextField(this.component.txt_feedback, new c.LocalizedTextVO(e, t));
  };
  CastleAllianceHelpFeedbackComponent.prototype.createRepairTextContent = function () {
    if (!!this.customProperties && !!this.customProperties.requestVO && this.customProperties.requestVO.progress + 1 >= this.customProperties.requestVO.neededProgress && this.customProperties.requestVO.requestTypeId == l.AllianceConst.ALLIANCE_HELP_REPAIR) {
      var e = r.castAs(_.CastleModel.wodData.createVObyWOD(this.customProperties.wodID, f.CastleWodData.TYPE_BUILDING), "ABasicBuildingVO");
      if (e) {
        return this.textFieldManager.registerTextField(this.component.txt_feedback, new c.LocalizedTextVO("dialog_allianceHelp_repairHelpReceived", [e.getNameString()]));
      }
    }
    return this.textFieldManager.registerTextField(this.component.txt_feedback, new c.LocalizedTextVO("dialog_allianceHelp_helpConfirmation", [new c.LocalizedTextVO(this.getTypeText()), new u.TextVO(this.customProperties ? this.customProperties.name : "")]));
  };
  CastleAllianceHelpFeedbackComponent.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        e = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * e) {
        e = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.left * e - this.dispBounds.width * e * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -this.dispBounds.top * e - this.dispBounds.height * e * 0.5 + 85;
      this.disp.scaleX = this.disp.scaleY = e;
      this.disp.x = d.int(this.disp.x);
      this.disp.y = d.int(this.disp.y);
    }
  };
  CastleAllianceHelpFeedbackComponent.prototype.onCompleteFadeIn = function () {
    h.TweenMax.fromTo(this.disp, 1, {
      alpha: 1
    }, {
      alpha: 0,
      ease: p.Linear.easeIn,
      delay: 2,
      onComplete: this.bindFunction(this.onCompleteFadeOut)
    });
  };
  CastleAllianceHelpFeedbackComponent.prototype.onCompleteFadeOut = function () {
    this.hide();
  };
  CastleAllianceHelpFeedbackComponent.prototype.getTypeText = function () {
    switch (this.customProperties.requestVO.requestTypeId) {
      case l.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case l.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        return "panel_action_recruit";
      case l.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
        return "dialog_allianceHelp_healUnits_short";
      case l.AllianceConst.ALLIANCE_HELP_REPAIR:
        return "dialog_allianceHelp_repairBuildings";
      case l.AllianceConst.ALLIANCE_HELP_BUILD:
        return "ringmenu_allianceHelp_reduceConstructionTime";
    }
    return "";
  };
  CastleAllianceHelpFeedbackComponent.__initialize_static_members = function () {
    CastleAllianceHelpFeedbackComponent.NAME = "CastleAllianceHelpFeedbackComponent";
    CastleAllianceHelpFeedbackComponent.DEFAULT_COLOR = 2403805;
    CastleAllianceHelpFeedbackComponent.FREE_SKIP_COLOR = 15566400;
  };
  return CastleAllianceHelpFeedbackComponent;
}(o.FlashUIComponent);
exports.CastleAllianceHelpFeedbackComponent = m;
var f = require("./56.js");
m.__initialize_static_members();