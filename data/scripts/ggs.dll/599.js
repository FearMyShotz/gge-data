Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = require("./139.js");
var s = require("./142.js");
var r = require("./141.js");
var o = require("./233.js");
var l = require("./232.js");
var u = require("./234.js");
var c = require("./88.js");
var _ = require("./61.js");
var d = require("./2.js");
var m = require("./240.js");
var h = require("./600.js");
var p = require("./601.js");
var g = require("./602.js");
var E = require("./144.js");
var C = require("./242.js");
var f = createjs.Shape;
var T = createjs.DisplayObject;
var S = createjs.Text;
var y = createjs.Point;
var I = createjs.Stage;
var v = require("./603.js");
var A = createjs.FocusEvent;
var O = createjs.MouseEvent.STAGE_MOUSE_DOWN;
var L = require("./239.js");
var D = createjs.TextEvent;
var b = require("./238.js");
var N = require("./143.js");
var R = require("./605.js");
var P = require("./606.js");
var B = createjs.GlowFilter;
var M = createjs.DropShadowFilter;
var F = require("./229.js");
var U = require("./16.js");
var G = d.getLogger(U.TEXT_FIELDS_LOGGER);
R.insertInputFieldElementCSS();
var w;
var k = 0;
document.addEventListener("copy", function (e) {
  var t = e;
  if (w && document.activeElement === document.body && t.clipboardData) {
    t.clipboardData.setData("text/plain", w);
    t.preventDefault();
  }
});
var x = function (e) {
  function TextField() {
    var t = e.call(this) || this;
    t._defaultTextFormat = new s.TextFormat();
    t.needsRepaint = false;
    t.htmlLinkFormats = null;
    t._alwaysShowSelection = true;
    t._autoSize = r.TextFieldAutoSize.NONE;
    t._background = false;
    t._backgroundColor = "#FFFFFF";
    t._border = false;
    t._borderColor = "#000000";
    t._displayAsPassword = false;
    t._maxChars = 524288;
    t._multiline = false;
    t._restrict = null;
    t._selectable = false;
    t._verticalAlign = "top";
    t._textFieldType = a.TextFieldType.DYNAMIC;
    t._capitalize = false;
    t.textFormat = new s.TextFormat();
    t.defaultCacheScale = 1;
    t._firstVisibleLineIndex = 1;
    t._textValue = {
      type: "plain",
      text: "",
      inputTokens: []
    };
    t._width = 100;
    t._height = 100;
    t.isDefaultText = false;
    t._htmlTextFieldElement = null;
    t.mouseDownPoint = new y();
    t.mouseUpPoint = new y();
    t.inputTextFieldService = v.InputTextFieldService.singleton();
    t._links = [];
    t._hoveredLinkIndex = -1;
    t.baseConstructorRan = false;
    t._isComposing = false;
    t.onAddedToStage = function (e) {
      t.__stageRef = t.stage;
      if (t.isInputTextField()) {
        t.ensureProperHTMLTextFieldElement();
      }
      if (t.isInputTextField() || t._selectable) {
        t.stage.addEventListener(O, t.onStageMouseDown);
        t.setupListenersForInputSupport();
      }
      if (t.text) {
        t.invalidate("Added to stage with text already assigned");
      }
    };
    t.onRemovedFromStage = function (e) {
      if (t.cacheID !== 0) {
        t.uncache();
      }
      if (t.isInputTextField()) {
        t.teardown();
      } else if (t.selectable) {
        t.removeMouseInputHandlers();
      }
      if (t._htmlTextFieldElement) {
        G.error("removed from stage, but still having a reference to an _htmlInputElement", t.name);
      }
      if (t.__stageRef) {
        t.__stageRef.removeEventListener(O, t.onStageMouseDown);
        t.__stageRef.removeEventListener(createjs.MouseEvent.MOUSE_MOVE, t.handleStageMouseMove);
      }
      t.__stageRef = undefined;
    };
    t.handleStageMouseMove = function (e) {
      var n = t.normalizeCoordinates(e);
      var i = n ? t.findLink(n) : -1;
      if (i !== t._hoveredLinkIndex) {
        t._hoveredLinkIndex = i;
        if (i > -1) {
          b.Mouse.instance().showCustomCursor(N.MouseCursor.CLICK);
        } else if (n && t.getBounds().containsPoint(n)) {
          b.Mouse.instance().showCustomCursor(N.MouseCursor.ARROW);
        }
        t.invalidate("link changed");
      }
    };
    t.handleMouseClick = function (e) {
      var n = t.normalizeCoordinates(e);
      if (n) {
        var i = t.findLink(n);
        var a = t._links[i];
        if (a) {
          G.debug("link clicked", a.linkId);
          if (a.isAnchorLink) {
            F.navigateToURL(a.linkId);
          } else {
            t.dispatchEvent(new D(D.LINK, true, false, a.linkId));
          }
        }
      }
    };
    t.onStageMouseDown = function (e) {
      var n = t.normalizeCoordinates(e);
      if (t.isFocused && n && !t.isPointWithinHitArea(n) && t._htmlTextFieldElement) {
        if (_.currentBrowserInfo.isMobile) {
          TextField.isMobileKeyboardShown = false;
        }
        t._htmlTextFieldElement.blur();
      }
      if (t._selectionBeginIndex !== undefined) {
        w = undefined;
        t._selectionBeginIndex = undefined;
        t._selectionEndIndex = undefined;
        t.invalidate("stage mouse down, no more selection", true);
      }
    };
    t.antiAliasType = l.AntiAliasType.NORMAL;
    t.gridFitType = o.GridFitType.NONE;
    t.caretIndex = 0;
    t.condenseWhite = false;
    t.embedFonts = false;
    t.sharpness = 0;
    t.textInteractionMode = "normal";
    t.thickness = 1;
    t.mouseWheelEnabled = false;
    t.tabIndex = 0;
    t.tabEnabled = false;
    t.glow = [];
    t.dropShadow = [];
    t.lineWidth = null;
    t._wordWrap = false;
    t._x = 0;
    t._y = 0;
    t.validate = function () {
      if (t.stage) {
        if (t.needsRepaint) {
          createjs.Ticker.removeEventListener("tick", t.validate);
          t.redraw();
          t.invalidationReason = null;
          t.needsRepaint = false;
        }
      } else {
        t.invalidationReason = null;
        t.needsRepaint = false;
        createjs.Ticker.removeEventListener("tick", t.validate);
      }
    };
    t._mouseHandlersAttached = false;
    t.onMouseDown = function (e) {
      if (!t.isInputTextField() && t._selectable) {
        var n = t.normalizeCoordinates(e);
        if (n) {
          var i = t.caretCharacterIndexAtElementPosition(n);
          var a = t.lastMouseDownPos !== i;
          t._selectionBeginIndex = i;
          t._selectionEndIndex = i;
          t.lastMouseDownPos = i;
          t.handleDoubleClick(Number(i) >>> 0, a);
          t.invalidate("selection changed", true);
        }
      }
      if (t.isInputTextField()) {
        var s = t.normalizeCoordinates(e);
        if (s) {
          t.mouseDownPoint = s;
          if (t._htmlTextFieldElement) {
            t.onFocus();
            if (_.currentBrowserInfo.isMobile) {
              window.dispatchEvent(new Event("inputHTMLTextField"));
              e.preventDefault();
            }
            if ((i = t.caretCharacterIndexAtElementPosition(s)) !== undefined) {
              t._htmlTextFieldElement.setSelectionRange(i, i);
            }
          } else {
            G.error("TextField clicked, but not _htmlInputElement set", t.name);
          }
        }
      }
    };
    t.onRollOver = function (e) {
      if (t.isInputTextField() || t._selectable) {
        b.Mouse.instance().showCssCursor(N.CSSMouseCursor.TEXT);
      }
    };
    t.onStageResized = function (e) {
      if (!_.currentBrowserInfo.isMobile) {
        if (t.isInputTextField()) {
          t.blur();
        }
      }
    };
    t.onPressMove = function (e) {
      if (t._selectable && t.lastMouseDownPos !== undefined && !t.isInputTextField()) {
        var n = t.normalizeCoordinates(e);
        if (n) {
          var i = t.caretCharacterIndexAtElementPosition(n);
          if (i !== undefined && i < t.lastMouseDownPos) {
            t._selectionBeginIndex = i;
            t._selectionEndIndex = t.lastMouseDownPos;
          } else if (i !== undefined && i > t.lastMouseDownPos) {
            t._selectionBeginIndex = t.lastMouseDownPos;
            t._selectionEndIndex = i;
          }
          t.updateSelectedText();
          t.invalidate("selection changed", true);
        }
      }
    };
    t.onInput = function (e) {
      if (t.isFocused && t._htmlTextFieldElement && !t._isComposing) {
        e.preventDefault();
        t.validateRestrict();
        t.text = t._htmlTextFieldElement.value;
        if (t._htmlTextFieldElement && t.isFocused) {
          var n = Math.min(t.maxScrollV, Math.max(Math.ceil(t._htmlTextFieldElement.scrollTop / t.latestLayout.metrics.lineHeight) + 1, 1));
          t.scrollV = n;
        }
        t.invalidate("onInput / text changed");
        t.dispatchEvent(new createjs.Event(createjs.Event.CHANGE, true, false));
      }
    };
    t.onKeyDown = function (e) {
      if (t.isFocused) {
        var n = L.KeyboardEventDispatcher.convertEvent(e);
        t.dispatchEvent(n);
        if (e.ctrlKey || e.keyCode >= 35 && e.keyCode <= 40) {
          t.invalidate("onKeyDown");
        }
      }
    };
    t.onKeyUp = function (e) {
      if (t.isFocused) {
        var n = L.KeyboardEventDispatcher.convertEvent(e);
        t.dispatchEvent(n);
      }
    };
    t.baseConstructorRan = true;
    t.mouseEnabled = t.type === a.TextFieldType.INPUT || t._selectable;
    t.addEventListener(createjs.Event.ADDED_TO_STAGE, t.onAddedToStage);
    t.addEventListener(createjs.Event.REMOVED_FROM_STAGE, t.onRemovedFromStage);
    t.ensureProperHTMLTextFieldElement();
    return t;
  }
  i.__extends(TextField, e);
  Object.defineProperty(TextField.prototype, "latestLayout", {
    get: function () {
      if (this._INTERNAL_currentLayout) {
        return this._INTERNAL_currentLayout;
      }
      var e = i.__assign({}, this.defaultTextFormat, this.textFormat);
      var t = this._INTERNAL_previousLayout ? this._INTERNAL_previousLayout.size.width : this._width;
      var n = this._INTERNAL_previousLayout ? this._INTERNAL_previousLayout.position.x : this._x;
      var a = undefined;
      a = this._autoSize === r.TextFieldAutoSize.NONE ? {
        autoSize: r.TextFieldAutoSize.NONE,
        x: this._x,
        y: this._y,
        width: this._width,
        height: this._height,
        lineWidth: this.lineWidth,
        wordWrap: this._wordWrap,
        multiline: this._multiline,
        previousWidth: t,
        previousX: n,
        firstVisibleLineIndex: this._firstVisibleLineIndex,
        verticalAlign: this._verticalAlign
      } : {
        autoSize: this._autoSize,
        x: this._x,
        y: this._y,
        width: this._width,
        height: this._height,
        wordWrap: this._wordWrap,
        multiline: this._multiline,
        previousWidth: t,
        previousX: n,
        firstVisibleLineIndex: this._firstVisibleLineIndex,
        verticalAlign: "top"
      };
      var s = this._textValue.inputTokens;
      if (this._displayAsPassword) {
        var o = _.currentBrowserInfo.isIE || _.currentBrowserInfo.isFireFox ? "●" : "•";
        s = s.map(function (e) {
          if (e.type === "plain") {
            return {
              type: "plain",
              text: Array.apply(null, Array(e.text.length)).map(function () {
                return o;
              }).join("")
            };
          } else {
            return e;
          }
        });
      }
      if (!this._multiline) {
        var l = s.findIndex(function (e) {
          return e.type === "newline";
        });
        if (l >= 0) {
          s = s.slice(0, l);
        }
      }
      var u = S._workingContext;
      u.save();
      this._INTERNAL_currentLayout = P.calculateLatestLayoutType(u, a, e, s, TextField.FontRestriction);
      u.restore();
      this._INTERNAL_previousLayout = this._INTERNAL_currentLayout;
      return this._INTERNAL_currentLayout;
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.getCanvasContext = function (e) {
    return e.getContext("2d", {
      willReadFrequently: true
    });
  };
  Object.defineProperty(TextField.prototype, "isFocused", {
    get: function () {
      return !!this._htmlTextFieldElement && document.activeElement === this._htmlTextFieldElement;
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.getBounds = function (e) {
    var t = this.latestLayout.bounds.clone();
    if (e && e !== this) {
      return this.transformRect(t, e);
    } else {
      return t;
    }
  };
  TextField.prototype.updateTextFieldVisibleInterval = function () {
    var e = this;
    if (this.isInputTextField() && this._htmlTextFieldElement && document.activeElement === this._htmlTextFieldElement) {
      this._textFieldVisibleIntervalId ||= window.setInterval(function () {
        e.blurHTMLTextInputIfTextFieldIsNotVisible();
      }, 100);
    } else if (this._textFieldVisibleIntervalId) {
      window.clearInterval(this._textFieldVisibleIntervalId);
      this._textFieldVisibleIntervalId = undefined;
    }
  };
  TextField.prototype.blurHTMLTextInputIfTextFieldIsNotVisible = function () {
    if (!_.currentBrowserInfo.isMobile) {
      for (var e = this.isVisible(), t = this; t && e;) {
        if (t = t.parent) {
          e = t.isVisible();
        }
      }
      if (e) {
        var n = this.getBounds();
        var i = this.localToGlobal(n.x, n.y);
        e = this.stage.getObjectUnderPoint(i.x + 1, i.y + 1, 1) === this;
      }
      if (!e && this._htmlTextFieldElement) {
        G.info("hiding the TextField " + this.name + ", as it or its parents are not visibile.");
        if (document.activeElement === this._htmlTextFieldElement) {
          if (_.currentBrowserInfo.isMobile) {
            TextField.isMobileKeyboardShown = false;
          }
          this._htmlTextFieldElement.blur();
        }
      }
    }
  };
  TextField.prototype.findLink = function (e) {
    return this._links.findIndex(function (t) {
      return t.containsPoint(e);
    });
  };
  TextField.prototype.replaceText = function (e, t, n) {
    G.warn("replaceText is not implemented");
  };
  Object.defineProperty(TextField.prototype, "alwaysShowSelection", {
    get: function () {
      return this._alwaysShowSelection;
    },
    set: function (e) {
      this._alwaysShowSelection = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "selectable", {
    get: function () {
      return this._selectable;
    },
    set: function (e) {
      if (this._selectable !== e) {
        this._selectable = e;
        this.mouseEnabled = e;
        if (this._selectable && !this._mouseHandlersAttached) {
          this.setupListenersForInputSupport();
          if (this.stage) {
            this.stage.addEventListener(O, this.onStageMouseDown);
          }
        } else if (!this._selectable && this._mouseHandlersAttached) {
          this.removeMouseInputHandlers();
          if (this.__stageRef) {
            this.__stageRef.removeEventListener(O, this.onStageMouseDown);
          }
        }
        this.invalidate("selectable property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.setSelection = function (e, t) {
    if (this._htmlTextFieldElement) {
      this._htmlTextFieldElement.selectionStart = e;
      this._htmlTextFieldElement.selectionEnd = t;
    } else {
      this._selectionBeginIndex = e;
      this._selectionEndIndex = t;
      this.updateSelectedText();
      this.invalidate("selection changed");
    }
  };
  Object.defineProperty(TextField.prototype, "autoSize", {
    get: function () {
      return this._autoSize;
    },
    set: function (e) {
      if (this._autoSize !== e) {
        this._autoSize = e;
        this.invalidate("autosize property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "background", {
    get: function () {
      return this._background;
    },
    set: function (e) {
      var t = e !== this.background;
      this._background = e;
      if (t) {
        this.invalidate("background property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "backgroundColor", {
    get: function () {
      return this._backgroundColor;
    },
    set: function (e) {
      var t = this._backgroundColor !== e;
      this._backgroundColor = e;
      if (t) {
        this.invalidate("backgroundColor property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "border", {
    get: function () {
      return this._border;
    },
    set: function (e) {
      var t = this._border !== e;
      this._border = e;
      if (t) {
        this.invalidate("border property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "borderColor", {
    get: function () {
      return this._borderColor;
    },
    set: function (e) {
      var t = this._borderColor !== e;
      this._borderColor = e;
      if (t) {
        this.invalidate("borderColor property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "defaultTextFormat", {
    get: function () {
      return this._defaultTextFormat;
    },
    set: function (e) {
      var t = !p(this._defaultTextFormat, e);
      this._defaultTextFormat = i.__assign({}, e);
      if (t) {
        this.invalidate("defaultTextFormat property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "displayAsPassword", {
    get: function () {
      return this._displayAsPassword;
    },
    set: function (e) {
      var t = this._displayAsPassword !== e;
      this._displayAsPassword = e;
      if (this._htmlTextFieldElement && this._htmlTextFieldElement instanceof HTMLInputElement) {
        this._htmlTextFieldElement.type = this._displayAsPassword ? "password" : "text";
        if (t) {
          this.invalidate("displayAsPassword property changed");
        }
      } else if (e === true) {
        G.error("Can't set displayAsPassword, as the underlying element is not a HTMLInputElement instance", this._htmlTextFieldElement);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "maxChars", {
    get: function () {
      return this._maxChars;
    },
    set: function (e) {
      var t = this._maxChars !== e;
      this._maxChars = e;
      if (this._htmlTextFieldElement) {
        this._htmlTextFieldElement.maxLength = this._maxChars;
      }
      if (t) {
        this.invalidate("maxChars property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "htmlText", {
    get: function () {
      if (this._textValue.type !== "html") {
        G.error("TextField.htmlText: Current text is not HTML text");
      }
      return this._textValue.text;
    },
    set: function (e) {
      e = h(e);
      if (this._textValue.type !== "html" || this._textValue.type !== e) {
        this._textValue = {
          type: "html",
          text: e,
          inputTokens: parseHTMLText(e)
        };
        this._hoveredLinkIndex = -1;
        this.invalidate("htmlText property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.drawHTMLText = function (e, t, n) {
    var a = this;
    var s = !!e;
    if (!s && !(e = S._workingContext)) {
      throw new Error("Did not get ctx");
    }
    if (!e) {
      throw new Error("Did not get ctx");
    }
    var r = TextField.additionalCacheWidth;
    if (this.filters && this.filters.length > 0) {
      r += 2;
    }
    e.save();
    e.beginPath();
    e.rect(0 - r, 0, this.width + r * 2, this.height);
    e.clip();
    e.textBaseline = "alphabetic";
    var o = this._selectable && this._selectionBeginIndex !== undefined && this._selectionEndIndex !== undefined ? {
      start: this._selectionBeginIndex,
      end: this._selectionEndIndex
    } : undefined;
    var l = {
      xOffset: 0,
      yOffset: 0,
      distanceToBaseline: this.latestLayout.metrics.distanceToBaseline,
      currentLink: null,
      lineHeight: this.latestLayout.metrics.lineHeight,
      selection: o,
      multiline: this.multiline,
      capitalized: this._capitalize,
      printedCharacters: 0,
      underLinePlacement: this.latestLayout.metrics.distanceToBaseline * 0.125,
      currentFormat: i.__assign({}, this.defaultTextFormat, this.textFormat),
      maxWidth: this.lineWidth && Math.min(this.lineWidth, this.width) || this.width,
      shouldPaint: s,
      closedLinks: [],
      glow: this.glow,
      dropShadow: this.dropShadow,
      htmlLinkFormats: this.htmlLinkFormats
    };
    var u = this.latestLayout.metrics;
    try {
      m.applyFormat(e, l.currentFormat, TextField.FontRestriction);
    } catch (e) {}
    var c = this.latestLayout.drawingTokens.reduce(function (t, n) {
      switch (n.type) {
        case "set-x-y":
          return function setXMoveY(e, t, n) {
            if (e.currentLink) {
              e.currentLink.link.endCurrentLinkRect(e.xOffset, e.yOffset + e.lineHeight);
              e.currentLink.link.startLinkRect(t, n);
            }
            return i.__assign({}, e, {
              xOffset: t,
              yOffset: n
            });
          }(t, n.x, n.y);
        case "advance-x":
          return i.__assign({}, t, {
            xOffset: t.xOffset + n.amount
          });
        case "start-link":
          t = function startLink(e, t, n, a = false) {
            var s;
            var r = true;
            if (n !== -1 && n === e.closedLinks.length) {
              if (e.htmlLinkFormats && e.htmlLinkFormats.hover) {
                s = e.htmlLinkFormats.hover.color;
                r = e.htmlLinkFormats.hover.underline || r;
              } else {
                s = typeof e.currentFormat.color == "string" ? e.currentFormat.color : "#ffffff";
              }
            } else if (e.htmlLinkFormats && e.htmlLinkFormats.normal) {
              s = e.htmlLinkFormats.normal.color;
              r = e.htmlLinkFormats.normal.underline || r;
            } else {
              s = e.currentFormat.color === "#ffffff" || e.currentFormat.color === "#FFFFFF" ? E.WHITE_TEXT_PASSIVE_LINK_COLOR : e.currentFormat.color === "#000000" || e.currentFormat.color === "#262014" ? E.DARK_TEXT_PASSIVE_LINK_COLOR : E.DEFAULT_PASSIVE_LINK_COLOR;
            }
            var o = e.currentFormat;
            var l = i.__assign({}, e.currentFormat, {
              color: s,
              underline: r
            });
            var u = new g.Link(t, a);
            u.startLinkRect(e.xOffset, e.yOffset);
            return e = i.__assign({}, e, {
              currentLink: {
                link: u,
                previousFormat: o
              },
              currentFormat: l
            });
          }(t, n.linkId, a._hoveredLinkIndex, n.isAnchorLink);
          m.applyFormat(e, t.currentFormat, TextField.FontRestriction);
          return t;
        case "plain":
          var s = n.width;
          return function drawText(e, t, n, a, s) {
            if (t.yOffset < -t.lineHeight || t.yOffset > s) {
              return i.__assign({}, t, {
                xOffset: t.xOffset + a,
                printedCharacters: t.printedCharacters + characters(n).length
              });
            }
            try {
              for (var r = t.dropShadow.length - 1; r >= 0; r--) {
                var o = t.dropShadow[r];
                e.save();
                e.shadowColor = o.color;
                e.shadowBlur = o.blur;
                e.shadowOffsetX = o.offsetX;
                e.shadowOffsetY = o.offsetY;
                e.fillStyle = o.color;
                e.fillText(n, t.xOffset, t.yOffset + t.distanceToBaseline);
                if (!o.offsetX && !o.offsetY) {
                  e.shadowBlur = 0;
                  e.lineWidth = (r + 1) * 4;
                  e.strokeStyle = o.color;
                  e.strokeText(n, t.xOffset, t.yOffset + t.distanceToBaseline);
                }
                e.restore();
              }
              for (var l = t.glow.length - 1; l >= 0; l--) {
                var u = t.glow[l];
                e.save();
                e.strokeStyle = u.color;
                e.lineWidth = u.blur / (u.isScaled ? 2 : 1);
                if (e.lineWidth === 2) {
                  e.lineWidth = 3;
                }
                if (t.currentFormat.size / e.lineWidth <= 3) {
                  e.lineWidth /= 2;
                  e.strokeText(n, t.xOffset + 1, t.yOffset + t.distanceToBaseline);
                  e.strokeText(n, t.xOffset - 1, t.yOffset + t.distanceToBaseline);
                  e.strokeText(n, t.xOffset, t.yOffset + t.distanceToBaseline + 1);
                  e.strokeText(n, t.xOffset, t.yOffset + t.distanceToBaseline - 1);
                } else {
                  if (!t.multiline) {
                    e.beginPath();
                    e.rect(t.xOffset - 2, t.yOffset + t.lineHeight - t.currentFormat.size - 2, a + 3, Math.max(t.currentFormat.size, t.lineHeight));
                    e.clip();
                  }
                  e.strokeText(n, t.xOffset, t.yOffset + t.distanceToBaseline);
                }
                e.restore();
              }
            } catch (e) {}
            var c;
            if (t.selection && (c = characters(n), t.printedCharacters < t.selection.end && t.printedCharacters + c.length > t.selection.start)) {
              var _ = e.fillStyle;
              var d = Math.max(0, t.selection.start - t.printedCharacters);
              var m = t.selection.end - t.selection.start;
              var h = t.selection.start - t.printedCharacters + m;
              var p = c.slice(0, d).join("");
              var g = c.slice(d, h).join("");
              var C = e.measureText(p).width;
              var f = e.measureText(g).width;
              e.fillStyle = "lightblue";
              e.fillRect(t.xOffset + C, t.yOffset, f, t.lineHeight);
              e.fillStyle = _;
            }
            e.fillText(n, t.xOffset, t.yOffset + t.distanceToBaseline);
            if (t.currentFormat.underline) {
              (function underline(e, t, n) {
                e.strokeStyle = typeof t.currentFormat.color == "string" ? t.currentFormat.color : E.FALLBACK_UNDERLINE_COLOR;
                e.beginPath();
                e.moveTo(t.xOffset, t.yOffset + t.distanceToBaseline + t.underLinePlacement);
                e.lineTo(t.xOffset + n, t.yOffset + t.distanceToBaseline + t.underLinePlacement);
                e.stroke();
              })(e, t, a);
            }
            return i.__assign({}, t, {
              xOffset: t.xOffset + a,
              printedCharacters: t.printedCharacters + (c ? c.length : 0)
            });
          }(e, t, n.text, s, a.latestLayout.size.height);
        case "end-link":
          t = function finalizeLink(e) {
            if (e.currentLink) {
              e.currentLink.link.endCurrentLinkRect(e.xOffset, e.yOffset + e.lineHeight);
              return e = i.__assign({}, e, {
                currentLink: null,
                currentFormat: e.currentLink.previousFormat,
                closedLinks: e.closedLinks.concat([e.currentLink.link])
              });
            }
            throw new Error("Closing link tag found, but no opening tag");
          }(t);
          m.applyFormat(e, t.currentFormat, TextField.FontRestriction);
          return t;
        case "switch-to-format":
          t = function applyFormatToState(e, t) {
            return i.__assign({}, e, {
              currentFormat: t
            });
          }(t, n.format);
          m.applyFormat(e, t.currentFormat, TextField.FontRestriction);
          return t;
        default:
          return t;
      }
    }, l);
    e.restore();
    if (t) {
      t.width = u.textWidth;
      t.height = u.textHeight;
    }
    this._links = c.closedLinks;
    if (this.stage) {
      this.stage.removeEventListener(createjs.MouseEvent.MOUSE_MOVE, this.handleStageMouseMove);
      if (this._links.length > 0) {
        this.mouseEnabled = true;
        this.stage.addEventListener(createjs.MouseEvent.MOUSE_MOVE, this.handleStageMouseMove);
        this.addEventListener(createjs.MouseEvent.CLICK, this.handleMouseClick);
      }
    }
    return t;
  };
  Object.defineProperty(TextField.prototype, "length", {
    get: function () {
      return this.text.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "multiline", {
    get: function () {
      return this._multiline;
    },
    set: function (e) {
      var t = e !== this._multiline;
      this._multiline = e;
      if (t) {
        this.ensureProperHTMLTextFieldElement();
        this.invalidate("multiline property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.ensureProperHTMLTextFieldElement = function () {
    var e = this;
    if (this.type === a.TextFieldType.INPUT) {
      var t = undefined;
      if (this.multiline) {
        if (this._htmlTextFieldElement && this._htmlTextFieldElement instanceof HTMLTextAreaElement) {
          if (this.stage) {
            this.inputTextFieldService.registerInputField(this);
          }
          return;
        }
        if (this._htmlTextFieldElement) {
          this.inputTextFieldService.unregisterInputField(this);
          document.body.removeChild(this._htmlTextFieldElement);
          this._htmlTextFieldElement = null;
        }
        t = document.createElement("textarea");
      } else {
        if (this._htmlTextFieldElement && this._htmlTextFieldElement instanceof HTMLInputElement) {
          if (this.stage) {
            this.inputTextFieldService.registerInputField(this);
          }
          return;
        }
        if (this._htmlTextFieldElement) {
          this.inputTextFieldService.unregisterInputField(this);
          document.body.removeChild(this._htmlTextFieldElement);
          this._htmlTextFieldElement = null;
        }
        (t = document.createElement("input")).type = this._displayAsPassword ? "password" : "text";
        t.autocomplete = "off";
        t.spellcheck = false;
      }
      this._htmlTextFieldElement = t;
      t.className = R.HTML_TEXTFIELD_CLASS;
      t.id = this.name + "_" + ++k;
      t.style.textAlign = this.textFormat ? this.textFormat.align : "left";
      t.maxLength = this._maxChars;
      t.value = this._textValue.text;
      document.body.appendChild(t);
      t.addEventListener("input", this.onInput);
      t.addEventListener("keydown", this.onKeyDown);
      t.addEventListener("keyup", this.onKeyUp);
      t.addEventListener("blur", function (t) {
        e.onBlur();
        e.dispatchEvent(A.FOCUS_OUT);
        e.invalidate("inputElement blur event");
      });
      t.addEventListener("compositionstart", function () {
        e._isComposing = true;
      });
      t.addEventListener("compositionend", function (t) {
        e._isComposing = false;
        e.onInput(t);
      });
      if (this.stage) {
        this.inputTextFieldService.registerInputField(this);
      }
      if (this.isFocused) {
        this.onFocus();
      }
    } else {
      if (this._htmlTextFieldElement && this._htmlTextFieldElement.parentElement === document.body) {
        document.body.removeChild(this._htmlTextFieldElement);
        this.inputTextFieldService.unregisterInputField(this);
        this._htmlTextFieldElement = null;
      } else if (this._htmlTextFieldElement) {
        G.error("ensureProperTextElement: has this._htmlInputElement but on unexpected node (not body)");
      }
      this._htmlTextFieldElement = null;
    }
  };
  Object.defineProperty(TextField.prototype, "numLines", {
    get: function () {
      return this.latestLayout.metrics.totalNumberOfTextLines;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "restrict", {
    get: function () {
      return this._restrict && this._restrict.source;
    },
    set: function (e) {
      if (e == null || e.length === 0) {
        this._restrict = null;
      } else {
        e = "[^(" + (e = (e = e.replace("\\", "\\\\")).replace("\\\\", "\\\\\\")) + ")]";
        this._restrict = new RegExp(e, "g");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "restrictRegEx", {
    set: function (e) {
      this._restrict = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "scrollV", {
    get: function () {
      return this._firstVisibleLineIndex;
    },
    set: function (e) {
      e = Math.min(this.maxScrollV, Math.max(e, 1));
      var t = this._firstVisibleLineIndex !== e;
      this._firstVisibleLineIndex = e;
      if (this._htmlTextFieldElement) {
        this._htmlTextFieldElement.scrollTop = this.latestLayout.metrics.lineHeight * (e - 1);
      }
      if (t) {
        this.invalidate("scrollV property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "maxScrollV", {
    get: function () {
      return Math.max(this.latestLayout.metrics.totalNumberOfTextLines - this.latestLayout.metrics.maximumNumberOfVisibleLines + 1, 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "selectionBeginIndex", {
    get: function () {
      return this._selectionBeginIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "selectionEndIndex", {
    get: function () {
      return this._selectionEndIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "styleSheet", {
    get: function () {
      return this._styleSheet;
    },
    set: function (e) {
      this._styleSheet = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "text", {
    get: function () {
      if (this._displayAsPassword === true && this._htmlTextFieldElement != null) {
        return this._htmlTextFieldElement.value;
      } else {
        return this._textValue.text;
      }
    },
    set: function (e) {
      e = h(e);
      if (this._capitalize) {
        e = e.toLocaleUpperCase();
      }
      var t = this._textValue.type !== "plain" || this._textValue.text !== e;
      if (this._htmlTextFieldElement && !this._isComposing) {
        this._htmlTextFieldElement.value = e;
      }
      if (t) {
        this._textValue = {
          type: "plain",
          text: e,
          inputTokens: parsePlainText(e)
        };
        if (e === "") {
          this.uncache();
        } else {
          this.invalidate("text property updated");
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textColor", {
    get: function () {
      return this.getTextFormat().color;
    },
    set: function (e) {
      var t;
      e = c.ColorTransform.colorNumToString(e);
      if (this.textFormat) {
        t = this.textFormat.color !== e;
        this.textFormat.color = e;
      } else {
        t = this.defaultTextFormat.color !== e;
        this.defaultTextFormat.color = e;
      }
      if (t) {
        this.invalidate("textColor property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "align", {
    get: function () {
      return this.getTextFormat().align;
    },
    set: function (e) {
      var t;
      if (this.textFormat) {
        t = this.textFormat.align !== e;
        this.textFormat.align = e;
      } else {
        t = this.defaultTextFormat.align !== e;
        this.defaultTextFormat.align = e;
      }
      if (t) {
        if (this._htmlTextFieldElement) {
          this._htmlTextFieldElement.style.textAlign = e || "left";
        }
        this.invalidate("align property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textHeight", {
    get: function () {
      return this.latestLayout.metrics.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textWidth", {
    get: function () {
      return this.latestLayout.metrics.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.setLineWidth = function (e) {
    if (e !== this.lineWidth) {
      this.lineWidth = e;
      this.invalidate("lineWidth property changed");
    }
  };
  Object.defineProperty(TextField.prototype, "verticalAlign", {
    get: function () {
      return this._verticalAlign;
    },
    set: function (e) {
      if (e === "top" || e === "middle" || e === "bottom") {
        var t = this._verticalAlign !== e;
        this._verticalAlign = e;
        if (t) {
          this.invalidate("verticalAlign property changed");
        }
      } else {
        G.error("TextField.verticalAlign: Unsupported value \"" + e + "\"");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "wordWrap", {
    get: function () {
      return this._wordWrap;
    },
    set: function (e) {
      if (this._wordWrap !== e) {
        this._wordWrap = e;
        this.invalidate("wordWrap property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "type", {
    get: function () {
      return this._textFieldType;
    },
    set: function (e) {
      if (e !== this._textFieldType) {
        this._textFieldType = e;
        this.ensureProperHTMLTextFieldElement();
        if (this.isInputTextField()) {
          this._autoSize = r.TextFieldAutoSize.NONE;
          this.mouseEnabled = this.type === a.TextFieldType.INPUT || this._selectable;
          this.setupListenersForInputSupport();
          if (this.stage) {
            this.stage.addEventListener(O, this.onStageMouseDown);
          }
        }
        this.invalidate("type property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textType", {
    get: function () {
      if (this._textFieldType === a.TextFieldType.DYNAMIC) {
        return "dynamic";
      } else {
        return "input";
      }
    },
    set: function (e) {
      this.type = e === "dynamic" ? a.TextFieldType.DYNAMIC : a.TextFieldType.INPUT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "width", {
    get: function () {
      return this.latestLayout.size.width;
    },
    set: function (e) {
      if (this._width !== e && this.baseConstructorRan) {
        this._width = e;
        this.invalidate("width property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "x", {
    get: function () {
      return this.latestLayout.position.x;
    },
    set: function (e) {
      if (this._x !== e && this.baseConstructorRan) {
        this._x = e;
        this.invalidate("x property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "y", {
    get: function () {
      return this.latestLayout.position.y;
    },
    set: function (e) {
      if (this._y !== e && this.baseConstructorRan) {
        this._y = e;
        this.invalidate("y property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "height", {
    get: function () {
      return this.latestLayout.size.height;
    },
    set: function (e) {
      if (this._height !== e && this.baseConstructorRan) {
        this._height = e;
        this.invalidate("height property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.cache = function (t, n, i, a, s) {
    s = this.prepareFiltersForScaledCache(s);
    e.prototype.cache.call(this, t, n, i, a, s);
    if (TextField.CACHE_UPDATED_EVENTS_ENABLED) {
      this.dispatchEvent(new createjs.Event(TextField.CACHE_UPDATED_EVENT_TYPE, true, false));
    }
  };
  TextField.prototype.prepareFiltersForScaledCache = function (e) {
    if (e !== undefined && e > 1) {
      var t = 0;
      var n = 0;
      if (e !== undefined && e > 1 && this.filters && this.filters.length > 0) {
        if (TextField.scaleCacheForTextfieldsWithFilters) {
          for (var i = 0; i < this.filters.length; i++) {
            var a = this.filters[i];
            if ((a instanceof B || a instanceof M) && !a.isScaled) {
              if (a instanceof M) {
                a.distance *= e;
              } else {
                a.blurX *= e;
                a.blurY *= e;
              }
              a.isScaled = true;
              t = Math.max(a.blurX / e, t);
              n = Math.max(a.blurY / e, n);
            }
          }
        } else {
          e = 1;
        }
      }
      if (t > 0) {
        this.x += t;
      }
      if (n > 0) {
        this.y += n;
      }
    }
    return e;
  };
  TextField.prototype.appendText = function (e) {
    var t = this._textValue.text + e;
    if (this._textValue.type === "plain") {
      this._textValue = {
        type: this._textValue.type,
        text: t,
        inputTokens: parsePlainText(t)
      };
    } else {
      this._textValue = {
        type: this._textValue.type,
        text: t,
        inputTokens: parseHTMLText(t)
      };
    }
    this.invalidate("text updated");
  };
  TextField.prototype.getLineMetrics = function (e) {
    var t = this.latestLayout.metrics.drawnLines[e];
    var n = S._workingContext;
    m.applyFormat(n, this.textFormat, TextField.FontRestriction);
    return new u.TextLineMetrics(this.x, n.measureText(t).width, this.latestLayout.metrics.lineHeight);
  };
  TextField.prototype.getMetrics = function () {
    return {
      lines: this.latestLayout.metrics.drawnLines,
      lineHeight: this.latestLayout.metrics.lineHeight,
      vOffset: 0,
      width: this.latestLayout.metrics.textWidth,
      height: this.latestLayout.metrics.textHeight
    };
  };
  TextField.prototype.getLineText = function (e) {
    return this.latestLayout.metrics.drawnLines[e];
  };
  TextField.prototype.setTransform = function (e) {
    return this;
  };
  TextField.prototype.getTextFormat = function (e = -1, t = -1) {
    if (this.textFormat) {
      return this.textFormat;
    } else {
      return this.defaultTextFormat;
    }
  };
  TextField.prototype.setTextFormat = function (e, t = -1, n = -1) {
    if (_.currentBrowserInfo.isIE && /^_/.test(e.font)) {
      e.font = e.font.substring(1);
    }
    var a = !p(this.textFormat, e);
    this.textFormat = i.__assign({}, e);
    if (a) {
      if (this._htmlTextFieldElement) {
        this._htmlTextFieldElement.style.textAlign = this.textFormat.align || "left";
      }
      this.invalidate("textFormat property changed");
    }
  };
  TextField.prototype.replaceSelectedText = function (e) {
    if (this._htmlTextFieldElement && this._htmlTextFieldElement.selectionStart !== this._htmlTextFieldElement.selectionEnd && !this._isComposing) {
      var t = this._htmlTextFieldElement.value;
      var n = this._htmlTextFieldElement.selectionStart === null ? undefined : this._htmlTextFieldElement.selectionStart;
      var i = this._htmlTextFieldElement.selectionEnd === null ? undefined : this._htmlTextFieldElement.selectionEnd;
      var a = t.slice(0, n) + e + t.slice(i, t.length);
      this._htmlTextFieldElement.value = a;
      this.invalidate("replaceSelectedText");
    }
  };
  TextField.prototype.draw = function (t, n) {
    if (this.isFocused) {
      return false;
    }
    if (e.prototype.draw.call(this, t, n)) {
      return true;
    }
    if (!this.cacheCanvas && this.text === "") {
      return true;
    }
    if (this.filters && this.filters.length) {
      this.glow = [];
      this.dropShadow = [];
      for (var i = 0; i < this.filters.length; i++) {
        var a = this.filters[i];
        if (a instanceof createjs.GlowFilter) {
          this.glow.push({
            color: c.ColorTransform.rgbToHex(a._red, a._green, a._blue, true),
            width: a.strength / 10,
            blur: a.blurX,
            isScaled: a.isScaled
          });
        } else if (a instanceof createjs.DropShadowFilter) {
          this.dropShadow.push({
            color: "rgba(" + a._red + ", " + a._green + ", " + a._blue + ", " + (a.strength >= 1 ? 1 : a.strength >= 0.75 ? a.strength : (0.5 + a.strength / 3).toFixed(2)) + ")",
            blur: a.blurX + 1 >> 0,
            offsetX: a._offsetX,
            offsetY: a._offsetY
          });
        }
      }
    }
    this.redrawBackground(t);
    this.drawHTMLText(t, {}, undefined);
    return true;
  };
  TextField.prototype.getTextFieldHTMLElement = function () {
    return this._htmlTextFieldElement;
  };
  TextField.prototype.invalidate = function (e, t = false) {
    if (!t) {
      this._INTERNAL_currentLayout = undefined;
      if (e === "x property changed" || e === "width property changed") {
        this._INTERNAL_previousLayout = undefined;
      }
    }
    this.uncache();
    if (this.filters && this.filters.length > 0) {
      this.redraw();
    } else if (!this.needsRepaint) {
      createjs.Ticker.addEventListener("tick", this.validate);
      this.needsRepaint = true;
      this.invalidationReason = e;
    }
  };
  TextField.prototype.redraw = function () {
    if (this.mouseEnabled && !this.hitArea) {
      var e = new f();
      e.graphics.beginFill("#ff0000").drawRect(0, 0, this.width, this.height);
      this.hitArea = e;
    }
    var t = this.defaultCacheScale;
    if (this.stage && this.stage.scaleX > 1) {
      t = Math.max(t, 2);
    }
    if (this.width && this.height) {
      this.cache(0, 0, this.width + TextField.additionalCacheWidth, this.height + TextField.additionalCacheHeight, t);
    }
  };
  TextField.prototype.redrawBackground = function (e) {
    if (this._background) {
      e.fillStyle = this._backgroundColor;
      e.fillRect(0, 0, this.width, this.height);
    }
  };
  Object.defineProperty(TextField.prototype, "textBaseline", {
    get: function () {
      G.debug("TextField: get textBaseline not implemented, will return \"top\"");
      return "top";
    },
    set: function (e) {
      if (e !== "top") {
        G.error("TextField: Only textBaseline \"top\" is supported");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "capitalize", {
    get: function () {
      return this._capitalize;
    },
    set: function (e) {
      this._capitalize = e;
      if (e) {
        this.text = this.text.toLocaleUpperCase();
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.setupListenersForInputSupport = function () {
    if (!this._mouseHandlersAttached) {
      this.addEventListener("mousedown", this.onMouseDown);
      this.addEventListener("rollover", this.onRollOver);
      this.addEventListener("pressmove", this.onPressMove);
      if (window) {
        window.addEventListener("resize", this.onStageResized, false);
      }
      this._mouseHandlersAttached = true;
    }
  };
  TextField.prototype.removeMouseInputHandlers = function () {
    this.removeEventListener("mousedown", this.onMouseDown);
    this.removeEventListener("rollover", this.onRollOver);
    this.removeEventListener("pressmove", this.onPressMove);
    if (window) {
      window.removeEventListener("resize", this.onStageResized);
    }
    this._mouseHandlersAttached = false;
  };
  TextField.prototype.updateSelectedText = function () {
    if (this._selectionBeginIndex !== undefined && this.selectionEndIndex !== undefined) {
      var e = this.latestLayout.drawingTokens.filter(function (e) {
        return e.type === "plain";
      }).map(function (e) {
        return characters(e.text);
      });
      var t = C(e);
      w = t.slice(this._selectionBeginIndex, this._selectionEndIndex).join("");
    } else {
      w = undefined;
    }
  };
  TextField.prototype.caretCharacterIndexAtElementPosition = function (e) {
    var t = this.latestLayout;
    var n = 0;
    var i = 0;
    var a = 0;
    var s = 0;
    var r = 0;
    var o = this.textFormat;
    var l = function () {
      if (e.y < a || e.x < i && e.y >= a && e.y < a + t.metrics.lineHeight) {
        return r;
      } else if (e.y <= a + t.metrics.lineHeight && e.x >= n) {
        return s;
      } else {
        return -1;
      }
    };
    for (var u = 0, c = t.drawingTokens; u < c.length; u++) {
      var _ = c[u];
      switch (_.type) {
        case "plain":
          if (e.x >= n && e.x <= n + _.width && e.y >= a && e.y <= a + t.metrics.lineHeight) {
            var d = S._workingContext;
            m.applyFormat(d, o, TextField.FontRestriction);
            var h = "";
            var p = n;
            var g = n;
            var E = characters(_.text);
            for (var C = 0, f = Array.from(E.entries()); C < f.length; C++) {
              var T = f[C];
              var y = T[0];
              p = g;
              h += T[1];
              if ((g = n + d.measureText(h).width) > e.x) {
                if (e.x - p > g - e.x) {
                  return s + y + 1;
                } else {
                  return s + y;
                }
              }
            }
            G.error("did not find character boundary for cursor, even though it should be inside this token", _.text, E);
          }
          n += _.width;
          s += characters(_.text).length;
          if (t.drawingTokens.indexOf(_) === t.drawingTokens.length - 1) {
            if ((I = l()) > -1) {
              return I;
            }
          }
          break;
        case "set-x-y":
          var I;
          if (s > 0) {
            if ((I = l()) > -1) {
              return I;
            }
          }
          n = _.x;
          i = _.x;
          a = _.y;
          r = s;
          break;
        case "advance-x":
          n += _.amount;
          break;
        case "switch-to-format":
          o = _.format;
      }
    }
    if (e.y > a + t.metrics.lineHeight) {
      return s;
    }
  };
  TextField.prototype.isInputTextField = function () {
    return this.type === a.TextFieldType.INPUT;
  };
  TextField.prototype.validateRestrict = function () {
    if (this._restrict && this._htmlTextFieldElement && !this._isComposing && this._htmlTextFieldElement.value.length > 0) {
      this._htmlTextFieldElement.value = this._htmlTextFieldElement.value.replace(this._restrict, "");
    }
  };
  TextField.prototype.onFocus = function () {
    if (this._htmlTextFieldElement && !this.isFocused) {
      if (_.currentBrowserInfo.isMobile) {
        TextField.isMobileKeyboardShown = true;
      }
      this.dispatchEvent(A.FOCUS_IN);
      var e = this.scaleY;
      for (var t = this.parent; t && !(t instanceof I);) {
        e *= t.scaleY;
        t = t.parent;
      }
      this._htmlTextFieldElement.style.display = "block";
      this._htmlTextFieldElement.style.font = this.textFormat.fontType;
      if (!this.isDefaultText) {
        this._htmlTextFieldElement.value = this.text;
      }
      var n = 1;
      if (TextField.scaleHTMLByPixelDensity) {
        n = 1 / (window.devicePixelRatio || 1);
      }
      var i = this.localToGlobal(2, this.multiline ? 2 : 0);
      var a = this.multiline ? 0 : Math.floor((this.height - this.latestLayout.metrics.lineHeight) / 2) - 1;
      a = a > 2 ? a : 0;
      var s = (this.textFormat.size || E.FALLBACK_TEXT_SIZE) * e;
      var r = (this.height - (this.multiline ? 2 : 0)) * e;
      var o = this.latestLayout.metrics.lineHeight * e;
      var l = 1;
      if (_.currentBrowserInfo.isMobile && _.currentBrowserInfo.isIOS && s < 16) {
        l = s / 16;
        s = 16;
        if (o < 16) {
          o = 16;
        }
        r /= l;
      }
      this._htmlTextFieldElement.style.top = Math.floor((i.y - a) * n) + "px";
      this._htmlTextFieldElement.style.left = Math.round(i.x * n) + "px";
      this._htmlTextFieldElement.style.width = (this.width - 2) * e / l + "px";
      this._htmlTextFieldElement.style.height = r + "px";
      this._htmlTextFieldElement.style.color = this.textColor;
      this._htmlTextFieldElement.style.margin = "0";
      this._htmlTextFieldElement.style.padding = "0";
      this._htmlTextFieldElement.style.fontFamily = m.getFontFamily(this.textFormat, TextField.FontRestriction);
      this._htmlTextFieldElement.style.fontSize = s + "px";
      this._htmlTextFieldElement.style.lineHeight = o + "px";
      this._htmlTextFieldElement.focus();
      this._htmlTextFieldElement.scrollTop = (this._firstVisibleLineIndex - 1) * this.latestLayout.metrics.lineHeight;
      this._htmlTextFieldElement.style.transform = "scale(" + n * l + ")";
      this._htmlTextFieldElement.style.transformOrigin = "left top";
      this.updateTextFieldVisibleInterval();
    }
  };
  TextField.prototype.onBlur = function () {
    this.deSelectHtmlInput();
    this.updateTextFieldVisibleInterval();
    this.isDefaultText = this.text === "";
    this._isComposing = false;
  };
  TextField.prototype.isPointWithinHitArea = function (e) {
    return !!e && e.x > 0 && e.y > 0 && (e.x < this._width && e.y < this._height || e.x < this._width && e.y < this._height);
  };
  TextField.prototype.normalizeCoordinates = function (e) {
    if (this.stage !== null) {
      var t = e.pageX !== undefined ? e.pageX : e.stageX;
      var n = e.pageY !== undefined ? e.pageY : e.stageY;
      return this.globalToLocal(t, n);
    }
  };
  TextField.prototype.teardown = function () {
    if (this._htmlTextFieldElement && this._htmlTextFieldElement.parentElement === document.body) {
      this._htmlTextFieldElement.removeEventListener("input", this.onInput);
      this._htmlTextFieldElement.removeEventListener("keydown", this.onKeyDown);
      this._htmlTextFieldElement.removeEventListener("keyup", this.onKeyUp);
      document.body.removeChild(this._htmlTextFieldElement);
      this._htmlTextFieldElement = null;
    } else if (this._htmlTextFieldElement) {
      G.error("has this._htmlInputElement but on different node");
    }
    this.removeMouseInputHandlers();
    this.inputTextFieldService.unregisterInputField(this);
    if (this._textFieldVisibleIntervalId) {
      window.clearInterval(this._textFieldVisibleIntervalId);
      this._textFieldVisibleIntervalId = undefined;
    }
  };
  TextField.prototype.deSelectHtmlInput = function () {
    if (this._htmlTextFieldElement) {
      if (_.currentBrowserInfo.isMobile) {
        TextField.isMobileKeyboardShown = false;
      }
      this._htmlTextFieldElement.style.display = "none";
      this._htmlTextFieldElement.blur();
    }
  };
  TextField.prototype.focus = function () {
    if (this.isInputTextField() && this._htmlTextFieldElement) {
      this.onFocus();
      this._htmlTextFieldElement.select();
    }
  };
  TextField.prototype.blur = function () {
    if (this._htmlTextFieldElement && this.isFocused) {
      if (_.currentBrowserInfo.isMobile) {
        TextField.isMobileKeyboardShown = false;
      }
      this._htmlTextFieldElement.blur();
    }
  };
  TextField.prototype.handleDoubleClick = function (e, t) {
    var n = Date.now();
    if (n - this.lastMouseDownTime < 500 && this.consecutiveMouseClicks < 3 && !t) {
      this.consecutiveMouseClicks++;
    } else {
      this.consecutiveMouseClicks = 1;
    }
    if (this.consecutiveMouseClicks > 1) {
      var i = e;
      var a = e;
      var s = this.latestLayout.drawingTokens.filter(function (e) {
        return e.type === "plain";
      }).map(function (e) {
        return characters(e.text);
      });
      var r = C(s);
      if (this.consecutiveMouseClicks === 2) {
        i = r.slice(0, i + 1).join("").search(/(\w+$)|(\W$)/);
        a = r.slice(a).join("").search(/\W|$/);
      } else if (this.consecutiveMouseClicks === 3) {
        i = r.slice(0, i + 1).join("").search(/[^\n]+$/);
        a = r.slice(a).join("").search(/\n|$/);
      }
      this._selectionBeginIndex = i;
      this._selectionEndIndex = Math.max(e + a, i + 1);
    }
    this.lastMouseDownTime = n;
  };
  TextField.FontRestriction = null;
  TextField.isMobileKeyboardShown = false;
  TextField.additionalCacheWidth = 0;
  TextField.additionalCacheHeight = 0;
  TextField.scaleCacheForTextfieldsWithFilters = true;
  TextField.scaleHTMLByPixelDensity = false;
  TextField.CACHE_UPDATED_EVENT_TYPE = "TEXTFIELD_CACHE_UPDATED";
  TextField.CACHE_UPDATED_EVENTS_ENABLED = false;
  return TextField;
}(T);
function parsePlainText(e) {
  return e.split(/(\n)/).map(function (e) {
    if (e === "\n") {
      return {
        type: "newline"
      };
    } else {
      return {
        type: "plain",
        text: e
      };
    }
  });
}
function parseHTMLText(e) {
  for (var t = e.split(/(\[\/?[a-zA-Z][^\]]+]|<[^<>]+[<>]|\n)/), n = [], i = 0; i < t.length; i += 2) {
    var a = t[i];
    var s = t[i + 1];
    n.push({
      type: "plain",
      text: a
    });
    if (s) {
      if (s === "\n" || s === "<br>" || s === "<br/>") {
        n.push({
          type: "newline"
        });
      } else if (s.endsWith("<")) {
        if (c = /<(\d+)([^<]+)</.exec(s)) {
          var r = c[1];
          var o = c[2];
          n.push({
            type: "start-link",
            linkId: r
          });
          n.push({
            type: "plain",
            text: o
          });
          n.push({
            type: "end-link"
          });
        } else {
          G.error("skipped tag part", s);
        }
      } else if (s[1] === "/") {
        if (s === "[/url]") {
          n.push({
            type: "end-link"
          });
        } else if (s === "[/color]" || s === "[/font]") {
          n.push({
            type: "pop-last-format-augmentation"
          });
        } else if (s === "</a>") {
          n.push({
            type: "end-link"
          });
        } else if (s === "</b>") {
          n.push({
            type: "push-format-augmentation",
            partialFormat: {
              bold: false
            }
          });
        }
      } else {
        for (var l = /(\w+)(?:=((?:"[^"]*")|(?:'[^']*')|(?:\S+)))?/g, u = s.slice(1, -1), c = undefined, _ = []; c = l.exec(u);) {
          var d = c[1];
          var m = c[2];
          if (!!m && (m[0] === "'" || m[0] === "\"")) {
            m = m.slice(1, -1);
          }
          _.push([d, m]);
        }
        var h = _.length > 0 ? _[0][0] : "";
        switch (h) {
          case "font":
            var p = {};
            for (var g = 1, E = _.length; g < E; g++) {
              p[_[g][0]] = _[g][1];
            }
            n.push({
              type: "push-format-augmentation",
              partialFormat: p
            });
            break;
          case "url":
            var C = _[0][1];
            n.push({
              type: "start-link",
              linkId: C
            });
            break;
          case "b":
            n.push({
              type: "push-format-augmentation",
              partialFormat: {
                bold: true
              }
            });
            break;
          case "color":
            n.push({
              type: "push-format-augmentation",
              partialFormat: {
                color: _[0][1]
              }
            });
            break;
          case "a":
            var f = "";
            var T = 1;
            for (E = _.length; T < E; T++) {
              if (_[T][0] === "href") {
                f = _[T][1];
                break;
              }
            }
            n.push({
              type: "start-link",
              linkId: f,
              isAnchorLink: true
            });
            break;
          case "content":
            break;
          default:
            G.error("parseHTML: Could not match tag name", h, _);
        }
      }
    }
  }
  return n;
}
function characters(e) {
  for (var t = 0, n = e.length, i = []; t < n - 1; ++t) {
    var a = e.charCodeAt(t);
    if (a >= 55296 && a <= 56319 && (a = e.charCodeAt(t + 1)) >= 56320 && a <= 57343) {
      i.push(e.slice(t, t + 2));
      ++t;
    } else {
      i.push(e.charAt(t));
    }
  }
  i.push(e.charAt(t));
  return i;
}
exports.TextField = x;