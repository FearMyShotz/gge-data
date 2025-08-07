Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./231.js");
var u = require("./1010.js");
var d = require("./312.js");
var p = require("./32.js");
var h = require("./15.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = function (e) {
  function CastleAllianceHelpRequestButtonComponent(t) {
    var i = this;
    i._typeID = 0;
    i._isConfirmed = false;
    i._amountOfUnitsInQueue = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleAllianceHelpRequestButtonComponent, e);
  Object.defineProperty(CastleAllianceHelpRequestButtonComponent.prototype, "button", {
    get: function () {
      return this.disp.basicButton;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceHelpRequestButtonComponent.prototype.show = function () {
    e.prototype.show.call(this);
    this.addEventListenersOnShow();
    this.updateButtons();
    this.onAddedToStage(null);
  };
  CastleAllianceHelpRequestButtonComponent.prototype.hide = function () {
    this.removeEventListenersOnHide();
    e.prototype.hide.call(this);
  };
  CastleAllianceHelpRequestButtonComponent.prototype.addEventListenersOnShow = function () {
    g.CastleModel.allianceHelpRequestData.addEventListener(d.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(p.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceHelpRequestButtonComponent.prototype.removeEventListenersOnHide = function () {
    g.CastleModel.allianceHelpRequestData.removeEventListener(d.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(p.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceHelpRequestButtonComponent.prototype.setParams = function (e, t = null, i = false, n = 0) {
    this._typeID = e;
    this._optionalParams = t;
    this._isConfirmed = i;
    this._amountOfUnitsInQueue = n;
  };
  CastleAllianceHelpRequestButtonComponent.prototype.updateButtons = function () {
    if (g.CastleModel.tutorialData.isTutorialActive) {
      this.hide();
    } else {
      if (!g.CastleModel.userData.isInAlliance) {
        C.ButtonHelper.enableButton(this.button, false);
        this.setToolTipText("dialog_allianceHelp_requestButton_noAlliance");
        return;
      }
      var e = 0;
      e = this._isConfirmed ? l.int(c.ClientConstAlliance.STATUS_REQUEST_CONFIRMED) : l.int(g.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(this._typeID, this._optionalParams));
      this.setBtnState(e);
    }
  };
  CastleAllianceHelpRequestButtonComponent.prototype.setBtnState = function (e) {
    switch (e) {
      case c.ClientConstAlliance.STATUS_REQUEST_POSSIBLE:
        C.ButtonHelper.enableButton(this.button, true);
        this.setToolTipText(this.getRequestTextByType(this._typeID));
        break;
      case c.ClientConstAlliance.STATUS_REQUEST_CONFIRMED:
        C.ButtonHelper.enableButton(this.button, false);
        var t = "dialog_allianceHelp_requestButton_requestCompleted";
        if (!a.instanceOfClass(this._optionalParams, "AllianceHelpRequestHealParamsVO") && this._amountOfUnitsInQueue < 5) {
          t = "dialog_allianceHelp_requestButton_inactive_minimumFailed";
        }
        this.setToolTipText(t);
        break;
      case c.ClientConstAlliance.STATUS_REQUEST_PROCESSING:
        C.ButtonHelper.enableButton(this.button, false);
        this.setToolTipText("dialog_allianceHelp_requestButton_requestActive");
    }
  };
  CastleAllianceHelpRequestButtonComponent.prototype.getRequestTextByType = function (e) {
    switch (e) {
      case s.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case s.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        return r.Localize.text(this._amountOfUnitsInQueue >= 5 ? "dialog_allianceHelp_requestButton_allSlots_tooltip" : "dialog_allianceHelp_requestButton_inactive_minimumFailed");
      case s.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
        return r.Localize.text("dialog_recruit_help_looping");
      case s.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
      case 7:
        return r.Localize.text("dialog_hospital_allianceHelpButton_tooltip", [g.CastleModel.allianceHelpRequestData.unitHealTimeReduction]);
    }
    return "";
  };
  CastleAllianceHelpRequestButtonComponent.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (this._typeID) {
        case s.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
        case s.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
        case s.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
          g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SAllianceHelpRequestVO(this._optionalParams.recruitID, this._typeID));
          break;
        case s.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
          var i = this._optionalParams;
          g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SAllianceHelpRequestVO(i.id, i.hospitalListID));
      }
    }
  };
  CastleAllianceHelpRequestButtonComponent.prototype.onDataUpdated = function (e) {
    this.updateButtons();
  };
  CastleAllianceHelpRequestButtonComponent.prototype.onAllianceStatusChanged = function (e) {
    this.updateButtons();
  };
  CastleAllianceHelpRequestButtonComponent.prototype.setToolTipText = function (e) {
    this.button.disp.mouseChildren = false;
    this.button.disp.toolTipText = e;
  };
  Object.defineProperty(CastleAllianceHelpRequestButtonComponent.prototype, "controller", {
    get: function () {
      return h.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceHelpRequestButtonComponent;
}(o.FlashUIComponent);
exports.CastleAllianceHelpRequestButtonComponent = _;