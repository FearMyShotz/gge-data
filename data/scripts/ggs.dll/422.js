Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Shape;
var a = createjs.Container;
var s = function () {
  function BasicDebugHud() {}
  BasicDebugHud.showDebugInformationHud = function (e) {
    var t = new a();
    e.addChild(t);
    BasicDebugHud._target = t;
    BasicDebugHud.removeDefaultItems();
    BasicDebugHud._xpos = 0;
    BasicDebugHud.displayTestModeViaFlashvarsInfo();
    BasicDebugHud.displayDebugModeInfo();
  };
  BasicDebugHud.removeDefaultItems = function () {};
  BasicDebugHud.displayDebugModeInfo = function () {};
  BasicDebugHud.displayTestModeViaFlashvarsInfo = function () {
    if (window.location.href.match(/test=(on|true|1)/)) {
      var e = new i();
      e.graphics.beginFill("#EEC900");
      e.graphics.drawRect(BasicDebugHud._xpos, 0, BasicDebugHud.DEBUG_SQUARE_SIZE, BasicDebugHud.DEBUG_SQUARE_SIZE);
      BasicDebugHud._target.addChild(e);
      BasicDebugHud._xpos += BasicDebugHud.DEBUG_SQUARE_HORIZONTAL_GAP;
      BasicDebugHud.CONTEXT_INFO_TEXT_PREFIX;
      BasicDebugHud.DEBUG_MODE_CONTEXT_INFO_TEXT;
      BasicDebugHud.CONTEXT_INFO_TEXT_POSTFIX;
    }
  };
  BasicDebugHud.updateAwayFromKeyboardPixelVisibility = function (e) {
    if (BasicDebugHud._awayFromKeyboardStatusPixel) {
      BasicDebugHud._awayFromKeyboardStatusPixel.visible = !e;
    }
  };
  BasicDebugHud.CONTEXT_INFO_TEXT_PREFIX = "Running in [ ";
  BasicDebugHud.CONTEXT_INFO_TEXT_POSTFIX = " ] Mode";
  BasicDebugHud.DEBUG_MODE_CONTEXT_INFO_TEXT = "DEBUG";
  BasicDebugHud.TEST_MODE_CONTEXT_INFO_TEXT = "Test";
  BasicDebugHud.DEBUG_SQUARE_SIZE = 4;
  BasicDebugHud.DEBUG_SQUARE_HORIZONTAL_GAP = 4;
  return BasicDebugHud;
}();
exports.BasicDebugHud = s;