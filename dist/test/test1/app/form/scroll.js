"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = {
    "l": 1000,
    "c": 100,
    "so": 500,
    "bl": 0,
    "bc": 0,
    "bso": 0,
    "lcount": 3
};
exports.mounted = function () {
    var _this = this;
    var scrollRect = ClickGo.watchSize(this.$refs.scrollLayout.$el, function (rect) {
        _this.bc = rect.height;
    });
    this.bc = scrollRect.height;
    ClickGo.watchElement(this.$refs.bodyLayout.$el, function (e) {
        _this.bl = _this.$refs.bodyLayout.$el.getBoundingClientRect().height;
    });
    this.bl = this.$refs.bodyLayout.$el.getBoundingClientRect().height;
};