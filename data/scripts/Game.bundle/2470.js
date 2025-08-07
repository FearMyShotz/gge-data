Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./49.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./44.js");
var C = require("./4.js");
var _ = require("./43.js");
var m = require("./40.js");
var f = require("./8.js");
var O = require("./518.js");
var E = require("./93.js");
var y = createjs.Point;
var b = function (e) {
  function CastleAllianceLandmarksDialogItemRenderer(t) {
    var i = e.call(this, t) || this;
    t.btn_jumpTo.basicButton = new a.BasicButton(t.btn_jumpTo, true);
    t.mc_userName.basicButton = new a.BasicButton(t.mc_userName, true);
    i._defaultHolderPosition = new y(t.mc_castleHolder.x, t.mc_castleHolder.y);
    return i;
  }
  n.__extends(CastleAllianceLandmarksDialogItemRenderer, e);
  CastleAllianceLandmarksDialogItemRenderer.prototype.onClick = function (e) {
    if (f.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.mc_userName:
          if (this._worldmapObjectVO && this._worldmapObjectVO.ownerInfo && this._worldmapObjectVO.ownerInfo.playerID > 0) {
            I.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(S.CastlePlayerInfoDialog, new E.CastlePlayerInfoDialogProperties(this._worldmapObjectVO.ownerInfo.playerID), _.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.disp.btn_jumpTo:
          this.onJumpTo();
      }
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.onJumpTo = function () {
    if (this.isKingstower || this.isMonument || this.isLaboratory) {
      r.CommandController.instance.executeCommand(D.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.worldmapObjectVO.kingdomID, this.worldmapObjectVO.absAreaPos.x, this.worldmapObjectVO.absAreaPos.y]);
    } else {
      r.CommandController.instance.executeCommand(D.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, this.worldmapObjectVO);
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.hasCastleInKingdom = function (e) {
    var t = C.CastleModel.userData.castleList.getFilteredList(e);
    return !!t && t.length > 0;
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateDisp = function () {
    if (this.worldmapObjectVO && this.worldmapObjectVO.ownerInfo) {
      this.disp.visible = true;
      this.updateTexts();
      this.updateCastleIcon();
      this.updateKingdomIcon();
      this.updateJumpToButton();
    } else {
      this.disp.visible = false;
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateJumpToButton = function () {
    this.disp.btn_jumpTo.gotoAndStop(this.neededFrame);
    f.ButtonHelper.enableButton(this.disp.btn_jumpTo, this.hasCastleInKingdom(this.worldmapObjectVO.kingdomID));
    this.setTooltip(this.disp.btn_jumpTo);
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.setTooltip = function (e) {
    e.toolTipText = this.getTooltip();
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.getTooltip = function () {
    if (this.hasCastleInKingdom(this.worldmapObjectVO.kingdomID)) {
      if (this.isKingstower) {
        return g.SpecialServerHelper.checkTextIDForSkinText("tooltip_visit_kingtower");
      } else if (this.isMonument) {
        return "tooltip_visit_monument";
      } else if (this.isLaboratory) {
        return "tooltip_visit_laboratory";
      } else if (this.isMetropol) {
        return g.SpecialServerHelper.checkTextIDForSkinText("panel_action_jumpToMetropol");
      } else if (this.isCapital) {
        return "panel_action_jumpToCapital";
      } else {
        return h.Localize.text("panel_action_jumpTo", [this.worldmapObjectVO.areaNameString]);
      }
    } else {
      return "not_unlocked";
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateTexts = function () {
    T.CastleComponent.textFieldManager.registerTextField(this.disp.mc_userName.txt_userName, new p.TextVO(this.worldmapObjectVO.ownerInfo.playerName));
    T.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new p.TextVO("" + this.worldmapObjectVO.ownerInfo.playerLevel));
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateCastleIcon = function () {
    s.MovieClipHelper.clearMovieClip(this.disp.mc_castleHolder);
    var e = h.Localize.text(this.getTooltip());
    this.disp.mc_castleHolder.addChild(v.WorldmapObjectIconHelper.drawMapObjectIcon(this.worldmapObjectVO, new y(85, 70), true, false, true, e));
    if (A.instanceOfClass(this.worldmapObjectVO, "KingstowerMapobjectVO")) {
      this.disp.mc_castleHolder.x = this._defaultHolderPosition.x - 7;
    } else {
      this.disp.mc_castleHolder.x = this._defaultHolderPosition.x;
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateKingdomIcon = function () {
    var e = null;
    switch (this.worldmapObjectVO.kingdomID) {
      case d.WorldClassic.KINGDOM_ID:
        e = g.SpecialServerHelper.checkTextIDForSkinText("kingdomName_Classic");
        break;
      case c.WorldIce.KINGDOM_ID:
        e = "kingdomName_Icecream";
        break;
      case u.WorldDessert.KINGDOM_ID:
        e = "kingdomName_Dessert";
        break;
      case l.WorldVolcano.KINGDOM_ID:
        e = "kingdomName_Volcano";
    }
    O.KingdomCrestsAndSymbolsHelper.addCrestToMC(this.disp.mc_kingdom, this.worldmapObjectVO.kingdomID, new y(48, 48));
    this.disp.mc_kingdom.toolTipText = e;
  };
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "neededFrame", {
    get: function () {
      if (this.isKingstower) {
        return 2;
      } else if (this.isMonument) {
        return 3;
      } else if (this.isLaboratory) {
        return 4;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isKingstower", {
    get: function () {
      return A.instanceOfClass(this.worldmapObjectVO, "KingstowerMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isMonument", {
    get: function () {
      return A.instanceOfClass(this.worldmapObjectVO, "MonumentMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isLaboratory", {
    get: function () {
      return A.instanceOfClass(this.worldmapObjectVO, "LaboratoryMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isMetropol", {
    get: function () {
      return A.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isCapital", {
    get: function () {
      return A.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "worldmapObjectVO", {
    get: function () {
      return this._worldmapObjectVO;
    },
    set: function (e) {
      this._worldmapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceLandmarksDialogItemRenderer;
}(m.CastleItemRenderer);
exports.CastleAllianceLandmarksDialogItemRenderer = b;
var D = require("./29.js");
var I = require("./9.js");
var T = require("./14.js");
var v = require("./70.js");
var S = require("./94.js");
o.classImplementsInterfaces(b, "ICollectableRendererList");
var A = require("./1.js");