export let props = {
    "disabled": {
        "default": false
    },

    "text": {
        "default": ""
    },
    "alt": {
        "default": undefined
    },
    "type": {
        "default": undefined
    },
    "label": {
        "default": undefined
    },
    "value": {
        "default": undefined
    }
};

export let data = {
    "popOpen": false,
    "showArrow": false
};

export let watch = {
    "type": function(this: IVue): void {
        if (this.type) {
            ++this.$parent.hasTypeItemsCount;
        } else {
            --this.$parent.hasTypeItemsCount;
        }
    }
};

export let methods = {
    mousein: function(this: IVue, event: MouseEvent): void {
        if (this.popOpen) {
            return;
        }
        // --- 判断别的是否有展开 ---
        for (let item of this.$parent.$children) {
            if (!item.popOpen) {
                continue;
            }
            ClickGo.hidePop(item.$children[0]);
            break;
        }
        // --- 如果本 item 没有子 pop，则不展开 ---
        if (this.$children.length === 0) {
            return;
        }
        ClickGo.showPop(this.$children[0], this.$el, 1);
    },
    click: function(this: IVue, event: MouseEvent): void {
        if (this.disabled) {
            return;
        }
        if (this.type === undefined) {
            if (!this.showArrow) {
                ClickGo.hidePop();
            }
            this._tap(event);
            return;
        }
        // --- 有 type ---
        if (this.type === "radio") {
            this.$emit("input", this.label);
        } else if (this.type === "check") {
            this.$emit("input", this.value ? false : true);
        }
        ClickGo.hidePop();
        this._tap(event);
    }
};

export let mounted = function(this: IVue): void {
    // --- 子 pop ---
    if (this.$children.length > 0) {
        this.showArrow = true;
        ++this.$parent.hasSubItemsCount;
    }
    // --- type ---
    if (this.type) {
        ++this.$parent.hasTypeItemsCount;
    }
};

export let destroyed = function(this: IVue): void {
    // --- 子 pop ---
    if (this.showArrow) {
        --this.$parent.hasSubItemsCount;
    }
    // --- type ---
    if (this.type) {
        --this.$parent.hasTypeItemsCount;
    }
};

