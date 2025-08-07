Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function Siren24ViewUtil() {}
  Siren24ViewUtil.loadKoreanAssets = function (e = null) {
    var t = o.BasicModel.basicLoaderData.loadVersionedInterfaceAsset("KoreaTableCell", 200);
    if (e != null) {
      if (t.isLoaded) {
        e();
      } else {
        t.addEventListener(a.BulkProgressEvent.COMPLETE, e, false, 0, true);
      }
    }
  };
  Object.defineProperty(Siren24ViewUtil, "ageRatingLogo", {
    get: function () {
      return new Library.KoreaTableCell.MC_ageRating();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Siren24ViewUtil, "contentDescriptorLogo", {
    get: function () {
      return new Library.KoreaTableCell.MC_contentDescriptor();
    },
    enumerable: true,
    configurable: true
  });
  Siren24ViewUtil.licenceTable = function (e) {
    var t;
    var i = s.EnvGlobalsHandler.globals.identityManagmentLicenseVO;
    switch (e) {
      case u.IdentityManagementView.KOREAN_TABLE_DEFAULT:
        t = new Library.KoreaTableCell.MC_KoreaTable();
        break;
      case u.IdentityManagementView.KOREAN_TABLE_COMPACT:
        t = new Library.KoreaTableCell.MC_KoreaTableCompact();
        break;
      case u.IdentityManagementView.KOREAN_TABLE_VERTICAL:
        t = new Library.KoreaTableCell.MC_KoreaTableVertical();
    }
    Siren24ViewUtil.fillCell(t, 0, new c.TextVO(l.IdentityManagementConstants.LICENSE_GAME_NAME));
    Siren24ViewUtil.fillCell(t, 1, new c.TextVO(i.gameTitle));
    Siren24ViewUtil.fillCell(t, 2, new c.TextVO(l.IdentityManagementConstants.LICENCE_COMPANY_NAME));
    Siren24ViewUtil.fillCell(t, 3, new c.TextVO(l.IdentityManagementConstants.LICENSE_KOREAN_COMPANY_NAME));
    Siren24ViewUtil.fillCell(t, 4, new c.TextVO(l.IdentityManagementConstants.LICENSE_RATING));
    Siren24ViewUtil.fillCell(t, 5, new c.TextVO(i.ageRating.age + l.IdentityManagementConstants.LICENSE_AGE_RATING_SUFFIX));
    Siren24ViewUtil.fillCell(t, 6, new c.TextVO(l.IdentityManagementConstants.LICENSE_RATING_NUMBER));
    Siren24ViewUtil.fillCell(t, 7, new c.TextVO(i.license_cc_np));
    Siren24ViewUtil.fillCell(t, 8, new c.TextVO(l.IdentityManagementConstants.LICENSE_DATE_OF_RATING_DELIVERY));
    Siren24ViewUtil.fillCell(t, 9, new c.TextVO(i.gameRatingBoardConcessionDate.getFullYear() + "." + i.gameRatingBoardConcessionDate.getMonth() + "." + i.gameRatingBoardConcessionDate.getDate()));
    Siren24ViewUtil.fillCell(t, 10, new c.TextVO(l.IdentityManagementConstants.LICENSE_PUBLISHER_NUMBER));
    Siren24ViewUtil.fillCell(t, 11, new c.TextVO(l.IdentityManagementConstants.LICENSE_NUMBER));
    r.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_footer, new c.TextVO("회사 이름\nGoodgame Studios Korea Limited\n사업자등록번호\n106-87-01536, 2013년09월10일 발행\n주소\n140-885 서울특별시 용산구 독서당로 96 대영빌딩 4충\n전화\n+82 (0) 2 - 795 - 8654\n이사회\nVerena Schnaus 대표이사 Oleg Rößger"));
    return t;
  };
  Siren24ViewUtil.fillCell = function (e, t, i) {
    e["mc_cell" + t].txt_label.embedFonts = true;
    r.GoodgameTextFieldManager.getInstance().registerTextField(e["mc_cell" + t].txt_label, i).size = 10;
  };
  return Siren24ViewUtil;
}();
exports.Siren24ViewUtil = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./3.js");
var u = require("./1879.js");