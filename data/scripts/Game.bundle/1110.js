Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./3885.js");
var d = require("./3886.js");
var p = require("./83.js");
var h = require("./99.js");
var g = function (e) {
  function MessageUserSurveyVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MessageUserSurveyVO, e);
  MessageUserSurveyVO.prototype.parseMessageHeader = function (e) {
    try {
      this.props = MessageUserSurveyVO.createProperties(e);
    } catch (e) {
      o.error(e.stack);
    }
  };
  MessageUserSurveyVO.createProperties = function (e) {
    var t;
    var i = e.split(s.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var n = c.int(i[0]);
    if (i.length > 1) {
      t = MessageUserSurveyVO.createQuestionsFromHeader(i[1]);
      var o = new u.CastleSurveyMessageDialogProperties(n, t);
      o.isOldSurvey = true;
      return o;
    }
    return new u.CastleSurveyMessageDialogProperties(n, t);
  };
  MessageUserSurveyVO.createQuestionsFromHeader = function (e) {
    for (var t = e.split("+"), i = [], n = 0; n < t.length; ++n) {
      var o = String(t[n]).split("*");
      var a = new d.SurveyQuestionVO();
      a.questionId = parseInt(o[0]);
      a.questionType = parseInt(o[1]);
      a.answerCount = o.length > 2 ? parseInt(o[2]) : 1;
      if (MessageUserSurveyVO.AVAILABE_QUESTION_TYPES.indexOf(a.questionType) < 0) {
        throw new Error("Question id '" + a.questionId + "' has invalid question type " + a.questionType);
      }
      i.push(a);
    }
    return i;
  };
  MessageUserSurveyVO.createQuestionsFromCommand = function (e) {
    if (!e) {
      return null;
    }
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = new d.SurveyQuestionVO();
          s.questionId = c.int(o[a.CommKeys.QUESTION_ID]);
          s.questionType = c.int(o.QT);
          s.answerCount = c.int(o.AC);
          if (MessageUserSurveyVO.AVAILABE_QUESTION_TYPES.indexOf(s.questionType) < 0) {
            throw new Error("Question id '" + s.questionId + "' has invalid question type " + s.questionType);
          }
          t.push(s);
        }
      }
    }
    return t;
  };
  Object.defineProperty(MessageUserSurveyVO.prototype, "dialogInfo", {
    get: function () {
      return new p.DialogInfoVO(C.CastleSurveyMessageDialog, this.props);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageUserSurveyVO.prototype.parseSubject = function () {
    if (this.props.isOldSurvey) {
      return l.Localize.text("dialog_survey_" + this.props.surveyId + "_title");
    } else {
      return l.Localize.text("survey_titleHead");
    }
  };
  MessageUserSurveyVO.prototype.parseSender = function () {
    return l.Localize.text("system");
  };
  MessageUserSurveyVO.__initialize_static_members = function () {
    MessageUserSurveyVO.AVAILABE_QUESTION_TYPES = [r.SurveyConst.QUESTION_TYPE_TEXT, r.SurveyConst.QUESTION_TYPE_RADIO, r.SurveyConst.QUESTION_TYPE_CHECKBOX];
  };
  return MessageUserSurveyVO;
}(h.AMessageVO);
exports.MessageUserSurveyVO = g;
var C = require("./1801.js");
g.__initialize_static_members();