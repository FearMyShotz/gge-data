Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./8.js");
var a = function () {
  function PaginationArrows(e, t) {
    this._container = e;
    this._pagination = t;
    o.ButtonHelper.initBasicButtons([this._container.getLeftArrow(), this._container.getRightArrow()]);
  }
  PaginationArrows.prototype.changeArrow = function (e, t) {
    if (!this._container.changeArrow(e, t)) {
      o.ButtonHelper.enableButton(e, t);
    }
  };
  PaginationArrows.prototype.update = function () {
    this.changeArrow(this._container.getLeftArrow(), this._pagination.canScrollLeft());
    this.changeArrow(this._container.getRightArrow(), this._pagination.canScrollRight());
  };
  PaginationArrows.prototype.disable = function () {
    this.changeArrow(this._container.getLeftArrow(), false);
    this.changeArrow(this._container.getRightArrow(), false);
  };
  PaginationArrows.prototype.enable = function () {
    this.update();
  };
  PaginationArrows.prototype.onClick = function (e) {
    switch (e.target) {
      case this._container.getLeftArrow():
        this._pagination.scrollLeft();
        return true;
      case this._container.getRightArrow():
        this._pagination.scrollRight();
        return true;
    }
    return false;
  };
  return PaginationArrows;
}();
exports.PaginationArrows = a;
n.classImplementsInterfaces(a, "IPaginationControl");