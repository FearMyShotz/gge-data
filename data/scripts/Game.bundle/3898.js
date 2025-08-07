Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CheatLocaQuestTextIDs() {}
  CheatLocaQuestTextIDs.checkOldQuestTextIDs = function () {
    p.ZipUtil.tryUnzip(c.BasicModel.basicLoaderData.appLoader.getLoaderData(l.BasicConstants.LANGUAGE_RES_LOADER));
    var e;
    var t;
    var i = new Map();
    var n = d.DictionaryUtil.getKeys(i);
    var g = _.CastleModel.questData.questxMLList;
    var m = d.DictionaryUtil.getKeys(g);
    var f = [];
    var O = "This is the list of unused QuesttextIDs because this quest doesn't exists (anymore): \n";
    if (m != null) {
      for (var E = 0, y = m; E < y.length; E++) {
        var b = y[E];
        if (b !== undefined) {
          (t = new o.CastleQuestVO()).fillFromParamXML(g.get(b));
          f.push(t);
        }
      }
    }
    if (n != null) {
      for (var D = 0, I = n; D < I.length; D++) {
        var T = I[D];
        if (T !== undefined) {
          if ((e = T).indexOf("genquest_") > -1) {
            e = e.replace("genquest_", "");
            if (CheatLocaQuestTextIDs.foundGenericQuestString_IsNotAvailable(f, e)) {
              O += "\n" + T;
            }
          } else if (e.indexOf("questid_") > -1) {
            e = e.substring(e.indexOf("_") + 1, e.indexOf("_", e.indexOf("_") + 1));
            if (g.get(C.int(e)) == null) {
              O += "\n" + T;
            }
          }
        }
      }
    }
    O += "\n\nThis is the list of Quests without texts: \n";
    for (var v = 0, S = f; v < S.length; v++) {
      if (!(t = S[v]).hidden) {
        var A = "";
        if (t.questGiverID == r.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
          A = "_hero" + _.CastleModel.userData.selectedHeroID;
        }
        if (t.isGenericQuest) {
          O += CheatLocaQuestTextIDs.checkTextID("genQuest_" + t.genericQuestType + "_info_" + t.genericInfoID);
          if (!t.isStarterQuest) {
            O += CheatLocaQuestTextIDs.checkTextID("genQuest_" + t.genericQuestType + "_tip_" + t.genericTipID);
            O += CheatLocaQuestTextIDs.checkTextID("genQuest_" + t.genericQuestType + "_finish_" + t.genericFinishID);
            O += CheatLocaQuestTextIDs.checkTextID("genQuest_" + t.genericQuestType + "_name_" + t.genericNameID);
          }
        } else {
          O += CheatLocaQuestTextIDs.checkTextID("questID_" + t.questID + "_info" + A);
          if (!t.isStarterQuest) {
            O += CheatLocaQuestTextIDs.checkTextID("questID_" + t.questID + "_tip" + A);
            O += CheatLocaQuestTextIDs.checkTextID("questID_" + t.questID + "_finish" + A);
            O += CheatLocaQuestTextIDs.checkTextID("questSeriesID_" + t.questSeriesID + A);
          }
        }
      }
    }
    h.System.setClipboard(O);
    a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.CastleStandardOkDialog, new u.BasicStandardOkDialogProperties("", "The result is copied into your clipboard. Have a nice Day\n=°.°="));
  };
  CheatLocaQuestTextIDs.checkTextID = function (e) {
    if (g.Localize.hasText(e)) {
      return "";
    } else {
      return e + "\n";
    }
  };
  CheatLocaQuestTextIDs.foundGenericQuestString_IsNotAvailable = function (e, t) {
    var i = C.int(C.int(t.substr(0, t.indexOf("_"))));
    t = t.substr(t.indexOf("_") + 1);
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (t.indexOf("name_") > -1 && (t = t.replace("name_", ""), a.genericQuestType == i && a.genericNameID == C.int(t))) {
            return false;
          }
          if (t.indexOf("tip_") > -1 && (t = t.replace("tip_", ""), a.genericQuestType == i && a.genericTipID == C.int(t))) {
            return false;
          }
          if (t.indexOf("info_") > -1 && (t = t.replace("info_", ""), a.genericQuestType == i && a.genericInfoID == C.int(t))) {
            return false;
          }
          if (t.indexOf("finish_") > -1 && (t = t.replace("finish_", ""), a.genericQuestType == i && a.genericFinishID == C.int(t))) {
            return false;
          }
        }
      }
    }
    return false;
  };
  return CheatLocaQuestTextIDs;
}();
exports.CheatLocaQuestTextIDs = n;
var o = require("./1638.js");
var a = require("./9.js");
var s = require("./38.js");
var r = require("./51.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./1.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./4.js");