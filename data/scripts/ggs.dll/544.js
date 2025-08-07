var n = createjs.Point;
createjs.Rectangle.prototype.containsPoint = function (e) {
  return e.x >= this.x && e.x < this.x + this.width && e.y >= this.y && e.y < this.y + this.height;
};
createjs.Rectangle.prototype.contains = function (e, t) {
  return e >= this.x && e < this.x + this.width && t >= this.y && t < this.y + this.height;
};
createjs.Rectangle.prototype.offset = function (e, t) {
  this.x += e;
  this.y += t;
};
createjs.Rectangle.prototype.offsetPoint = function (e) {
  this.offset(e.x, e.y);
};
createjs.Rectangle.prototype.inflate = function (e, t) {
  this.x -= e;
  this.width += e * 2;
  this.y -= t;
  this.height += t * 2;
};
createjs.Rectangle.prototype.inflatePoint = function (e) {
  this.inflate(e.x, e.y);
};
Object.defineProperty(createjs.Rectangle.prototype, "top", {
  get: function () {
    return this.y;
  },
  set: function (e) {
    this.height += this.y - e;
    this.y = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "bottom", {
  get: function () {
    return this.y + this.height;
  },
  set: function (e) {
    this.height = e - this.y;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "left", {
  get: function () {
    return this.x;
  },
  set: function (e) {
    this.width += this.x - e;
    this.x = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "right", {
  get: function () {
    return this.x + this.width;
  },
  set: function (e) {
    this.width = e - this.x;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "topLeft", {
  get: function () {
    return new n(this.x, this.y);
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "size", {
  get: function () {
    return new n(this.width, this.height);
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Rectangle.prototype, "bottomRight", {
  get: function () {
    return new n(this.x + this.width, this.y + this.height);
  },
  enumerable: true,
  configurable: true
});