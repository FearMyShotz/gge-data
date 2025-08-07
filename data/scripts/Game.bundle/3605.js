Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastlePaymentRewardHelper() {}
  CastlePaymentRewardHelper.getNameOfItemSet = function (e) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 9:
        return "RewardsSet" + e;
    }
    return "RewardsSet9";
  };
  CastlePaymentRewardHelper.getIconWidth = function (e) {
    switch (e) {
      case 1:
        return 142;
      case 2:
        return 88;
      case 3:
      case 4:
        return 85;
      case 9:
        return 56;
    }
    return 56;
  };
  CastlePaymentRewardHelper.getIconHeight = function (e) {
    switch (e) {
      case 1:
        return 166;
      case 2:
        return 106;
      case 3:
      case 4:
        return 101;
      case 9:
        return 66;
    }
    return 66;
  };
  CastlePaymentRewardHelper.fillBarWithColor = function (e = 0, t = null) {
    if (t) {
      var i = new o.ColorTransform();
      i.color = e;
      t.useFilters([new createjs.ColorFilter(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
    }
  };
  CastlePaymentRewardHelper.customizeSkinComponents = function (e, t, i, n, o, s, r, l, c, u, d) {
    switch (e) {
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT:
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH:
        if (t) {
          t.y += 10;
        }
        if (i) {
          i.x += -45;
          i.y += 10;
        }
        if (c) {
          c.y -= 40;
        }
        if (d) {
          if (o) {
            o.y += -45;
          }
          d.y += -45;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_USA:
        if (t) {
          t.y += -18;
        }
        if (i) {
          i.y += -10;
        }
        if (n) {
          n.x += -1;
          n.y += -13;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_ALIEN:
        if (t) {
          t.textArea.textColor = 16776171;
        }
        if (n) {
          n.textArea.textColor = 16381924;
          n.x += 10;
          n.y += -9;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER:
        if (t) {
          t.x += -7;
          t.y += -10;
          t.textArea.textColor = 16777215;
        }
        if (i) {
          i.y += -12;
        }
        if (n) {
          n.y += -9;
          n.textArea.textColor = 16631347;
        }
        if (u) {
          u.textArea.textColor = 4469542;
          CastlePaymentRewardHelper.fillBarWithColor(12690820, u.bkgrArea);
          u.bkgrArea.visible = true;
        }
        if (r) {
          r.textArea.textColor = 16777215;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_BERIMOND:
        if (n) {
          n.textArea.textColor = 4469542;
        }
        if (t) {
          t.width -= 10;
        }
        if (l) {
          l.y += 91;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFENSE:
        if (t) {
          t.y += -12;
        }
        if (i) {
          i.y += -14;
        }
        if (n) {
          n.x += -1;
          n.y += -15;
          n.textArea.textColor = 16566066;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_ATTACK:
        if (t) {
          t.y += -5;
        }
        if (i) {
          i.y += -7;
        }
        if (n) {
          n.x += -1;
          n.y += -12;
          n.textArea.textColor = 16566066;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER:
        if (t) {
          t.y += -10;
        }
        if (n) {
          n.y += -14;
          n.textArea.textColor = 16566066;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_SPRING_BUNNY:
        if (t) {
          t.y += -10;
        }
        if (n) {
          n.y += -2;
          n.textArea.textColor = 11013646;
        }
        if (l) {
          l.x += 7;
          l.y += 62;
        }
        if (i) {
          i.x += -29;
          i.y += -11;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_WHEEL_OF_FORTUNE:
        if (t) {
          t.y += -12;
        }
        if (i) {
          i.y += -11;
        }
        if (n) {
          n.y += -13;
          n.textArea.textColor = 16566066;
        }
        if (l) {
          l.y += 166;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP:
        if (u) {
          CastlePaymentRewardHelper.fillBarWithColor(14728093, u.bkgrArea);
          u.bkgrArea.visible = true;
        }
        if (t) {
          t.y += -15;
        }
        if (i) {
          i.y += -10;
        }
        if (n) {
          n.textArea.textColor = 0;
          n.x += -2;
          n.y += -13;
        }
        if (l) {
          l.y += 64;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUNDAY:
        if (i) {
          i.y += 4;
        }
        if (l) {
          l.y += 46;
        }
        if (n) {
          n.textArea.textColor = 3619628;
        }
        if (u) {
          CastlePaymentRewardHelper.fillBarWithColor(15234304, u.bkgrArea);
          u.bkgrArea.visible = true;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING:
        if (r) {
          r.textArea.textColor = 16316664;
        }
        if (n) {
          n.textArea.textColor = 466001;
        }
        if (l) {
          l.y += 40;
        }
        if (u) {
          CastlePaymentRewardHelper.fillBarWithColor(12768996, u.bkgrArea);
          u.bkgrArea.visible = true;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_UNDERWORLD:
        if (t) {
          t.textArea.textColor = 1686210;
        }
        if (i) {
          i.y += -15;
        }
        if (n) {
          n.textArea.textColor = 29828;
          n.x += 2;
          n.y += -11;
        }
        if (l) {
          l.y += 40;
        }
        if (r) {
          r.textArea.textColor = 7826271;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_HALLOWEEN:
        if (i) {
          CastlePaymentRewardHelper.fillBarWithColor(4146241, i);
          i.x += -28;
          i.y += -13;
        }
        if (t) {
          t.textArea.textColor = 4469542;
        }
        if (n) {
          n.textArea.textColor = 6540687;
          n.x += 4;
          n.y += -5;
        }
        if (l) {
          l.x += 6;
          l.y += -10;
        }
        if (r) {
          r.textArea.textColor = 16316664;
        }
        if (u) {
          CastlePaymentRewardHelper.fillBarWithColor(6251617, u.bkgrArea);
          u.bkgrArea.visible = true;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_BLACK_FRIDAY:
        if (t) {
          t.y += -12;
        }
        if (i) {
          i.x += -9;
          i.y += -12;
        }
        if (n) {
          n.x += -1;
          n.y += -5;
          n.textArea.textColor = 16566066;
        }
        if (l) {
          l.x -= 5;
          l.y += 129;
        }
        if (u) {
          CastlePaymentRewardHelper.fillBarWithColor(16179921, u.bkgrArea);
          u.bkgrArea.visible = true;
        }
        if (r) {
          r.textArea.textColor = 15388850;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_WINTER:
        if (t) {
          t.textArea.textColor = 16773852;
          t.y += -7;
        }
        if (i) {
          CastlePaymentRewardHelper.fillBarWithColor(6996686, i);
          i.x += -29;
          i.y += -13;
        }
        if (n) {
          n.y += -12;
          n.textArea.textColor = 2653337;
        }
        if (l) {
          l.x += 6;
          l.y -= 9;
        }
        if (u) {
          CastlePaymentRewardHelper.fillBarWithColor(14996918, u.bkgrArea);
          u.bkgrArea.visible = true;
        }
        if (r) {
          r.textArea.textColor = 16316664;
        }
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_MIDAS:
    }
  };
  CastlePaymentRewardHelper.getSkinOffsetX = function (e) {
    switch (e) {
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT:
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH:
        return -26;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_USA:
        return 17;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_ALIEN:
        return 19;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER:
        return 7;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_BERIMOND:
        return 41;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFENSE:
        return 23;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_ATTACK:
        return 38;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER:
        return 34;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_WHEEL_OF_FORTUNE:
        return 17;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP:
        return 16;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUNDAY:
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING:
        return 18;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_UNDERWORLD:
        return 53;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_HALLOWEEN:
        return 30;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_BLACK_FRIDAY:
        return 28;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_WINTER:
        return 18;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_MIDAS:
        return 37;
    }
    return 0;
  };
  CastlePaymentRewardHelper.getSkinOffsetY = function (e) {
    switch (e) {
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT:
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH:
        return -16;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_USA:
        return 7;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_ALIEN:
        return -8;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER:
        return 10;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_BERIMOND:
        break;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFENSE:
        return 11;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_ATTACK:
        return 7;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER:
        return 17;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_WHEEL_OF_FORTUNE:
        return 15;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP:
        return 12;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_SUNDAY:
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING:
        return -9;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_UNDERWORLD:
        return 4;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_HALLOWEEN:
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_BLACK_FRIDAY:
        return 11;
      case a.CastlePaymentRewardSpecialOfferConstants.SKIN_WINTER:
        return 26;
    }
    return 0;
  };
  return CastlePaymentRewardHelper;
}();
exports.CastlePaymentRewardHelper = n;
var o = require("./1.js");
var a = require("./88.js");