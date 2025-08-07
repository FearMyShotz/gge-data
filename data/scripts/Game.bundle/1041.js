Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./4.js");
var h = require("./517.js");
var g = require("./1598.js");
var C = require("./1599.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleListDetailOverviewItem(t) {
    var i = e.call(this, t) || this;
    i.itxt_castleName = i.textFieldManager.registerTextField(t.mc_castle.txt_castleName, new u.TextVO(""));
    i.itxt_castleName.autoFitToBounds = true;
    return i;
  }
  n.__extends(CastleListDetailOverviewItem, e);
  CastleListDetailOverviewItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.itxt_castleName.textContentVO.stringValue = this.wmo.areaNameString;
    h.KingdomCrestsAndSymbolsHelper.addCrestToMC(this.disp.mc_castle.mc_kingdomCrest, this.wmo.kingdomID, new _(52, 52));
    this.disp.mc_castle.mc_kingdomCrest.gotoAndStop(this.wmo.kingdomID + 1);
    this.updateVisitButton();
    this.updateCastleIcon();
  };
  CastleListDetailOverviewItem.prototype.updateVisitButton = function () {
    this.disp.btn_visitCastle.visible = !this.isKingstower && (this.layoutManager.currentState == E.CastleLayoutManager.STATE_WORLDMAP || this.wmo.objectId != p.CastleModel.areaData.activeArea.areaId || this.layoutManager.currentState == E.CastleLayoutManager.STATE_KINGDOMMAP);
    this.disp.btn_visitCastle.gotoAndStop(this.isLaboratory ? 3 : this.isMonument ? 2 : 1);
    this.disp.btn_visitCastle.mouseChildren = false;
    if (this.isMonument) {
      this.disp.btn_visitCastle.toolTipText = "dialog_monument_upgradeMonument_title";
    } else if (this.isLaboratory) {
      this.disp.btn_visitCastle.toolTipText = "dialog_laboratory_upgradeLaboratory_title";
    } else {
      this.disp.btn_visitCastle.toolTipText = "ringmenu_visit_castle";
    }
  };
  CastleListDetailOverviewItem.prototype.updateCastleIcon = function () {
    r.MovieClipHelper.clearMovieClip(this.disp.mc_castle.castleHolder);
    var e = y.WorldmapObjectIconHelper.drawMapObjectIcon(this.wmo, new _(60, 60));
    e.toolTipText = d.Localize.text(a.GenericTextIds.VALUE_SIMPLE_COMP, [d.Localize.text("Bookmarks_Menu_jumpTo_copy"), this.wmo.areaNameString]);
    this.disp.mc_castle.castleHolder.addChild(e);
  };
  CastleListDetailOverviewItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_visitCastle:
        if (this.isMonument) {
          O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleUpgradeLandmarkDialog, new C.CastleUpgradeLandmarkDialogProperties(this.wmo));
        } else if (this.isLaboratory) {
          O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleUpgradeLandmarkDialog, new g.CastleUpgradeLaboratoryDialogProperties(this.wmo));
        } else if (!this.isKingstower) {
          l.CommandController.instance.executeCommand(f.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, this.wmo);
        }
    }
  };
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "isKingstower", {
    get: function () {
      return D.instanceOfClass(this.wmo, "KingstowerMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "isMonument", {
    get: function () {
      return D.instanceOfClass(this.wmo, "MonumentMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "isLaboratory", {
    get: function () {
      return D.instanceOfClass(this.wmo, "LaboratoryMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "wmo", {
    get: function () {
      return this.castleDetailScrollItemVO.wmoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "castleDetailScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "textFieldManager", {
    get: function () {
      return c.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "layoutManager", {
    get: function () {
      return E.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleListDetailOverviewItem;
}(s.ScrollItem);
exports.CastleListDetailOverviewItem = m;
var f = require("./29.js");
var O = require("./9.js");
var E = require("./17.js");
var y = require("./70.js");
var b = require("./1600.js");
o.classImplementsInterfaces(m, "MovieClip");
var D = require("./1.js");