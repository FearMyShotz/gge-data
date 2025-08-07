Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.ColorFilter;
var o = function () {
  function CastleAllianceCrestHelper() {}
  CastleAllianceCrestHelper.setCrestGraphics = function (e, t, i = null, n = null, o = true) {
    if (t && !t.isEmpty) {
      n ||= h.AllianceCrestEnum.DEFAULT_CREST;
      var s = !t || t.isEmpty ? a.ClientConstAllianceCrest.DEFAULT_CREST_GREY : t;
      l.MovieClipHelper.clearMovieClip(e);
      e.visible = false;
      CastleAllianceCrestHelper.addCrestToDisp(e, s, i.size, n, o);
    }
  };
  CastleAllianceCrestHelper.addCrestToDisp = function (e, t, i, n, o = true) {
    if (o) {
      var a = CastleAllianceCrestHelper.ASSET_FRAME_SIMPLE_PREFIX + t.frameID + (n.isSimpleCrest ? CastleAllianceCrestHelper.ASSET_SIMPLE_SUFFIX : "");
      var s = new d.CastleGoodgameExternalClip(a, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(a), null, 0, true);
      if (s.isLoaded) {
        CastleAllianceCrestHelper.createCrest(e, s, t, i.y, i.x, n);
      } else {
        s.clipLoaded.addOnce(function (o) {
          CastleAllianceCrestHelper.createCrest(e, o, t, i.y, i.x, n);
        });
      }
    } else {
      CastleAllianceCrestHelper.createCrest(e, null, t, i.y, i.x, n);
    }
  };
  CastleAllianceCrestHelper.createCrest = function (e, t, i, n, o, a) {
    var s = t ? t.currentshownDisplayObject : null;
    var l = CastleAllianceCrestHelper.ASSET_LAYOUT_PREFIX + i.layoutID + (a.isSimpleCrest ? CastleAllianceCrestHelper.ASSET_SIMPLE_SUFFIX : "");
    if (!r.BasicModel.basicLoaderData.isItemAssetVersioned(l)) {
      l = CastleAllianceCrestHelper.ASSET_LAYOUT_PREFIX + i.layoutID;
    }
    var c = new d.CastleGoodgameExternalClip(l, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(l), null, 0, true);
    if (c.isLoaded) {
      CastleAllianceCrestHelper.changeBackground(c, i);
    } else {
      c.clipLoaded.addOnce(function (e) {
        CastleAllianceCrestHelper.changeBackground(e, i);
      });
    }
    e.addChild(c);
    if (s) {
      e.addChild(s);
    }
    if (c.isLoaded) {
      CastleAllianceCrestHelper.changeSizeAndUpdate(e, o, n);
    } else {
      c.clipLoaded.addOnce(function (t) {
        CastleAllianceCrestHelper.changeSizeAndUpdate(e, o, n);
      });
    }
  };
  CastleAllianceCrestHelper.changeBackground = function (e, t) {
    var i = new c.ColorTransform();
    for (var o = t.colors, a = e.currentshownDisplayObject, s = 0; s < o.length; s++) {
      i.color = o[s].color;
      var r = a["c" + (s + 1)];
      if (r) {
        r.useFilters([new n(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
        r.visible = true;
      }
    }
  };
  CastleAllianceCrestHelper.changeSizeAndUpdate = function (e, t, i) {
    l.MovieClipHelper.scaleDownToFit(e, t, i);
    e.mouseChildren = false;
    e.visible = true;
    p.CastleMovieClipHelper.updateParentCache(e);
  };
  CastleAllianceCrestHelper.colorizeFlags = function (e, t) {
    t = CastleAllianceCrestHelper.getValidFlagColors(t);
    for (var i = 0; i < 3; ++i) {
      var o = e.getChildByName("c" + (i + 1));
      if (o) {
        var a = new c.ColorTransform();
        a.color = t[i];
        o.useFilters([new n(a.redMultiplier, a.greenMultiplier, a.blueMultiplier, a.alphaMultiplier, a.redOffset, a.greenOffset, a.blueOffset, a.alphaOffset)]);
      }
    }
  };
  CastleAllianceCrestHelper.getValidFlagColors = function (e) {
    var t = new Array(3);
    switch (e.length) {
      case 1:
        t[0] = t[1] = t[2] = e[0];
        break;
      case 2:
        t[0] = e[0];
        t[1] = e[1];
        t[2] = e[0];
        break;
      default:
        t = e;
    }
    return t;
  };
  CastleAllianceCrestHelper.getMyAllianceCrestVO = function () {
    var e = u.CastleModel.allianceData.myAllianceVO;
    if (e && !e.allianceCrestVO.isEmpty) {
      return e.allianceCrestVO;
    } else {
      return a.ClientConstAllianceCrest.DEFAULT_CREST_GREY;
    }
  };
  CastleAllianceCrestHelper.getMyAllianceCrestBackgroundColorAsVector = function () {
    return s.CastleArrayHelper.toUintVector(CastleAllianceCrestHelper.getValidFlagColors(CastleAllianceCrestHelper.getMyAllianceCrestVO().colors));
  };
  CastleAllianceCrestHelper.__initialize_static_members = function () {
    CastleAllianceCrestHelper.ASSET_FRAME_SIMPLE_PREFIX = "AllianceCrestFrame_";
    CastleAllianceCrestHelper.ASSET_SIMPLE_SUFFIX = "_simple";
    CastleAllianceCrestHelper.ASSET_LAYOUT_PREFIX = "AllianceCrestLayout_";
  };
  return CastleAllianceCrestHelper;
}();
exports.CastleAllianceCrestHelper = o;
var a = require("./2028.js");
var s = require("./565.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./4.js");
var d = require("./24.js");
var p = require("./41.js");
var h = require("./215.js");
o.__initialize_static_members();