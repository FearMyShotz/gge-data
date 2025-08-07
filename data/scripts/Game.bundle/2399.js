Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleWorldmapBookmarkVO() {
    this.kingdomId = c.int(r.WorldClassic.KINGDOM_ID);
    this.posX = 0;
    this.posY = 0;
    this._name = "";
    this.bookmarkID = 0;
    this.creatorPlayerID = 0;
    this._sortIndex = 0;
  }
  CastleWorldmapBookmarkVO.prototype.parseParamObject = function (e) {
    this.kingdomId = c.int(e[s.CommKeys.KINGDOM_ID] || e[s.CommKeys.KINGDOM_ID_2]);
    this.posX = c.int(e.X);
    this.posY = c.int(e.Y);
    if (e.AI && e.AI.length > 0) {
      this.worldmapObjectVO = o.WorldmapObjectFactory.parseWorldMapArea(e.AI);
    }
    if (this.worldmapObjectVO && !this.worldmapObjectVO.ownerInfo) {
      this.worldmapObjectVO.ownerInfo = a.WorldMapOwnerInfoVO.createDummy(0, true);
      this.worldmapObjectVO.areaNameString = l.Localize.text("deleted_Player");
    }
    this.name = e.N;
    this.type = p.EWorldmapBookmarkType.getTypeById(+e.TY);
    this.bookmarkID = c.int(e.BID);
    if (e.C) {
      this.creatorPlayerID = c.int(e.C);
      if (this._type == p.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
        this._attackOrderDetails = new d.CastleBookmarkAttackOrderDetailsVO();
        this._attackOrderDetails.parseParamObject(e);
      }
    }
  };
  CastleWorldmapBookmarkVO.prototype.clone = function () {
    var e = new CastleWorldmapBookmarkVO();
    e.kingdomId = c.int(this.kingdomId);
    e.posX = c.int(this.posX);
    e.posY = c.int(this.posY);
    e.worldmapObjectVO = this.worldmapObjectVO;
    e.attackOrderDetails = this._attackOrderDetails;
    e.name = this.name;
    e.type = this._type;
    return e;
  };
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (e) {
      this._type = e;
      this._sortIndex = c.int(u.CastleModel.bookmarkData.getAllianceBookmarkSortIndexByType(this._type));
      if (this._type == p.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER && this._attackOrderDetails == null) {
        this._attackOrderDetails = new d.CastleBookmarkAttackOrderDetailsVO();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "attackOrderDetails", {
    get: function () {
      return this._attackOrderDetails;
    },
    set: function (e) {
      this._attackOrderDetails = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "priority", {
    get: function () {
      switch (this._type) {
        case p.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
          return 5;
        case p.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
          return 4;
        case p.EWorldmapBookmarkType.ALLIANCE_DEFEND:
          return 3;
        case p.EWorldmapBookmarkType.PLAYER_ENEMY:
          return 2;
        case p.EWorldmapBookmarkType.PLAYER_FRIEND:
          return 1;
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "isAllianceBookmark", {
    get: function () {
      return this._type == p.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK || this._type == p.EWorldmapBookmarkType.ALLIANCE_DEFEND || this._type == p.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "isPlayerBookmark", {
    get: function () {
      return this._type == p.EWorldmapBookmarkType.PLAYER_FRIEND || this._type == p.EWorldmapBookmarkType.PLAYER_ENEMY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    set: function (e) {
      if (e != null) {
        this._name = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "sortIndex", {
    get: function () {
      return this._sortIndex;
    },
    enumerable: true,
    configurable: true
  });
  return CastleWorldmapBookmarkVO;
}();
exports.CastleWorldmapBookmarkVO = n;
var o = require("./147.js");
var a = require("./316.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./2400.js");
var p = require("./203.js");