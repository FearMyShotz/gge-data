Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstTitle() {}
  ClientConstTitle.isValidTitleSystem = function (e) {
    return ClientConstTitle.VALID_TITLE_SYSTEMS.indexOf(e) > -1;
  };
  ClientConstTitle.DISPLAYTYPE_PREFIX = "prefix";
  ClientConstTitle.DISPLAYTYPE_SUFFIX = "suffix";
  ClientConstTitle.SYSTEM_GLORY_TEXT = "gloryTitles";
  ClientConstTitle.SYSTEM_FACTION_TEXT = "nobilityTitles";
  ClientConstTitle.SYSTEM_ISLAND_TEXT = "eilandTitles";
  ClientConstTitle.BRAVERY_TITLE = "FACTION";
  ClientConstTitle.GLORY_TITLE = "FAME";
  ClientConstTitle.ISLAND_TITLE = "ISLE";
  ClientConstTitle.VALID_TITLE_SYSTEMS = [ClientConstTitle.GLORY_TITLE, ClientConstTitle.BRAVERY_TITLE, ClientConstTitle.ISLAND_TITLE];
  return ClientConstTitle;
}();
exports.ClientConstTitle = n;