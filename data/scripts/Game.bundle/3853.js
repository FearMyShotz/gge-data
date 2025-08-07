Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./17.js");
var l = require("./1240.js");
var c = require("./41.js");
var u = require("./115.js");
var d = createjs.MouseEvent;
var p = function () {
  function AttackDialogDetailView() {}
  AttackDialogDetailView.prototype.init = function (e, t) {
    this.mcBG = e;
    this.mcCastle = t;
    this._fightDetailView = l.DetailViewCreator.createDetailViewFromIWorldmapObject(this.attackInfoVO.detailViewObject, this.mcBG, this.mcCastle, s.CastleModel.kingdomData.getKingdomVOByID(this.attackInfoVO ? this.attackInfoVO.sourceArea.kingdomID : s.CastleModel.defenceData.areaInfo.kingdomID));
    this.mcCastle.addEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.mcCastle.addEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.mcCastle.addEventListener(d.CLICK, this.bindFunction(this.onClick));
    this.controller.onShowSpyInfo.add(this.bindFunction(this.onSpyInfoShown));
  };
  AttackDialogDetailView.prototype.onSpyInfoShown = function (e, t, i, n, o, a, s, r) {
    var l;
    if (i === undefined) {
      i = true;
    }
    if (n === undefined) {
      n = false;
    }
    if (o === undefined) {
      o = false;
    }
    if (a === undefined) {
      a = true;
    }
    if (s === undefined) {
      s = "";
    }
    if (r === undefined) {
      r = true;
    }
    switch (s) {
      case "left":
        l = this._fightDetailView.layerLeft;
        break;
      case "right":
        l = this._fightDetailView.layerRight;
        break;
      case "middle":
        l = this._fightDetailView.layerMiddle;
        break;
      case "keep":
        l = this._fightDetailView.layerKeep;
    }
    if (r) {
      this._fightDetailView.selectedTarget = l;
    }
    this._fightDetailView.addGlow(l);
  };
  AttackDialogDetailView.prototype.onMouseOut = function (e) {
    this.mouseOutOfCastleView(e);
    this.onMouseOutOfCastle(e);
  };
  AttackDialogDetailView.prototype.onClick = function (e) {
    this.clickOnCastleView(e);
  };
  AttackDialogDetailView.prototype.clickOnCastleView = function (e) {
    if (this._fightDetailView) {
      if (this._fightDetailView.selectedTarget == e.target) {
        this._fightDetailView.selectedTarget = null;
        this._fightDetailView.removeGlow();
        return;
      }
      if (c.CastleMovieClipHelper.isDOPartOfDO(e.target, this._fightDetailView.castleLayer)) {
        this._fightDetailView.selectedTarget = null;
        this.updateGlowAndSpyInfoByTarget(e.target);
        switch (e.target) {
          case this._fightDetailView.layerKeep:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsKeep, a.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep");
            break;
          case this._fightDetailView.layerLeft:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsLeft, a.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "left");
            break;
          case this._fightDetailView.layerRight:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsRight, a.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "right");
            break;
          case this._fightDetailView.layerMiddle:
            this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsMiddle, a.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle");
        }
      }
    }
  };
  AttackDialogDetailView.prototype.updateGlowAndSpyInfoByTarget = function (e) {
    if (this._fightDetailView) {
      if (e == this._fightDetailView.layerLeft) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsLeft, a.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "left", false);
      } else if (e == this._fightDetailView.layerRight) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsRight, a.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "right", false);
      } else if (e == this._fightDetailView.layerMiddle) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsMiddle, a.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle", false);
      } else if (e == this._fightDetailView.layerKeep) {
        this.controller.onShowSpyInfo.dispatch(this.attackInfoVO.spyInfo.itemsKeep, a.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep", false);
      }
    }
  };
  AttackDialogDetailView.prototype.onMouseOver = function (e) {
    if (this._fightDetailView && (this.isFrontLayer(e) || this.isKeepLayer(e) || this.isRightFlankLayer(e) || this.isLeftFlankLayer(e) || this.isMiddleFlankLayer(e) || this.isMoatLayer(e))) {
      this.layoutManager.customCursor.setCursorType(n.BasicCustomCursor.CURSOR_CLICK);
    }
    if (!this._fightDetailView.selectedTarget) {
      this.updateGlowAndSpyInfoByTarget(e.target);
    }
  };
  AttackDialogDetailView.prototype.isMoatLayer = function (e) {
    return e.target == this._fightDetailView.layerMoat;
  };
  AttackDialogDetailView.prototype.isMiddleFlankLayer = function (e) {
    return e.target == this._fightDetailView.layerMiddle;
  };
  AttackDialogDetailView.prototype.isLeftFlankLayer = function (e) {
    return e.target == this._fightDetailView.layerLeft;
  };
  AttackDialogDetailView.prototype.isRightFlankLayer = function (e) {
    return e.target == this._fightDetailView.layerRight;
  };
  AttackDialogDetailView.prototype.isKeepLayer = function (e) {
    return e.target == this._fightDetailView.layerKeep;
  };
  AttackDialogDetailView.prototype.isFrontLayer = function (e) {
    return e.target == this._fightDetailView.layerFront;
  };
  AttackDialogDetailView.prototype.onMouseOutOfCastle = function (e) {
    if (!e.relatedTarget || !e.relatedTarget.isInContainer(this.unitInfo)) {
      if (c.CastleMovieClipHelper.isDOPartOfDO(e.target, this.unitInfo)) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.controller.onHideSpyInfo.dispatch();
        }
      }
      if (this._fightDetailView) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.controller.onHideSpyInfo.dispatch();
        }
      }
    }
  };
  AttackDialogDetailView.prototype.mouseOutOfCastleView = function (e) {
    if (this._fightDetailView && (!e.nativeEvent || !c.CastleMovieClipHelper.isDOPartOfDO(e.relatedObject, this.unitInfo))) {
      if (c.CastleMovieClipHelper.isDOPartOfDO(e.target, this.unitInfo)) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.controller.onHideSpyInfo.dispatch();
        }
      }
      switch (e.target) {
        case this._fightDetailView.layerKeep:
        case this._fightDetailView.layerLeft:
        case this._fightDetailView.layerRight:
        case this._fightDetailView.layerMiddle:
          this._fightDetailView.removeGlow();
          if (!this._fightDetailView.selectedTarget) {
            this.controller.onHideSpyInfo.dispatch();
          }
      }
    }
  };
  AttackDialogDetailView.prototype.destroy = function () {
    if (this._fightDetailView) {
      this._fightDetailView.selectedTarget = null;
      this._fightDetailView.clearView();
      if (this.mcCastle && this.mcCastle.contains(this._fightDetailView.castleLayer)) {
        this.mcCastle.removeChild(this._fightDetailView.castleLayer);
      }
    }
    if (this.mcCastle) {
      this.mcCastle.removeEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.mcCastle.removeEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.mcCastle.removeEventListener(d.CLICK, this.bindFunction(this.onClick));
    }
    this.controller.onShowSpyInfo.remove(this.bindFunction(this.onSpyInfoShown));
  };
  Object.defineProperty(AttackDialogDetailView.prototype, "unitInfo", {
    get: function () {
      return this.controller.spyInfoMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDetailView.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDetailView.prototype, "layoutManager", {
    get: function () {
      return r.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDetailView.prototype, "controller", {
    get: function () {
      return u.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDetailView.__initialize_static_members = function () {};
  return AttackDialogDetailView;
}();
exports.AttackDialogDetailView = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();