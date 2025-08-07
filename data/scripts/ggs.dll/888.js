Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./489.js");
var a = require("./3.js");
var s = function () {
  function Input() {
    this.lastKeyName = "";
    this.isMouseDown = false;
    this.isMouseReleased = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseDelta = 0;
    if (Input._instance) {
      throw new Error("Input singleton already initialized.");
    }
    this._timeKeyPressed = this._nt = this._ot = Date.now();
    this._dt = 0;
    this.mousePos = new i.Vector2D();
    this._ascii = new Array(222);
    this.fillAscii();
    this._keyState = new Map();
    this._keyArr = [];
    for (var e = 0; e < 222; e++) {
      if (this._ascii[e] !== undefined) {
        var t = this._ascii[e];
        this._keyArr.push(t);
        this._keyState.set(t, 0);
      }
    }
  }
  Object.defineProperty(Input, "instance", {
    get: function () {
      if (Input._instance == null) {
        Input._instance = new Input();
      }
      return Input._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "timeSinceLastKeyPress", {
    get: function () {
      return Date.now() - this._timeKeyPressed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "timeSinceLastKeyRelease", {
    get: function () {
      return Date.now() - this._timeKeyReleased;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "timeSinceMousePressed", {
    get: function () {
      return Date.now() - this._timeMousePressed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "timeSinceMouseReleased", {
    get: function () {
      return Date.now() - this._timeMouseReleased;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "hasMouseScrolled", {
    get: function () {
      return !!this._hasMouseScrolled && (this._hasMouseScrolled = false, true);
    },
    enumerable: true,
    configurable: true
  });
  Input.prototype.activate = function (e) {
    this._stage = e;
    e.addEventListener(a.KeyboardEvent.KEY_DOWN, this.bindFunction(this.keyPress));
    e.addEventListener(a.KeyboardEvent.KEY_UP, this.bindFunction(this.keyRelease));
    e.addEventListener("mousedown", this.bindFunction(this.mousePress));
    e.addEventListener("pressup", this.bindFunction(this.mouseRelease));
    e.addEventListener("mousemove", this.bindFunction(this.mouseMove));
    e.addEventListener("mousewheel", this.bindFunction(this.mouseScroll));
  };
  Input.prototype.update = function () {
    this._nt = Date.now();
    this._dt = this._nt - this._ot;
    this._ot = this._nt;
    for (var e = 0; e < this._keyArr.length; e++) {
      if (this._keyState.get(this._keyArr[e]) !== 0) {
        this._keyState.set(this._keyArr[e], 0);
      }
    }
    this.isMouseReleased = false;
  };
  Input.prototype.isKeyDown = function (e) {
    return this._keyState.get(e) > 0;
  };
  Input.prototype.isKeyPressed = function (e) {
    return this._keyState.get(e) === 1;
  };
  Input.prototype.isKeyReleased = function (e) {
    return this._keyState.get(e) === -1;
  };
  Input.prototype.fillAscii = function () {
    this._ascii[65] = "A";
    this._ascii[66] = "B";
    this._ascii[67] = "C";
    this._ascii[68] = "D";
    this._ascii[69] = "E";
    this._ascii[70] = "F";
    this._ascii[71] = "G";
    this._ascii[72] = "H";
    this._ascii[73] = "I";
    this._ascii[74] = "J";
    this._ascii[75] = "K";
    this._ascii[76] = "L";
    this._ascii[77] = "M";
    this._ascii[78] = "N";
    this._ascii[79] = "O";
    this._ascii[80] = "P";
    this._ascii[81] = "Q";
    this._ascii[82] = "R";
    this._ascii[83] = "S";
    this._ascii[84] = "T";
    this._ascii[85] = "U";
    this._ascii[86] = "V";
    this._ascii[87] = "W";
    this._ascii[88] = "X";
    this._ascii[89] = "Y";
    this._ascii[90] = "Z";
    this._ascii[48] = "0";
    this._ascii[49] = "1";
    this._ascii[50] = "2";
    this._ascii[51] = "3";
    this._ascii[52] = "4";
    this._ascii[53] = "5";
    this._ascii[54] = "6";
    this._ascii[55] = "7";
    this._ascii[56] = "8";
    this._ascii[57] = "9";
    this._ascii[32] = "Space";
    this._ascii[13] = "Enter";
    this._ascii[17] = "Ctrl";
    this._ascii[16] = "Shift";
    this._ascii[192] = "~";
    this._ascii[38] = "Up";
    this._ascii[40] = "Down";
    this._ascii[37] = "Left";
    this._ascii[39] = "Right";
    this._ascii[96] = "Numpad 0";
    this._ascii[97] = "Numpad 1";
    this._ascii[98] = "Numpad 2";
    this._ascii[99] = "Numpad 3";
    this._ascii[100] = "Numpad 4";
    this._ascii[101] = "Numpad 5";
    this._ascii[102] = "Numpad 6";
    this._ascii[103] = "Numpad 7";
    this._ascii[104] = "Numpad 8";
    this._ascii[105] = "Numpad 9";
    this._ascii[111] = "Numpad /";
    this._ascii[106] = "Numpad *";
    this._ascii[109] = "Numpad -";
    this._ascii[107] = "Numpad +";
    this._ascii[110] = "Numpad .";
    this._ascii[45] = "Insert";
    this._ascii[46] = "Delete";
    this._ascii[33] = "Page Up";
    this._ascii[34] = "Page Down";
    this._ascii[35] = "End";
    this._ascii[36] = "Home";
    this._ascii[112] = "F1";
    this._ascii[113] = "F2";
    this._ascii[114] = "F3";
    this._ascii[115] = "F4";
    this._ascii[116] = "F5";
    this._ascii[117] = "F6";
    this._ascii[118] = "F7";
    this._ascii[119] = "F8";
    this._ascii[188] = ",";
    this._ascii[190] = ".";
    this._ascii[186] = ";";
    this._ascii[222] = "'";
    this._ascii[219] = "[";
    this._ascii[221] = "]";
    this._ascii[189] = "-";
    this._ascii[187] = "+";
    this._ascii[220] = "\\";
    this._ascii[191] = "/";
    this._ascii[9] = "TAB";
    this._ascii[8] = "Backspace";
    this._ascii[27] = "ESC";
  };
  Input.prototype.mousePress = function (e) {
    this.isMouseDown = true;
    this._timeMousePressed = Date.now();
  };
  Input.prototype.mouseRelease = function (e) {
    this.isMouseDown = false;
    this.isMouseReleased = true;
    this._timeMouseReleased = Date.now();
  };
  Input.prototype.mouseMove = function (e) {
    this.mouseX = e.stageX - this._stage.x;
    this.mouseY = e.stageY - this._stage.y;
    this.mousePos.x = this.mouseX;
    this.mousePos.y = this.mouseY;
  };
  Input.prototype.mouseScroll = function (e) {
    this._hasMouseScrolled = true;
    this.mouseDelta = e.delta;
  };
  Input.prototype.keyPress = function (e) {
    this._keyState.set(e.key, 1);
    this.lastKeyName = e.key;
    if (this._keyState.get(e.key) === 1) {
      this._timeKeyPressed = Date.now();
    }
  };
  Input.prototype.keyRelease = function (e) {
    this._keyState.set(e.key, -1);
    this._timeKeyReleased = Date.now();
  };
  return Input;
}();
exports.Input = s;