Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./730.js");
var l = function (e) {
  function CommanderVO() {
    var t = this;
    t._playerIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CommanderVO, e);
  CommanderVO.prototype.getFeatherClassName = function () {
    return "GeneralFeather_" + this.picID;
  };
  CommanderVO.prototype.getVisClassName = function () {
    if (this.isHero) {
      return this.heroPicVisClassName;
    } else if (this.id == 1005) {
      return "Lord";
    } else {
      return "GeneralPic_" + this.picID;
    }
  };
  CommanderVO.prototype.getVisAsset = function () {
    if (this.isHero) {
      return this.heroPicAssetURL;
    } else {
      return "Lord_Icons";
    }
  };
  Object.defineProperty(CommanderVO.prototype, "name", {
    get: function () {
      if (this._name && this._name != "") {
        return new a.LocalizedTextVO("commander_index", [this._playerIndex, new s.TextVO(this._name)]);
      } else {
        return new a.LocalizedTextVO("commander_index", [this._playerIndex, o.Localize.text("lord_name_general_unnamed")]);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.LordVO.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CommanderVO.prototype, "defaultName", {
    get: function () {
      if (this._name && this._name != "") {
        return new s.TextVO(this._name);
      } else {
        return new a.LocalizedTextVO("lord_name_general_unnamed");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.LordVO.prototype, "defaultName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CommanderVO.prototype, "playerIndex", {
    get: function () {
      return this._playerIndex;
    },
    set: function (e) {
      this._playerIndex = e;
    },
    enumerable: true,
    configurable: true
  });
  return CommanderVO;
}(r.LordVO);
exports.CommanderVO = l;