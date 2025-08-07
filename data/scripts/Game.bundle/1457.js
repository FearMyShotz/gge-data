Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./16.js");
var o = createjs.TextField;
var a = createjs.TextFormat;
var s = createjs.Shape;
var r = function () {
  function CheatHOLSkillsIdsDisplay() {
    this.enableSkillIdsDisplay = false;
  }
  Object.defineProperty(CheatHOLSkillsIdsDisplay, "instance", {
    get: function () {
      if (CheatHOLSkillsIdsDisplay._instance == null) {
        CheatHOLSkillsIdsDisplay._instance = new CheatHOLSkillsIdsDisplay();
      }
      return CheatHOLSkillsIdsDisplay._instance;
    },
    enumerable: true,
    configurable: true
  });
  CheatHOLSkillsIdsDisplay.prototype.cheatShowSkillIdAndSkillGroupID = function (e, t) {
    if (this.enableSkillIdsDisplay && e && t) {
      if (e.cheatText) {
        e.removeChild(e.cheatText);
      }
      var i = new o();
      var r = new a("Arial", 11);
      i.setTextFormat(r);
      i.text = "id: " + t.id + " groupID: " + t.skillGroupID;
      i.textColor = n.ClientConstColor.GENERIC_WHITE;
      i.x -= 52;
      i.y -= 50;
      var l = new s();
      l.graphics.beginFill("#000000").drawRect(-52, -50, 100, 20);
      e.cheatText = i;
      e.addChild(l);
      e.addChild(i);
    }
  };
  return CheatHOLSkillsIdsDisplay;
}();
exports.CheatHOLSkillsIdsDisplay = r;