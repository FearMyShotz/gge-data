Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleQuestBookMainQuestListVO() {
    this._announcedIDs = [];
    this._finishedIDs = [];
    this._runningIDs = [];
    this._shownArrayIDs = [];
  }
  CastleQuestBookMainQuestListVO.prototype.parseListsFromParamObject = function (e) {
    if (e.ANN && e.R && e.D) {
      this._announcedIDs = e.ANN;
      this._runningIDs = e.R;
      this._finishedIDs = e.D;
      this.buildShownArrayIDs();
    }
  };
  CastleQuestBookMainQuestListVO.prototype.buildShownArrayIDs = function () {
    this._shownArrayIDs = [];
    var e = 0;
    for (e = 0; e < this._finishedIDs.length; e++) {
      this._shownArrayIDs.push([this._finishedIDs[e], CastleQuestBookMainQuestListVO.STATUS_FINISH]);
    }
    for (e = 0; e < this._runningIDs.length; e++) {
      this._shownArrayIDs.push([this._runningIDs[e], CastleQuestBookMainQuestListVO.STATUS_RUNNING]);
    }
    for (e = 0; e < this._announcedIDs.length; e++) {
      this._shownArrayIDs.push([this._announcedIDs[e], CastleQuestBookMainQuestListVO.STATUS_ANNOUNCED]);
    }
    this._shownArrayIDs.sort(this.bindFunction(this.onSortList));
  };
  CastleQuestBookMainQuestListVO.prototype.onSortList = function (e, t) {
    if (e[0] > t[0]) {
      return 1;
    } else if (e[0] < t[0]) {
      return -1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleQuestBookMainQuestListVO.prototype, "indexForFirstShownQuest", {
    get: function () {
      return this.shownArray.length - 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestBookMainQuestListVO.prototype.getDisplayObjectFromIndex = function (e) {
    var t = "Quest_" + this.shownArray[e][0] + this.shownArray[e][1];
    o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t);
    return new s.CastleGoodgameExternalClip(t, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t), null, 24, false).asDisplayObject();
  };
  Object.defineProperty(CastleQuestBookMainQuestListVO.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestBookMainQuestListVO.prototype, "shownArray", {
    get: function () {
      return this._shownArrayIDs;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestBookMainQuestListVO.__initialize_static_members = function () {
    CastleQuestBookMainQuestListVO.STATUS_ANNOUNCED = "_announced";
    CastleQuestBookMainQuestListVO.STATUS_RUNNING = "_running";
    CastleQuestBookMainQuestListVO.STATUS_FINISH = "_finished";
  };
  return CastleQuestBookMainQuestListVO;
}();
exports.CastleQuestBookMainQuestListVO = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./24.js");
n.__initialize_static_members();