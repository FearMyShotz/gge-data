Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./271.js");
var C = require("./3887.js");
var _ = require("./3888.js");
var m = require("./418.js");
var f = require("./37.js");
var O = require("./26.js");
var E = require("./15.js");
var y = require("./4.js");
var b = require("./43.js");
var D = require("./3889.js");
var I = require("./11.js");
var T = require("./3890.js");
var v = require("./3891.js");
var S = require("./3892.js");
var A = require("./3893.js");
var L = function (e) {
  function CastleSurveyMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSurveyMessageDialog.NAME) || this;
  }
  n.__extends(CastleSurveyMessageDialog, e);
  CastleSurveyMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_slider]);
    this.scroll = new D.CastleScrollComponent(this.dialogDisp, 0);
    this.initTexts();
  };
  CastleSurveyMessageDialog.prototype.showLoaded = function (e = null) {
    if (this.dialogProperties.questions) {
      this.dialogReady();
    } else {
      E.CastleBasicController.getInstance().addEventListener(f.CastleServerMessageArrivedEvent.SUR_ARRIVED, this.bindFunction(this.onSurArrived));
      y.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetSurveyInfoVO(this.dialogProperties.surveyId));
    }
  };
  CastleSurveyMessageDialog.prototype.onSurArrived = function (e) {
    E.CastleBasicController.getInstance().removeEventListener(f.CastleServerMessageArrivedEvent.SUR_ARRIVED, this.bindFunction(this.onSurArrived));
    try {
      var t = h.int(e.params[0]);
      var i = JSON.parse(e.params[1][1]);
      if (t == l.ERROR.ALL_OK && i.hasOwnProperty("QS") && i.hasOwnProperty("ST")) {
        var n = i.QS;
        this.dialogProperties.surveyType = i.ST;
        this.dialogProperties.questions = P.MessageUserSurveyVO.createQuestionsFromCommand(n);
        if (this.dialogProperties.questions) {
          this.dialogReady();
          return;
        }
      }
    } catch (e) {
      s.error(e.stack);
    }
    this.dialogNotReady();
  };
  CastleSurveyMessageDialog.prototype.dialogReady = function () {
    e.prototype.showLoaded.call(this);
    this.showSurvey();
  };
  CastleSurveyMessageDialog.prototype.dialogNotReady = function () {
    e.prototype.showLoaded.call(this);
    this.hide();
    M.CastleDialogHandler.getInstance().registerDialogs(R.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(d.Localize.text("generic_alert_information"), d.Localize.text("error_text_invalid")));
  };
  CastleSurveyMessageDialog.prototype.showSurvey = function () {
    this.txt_title.textContentVO.textId = this.getTextIdPrefix() + "_title";
    this.txt_description.textContentVO.textId = this.getTextIdPrefix() + "_description";
    this.initFormFields();
    this.setScrollBarVisibility(this.isScrollBarNecessary());
    if (this.isScrollBarNecessary()) {
      this.scroll.show();
      this.scroll.scrollToStart();
    }
    var e = new V();
    e.SID = h.int(this.dialogProperties.surveyId);
    y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SClientSideTrackingVO(g.ClientConstTracking.TRACKING_USER_SURVEY_SEEN, e));
    y.CastleModel.specialEventData.addEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSurveyMessageDialog.prototype.onEventRemoved = function (e) {
    if (e && e.specialEventVO && e.specialEventVO.eventId == c.EventConst.EVENTTYPE_USER_SURVEY) {
      this.hideLoaded();
    }
  };
  CastleSurveyMessageDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.scroll.hide();
    if (this.formFields != null) {
      for (var i = 0, n = this.formFields; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.hide();
        }
      }
    }
    y.CastleModel.specialEventData.removeEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSurveyMessageDialog.prototype.setScrollBarVisibility = function (e) {
    this.dialogDisp.mc_sliderLine.visible = this.dialogDisp.btn_slider.visible = this.dialogDisp.btn_up.visible = this.dialogDisp.btn_down.visible = e;
  };
  CastleSurveyMessageDialog.prototype.isScrollBarNecessary = function () {
    return this.dialogDisp.mc_contentHolder.height > this.dialogDisp.mc_mask.height;
  };
  CastleSurveyMessageDialog.prototype.initTexts = function () {
    this.txt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_titleDialog, new p.LocalizedTextVO(""));
    this.txt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_titleHead, new p.LocalizedTextVO(""));
  };
  CastleSurveyMessageDialog.prototype.initFormFields = function () {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_contentHolder);
    S.SurveyFormClipFactory.createForm(this.dialogProperties.questions, this.dialogDisp.mc_contentHolder);
    this.formFields = [];
    for (var e = 0; e < this.dialogProperties.questions.length; ++e) {
      var t = this.dialogProperties.questions[e];
      var i = this.dialogDisp.mc_contentHolder.getChildAt(e);
      var n = this.getQuestionTextId(t.questionId);
      this.textFieldManager.registerTextField(i.txt_title, new p.LocalizedTextVO(n)).autoFitToBounds = true;
      var o = this.createQuestionTypeComponent(i.mc_answers, t);
      this.formFields.push(o);
      o.show();
    }
  };
  CastleSurveyMessageDialog.prototype.addLeadingZeros = function (e) {
    if (e < 10) {
      return "000" + e;
    } else if (e < 100) {
      return "00" + e;
    } else if (e < 1000) {
      return "0" + e;
    } else {
      return "" + e;
    }
  };
  CastleSurveyMessageDialog.prototype.getTextIdPrefix = function () {
    if (this.dialogProperties.isOldSurvey) {
      return "dialog_survey_" + this.dialogProperties.surveyId;
    } else {
      return "survey_" + this.addLeadingZeros(this.dialogProperties.surveyType);
    }
  };
  CastleSurveyMessageDialog.prototype.getQuestionTextId = function (e) {
    return this.getTextIdPrefix() + "_question_" + e;
  };
  CastleSurveyMessageDialog.prototype.getAnswersTextIdPrefix = function (e) {
    return this.getQuestionTextId(e) + "_answer_";
  };
  CastleSurveyMessageDialog.prototype.createQuestionTypeComponent = function (e, t) {
    var i = [];
    for (var n = 0; n < e.numChildren; ++n) {
      i.push(e.getChildAt(n));
    }
    var o = this.getAnswersTextIdPrefix(t.questionId);
    var a = 0;
    if (!this.dialogProperties.isOldSurvey) {
      a = 1;
    }
    switch (t.questionType) {
      case u.SurveyConst.QUESTION_TYPE_TEXT:
        return new A.SurveyTextInput(t.questionId, i[0]);
      case u.SurveyConst.QUESTION_TYPE_RADIO:
        return new v.RadioButtonsGroup(t.questionId, i, e, o, a);
      case u.SurveyConst.QUESTION_TYPE_CHECKBOX:
        return new T.CheckboxesGroup(t.questionId, i, e, o, a);
    }
    return null;
  };
  CastleSurveyMessageDialog.prototype.createUserSurveyCommand = function () {
    var e = [];
    if (this.formFields != null) {
      for (var t = 0, i = this.formFields; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(n.getJson());
        }
      }
    }
    return new _.C2SReportUserSurveyVO(this.dialogProperties.surveyId, this.dialogProperties.surveyType, e);
  };
  CastleSurveyMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        y.CastleModel.smartfoxClient.sendCommandVO(this.createUserSurveyCommand());
        this.hide();
        I.CastleExternalDialog.dialogHandler.registerDialogsWithType(R.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(d.Localize.text("dialog_newMessage_message"), d.Localize.text("dialog_newMessage_messageSent")), false, b.CastleDialogConsts.PRIORITY_LOW, 0, b.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleSurveyMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSurveyMessageDialog.__initialize_static_members = function () {
    CastleSurveyMessageDialog.NAME = "CastleSurveyMessage";
  };
  return CastleSurveyMessageDialog;
}(I.CastleExternalDialog);
exports.CastleSurveyMessageDialog = L;
var P = require("./1110.js");
var M = require("./9.js");
var R = require("./38.js");
r.classImplementsInterfaces(L, "ICollectableRendererList");
var V = function () {
  return function UserSurveySeenData() {
    this.SID = 0;
  };
}();
L.__initialize_static_members();