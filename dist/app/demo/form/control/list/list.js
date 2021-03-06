"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.computed = exports.data = void 0;
exports.data = {
    'tab': '',
    'slist': [
        {
            'type': 0,
            'name': 'Appraise',
            'path': 'Bob >> folder >> Appraise',
            'src': '/res/r-1.svg'
        },
        {
            'type': 0,
            'name': 'Card',
            'path': 'Bob >> folder >> Card',
            'src': '/res/r-2.svg',
            'menu': true
        },
        {
            'type': 0,
            'name': 'Appraise2',
            'path': 'Bob >> folder >> Appraise2',
            'src': '/res/r-1.svg',
            'disabled': true
        },
        {
            'type': 1
        },
        {
            'type': 2
        }
    ],
    'select': 0,
    'select2': 'Appraise',
    'label2': '',
    'disabled': false,
    'must': true,
    'multi': false
};
exports.computed = {
    'listData': function () {
        let data = ['Item1', {
                'label': 'Title1',
                'children': ['Sub1',
                    {
                        'label': 'Title2',
                        'children': ['Sub2', 'Sub3']
                    }
                ]
            }];
        for (let k = 0; k < this.slist.length; ++k) {
            if (this.slist[k].name) {
                data.push({
                    'label': 'Index: ' + k + ', value: ' + this.slist[k].name,
                    'value': this.slist[k].name,
                    'disabled': this.slist[k].disabled
                });
            }
            else {
                data.push({
                    'label': 'index: ' + k + ', value: i' + k,
                    'value': 'i' + k,
                    'disabled': true
                });
            }
        }
        return data;
    },
    'listData2': function () {
        let data = [];
        for (let k = 0; k < this.listData.length; k++) {
            data.push(k + 1);
        }
        return data;
    }
};
exports.methods = {
    showType: function () {
        if (Array.isArray(this.select)) {
            if (this.select.length === 0) {
                this.cgDialog('There are currently no selected items.').catch((e) => { throw e; });
            }
            else {
                let types = [];
                for (let item of this.select) {
                    types.push(this.slist[item].type);
                }
                this.cgDialog('Type is ' + types + '.').catch((e) => { throw e; });
            }
        }
        else {
            this.cgDialog(this.select === -1 ? 'There are currently no selected items.' : 'Type is ' + this.slist[this.select].type + '.').catch((e) => { throw e; });
        }
    },
    selectButton: function () {
        if (this.tab === 'list') {
            this.select2 = 'Item1';
        }
        else {
            this.select = 1;
        }
    }
};
