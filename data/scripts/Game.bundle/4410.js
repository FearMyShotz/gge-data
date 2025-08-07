Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleColossusHighscoreListDelegate(e) {
    this._offsetRank = -1;
    this._isListInited = false;
    this._oldSelectedIndex = 0;
    this.disp = e;
    this.resetSearchValue();
    _.ButtonHelper.enableButton(e.btn_up, false);
    _.ButtonHelper.enableButton(e.btn_down, false);
    var t;
    var i = r.GoodgameTextFieldManager.getInstance();
    this._ranking = [];
    for (var o = 0; o < CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES; o++) {
      (t = e["item" + o]).gotoAndStop(1);
      this._ranking.push(t);
      _.ButtonHelper.initBasicButton(this._ranking[o], 1);
      _.ButtonHelper.enableButton(this._ranking[o], true);
      i.registerTextField(this._ranking[o].txt_points, new u.TextVO(""), new l.InternalGGSTextFieldConfigVO(true)).visible = true;
      i.registerTextField(this._ranking[o].txt_name, new u.TextVO(""), new l.InternalGGSTextFieldConfigVO(true)).visible = true;
      i.registerTextField(this._ranking[o].txt_resources, new u.TextVO(""), new l.InternalGGSTextFieldConfigVO(true)).visible = true;
      _.ButtonHelper.enableButton(this._ranking[o], false);
    }
    this._eventVO = g.CastleModel.specialEventData.getActiveEventByAnyEventId(s.ClientConstEvent.COLOSSUS_EVENTS);
    this._eventVO.clearRankingCacheOnTimeout();
    this._offsetRank = -1;
    this._isListInited = false;
    e.addEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel), false, 0, true);
    this.sliderData = new C.BasicSliderVO(this.disp.mc_slider.mc_sliderBar, this.disp.mc_slider.btn_slider, 0, 0, this.disp);
    _.ButtonHelper.initBasicButtons([e.mc_slider.btn_slider]);
    this.slider = new a.ScrollComponent(this.sliderData, a.ScrollComponent.VERTICAL_SLIDER);
    this.slider.addEventListener(h.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderMoved));
    this.updateSlider();
  }
  CastleColossusHighscoreListDelegate.prototype.dispose = function () {
    this.slider.removeEventListener(h.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderMoved));
    this.disp.removeEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleColossusHighscoreListDelegate.prototype.onSliderMoved = function (e) {
    var t = g.CastleModel.specialEventData.getActiveEventByAnyEventId(s.ClientConstEvent.COLOSSUS_EVENTS);
    var i = 0;
    if (!isNaN(this._oldSelectedIndex)) {
      i = d.int(this._oldSelectedIndex - e.selectedValue);
    }
    t.offsetRank = d.int(e.selectedValue + CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES);
    if (i < 0 && e.selectedValue > this._eventVO.lowestRankInList - c.HighscoreConst.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS / 2 && this._eventVO.lowestRankInList < this._eventVO.lowestRankOnServer) {
      CastleColossusHighscoreListDelegate.getMoreRankingsFromServer(e.selectedValue);
    } else if (i > 0 && e.selectedValue < this._eventVO.highestRankInList + c.HighscoreConst.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS / 2 && !this._eventVO.hasHighestRank) {
      CastleColossusHighscoreListDelegate.getMoreRankingsFromServer(e.selectedValue);
    }
    this.update();
  };
  CastleColossusHighscoreListDelegate.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.pageUp();
    } else {
      this.pageDown();
    }
  };
  CastleColossusHighscoreListDelegate.prototype.updateRank = function (e, t, i, n) {
    if (!(e < 0) && !(e > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES - 1)) {
      var o = r.GoodgameTextFieldManager.getInstance();
      o.registerTextField(this._ranking[e].txt_points, new u.TextVO(String(t)), new l.InternalGGSTextFieldConfigVO(true)).visible = true;
      o.registerTextField(this._ranking[e].txt_name, new u.TextVO(i), new l.InternalGGSTextFieldConfigVO(true)).visible = true;
      o.registerTextField(this._ranking[e].txt_resources, new u.TextVO(String(n)), new l.InternalGGSTextFieldConfigVO(true)).visible = true;
      if (i) {
        if (i == g.CastleModel.userData.userName || i.toLowerCase() == this._lastSearchName.toLowerCase() || t == this._lastSearchName) {
          this._ranking[e].gotoAndStop(2);
        } else {
          this._ranking[e].gotoAndStop(1);
        }
        _.ButtonHelper.enableButton(this._ranking[e], true);
      } else {
        this._ranking[e].gotoAndStop(1);
        _.ButtonHelper.enableButton(this._ranking[e], false);
      }
    }
  };
  CastleColossusHighscoreListDelegate.prototype.update = function () {
    this._eventVO ||= g.CastleModel.specialEventData.getActiveEventByAnyEventId(s.ClientConstEvent.COLOSSUS_EVENTS);
    if (!(this._eventVO.lowestRankOnServer <= 0)) {
      this._offsetRank = this._eventVO.offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES ? this._eventVO.offsetRank : CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      var e = CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      for (var t = this._offsetRank; t > this._offsetRank - CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES; t--) {
        var i = this._eventVO.getRankingEntryByRank(t);
        e--;
        if (i) {
          this.updateRank(e, i.playerRank == 0 ? "" : String(i.playerRank), i.playerName, i.playerPoints == 0 ? "" : String(i.playerPoints));
        } else if (t >= 1 && t < this._eventVO.lowestRankOnServer && this._lastSearchName == CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME) {
          this._isListInited = false;
          CastleColossusHighscoreListDelegate.getMoreRankingsFromServer(t);
          return;
        }
      }
      this._isListInited = true;
      _.ButtonHelper.enableButton(this.disp.btn_up, this._offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES);
      _.ButtonHelper.enableButton(this.disp.btn_down, this._offsetRank < this._eventVO.lowestRankOnServer);
      this.updateSlider();
    }
  };
  CastleColossusHighscoreListDelegate.getMoreRankingsFromServer = function (e) {
    g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SColossusGetHighscoreVO(String(e)));
  };
  CastleColossusHighscoreListDelegate.prototype.eventVOUpdated = function () {
    if (!this._isListInited || this._lastSearchName != CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME) {
      if (this._lastSearchName != CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME) {
        this.scrollToPlayer(this._lastSearchName);
      } else {
        this.scrollToPlayer(g.CastleModel.userData.userName);
      }
      this.update();
    }
  };
  CastleColossusHighscoreListDelegate.prototype.scrollToPlayer = function (e) {
    var t = this._eventVO.getRankingEntryByName(e);
    if (t) {
      this._eventVO.offsetRank = t.playerRank;
    } else {
      var i = parseInt(e);
      if (i && (t = this._eventVO.getRankingEntryByRank(i))) {
        this._eventVO.offsetRank = t.playerRank;
      }
    }
    if (e == CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME || !t) {
      this._eventVO.offsetRank = this._eventVO.highestRankInList + CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES - 1;
    }
  };
  CastleColossusHighscoreListDelegate.prototype.resetSearchValue = function () {
    this._lastSearchName = CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME;
  };
  CastleColossusHighscoreListDelegate.prototype.updateSlider = function () {
    var e = this.disp.btn_down.enabled || this.disp.btn_up.enabled;
    this.disp.mc_slider.visible = e;
    this.disp.btn_down.visible = e;
    this.disp.btn_up.visible = e;
    if (e) {
      this.sliderData.maxValue = this._eventVO.lowestRankOnServer;
      this.sliderData.minValue = CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      var t = this._eventVO.offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES ? this._eventVO.offsetRank : CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES;
      this.slider.setSelectedIndex(t - CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES);
      this._oldSelectedIndex = d.int(this.slider.selectedIndex);
    }
  };
  CastleColossusHighscoreListDelegate.prototype.pageUp = function () {
    if (this._eventVO.offsetRank > CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES) {
      this._eventVO.offsetRank -= 1;
    }
    this.update();
  };
  CastleColossusHighscoreListDelegate.prototype.pageDown = function () {
    if (this._eventVO.offsetRank < this._eventVO.lowestRankOnServer) {
      this._eventVO.offsetRank += 1;
    }
    this.update();
  };
  CastleColossusHighscoreListDelegate.prototype.search = function (e) {
    this._lastSearchName = e;
    g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SColossusGetHighscoreVO(e));
  };
  Object.defineProperty(CastleColossusHighscoreListDelegate.prototype, "offsetRank", {
    get: function () {
      return this._offsetRank;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusHighscoreListDelegate.__initialize_static_members = function () {
    CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES = 10;
    CastleColossusHighscoreListDelegate.DEFAULT_SEARCH_NAME = "-1";
  };
  return CastleColossusHighscoreListDelegate;
}();
exports.CastleColossusHighscoreListDelegate = o;
var a = require("./343.js");
var s = require("./275.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./1898.js");
var h = require("./232.js");
var g = require("./4.js");
var C = require("./274.js");
var _ = require("./8.js");
o.__initialize_static_members();