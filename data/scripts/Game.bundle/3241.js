Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./51.js");
var u = require("./4.js");
var d = require("./24.js");
var p = require("./107.js");
var h = require("./158.js");
var g = createjs.MovieClip;
var C = createjs.Point;
var _ = function (e) {
  function CollectableItemBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemBoosterVE, e);
  CollectableItemBoosterVE._getBoosterTooltipDic = function () {
    var e = new Map();
    e.set(r.BoosterConst.OVERSEER_WOOD, "dialog_overseer_wood_timelimit_tooltip");
    e.set(r.BoosterConst.OVERSEER_STONE, "dialog_overseer_stone_timelimit_tooltip");
    e.set(r.BoosterConst.OVERSEER_FOOD, "dialog_overseer_food_timelimit_tooltip");
    e.set(r.BoosterConst.MARAUDER, "dialog_marauder_timelimit_tooltip");
    e.set(r.BoosterConst.TAX, "dialog_taxcollector_timelimit_tooltip");
    e.set(r.BoosterConst.INSTRUCTOR, "dialog_instructor_timelimit_tooltip");
    e.set(r.BoosterConst.CARAVAN_OVERLOADER, "caravanGuy");
    e.set(r.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID, "pointsEvent_booster_tooltip");
    return e;
  };
  CollectableItemBoosterVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = this.options.icon.useSmallBoosterIcons;
  };
  CollectableItemBoosterVE.prototype.textfieldUpdate = function () {
    if (this.options.textfield.showBoosterDuration) {
      e.prototype.textfieldUpdate.call(this);
    } else {
      this.textfieldSetText("");
    }
  };
  CollectableItemBoosterVE.prototype.iconCreate = function () {
    if (this.options.icon.useSmallBoosterIcons) {
      var e = new g();
      this.dispCreator.addDisp(e);
      this.dispCreator.addClip(this._iconClip = p.CharacterHelper.createCharacterBig(CollectableItemBoosterVE.BOOSTER_SMALL_IDS[this.boosterItemVO.boosterVO.id], e, this.options.icon.dimension.x, this.options.icon.dimension.y, false));
    } else {
      this.dispCreator.addClip(this._iconClip = new d.CastleGoodgameExternalClip(CollectableItemBoosterVE.BOOSTER_BIG_ICONS_ASSET_NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CollectableItemBoosterVE.BOOSTER_BIG_ICONS_ASSET_NAME), null, 0, false));
    }
  };
  CollectableItemBoosterVE.prototype.iconDestroy = function () {
    this._iconClip = null;
    e.prototype.iconDestroy.call(this);
  };
  CollectableItemBoosterVE.prototype.tooltipCreate = function () {
    var e = this.boosterItemVO.boosterVO;
    if (e) {
      var t = a.TimeStringHelper.getCommaTimeStringFromSeconds(e.duration, u.CastleModel.languageData.bindFunction(u.CastleModel.languageData.getTextById), a.TimeStringHelper.TWO_TIME_FORMAT);
      return u.CastleModel.languageData.getTextById(CollectableItemBoosterVE.BOOSTER_TOOLTIPS.get(e.id), [t]);
    }
    return null;
  };
  CollectableItemBoosterVE.prototype.onAllDispClipsLoaded = function (t = null) {
    if (this.options.icon.useSmallBoosterIcons) {
      this.onSmallBoosterLoaded();
    } else {
      this.onBigBoosterIconLoaded();
    }
    e.prototype.onAllDispClipsLoaded.call(this, t);
  };
  CollectableItemBoosterVE.prototype.onSmallBoosterLoaded = function () {
    if (this.boosterItemVO.boosterVO) {
      var e = l.int(CollectableItemBoosterVE.BOOSTER_SMALL_IDS[this.boosterItemVO.boosterVO.id]);
      if (this._iconClip && (e == c.ClientConstCharacter.CHAR_ID_OVERSEER || e == c.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER)) {
        var t;
        if (this.boosterItemVO.boosterVO.isWoodBooster) {
          t = new Library.CastleInterfaceElements_Icons.Icon_Wood_Big();
        } else if (this.boosterItemVO.boosterVO.isStoneBooster) {
          t = new Library.CastleInterfaceElements_Icons.Icon_Stone_Big();
        } else if (this.boosterItemVO.boosterVO.isFoodBooster) {
          t = new Library.CastleInterfaceElements_Icons.Icon_Food_Big();
        }
        this._iconClip.addChild(t);
        t.x = this.options.icon.dimension.x * 0.25;
        t.y = this.options.icon.dimension.y * 0.25;
        var i = new C(this.options.icon.dimension.x * 0.6, this.options.icon.dimension.y * 0.6);
        var n = 1;
        n = t.width > t.height ? i.x / t.width : i.y / t.height;
        t.width *= n;
        t.height *= n;
      }
    }
  };
  CollectableItemBoosterVE.prototype.onBigBoosterIconLoaded = function () {
    if (this.boosterItemVO.boosterVO) {
      this._iconClip.gotoAndStop(CollectableItemBoosterVE.BOOSTER_BIG_FRAMES[this.boosterItemVO.boosterVO.id]);
    }
  };
  Object.defineProperty(CollectableItemBoosterVE.prototype, "boosterItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemBoosterVE.__initialize_static_members = function () {
    CollectableItemBoosterVE.BOOSTER_TOOLTIPS = CollectableItemBoosterVE._getBoosterTooltipDic();
    CollectableItemBoosterVE.BOOSTER_BIG_ICONS_ASSET_NAME = "TimeChallengeBoosterIcons";
    CollectableItemBoosterVE.BOOSTER_BIG_FRAMES = [1, 3, 2, 1, 3, 2, 4, 1, 5, 1, 7, 6];
    CollectableItemBoosterVE.BOOSTER_SMALL_IDS = [c.ClientConstCharacter.CHAR_ID_OVERSEER, c.ClientConstCharacter.CHAR_ID_OVERSEER, c.ClientConstCharacter.CHAR_ID_OVERSEER, c.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER, c.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER, c.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER, c.ClientConstCharacter.CHAR_ID_MARAUDER, c.ClientConstCharacter.CHAR_ID_MEDICUS, c.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, c.ClientConstCharacter.CHAR_ID_ARCHITECT, c.ClientConstCharacter.CHAR_ID_INSTRUCTOR, c.ClientConstCharacter.CHAR_ID_MERCHANT];
  };
  return CollectableItemBoosterVE;
}(h.ACollectableItemVE);
exports.CollectableItemBoosterVE = _;
s.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();