Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./105.js");
var c = createjs.MouseEvent;
var u = function () {
  function FillerSurroundingEditor() {
    this.shift = false;
    var e = p.IsoHelper.view.stage;
    if (e) {
      e.addEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      e.addEventListener(s.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      e.addEventListener(s.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
    }
    this._spawnedFillers = [];
    this.selectedObjects = [];
  }
  FillerSurroundingEditor.prototype.onMouseDown = function (e) {
    if (!this.shift && !!this.selectMousePos && !this.selectMousePos.equals(h.Iso.renderer.mouse.getMouseGridPos())) {
      this.deselectObjects();
    }
  };
  FillerSurroundingEditor.getInstance = function () {
    FillerSurroundingEditor.instance ||= new FillerSurroundingEditor();
    return FillerSurroundingEditor.instance;
  };
  FillerSurroundingEditor.prototype.onSelect = function (e) {
    if (this.spawnedFillers.indexOf(e.fillerSurroundingVO) != -1) {
      if (!this.shift) {
        this.deselectObjects();
      }
      if (this.shift && this.selectedObjects.indexOf(e) > -1) {
        var t = m.castAs(this.selectedObjects.splice(this.selectedObjects.indexOf(e), 1), "FillerSurroundingsVE");
        if (t) {
          t.removeGlow();
        }
      } else {
        this.selectedObjects.push(e);
        e.disp.filters = d.IsoConst.VE_GLOW_FILTER_BLUE;
      }
      this.selectMousePos = h.Iso.renderer.mouse.getMouseGridPos();
    }
  };
  FillerSurroundingEditor.prototype.deselectObjects = function () {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var e = 0, t = this.selectedObjects; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.removeGlow();
        }
      }
    }
    this.selectedObjects.length = 0;
    this.selectMousePos = null;
  };
  FillerSurroundingEditor.prototype.onKeyDown = function (e) {
    if (this.selectedObjects.length > 0) {
      switch (e.keyCode) {
        case a.Keyboard.ESCAPE:
          this.deselectObjects();
          break;
        case a.Keyboard.NUMPAD_8:
          this.changePos(-1, -1, e.ctrlKey);
          break;
        case a.Keyboard.NUMPAD_2:
          this.changePos(1, 1, e.ctrlKey);
          break;
        case a.Keyboard.NUMPAD_4:
          this.changePos(-1, 1, e.ctrlKey);
          break;
        case a.Keyboard.NUMPAD_6:
          this.changePos(1, -1, e.ctrlKey);
          break;
        case a.Keyboard.NUMPAD_7:
          this.changePos(-1, 0, e.ctrlKey);
          break;
        case a.Keyboard.NUMPAD_9:
          this.changePos(0, -1, e.ctrlKey);
          break;
        case a.Keyboard.NUMPAD_1:
          this.changePos(0, 1, e.ctrlKey);
          break;
        case a.Keyboard.NUMPAD_3:
          this.changePos(1, 0, e.ctrlKey);
          break;
        case a.Keyboard.UP:
          this.changeOrigin(l.IsoGridOriginEnum.TOP_CORNER);
          break;
        case a.Keyboard.DOWN:
          this.changeOrigin(l.IsoGridOriginEnum.BOTTOM_CORNER);
          break;
        case a.Keyboard.LEFT:
          this.changeOrigin(l.IsoGridOriginEnum.LEFT_CORNER);
          break;
        case a.Keyboard.RIGHT:
          this.changeOrigin(l.IsoGridOriginEnum.RIGHT_CORNER);
          break;
        case a.Keyboard.PAGE_UP:
          this.switchFiller(-1);
          break;
        case a.Keyboard.PAGE_DOWN:
          this.switchFiller(1);
          break;
        case a.Keyboard.DELETE:
          this.deleteFiller();
      }
    } else {
      switch (e.keyCode) {
        case a.Keyboard.NUMBER_1:
          this.spawnFiller(FillerSurroundingEditor.FILLER_DEFAULT);
          break;
        case a.Keyboard.NUMBER_2:
          this.spawnFiller(FillerSurroundingEditor.FILLER_SNOWPILE);
          break;
        case a.Keyboard.NUMBER_3:
          this.spawnFiller(FillerSurroundingEditor.FILLER_PATH);
      }
    }
    this.shift = !!e.shiftKey;
  };
  FillerSurroundingEditor.prototype.onKeyUp = function (e) {
    this.shift = !!e.shiftKey;
  };
  FillerSurroundingEditor.prototype.changePos = function (e, t, i) {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var n = 0, o = this.selectedObjects; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = a.fillerSurroundingVO.posOffset;
          s.x += i ? e * 5 : e;
          s.y += i ? t * 5 : t;
          h.Iso.data.updater.changePosition(a.vo, a.vo.pos);
        }
      }
    }
  };
  FillerSurroundingEditor.prototype.switchFiller = function (e) {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var t = 0, i = this.selectedObjects; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          for (var a, s = n.fillerSurroundingVO.getVisualClassName(), l = 0, c = 0, u = FillerSurroundingEditor.FILLER_LISTS; c < u.length && (a = u[c], !((l = r.int(a.indexOf(s))) > -1)); c++);
          var d = a[o.MathBase.limit(l + e, 0, a.length - 1, true)];
          n.fillerSurroundingVO.setAssetName(d);
          n.updateDisp();
        }
      }
    }
  };
  FillerSurroundingEditor.prototype.spawnFiller = function (e) {
    var t = h.Iso.renderer.mouse.getMouseGridPos();
    var i = h.Iso.data.grid.origins.getOriginPos(l.IsoGridOriginEnum.BOTTOM_CORNER);
    var n = t.subtract(i);
    var o = e == FillerSurroundingEditor.FILLER_SNOWPILE || e == FillerSurroundingEditor.FILLER_PATH;
    var a = new g.FillerSurroundingsVO(e[0], n, l.IsoGridOriginEnum.BOTTOM_CORNER, o);
    this._spawnedFillers.push(a);
    h.Iso.data.updater.updateSurroundings();
  };
  FillerSurroundingEditor.prototype.deleteFiller = function () {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var e = 0, t = this.selectedObjects; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = r.int(this.spawnedFillers.indexOf(i.fillerSurroundingVO));
          this.spawnedFillers.splice(n, 1);
        }
      }
    }
    h.Iso.data.updater.updateSurroundings();
  };
  FillerSurroundingEditor.prototype.changeOrigin = function (e) {
    if (this.selectedObjects.length > 0 && this.selectedObjects != null) {
      for (var t = 0, i = this.selectedObjects; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = n.fillerSurroundingVO.pos;
          var a = h.Iso.data.grid.origins.getOriginPos(e);
          var s = o.subtract(a);
          n.fillerSurroundingVO.setPosOrigin(e);
          n.fillerSurroundingVO.setPosOffset(s);
          n.updateDisp();
        }
      }
    }
  };
  Object.defineProperty(FillerSurroundingEditor.prototype, "spawnedFillers", {
    get: function () {
      return this._spawnedFillers;
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingEditor.prototype.printSpawnCode = function () {
    var e = "";
    if (this.spawnedFillers != null) {
      for (var t = 0, i = this.spawnedFillers; t < i.length; t++) {
        var o = i[t];
        if (o !== undefined) {
          var a = this.getPosOriginText(o.posOrigin);
          var s = o.isPath ? "true" : "false";
          e += "addToEditableResultList( new FillerSurroundingsVO(\"" + o.getVisualClassName() + "\", new Point(" + o.posOffset.x + ", " + o.posOffset.y + "), " + a + ", " + s + "));\n";
        }
      }
    }
    console.log(e);
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleServerMessageBigDialog, new n.BasicStandardOkDialogProperties("Code", e));
  };
  FillerSurroundingEditor.prototype.getPosOriginText = function (e) {
    switch (e) {
      case l.IsoGridOriginEnum.TOP_CORNER:
        return "IsoGridOriginEnum.TOP_CORNER";
      case l.IsoGridOriginEnum.BOTTOM_CORNER:
        return "IsoGridOriginEnum.BOTTOM_CORNER";
      case l.IsoGridOriginEnum.LEFT_CORNER:
        return "IsoGridOriginEnum.LEFT_CORNER";
      case l.IsoGridOriginEnum.RIGHT_CORNER:
        return "IsoGridOriginEnum.RIGHT_CORNER";
    }
    return "IsoGridOriginEnum.BOTTOM_CORNER";
  };
  FillerSurroundingEditor.prototype.addAsEditable = function (e) {
    this._spawnedFillers.push(e);
  };
  FillerSurroundingEditor.FILLER_DEFAULT = ["Trees_Surroundings_Short_Quarter", "Trees_Surroundings_Tall_Full", "Trees_Surroundings_Tall_Half", "Trees_Surroundings_Tall_ThreeQuarters", "Stones_Surroundings_Short_Half"];
  FillerSurroundingEditor.FILLER_SNOWPILE = ["Snowpile_Surroundings_A", "Snowpile_Surroundings_B", "Snowpile_Surroundings_C", "Snowpile_Surroundings_D", "Snowpile_Surroundings_E", "Snowpile_Surroundings_F", "Snowpile_Surroundings_G", "Snowpile_Surroundings_H", "Snowpile_Surroundings_I", "Snowpile_Surroundings_J", "Snowpile_Surroundings_K", "Snowpile_Surroundings_L", "Snowpile_Surroundings_M"];
  FillerSurroundingEditor.FILLER_PATH = ["Road_Surroundings"];
  FillerSurroundingEditor.FILLER_LISTS = [FillerSurroundingEditor.FILLER_DEFAULT, FillerSurroundingEditor.FILLER_SNOWPILE];
  FillerSurroundingEditor.IS_ACTIVE = false;
  return FillerSurroundingEditor;
}();
exports.FillerSurroundingEditor = u;
var d = require("./144.js");
var p = require("./46.js");
var h = require("./34.js");
var g = require("./1002.js");
var C = require("./9.js");
var _ = require("./1003.js");
var m = require("./1.js");