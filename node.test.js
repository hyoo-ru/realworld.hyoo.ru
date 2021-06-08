"use strict";
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $

;
"use strict";
Error.stackTraceLimit = Infinity;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//delegate.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $.$mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static [(_a = $.$mol_ambient_ref, Symbol.toPrimitive)]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        [Symbol.toPrimitive](hint) {
            return hint === 'number' ? this.valueOf() : this.toString();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    const { per } = $.$mol_style_unit;
    class $mol_style_func extends $.$mol_decor {
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: hsl( 0 , 0% , 0% );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsl( 290 , 100% , 40% );\n\t--mol_theme_field: white;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: rgba( 255 , 255 , 255 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 30% );\n\t--mol_theme_text: hsl( 0 , 0% , 80% );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: hsl( 60 , 100% , 70% );\n\t--mol_theme_field: black;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: hsla( 210 , 60% , 20% , 1 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( 15 , 60% , 50% );\n\t--mol_theme_hover: hsl( 15 , 60% , 40% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n\t--mol_theme_focus: black;\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n\t--mol_theme_text: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        current: vary('--mol_theme_current'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 16px/24px sans-serif;\n\t/* --mol_skin_font_monospace: Monaco, monospace; */\n\t--mol_skin_font_monospace: monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//log3.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            let warned = false;
            descr.value = function $mol_deprecated_wrapper(...args) {
                if (!warned) {
                    this.$.$mol_log3_warn({
                        place: `${host.constructor.name}::${field}`,
                        message: `Deprecated`,
                        hint: message,
                    });
                    warned = true;
                }
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $.$mol_object2 {
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $.$mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_tree:hack')
    ], $mol_tree.prototype, "transform", null);
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            const tree = this.$mol_tree.fromJSON(event).clone({ type });
            let str = tree.toString();
            if (process[output].isTTY) {
                str = $node.colorette[color + 'Bright'](str);
            }
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', 'blue');
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', 'green');
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', 'red');
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', 'yellow');
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', 'magenta');
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', 'cyan');
})($ || ($ = {}));
//log3.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(({})['constructor'], (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_func',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.func instead',
        });
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            fiber[Symbol.toStringTag] = wrapper[Symbol.toStringTag];
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_method',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.method instead',
        });
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then((next) => master.push(next), (error) => master.fail(error));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.cursor = 0;
            this.masters = [];
            this._value = undefined;
            this._error = null;
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(null), promise)));
            return promise;
        }
        get value() { return this._value; }
        set value(next) {
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            this._error = next;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            const unscoupe = this.$.$mol_log3_area_lazy({
                place: this,
                message: 'Wake'
            });
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
            finally {
                unscoupe();
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error !== null || !Object.is(this.value, value)) {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Changed',
                        next: value,
                        value: this.value,
                        error: this.error,
                    });
                this.obsolete_slaves();
                this.forget();
            }
            else {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Same value',
                        value,
                    });
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            if ($mol_fiber.logs)
                this.$.$mol_log3_fail({
                    place: this,
                    message: error.message,
                });
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            if ($mol_fiber.logs)
                this.$.$mol_log3_warn({
                    place: this,
                    message: `Wait`,
                    hint: `Don't panic, it's normal`,
                    promise,
                });
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            if ($mol_fiber.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Pull',
                });
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.pull();
            }
            catch (error) {
                if (Object(error) !== error)
                    error = new Error(error);
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error !== null)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return (this.cursor < this.masters.length ? this.masters[this.cursor] : undefined);
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.master;
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_fiber.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Destructed',
                });
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.logs = false;
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task, next) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            $mol_atom2.cached_next = next;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        subscribe(promise) {
            const obsolete = () => this.obsolete();
            return promise.then(obsolete, obsolete);
        }
        get() {
            if ($mol_atom2.cached) {
                if ($mol_atom2.cached_next !== undefined) {
                    this.push($mol_atom2.cached_next);
                    $mol_atom2.cached_next = undefined;
                }
                return this.value;
            }
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            if ($mol_atom2.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Check doubt masters',
                });
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                if ($mol_atom2.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Obsoleted while checking',
                    });
                return super.pull();
            }
            if ($mol_atom2.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Masters not changed',
                });
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                try {
                    next[Symbol.toStringTag] = this[Symbol.toStringTag];
                }
                catch { }
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Leads',
                    slave,
                });
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Disleads',
                    slave: this.slaves[slave_index],
                });
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Obsoleted',
                });
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Doubted',
                });
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Destructed'
                });
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.logs = false;
    $mol_atom2.cached = false;
    $mol_atom2.cached_next = undefined;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
//param.js.map
;
"use strict";
//result.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const orig = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = orig.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        function value(next, force) {
            if (next === undefined) {
                const cache = get_cache(this);
                if (force === $.$mol_mem_force_cache)
                    return cache.obsolete(Number.NaN);
                if ($.$mol_atom2.current)
                    return cache.get();
                else
                    return $.$mol_fiber.run(() => cache.get());
            }
            return $.$mol_fiber.run(() => {
                if (force === $.$mol_mem_force_fail)
                    return get_cache(this).fail(next);
                if (force !== $.$mol_mem_force_cache)
                    next = orig.call(this, next);
                return get_cache(this).put(next);
            });
        }
        return {
            ...descr || {},
            value: Object.assign(value, { orig })
        };
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        if (Array.isArray(value))
            return JSON.stringify(value);
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            const key_str = $.$mol_dict_key(key);
            let cache = dict.get(key_str);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${key_str})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key_str);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key_str, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            if (Symbol.toStringTag in calculate) {
                atom[Symbol.toStringTag] = calculate[Symbol.toStringTag];
            }
            else {
                atom[Symbol.toStringTag] = calculate.name || '$mol_atom2_autorun';
            }
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_current);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgb(162, 90, 90),\n\t\trgb(162, 90, 90) 11px,\n\t\trgb(255,255,220) 10px,\n\t\trgb(255,255,220) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $.$mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                    return node;
                }
                if ($.$mol_fail_catch(error)) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            this.auto();
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $.$mol_dom_render_styles(node, { minHeight: this.minimal_height() });
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        auto() { }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            for (const item of this.sub()) {
                if (item instanceof $mol_view) {
                    yield* item.view_find(check, [...path, this]);
                }
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            await $.$mol_fiber_warp();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_colors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
    };
})($ || ($ = {}));
//colors.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $.$mol_dom_qname($.$mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                return `${prefix ? prefix + ' ' : ''}[${block}_${path.join('_')}]`;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' [' + $.$mol_dom_qname(key) + ']', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > [' + $.$mol_dom_qname(type) + ']', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + '[' + name + '=' + JSON.stringify(val) + ']', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        field() {
            return {
                ...super.field(),
                scrollTop: this.scroll_top(),
                scrollLeft: this.scroll_left(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $.$mol_object {
        static before() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//print.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$.$mol_theme.line, 'transparent'],
            },
            '::-webkit-scrollbar': {
                width: rem(.5),
                height: rem(.5),
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                this._event_scroll_timer()?.destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_timeout(200, $.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $.$mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//book2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: auto;\n\tscroll-snap-type: x proximity;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//book2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages().slice(), this.Placeholder()];
                const prev = $.$mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $.$mol_after_timeout(100, () => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book2.view.js.map
;
"use strict";
//value.js.map
;
"use strict";
//equals.js.map
;
"use strict";
//merge.js.map
;
"use strict";
//undefined.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//setup.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $.$mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//record.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.message), this.stack];
                const diff = $.$mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mix.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $.$mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//error.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//string.js.map
;
"use strict";
//unary.js.map
;
"use strict";
//tail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
//foot.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $.$mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $.$mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));
//pipe.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $mol_time_base.patterns = {};
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
    }
    $mol_time_duration.patterns = {
        '#Y': (duration) => {
            if (!duration.year)
                return '';
            return duration.year + 'Y';
        },
        '#M': (duration) => {
            if (!duration.month)
                return '';
            return duration.month + 'M';
        },
        '#D': (duration) => {
            if (!duration.day)
                return '';
            return duration.day + 'D';
        },
        '#h': (duration) => {
            if (!duration.hour)
                return '';
            return duration.hour + 'H';
        },
        '#m': (duration) => {
            if (!duration.minute)
                return '';
            return duration.minute + 'M';
        },
        '#s': (duration) => {
            if (!duration.second)
                return '';
            return duration.second + 'S';
        },
    };
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $.$mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $.$mol_time_duration(config.offset);
        }
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $.$mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
    }
    $mol_time_moment.patterns = {
        'YYYY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year);
        },
        'AD': (moment) => {
            if (moment.year == null)
                return '';
            return String(Math.floor(moment.year / 100) + 1);
        },
        'YY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year % 100);
        },
        'Month': (pattern => (moment) => {
            if (moment.month == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
        'DD Month': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['DD'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Month'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
        'D Month': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['D'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Month'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
        'Mon': (pattern => (moment) => {
            if (moment.month == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
        'DD Mon': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['DD'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Mon'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
        'D Mon': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['D'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Mon'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
        '-MM': (moment) => {
            if (moment.month == null)
                return '';
            return '-' + $mol_time_moment.patterns['MM'](moment);
        },
        'MM': (moment) => {
            if (moment.month == null)
                return '';
            return String(100 + moment.month + 1).slice(1);
        },
        'M': (moment) => {
            if (moment.month == null)
                return '';
            return String(moment.month + 1);
        },
        'WeekDay': (pattern => (moment) => {
            if (moment.day == null)
                return '';
            if (moment.month == null)
                return '';
            if (moment.year == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
        'WD': (pattern => (moment) => {
            if (moment.day == null)
                return '';
            if (moment.month == null)
                return '';
            if (moment.year == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
        '-DD': (moment) => {
            if (moment.day == null)
                return '';
            return '-' + $mol_time_moment.patterns['DD'](moment);
        },
        'DD': (moment) => {
            if (moment.day == null)
                return '';
            return String(100 + moment.day + 1).slice(1);
        },
        'D': (moment) => {
            if (moment.day == null)
                return '';
            return String(moment.day + 1);
        },
        'Thh': (moment) => {
            if (moment.hour == null)
                return '';
            return 'T' + $mol_time_moment.patterns['hh'](moment);
        },
        'hh': (moment) => {
            if (moment.hour == null)
                return '';
            return String(100 + moment.hour).slice(1);
        },
        'h': (moment) => {
            if (moment.hour == null)
                return '';
            return String(moment.hour);
        },
        ':mm': (moment) => {
            if (moment.minute == null)
                return '';
            return ':' + $mol_time_moment.patterns['mm'](moment);
        },
        'mm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(100 + moment.minute).slice(1);
        },
        'm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(moment.minute);
        },
        ':ss': (moment) => {
            if (moment.second == null)
                return '';
            return ':' + $mol_time_moment.patterns['ss'](moment);
        },
        'ss': (moment) => {
            if (moment.second == null)
                return '';
            return String(100 + moment.second | 0).slice(1);
        },
        's': (moment) => {
            if (moment.second == null)
                return '';
            return String(moment.second | 0);
        },
        '.sss': (moment) => {
            if (moment.second == null)
                return '';
            if (moment.second === (moment.second | 0))
                return '';
            return '.' + $mol_time_moment.patterns['sss'](moment);
        },
        'sss': (moment) => {
            if (moment.second == null)
                return '';
            const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
            return String(1000 + millisecond).slice(1);
        },
        'Z': (moment) => {
            const offset = moment.offset;
            if (!offset)
                return '';
            let hour = offset.hour;
            let sign = '+';
            if (hour < 0) {
                sign = '-';
                hour = -hour;
            }
            return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
        }
    };
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $.$mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $.$mol_fail(new $.$mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $.$mol_object2 {
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $.$mol_object2 {
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    $mol_fetch.request = $.$mol_fiber_sync((input, init = {}) => {
        if (typeof AbortController === 'function') {
            var controller = new AbortController();
            init.signal = controller.signal;
            const fiber = $.$mol_fiber.current;
            fiber.abort = () => {
                if (fiber.cursor === -2)
                    return true;
                controller.abort();
                return true;
            };
        }
        let native = $.$mol_dom_context.fetch;
        if (!native)
            native = $node['node-fetch'];
        return native(input, init);
    });
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_transport extends $.$mol_object2 {
        static api_base() {
            return 'https://conduit.productionready.io/api/';
        }
        static token(next) {
            return this.$.$mol_state_local.value('token', next);
        }
        static headers() {
            const headers = {
                'Content-Type': 'application/json',
            };
            const token = this.token();
            if (!token)
                return headers;
            return {
                ...headers,
                'Authorization': `Token ${token}`,
            };
        }
        static load(path) {
            return this.$.$mol_fetch.json(this.api_base() + path, {
                headers: this.headers()
            });
        }
        static save(path, method, body) {
            const uri = this.api_base() + path;
            const res = this.$.$mol_fetch.json(uri, {
                method,
                headers: this.headers(),
                body: JSON.stringify(body),
            });
            return res;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_transport, "token", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_transport, "headers", null);
    __decorate([
        $.$mol_fiber.method
    ], $hyoo_realworld_transport, "load", null);
    __decorate([
        $.$mol_fiber.method
    ], $hyoo_realworld_transport, "save", null);
    $.$hyoo_realworld_transport = $hyoo_realworld_transport;
})($ || ($ = {}));
//transport.js.map
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_tags_json = $.$mol_data_array($.$mol_data_string);
    const Response = $.$mol_data_record({
        tags: $.$hyoo_realworld_tags_json,
    });
    class $hyoo_realworld_tags extends $.$mol_object2 {
        static list() {
            return Response(this.$.$hyoo_realworld_transport.load(`tags`)).tags;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_tags, "list", null);
    $.$hyoo_realworld_tags = $hyoo_realworld_tags;
})($ || ($ = {}));
//tags.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_nullable(sub) {
        return $.$mol_data_setup((val) => {
            if (val === null)
                return null;
            return sub(val);
        }, sub);
    }
    $.$mol_data_nullable = $mol_data_nullable;
})($ || ($ = {}));
//nullable.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_boolean = (val) => {
        if (typeof val === 'boolean')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a boolean`));
    };
})($ || ($ = {}));
//boolean.js.map
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_person_json = $.$mol_data_record({
        username: $.$mol_data_string,
        bio: $.$mol_data_nullable($.$mol_data_string),
        image: $.$mol_data_string,
        following: $.$mol_data_boolean,
    });
    const Response = $.$mol_data_record({
        profile: $.$hyoo_realworld_person_json,
    });
    class $hyoo_realworld_person extends $.$mol_object2 {
        static item(username) {
            const obj = new this;
            obj.name = $.$mol_const(username);
            return obj;
        }
        name() {
            return '';
        }
        biography() {
            return this.json().bio;
        }
        avatar() {
            return this.json().image;
        }
        following() {
            return this.json().following;
        }
        json(next) {
            if (next)
                return next;
            const uri = `profiles/${this.name()}`;
            const json = Response(this.$.$hyoo_realworld_transport.load(uri)).profile;
            return json;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_person.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_person, "item", null);
    $.$hyoo_realworld_person = $hyoo_realworld_person;
})($ || ($ = {}));
//person.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//number.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_integer(val) {
        const val2 = $.$mol_data_number(val);
        if (Math.floor(val2) === val2)
            return val2;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not an integer`));
    }
    $.$mol_data_integer = $mol_data_integer;
})($ || ($ = {}));
//integer.js.map
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_article_json = $.$mol_data_record({
        title: $.$mol_data_string,
        slug: $.$mol_data_string,
        body: $.$mol_data_string,
        createdAt: $.$mol_data_pipe($.$mol_data_string, $.$mol_time_moment),
        updatedAt: $.$mol_data_pipe($.$mol_data_string, $.$mol_time_moment),
        tagList: $.$hyoo_realworld_tags_json,
        description: $.$mol_data_string,
        author: $.$hyoo_realworld_person_json,
        favorited: $.$mol_data_boolean,
        favoritesCount: $.$mol_data_integer,
    });
    const Response_one = $.$mol_data_record({
        article: $.$hyoo_realworld_article_json,
    });
    const Response_page = $.$mol_data_record({
        articles: $.$mol_data_array($.$hyoo_realworld_article_json),
        articlesCount: $.$mol_data_integer,
    });
    class $hyoo_realworld_article extends $.$mol_object2 {
        static item(slug) {
            const obj = new this;
            obj.slug = $.$mol_const(slug);
            return obj;
        }
        slug() {
            return '';
        }
        title() {
            return this.json().title;
        }
        description() {
            return this.json().description;
        }
        body() {
            return this.json().body;
        }
        author() {
            const id = this.json()?.author.username;
            return this.$.$hyoo_realworld_person.item(id);
        }
        tags() {
            return this.json().tagList;
        }
        comments() {
            return this.$.$hyoo_realworld_comment.list(this);
        }
        json(next) {
            if (!next) {
                const uri = `articles/${this.slug()}`;
                next = Response_one(this.$.$hyoo_realworld_transport.load(uri)).article;
            }
            const author = this.$.$hyoo_realworld_person.item(next.author.username);
            author.json(next.author);
            return next;
        }
        static changes(next = '') {
            return next;
        }
        static save(next) {
            const uri = `articles/${next.slug}`;
            const method = next.slug ? 'put' : 'post';
            const res = this.$.$hyoo_realworld_transport.save(uri, method, next);
            const json = Response_one(res).article;
            const article = this.item(json.slug);
            article.json(json);
            this.changes(json.slug);
            return article;
        }
        static list(tag) {
            const page_size = this.page_size();
            return Array.from({ length: this.count_total(tag) }, (_, index) => {
                const page = Math.floor(index / page_size);
                return $.$mol_delegate($hyoo_realworld_article.prototype, () => this.list_page({ tag, page })[index % page_size]);
            });
        }
        static page_size() {
            return 20;
        }
        static count_total(tag) {
            return this.list_page_json({ tag, page: 0 }).articlesCount;
        }
        static list_page(id) {
            return this.list_page_json(id).articles.map(json => this.$.$hyoo_realworld_article.item(json.slug));
        }
        static list_page_json(id) {
            this.changes();
            const limit = this.page_size();
            const offset = id.page * limit;
            const url = `articles?tag=${encodeURIComponent(id.tag)}&offset=${offset}&limit=${limit}`;
            const json = Response_page(this.$.$hyoo_realworld_transport.load(url));
            for (const article of json.articles) {
                this.$.$hyoo_realworld_article.item(article.slug).json(article);
            }
            return json;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_article, "item", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article, "changes", null);
    __decorate([
        $.$mol_fiber.method
    ], $hyoo_realworld_article, "save", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_article, "list", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_article, "list_page", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_article, "list_page_json", null);
    $.$hyoo_realworld_article = $hyoo_realworld_article;
})($ || ($ = {}));
//article.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//gap.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
    };
})($ || ($ = {}));
//gap.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.sub = () => this.head();
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        body() {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.scroll_top = (val) => this.body_scroll_top(val);
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: {
                color: $.$mol_theme.back,
            },
            color: $.$mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $.$mol_gap.block,
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $.$mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(50),
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                margin: 0,
                padding: $.$mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    const TextDecoder = globalThis.TextDecoder ?? $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next, force) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found) {
                    exists = false;
                }
                else {
                    return $.$mol_fail_hidden(error);
                }
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            if (next === undefined) {
                return $.$mol_charset_decode(this.buffer(undefined, force));
            }
            else {
                const buffer = next === undefined ? undefined : $.$mol_charset_encode(next);
                this.buffer(buffer, force);
                return next;
            }
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat().size;
                default: return 0;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $.$mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $.$mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    file.buffer(undefined, $.$mol_mem_force_update);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', (error) => {
                this.stat(error, $.$mol_mem_force_fail);
            });
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, force) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            try {
                stat = next ?? stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $.$mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure(next) {
            const path = this.path();
            try {
                if (next)
                    $node.fs.mkdirSync(path);
                else
                    $node.fs.unlinkSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
            return true;
        }
        buffer(next, force) {
            const path = this.path();
            if (next === undefined) {
                this.stat();
                try {
                    const prev = $.$mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$.$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_comment_json = $.$mol_data_record({
        author: $.$hyoo_realworld_person_json,
        id: $.$mol_data_integer,
        body: $.$mol_data_string,
        createdAt: $.$mol_data_pipe($.$mol_data_string, $.$mol_time_moment),
        updatedAt: $.$mol_data_pipe($.$mol_data_string, $.$mol_time_moment),
    });
    const Response_one = $.$mol_data_record({
        comment: $.$hyoo_realworld_comment_json,
    });
    const Response_list = $.$mol_data_record({
        comments: $.$mol_data_array($.$hyoo_realworld_comment_json),
    });
    class $hyoo_realworld_comment extends $.$mol_object2 {
        static item(id) {
            const obj = new this;
            obj.id = $.$mol_const(id);
            return obj;
        }
        id() {
            return 0;
        }
        body() {
            return this.json().body;
        }
        updated_moment() {
            return this.json().updatedAt;
        }
        author() {
            const id = this.json()?.author.username;
            return this.$.$hyoo_realworld_person.item(id);
        }
        json(next = {}) {
            const author = this.$.$hyoo_realworld_person.item(next.author.username);
            author.json(next.author);
            return next;
        }
        static changes(next = 0) {
            return next;
        }
        static save(article, next) {
            const uri = `articles/${article}/comments`;
            const res = this.$.$hyoo_realworld_transport.save(uri, 'post', next);
            const json = Response_one(res).comment;
            const comment = this.item(json.id);
            comment.json(json);
            this.changes(json.id);
            return article;
        }
        static list(article) {
            this.changes();
            const url = `articles/${article.slug()}/comments`;
            const json = Response_list(this.$.$hyoo_realworld_transport.load(url));
            const next = json.comments.map(json => {
                this.$.$hyoo_realworld_comment.item(json.id).json(json);
                return this.$.$hyoo_realworld_comment.item(json.id);
            });
            return next;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_comment, "item", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment, "changes", null);
    __decorate([
        $.$mol_fiber.method
    ], $hyoo_realworld_comment, "save", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_comment, "list", null);
    $.$hyoo_realworld_comment = $hyoo_realworld_comment;
})($ || ($ = {}));
//comment.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title()
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                title: this.hint(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: $.$mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $.$mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        ':hover': {
            background: {
                color: $.$mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    background: {
                        color: $.$mol_theme.back,
                    },
                    color: $.$mol_theme.text,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                const arg = this.arg();
                const uri = new this.$.$mol_state_arg(this.state_key()).link(arg);
                if (uri !== this.$.$mol_state_arg.href())
                    return uri;
                const arg2 = {};
                for (let i in arg)
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 40);
            }
            target() {
                return (this.uri_native().origin === $.$mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .5rem;\n\tflex: 1 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .5rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_support_css_overflow_anchor() {
        return this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false;
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: block;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n \n[mol_list] > * {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window() {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                let [min, max] = $.$mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = $.$mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $.$mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        if (error instanceof Promise) {
                            $.$mol_atom2.current.subscribe(error);
                        }
                        else if ($.$mol_fail_catch(error)) {
                            console.error(error);
                        }
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        $.$mol_mem_cached(() => this.view_window(), [index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -.75em;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n    text-align: center;\n    line-height: 1;\n    display: inline-block;\n\ttext-shadow: 1px 1px 0 black;\n}\n");
})($ || ($ = {}));
//speck.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_or_error()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_or_error() {
            return this.hint();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tmin-width: 2.5rem;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            fiber(next = null) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.fiber($.$mol_fiber.current);
                this.event_click(next);
                this.click(next);
                if (this.fiber() === $.$mol_fiber.current) {
                    this.fiber(null);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                try {
                    this.fiber()?.get();
                    return '';
                }
                catch (error) {
                    if (error instanceof Promise) {
                        return $.$mol_fail_hidden(error);
                    }
                    return String(error.message ?? error);
                }
            }
            hint_or_error() {
                return this.error() || super.hint_or_error();
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_button.prototype, "fiber", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//typed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\tdisplay: inline-block;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//typed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//minor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));
//minor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $.$mol_after_timeout {
    }
    $.$mol_after_work = $mol_after_work;
})($ || ($ = {}));
//work.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_work(16, $.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25em 0;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $.$mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 8;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//paragraph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $.$mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.minimal_width())) * this.line_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paragraph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
//intersect.js.map
;
"use strict";
//unicode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            while (this.lastIndex < str.length) {
                const found = this.exec(str);
                if (!found)
                    break;
                yield found;
            }
            this.lastIndex = index;
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        exec(str) {
            const from = this.lastIndex;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $.$mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (params[option]) {
                            if (typeof params[option] !== 'boolean') {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $.$mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
    }
    $mol_regexp.decimal_only = $mol_regexp.from(/\d/gsu);
    $mol_regexp.decimal_except = $mol_regexp.from(/\D/gsu);
    $mol_regexp.latin_only = $mol_regexp.from(/\w/gsu);
    $mol_regexp.latin_except = $mol_regexp.from(/\W/gsu);
    $mol_regexp.space_only = $mol_regexp.from(/\s/gsu);
    $mol_regexp.space_except = $mol_regexp.from(/\S/gsu);
    $mol_regexp.word_break_only = $mol_regexp.from(/\b/gsu);
    $mol_regexp.word_break_except = $mol_regexp.from(/\B/gsu);
    $mol_regexp.tab = $mol_regexp.from(/\t/gsu);
    $mol_regexp.slash_back = $mol_regexp.from(/\\/gsu);
    $mol_regexp.nul = $mol_regexp.from(/\0/gsu);
    $mol_regexp.char_any = $mol_regexp.from(/./gsu);
    $mol_regexp.begin = $mol_regexp.from(/^/gsu);
    $mol_regexp.end = $mol_regexp.from(/$/gsu);
    $mol_regexp.or = $mol_regexp.from(/|/gsu);
    $mol_regexp.line_end = $mol_regexp.from({
        win_end: [['\r'], '\n'],
        mac_end: '\r',
    });
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//regexp.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.66;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const regexp = $.$mol_regexp.from({ needle: this.needle() }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: center;\n\tcolor: var(--mol_theme_control);\n\tdisplay: inline;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1em;\n\twidth: 1em;\n\tdisplay: inline-block;\n\tmargin: -.25rem .25rem 0 0;\n\tvertical-align: middle;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: invert(1) hue-rotate(180deg);\n}\n");
})($ || ($ = {}));
//iconed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]);
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.text = () => this.quote_text(id);
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_text_row();
            obj.sub = () => this.block_content(id);
            obj.type = () => this.block_type(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_text_link();
            obj.target = () => this.link_target(id);
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_text_image();
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.level = () => this.header_level(id);
            obj.content = () => this.header_content(id);
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        Table_cell_head(id) {
            const obj = new this.$.$mol_float();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        quote_text(id) {
            return "";
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        link_target(id) {
            return "_blank";
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_content(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
    class $mol_text_row extends $.$mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
    class $mol_text_header extends $.$mol_paragraph {
        dom_name() {
            return "h";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_header_level: this.level()
            };
        }
        sub() {
            return this.content();
        }
        level(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $.$mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        sub() {
            return this.content();
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
    class $mol_text_link extends $.$mol_link_iconed {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        uri() {
            return this.link();
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    $.$mol_text_link = $mol_text_link;
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return {
                ...super.attr(),
                allowfullscreen: true,
                mol_text_type: this.type(),
                data: this.link()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        constructor(lexems) {
            this.lexems = lexems;
            this.rules = [];
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gm');
        }
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $.$mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//syntax2.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $.$mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $.$mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax2_md_code = new $.$mol_syntax2({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:|#|\?|\/)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*\b|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#%&\*_\+\\\/\|'";:\.,\^]+/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tpadding: var(--mol_gap_block);\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_type=\"block\"] {\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: var(--mol_gap_block);\n\tfont-weight: 500;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0 .25rem 0 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 60%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\tcolor: hsl( 0, 0%, 50% );\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 50%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_line.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    switch (name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                            else {
                                const span = this.Link(id);
                                span.type(name);
                                span.link(this.uri_resolve(chunks[1]));
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(chunks[1]);
                            span.type(name);
                            span.link(this.uri_resolve(chunks[1]));
                            span.title(chunks[0]);
                            return spans.push(span);
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, chunks[0]));
                            return spans.push(span);
                        }
                    }
                    const span = this.Span(id);
                    span.type(name);
                    span.content(name
                        ? [].concat.apply([], chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [found]);
                    spans.push(span);
                });
                return spans;
            }
            code2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    const span = this.Span(id);
                    span.type(name);
                    spans.push(span);
                    switch (name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([found[0], ...this.code2spans(`${id}/${index}`, found.slice(1, found.length - 1)), found[found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([found]);
                            return span;
                        }
                    }
                });
                return spans;
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_message extends $.$mol_view {
        moment() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        sub() {
            return [
                this.Info(),
                this.Text()
            ];
        }
        avatar_link() {
            return "";
        }
        avatar() {
            return "";
        }
        Avatar() {
            const obj = new this.$.$mol_image();
            obj.title = () => "";
            obj.uri = () => this.avatar();
            return obj;
        }
        name() {
            return " ";
        }
        Name() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.name()
            ];
            return obj;
        }
        Author() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.avatar_link();
            obj.sub = () => [
                this.Avatar(),
                this.Name()
            ];
            return obj;
        }
        moment_string() {
            return "";
        }
        Moment() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.moment_string()
            ];
            return obj;
        }
        Info() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Author(),
                this.Moment()
            ];
            return obj;
        }
        text() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.text();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Avatar", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Author", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Info", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Text", null);
    $.$mol_message = $mol_message;
})($ || ($ = {}));
//message.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/message/message.view.css", "[mol_message] {\n\tmax-width: 58rem;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n}\n\n[mol_message_avatar] {\n\twidth: 1.5rem;\n\theight: 1.5rem;\n}\n\n[mol_message_text] {\n\tflex: 1000 1 10rem;\n\tpadding: 0;\n}\n\n[mol_message_info] {\n\tpadding: .5rem;\n\tflex: 1 1 100%;\n\tbox-shadow: none;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n[mol_message_info] > * {\n\tmargin: .25rem;\n}\n\n[mol_message_author] {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n[mol_message_author] > * {\n\tmargin: .25rem;\n}\n\n[mol_message_name] {\n\tfont-weight: bolder;\n}\n\n[mol_message_moment] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//message.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_message extends $.$mol_message {
            moment_string() {
                return this.moment().toString('YYYY-MM-DD hh:mm:ss');
            }
        }
        $$.$mol_message = $mol_message;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//message.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_comment_card extends $.$mol_message {
        comment() {
            const obj = new this.$.$hyoo_realworld_comment();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment_card.prototype, "comment", null);
    $.$hyoo_realworld_comment_card = $hyoo_realworld_comment_card;
})($ || ($ = {}));
//card.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_comment_card extends $.$hyoo_realworld_comment_card {
            name() {
                return this.comment().author().name();
            }
            text() {
                return this.comment().body();
            }
            avatar() {
                return this.comment().author().avatar();
            }
            moment() {
                return new $.$mol_time_moment(this.comment().updated_moment()).toOffset(new $.$mol_time_moment().offset);
            }
            avatar_link() {
                const args = this.$.$mol_state_arg.dict();
                return this.$.$mol_state_arg.make_link({ ...args, person: this.comment().author().name() });
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_comment_card.prototype, "moment", null);
        $$.$hyoo_realworld_comment_card = $hyoo_realworld_comment_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//card.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_edit extends $.$mol_icon {
        path() {
            return "M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z";
        }
    }
    $.$mol_icon_edit = $mol_icon_edit;
})($ || ($ = {}));
//edit.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > * {\n\tborder-radius: 0;\n}\n\n[mol_bar] > *:first-child {\n\tborder-top-left-radius: var(--mol_skin_round);\n\tborder-bottom-left-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > *:not(:first-child) {\n\tmargin-left: 1px;\n}\n\n[mol_bar] > *:last-child {\n\tborder-top-right-radius: var(--mol_skin_round);\n\tborder-bottom-right-radius: var(--mol_skin_round);\n}\n");
})($ || ($ = {}));
//bar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $.$mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//hotkey.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $.$mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hotkey.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        length_max() {
            return Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 1 0 auto;\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:disabled {\n\tbackground-color: transparent;\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//string.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
                this.selection_change(next);
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $.$mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', event => this.selection_change(event));
            }
            selection_change(event) {
                const el = this.dom_node();
                this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $.$mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.haystack(),
                target: "_blank"
            };
        }
        haystack() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//token.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $.$mol_style_func;
        $.$mol_style_define($.$mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 60, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 60, 1),
                    },
                    'code-global': {
                        color: hsla(210, 80, 60, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 60, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 30, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 60, 1),
                    },
                    'code-link': {
                        color: hsla(240, 60, 60, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//token.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $.$mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code_row, {
            display: 'block',
            Numb: {
                textAlign: 'right',
                color: $.$mol_theme.shade,
                width: rem(3),
                padding: {
                    right: rem(1.5),
                },
                margin: {
                    left: rem(-3),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $.$mol_list {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        sidebar_showed() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//code.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code, {
            padding: $.$mol_gap.text,
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        margin: {
                            left: rem(3),
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return "";
        }
        enabled() {
            return true;
        }
        length_max() {
            return Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        Edit() {
            const obj = new this.$.$mol_string();
            obj.dom_name = () => "textarea";
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            return obj;
        }
        row_numb(index) {
            return 0;
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (index) => this.row_numb(index);
            obj.sidebar_showed = () => this.sidebar_showed();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
})($ || ($ = {}));
//textarea.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 0;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\tz-index: 1;\n\twhite-space: inherit;\n}\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: monospace;\n\tz-index: -1 !important;\n\tpadding: var(--mol_gap_text);\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: transparent;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\twhite-space: inherit;\n\ttab-size: 4;\n\toverflow-anchor: none;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 3rem;\n\twidth: calc( 100% - 3rem );\n}\n");
})($ || ($ = {}));
//textarea.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $.$mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//textarea.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//major.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//major.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_comment_add extends $.$mol_bar {
        article() {
            const obj = new this.$.$hyoo_realworld_article();
            return obj;
        }
        sub() {
            return [
                this.Message(),
                this.Submit()
            ];
        }
        message(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Message() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => "Your comment";
            obj.value = (val) => this.message(val);
            return obj;
        }
        post(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        postable() {
            return false;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Post";
            obj.click = (val) => this.post(val);
            obj.enabled = () => this.postable();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment_add.prototype, "article", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment_add.prototype, "message", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment_add.prototype, "Message", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment_add.prototype, "post", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_comment_add.prototype, "Submit", null);
    $.$hyoo_realworld_comment_add = $hyoo_realworld_comment_add;
})($ || ($ = {}));
//add.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/comment/add/add.view.css", "[hyoo_realworld_comment_add_status] {\n\tflex: 0 0 auto;\n}\n");
})($ || ($ = {}));
//add.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_comment_add extends $.$hyoo_realworld_comment_add {
            post() {
                this.$.$hyoo_realworld_comment.save(this.article().slug(), { body: this.message() });
                this.message('');
                return null;
            }
            postable() {
                return Boolean(this.message());
            }
        }
        __decorate([
            $.$mol_fiber.method
        ], $hyoo_realworld_comment_add.prototype, "post", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_comment_add.prototype, "postable", null);
        $$.$hyoo_realworld_comment_add = $hyoo_realworld_comment_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//add.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_article_page extends $.$mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_article_page_title');
        }
        tools() {
            return [
                this.Edit_link(),
                this.Close_link()
            ];
        }
        body() {
            return [
                this.Content(),
                this.Tags(),
                this.Comments(),
                this.Comment_add()
            ];
        }
        Comment_card(index) {
            const obj = new this.$.$hyoo_realworld_comment_card();
            obj.comment = () => this.comment(index);
            return obj;
        }
        Tag_link(index) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                tag: this.tag_name(index),
                article: null
            });
            obj.sub = () => [
                this.tag_name(index)
            ];
            return obj;
        }
        Edit_icon() {
            const obj = new this.$.$mol_icon_edit();
            return obj;
        }
        Edit_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                edit: ""
            });
            obj.sub = () => [
                this.Edit_icon()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                article: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        content() {
            return "";
        }
        Content() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.content();
            return obj;
        }
        tags() {
            return [];
        }
        Tags() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.tags();
            return obj;
        }
        comment_cards() {
            return [];
        }
        Comments() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.comment_cards();
            return obj;
        }
        article() {
            const obj = new this.$.$hyoo_realworld_article();
            return obj;
        }
        Comment_add() {
            const obj = new this.$.$hyoo_realworld_comment_add();
            obj.article = () => this.article();
            return obj;
        }
        comment(index) {
            const obj = new this.$.$hyoo_realworld_comment();
            return obj;
        }
        tag_name(index) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_article_page.prototype, "Comment_card", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_article_page.prototype, "Tag_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Edit_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Edit_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Close_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Tags", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Comments", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "article", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_page.prototype, "Comment_add", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_article_page.prototype, "comment", null);
    $.$hyoo_realworld_article_page = $hyoo_realworld_article_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/article/page/page.view.css", "[hyoo_realworld_article_page_comment_add] {\n\tmargin: .75rem;\n}\n\n[hyoo_realworld_article_page_comments] {\n\tpadding: .75rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: none;\n}\n\n[hyoo_realworld_article_page_comments] > * {\n\tmargin: .75rem;\n}\n\n[hyoo_realworld_article_page_tag_link] {\n\tmargin: 0;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_article_page extends $.$hyoo_realworld_article_page {
            article() {
                const slug = this.$.$mol_state_arg.value('article');
                return this.$.$hyoo_realworld_article.item(slug);
            }
            content() {
                return this.article().body();
            }
            title() {
                return this.article().title();
            }
            comments() {
                return this.article().comments();
            }
            comment_cards() {
                return this.comments().map((comment, index) => this.Comment_card(index));
            }
            comment(index) {
                return this.comments()[index];
            }
            tags() {
                return this.article().tags().map((tag, index) => this.Tag_link(index));
            }
            tag_name(index) {
                return this.article().tags()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_page.prototype, "article", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_page.prototype, "comments", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_page.prototype, "comment_cards", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_realworld_article_page.prototype, "comment", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_page.prototype, "tags", null);
        $$.$hyoo_realworld_article_page = $hyoo_realworld_article_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_feed {
    }
    $.$hyoo_realworld_feed = $hyoo_realworld_feed;
})($ || ($ = {}));
//feed.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_article_card extends $.$mol_row {
        minimal_height() {
            return 72;
        }
        article() {
            const obj = new this.$.$hyoo_realworld_article();
            return obj;
        }
        sub() {
            return [
                this.Author(),
                this.Title(),
                this.Descr()
            ];
        }
        author_name() {
            return "";
        }
        avatar() {
            return "";
        }
        Avatar() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.avatar();
            return obj;
        }
        Author_name() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.author_name()
            ];
            return obj;
        }
        Author() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: this.author_name()
            });
            obj.sub = () => [
                this.Avatar(),
                this.Author_name()
            ];
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        descr() {
            return "";
        }
        Descr() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.descr()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_card.prototype, "article", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_card.prototype, "Avatar", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_card.prototype, "Author_name", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_card.prototype, "Author", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_card.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_card.prototype, "Descr", null);
    $.$hyoo_realworld_article_card = $hyoo_realworld_article_card;
})($ || ($ = {}));
//card.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/article/card/card.view.css", "[hyoo_realworld_article_card] {\n\tmargin-bottom: 1px;\n\tpadding: .5rem;\n}\n\n[hyoo_realworld_article_card] > * {\n\tmargin: 0 .25rem;\n}\n\n[hyoo_realworld_article_card_title] {\n\tfont-weight: bolder;\n}\n\n[hyoo_realworld_article_card_author] {\n\tmargin: 0;\n\tdisplay: flex;\n\tflex: 1 1 100%;\n}\n\n[hyoo_realworld_article_card_author] > * {\n\tmargin: .25rem;\n}\n\n[hyoo_realworld_article_card_avatar] {\n\twidth: 24px;\n\theight: 24px;\n}\n");
})($ || ($ = {}));
//card.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_article_card extends $.$hyoo_realworld_article_card {
            title() {
                return this.article().title();
            }
            descr() {
                return this.article().description();
            }
            avatar() {
                return this.article().author().avatar();
            }
            author_name() {
                return this.article().author().name();
            }
        }
        $$.$hyoo_realworld_article_card = $hyoo_realworld_article_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//card.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_feed_page extends $.$mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_feed_page_title');
        }
        minimal_width() {
            return 400;
        }
        tools() {
            return [
                this.Add_link()
            ];
        }
        body() {
            return [
                this.Article_links()
            ];
        }
        Article_link(index) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                article: this.article_slug(index)
            });
            obj.sub = () => [
                this.Article_card(index)
            ];
            return obj;
        }
        Add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Add_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                edit: ""
            });
            obj.sub = () => [
                this.Add_icon()
            ];
            return obj;
        }
        article_links() {
            return [];
        }
        Article_links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.article_links();
            return obj;
        }
        article_slug(index) {
            return "";
        }
        article(index) {
            const obj = new this.$.$hyoo_realworld_article();
            return obj;
        }
        Article_card(index) {
            const obj = new this.$.$hyoo_realworld_article_card();
            obj.article = () => this.article(index);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_feed_page.prototype, "Article_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_feed_page.prototype, "Add_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_feed_page.prototype, "Add_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_feed_page.prototype, "Article_links", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_feed_page.prototype, "article", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_feed_page.prototype, "Article_card", null);
    $.$hyoo_realworld_feed_page = $hyoo_realworld_feed_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/feed/page/page.view.css", "[hyoo_realworld_feed_page_article_links] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: .75rem;\n}\n\n[hyoo_realworld_feed_page_article_link] {\n\tpadding: 0;\n\tflex: none;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_feed_page extends $.$hyoo_realworld_feed_page {
            tag() {
                return this.$.$mol_state_arg.value('tag') || '';
            }
            articles() {
                return this.$.$hyoo_realworld_article.list(this.tag());
            }
            article_links() {
                return this.articles().map((article, index) => this.Article_link(index));
            }
            article_slug(index) {
                return this.articles()[index].slug();
            }
            article(index) {
                return this.articles()[index];
            }
            body_scroll_top(val) {
                this.tag();
                return (val !== void 0) ? val : 0;
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_feed_page.prototype, "articles", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_feed_page.prototype, "article_links", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_realworld_feed_page.prototype, "article_slug", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_realworld_feed_page.prototype, "article", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_feed_page.prototype, "body_scroll_top", null);
        $$.$hyoo_realworld_feed_page = $hyoo_realworld_feed_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $.$mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//labeler.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//labeler.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $.$mol_labeler {
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        Content() {
            return this.control();
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//field.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tmargin-left: 1rem;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//field.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $.$mol_view {
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        sub() {
            return [
                this.Bar_fields(),
                this.Bar_buttons()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        Bar_fields() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.form_fields();
            return obj;
        }
        buttons() {
            return [];
        }
        Bar_buttons() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.buttons();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_fields", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_buttons", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//form.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/form.css", "[mol_form] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_form_bar_fields] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_form_bar_fields] > * {\n\tmargin: .5rem;\n}\n\n[mol_form_bar_buttons] {\n\tbox-shadow: none;\n\tpadding: 0;\n}\n\n[mol_form_bar_buttons] > * {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//form.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            submit_blocked() {
                return this.form_fields().some(field => field.bid());
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $.$mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_form.prototype, "submit_blocked", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//form.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_article_edit extends $.$mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_article_edit_title');
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Form()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                edit: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        article_title_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_article_edit_article_title_name');
        }
        article_title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Article_title() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.article_title(val);
            return obj;
        }
        Article_title_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.article_title_name();
            obj.control = () => this.Article_title();
            return obj;
        }
        article_descr_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_article_edit_article_descr_name');
        }
        article_descr(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Article_descr() {
            const obj = new this.$.$mol_textarea();
            obj.value = (val) => this.article_descr(val);
            obj.hint = () => "markdown";
            return obj;
        }
        Article_descr_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.article_descr_name();
            obj.control = () => this.Article_descr();
            return obj;
        }
        article_content_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_article_edit_article_content_name');
        }
        article_content(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Article_content() {
            const obj = new this.$.$mol_textarea();
            obj.value = (val) => this.article_content(val);
            obj.hint = () => "markdown";
            return obj;
        }
        Article_content_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.article_content_name();
            obj.control = () => this.Article_content();
            return obj;
        }
        article_tags_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_article_edit_article_tags_name');
        }
        article_tags(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Article_tags() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.article_tags(val);
            obj.hint = () => "comma, separated, values";
            return obj;
        }
        Article_tags_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.article_tags_name();
            obj.control = () => this.Article_tags();
            return obj;
        }
        Save_label() {
            return this.$.$mol_locale.text('$hyoo_realworld_article_edit_Save_label');
        }
        save(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        saveable() {
            return false;
        }
        Save() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.Save_label();
            obj.click = (val) => this.save(val);
            obj.enabled = () => this.saveable();
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Article_title_field(),
                this.Article_descr_field(),
                this.Article_content_field(),
                this.Article_tags_field()
            ];
            obj.buttons = () => [
                this.Save()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_title", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_title", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_title_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_descr", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_descr", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_descr_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_content", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_content", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_content_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_tags", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_tags", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_tags_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "save", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Save", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Form", null);
    $.$hyoo_realworld_article_edit = $hyoo_realworld_article_edit;
})($ || ($ = {}));
//edit.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/article/edit/edit.view.css", "[hyoo_realworld_article_edit_form] {\n\tpadding: .75rem;\n}\n\n[hyoo_realworld_article_edit_save] {\n\tflex: 0 1 auto;\n}\n\n[hyoo_realworld_article_edit_save_status] {\n\talign-self: stretch;\n}\n");
})($ || ($ = {}));
//edit.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_article_edit extends $.$hyoo_realworld_article_edit {
            article() {
                const slug = this.$.$mol_state_arg.value('article');
                if (!slug)
                    return null;
                return this.$.$hyoo_realworld_article.item(slug);
            }
            article_title(next) {
                return next === undefined ? (this.article()?.title() || '') : next;
            }
            article_descr(next) {
                return next === undefined ? (this.article()?.description() || '') : next;
            }
            article_content(next) {
                return next === undefined ? (this.article()?.body() || '') : next;
            }
            article_tags(next) {
                return next === undefined ? (this.article()?.tags().join(', ') || '') : next;
            }
            save(next) {
                if (!next)
                    return;
                const slug = this.article()?.slug() || '';
                const article = this.$.$hyoo_realworld_article.save({
                    slug,
                    title: this.article_title(),
                    description: this.article_descr(),
                    body: this.article_content(),
                    tagList: this.article_tags().split(/\s*,\s*/g),
                });
                this.$.$mol_state_arg.value('article', article.slug());
                this.$.$mol_state_arg.value('edit', null);
            }
            saveable() {
                if (!this.article_title())
                    return false;
                if (!this.article_content())
                    return false;
                if (!this.article())
                    return true;
                if (this.article_title() !== this.article()?.title())
                    return true;
                if (this.article_descr() !== this.article()?.description())
                    return true;
                if (this.article_content() !== this.article()?.body())
                    return true;
                if (this.article_tags() !== this.article()?.tags().join(', '))
                    return true;
                return false;
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_title", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_descr", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_content", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_tags", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_edit.prototype, "save", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_article_edit.prototype, "saveable", null);
        $$.$hyoo_realworld_article_edit = $hyoo_realworld_article_edit;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//edit.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_person_page extends $.$mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_person_page_title');
        }
        section(name) {
            if (name !== undefined)
                return name;
            return "";
        }
        tools() {
            return [
                this.Close()
            ];
        }
        avatar() {
            return "";
        }
        name() {
            return "";
        }
        biography() {
            return "";
        }
        body() {
            return [
                this.Image(),
                this.Username(),
                this.Bio()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        image_title() {
            return this.$.$mol_locale.text('$hyoo_realworld_person_page_image_title');
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.avatar();
            obj.title = () => this.image_title();
            return obj;
        }
        username_label() {
            return this.$.$mol_locale.text('$hyoo_realworld_person_page_username_label');
        }
        Username() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.username_label();
            obj.content = () => [
                this.name()
            ];
            return obj;
        }
        biography_label() {
            return this.$.$mol_locale.text('$hyoo_realworld_person_page_biography_label');
        }
        Bio() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.biography_label();
            obj.content = () => [
                this.biography()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_person_page.prototype, "section", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_person_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_person_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_person_page.prototype, "Image", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_person_page.prototype, "Username", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_person_page.prototype, "Bio", null);
    $.$hyoo_realworld_person_page = $hyoo_realworld_person_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    const Response = $.$mol_data_record({
        user: $.$mol_data_record({
            token: $.$mol_data_string,
            username: $.$mol_data_string,
        }),
    });
    class $hyoo_realworld_sign extends $.$mol_object2 {
        static auth(creds) {
            const res = this.$.$hyoo_realworld_transport.save(`users/login`, 'post', { user: creds });
            const person = Response(res).user;
            this.$.$hyoo_realworld_transport.token(person.token);
            return person;
        }
        static register(creds) {
            const res = this.$.$hyoo_realworld_transport.save(`users`, 'post', { user: creds });
            const person = Response(res).user;
            this.$.$hyoo_realworld_transport.token(person.token);
            return person;
        }
        static signed() {
            return Boolean(this.$.$hyoo_realworld_transport.token());
        }
        static drop() {
            this.$.$hyoo_realworld_transport.token('');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $hyoo_realworld_sign, "auth", null);
    __decorate([
        $.$mol_fiber.method
    ], $hyoo_realworld_sign, "register", null);
    $.$hyoo_realworld_sign = $hyoo_realworld_sign;
})($ || ($ = {}));
//sign.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/person/page/page.view.css", "[hyoo_realworld_person_page_image] {\n\tflex: 0 1 auto;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_person_page extends $.$hyoo_realworld_person_page {
            sign_out() {
                this.$.$hyoo_realworld_sign.drop();
                this.$.$mol_state_arg.value('person', null);
                this.section(null);
            }
            person_current() {
                const name = this.$.$mol_state_arg.value('person');
                return this.$.$hyoo_realworld_person.item(name);
            }
            biography() {
                return this.person_current().biography() ?? '';
            }
            avatar() {
                return this.person_current().avatar();
            }
            name() {
                return this.person_current().name();
            }
        }
        $$.$hyoo_realworld_person_page = $hyoo_realworld_person_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_home_page extends $.$mol_page {
        Page_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({});
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_title');
        }
        Articles() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "articles",
                tag: null
            });
            obj.sub = () => [
                this.articles_link()
            ];
            return obj;
        }
        Tags() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "tags"
            });
            obj.sub = () => [
                this.tags_link()
            ];
            return obj;
        }
        Favorites() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "favorites",
                tag: null
            });
            obj.sub = () => [
                this.favorites_link()
            ];
            return obj;
        }
        Profile() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "profile",
                tag: null
            });
            obj.sub = () => [
                this.profile_link()
            ];
            return obj;
        }
        Settings() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "settings",
                tag: null
            });
            obj.sub = () => [
                this.settings_link()
            ];
            return obj;
        }
        Sign_in() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "sign_in"
            });
            obj.sub = () => [
                this.sign_in_link()
            ];
            return obj;
        }
        Sign_up() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "sign_up"
            });
            obj.sub = () => [
                this.sign_up_link()
            ];
            return obj;
        }
        signed_links() {
            return [
                this.Articles(),
                this.Tags(),
                this.Favorites(),
                this.Profile(),
                this.Settings()
            ];
        }
        unsigned_links() {
            return [
                this.Articles(),
                this.Tags(),
                this.Sign_in(),
                this.Sign_up()
            ];
        }
        articles_link() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_articles_link');
        }
        tags_link() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_tags_link');
        }
        favorites_link() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_favorites_link');
        }
        profile_link() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_profile_link');
        }
        settings_link() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_settings_link');
        }
        sign_in_link() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_sign_in_link');
        }
        sign_up_link() {
            return this.$.$mol_locale.text('$hyoo_realworld_home_page_sign_up_link');
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Page_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Articles", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Tags", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Favorites", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Profile", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Settings", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Sign_in", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_home_page.prototype, "Sign_up", null);
    $.$hyoo_realworld_home_page = $hyoo_realworld_home_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/home/page/page.view.css", "[hyoo_realworld_home_page] {\n  flex: 0 0 10rem;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_home_page extends $.$hyoo_realworld_home_page {
            body() {
                return Boolean(this.$.$hyoo_realworld_sign.signed()) ? this.signed_links() : this.unsigned_links();
            }
        }
        $$.$hyoo_realworld_home_page = $hyoo_realworld_home_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_tags_page extends $.$mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_tags_page_title');
        }
        body() {
            return [
                this.Tag_links()
            ];
        }
        Tag_link(index) {
            const obj = new this.$.$mol_link();
            obj.minimal_height = () => 40;
            obj.minimal_width = () => 40;
            obj.arg = () => ({
                tag: this.tag_id(index),
                article: null,
                edit: null
            });
            obj.title = () => this.tag_name(index);
            return obj;
        }
        tag_links() {
            return [];
        }
        Tag_links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.tag_links();
            return obj;
        }
        tag_id(index) {
            return "";
        }
        tag_name(index) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld_tags_page.prototype, "Tag_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_tags_page.prototype, "Tag_links", null);
    $.$hyoo_realworld_tags_page = $hyoo_realworld_tags_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/tags/page/page.view.css", "[hyoo_realworld_tags_page_tag_links] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: .75rem;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_tags_page extends $.$hyoo_realworld_tags_page {
            tags() {
                return this.$.$hyoo_realworld_tags.list();
            }
            tag_links() {
                return this.tags().map((tag, index) => this.Tag_link(index));
            }
            tag_id(index) {
                return this.tags()[index];
            }
            tag_name(index) {
                return this.tag_id(index);
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_tags_page.prototype, "tags", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld_tags_page.prototype, "tag_links", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_realworld_tags_page.prototype, "tag_id", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_realworld_tags_page.prototype, "tag_name", null);
        $$.$hyoo_realworld_tags_page = $hyoo_realworld_tags_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_sign_in extends $.$mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_in_title');
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Need_account(),
                this.Form()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: null,
                edit: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        need_account_label() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_in_need_account_label');
        }
        Need_account() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "sign_up"
            });
            obj.sub = () => [
                this.need_account_label()
            ];
            return obj;
        }
        Mail_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_in_Mail_name');
        }
        mail(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Mail() {
            const obj = new this.$.$mol_string();
            obj.hint = () => "user@example.org";
            obj.value = (val) => this.mail(val);
            return obj;
        }
        Mail_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.Mail_name();
            obj.control = () => this.Mail();
            return obj;
        }
        Pass_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_in_Pass_name');
        }
        pass(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Pass() {
            const obj = new this.$.$mol_string();
            obj.type = () => "password";
            obj.hint = () => "########";
            obj.value = (val) => this.pass(val);
            return obj;
        }
        Pass_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.Pass_name();
            obj.control = () => this.Pass();
            return obj;
        }
        Auth_label() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_in_Auth_label');
        }
        auth(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.Auth_label();
            obj.click = (val) => this.auth(val);
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Mail_field(),
                this.Pass_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Need_account", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "mail", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Mail", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Mail_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "pass", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Pass", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Pass_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "auth", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Submit", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Form", null);
    $.$hyoo_realworld_sign_in = $hyoo_realworld_sign_in;
})($ || ($ = {}));
//in.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/sign/in/in.view.css", "[hyoo_realworld_sign_in_submit] {\n\tflex: 0 1 auto;\n}\n");
})($ || ($ = {}));
//in.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_sign_in extends $.$hyoo_realworld_sign_in {
            auth() {
                const person = this.$.$hyoo_realworld_sign.auth({
                    email: this.mail(),
                    password: this.pass(),
                });
                this.$.$mol_state_arg.value('person', person.username);
                this.$.$mol_state_arg.value('section', 'articles');
            }
        }
        $$.$hyoo_realworld_sign_in = $hyoo_realworld_sign_in;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//in.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_sign_up extends $.$mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_up_title');
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Have_account(),
                this.Form()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        have_account_label() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_up_have_account_label');
        }
        Have_account() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                section: "sign_in"
            });
            obj.sub = () => [
                this.have_account_label()
            ];
            return obj;
        }
        Username_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_up_Username_name');
        }
        username(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Username() {
            const obj = new this.$.$mol_string();
            obj.hint = () => "user666";
            obj.value = (val) => this.username(val);
            return obj;
        }
        Username_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.Username_name();
            obj.control = () => this.Username();
            return obj;
        }
        Mail_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_up_Mail_name');
        }
        mail(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Mail() {
            const obj = new this.$.$mol_string();
            obj.hint = () => "user@example.org";
            obj.value = (val) => this.mail(val);
            return obj;
        }
        Mail_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.Mail_name();
            obj.control = () => this.Mail();
            return obj;
        }
        Pass_name() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_up_Pass_name');
        }
        pass(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Pass() {
            const obj = new this.$.$mol_string();
            obj.type = () => "password";
            obj.hint = () => "########";
            obj.value = (val) => this.pass(val);
            return obj;
        }
        Pass_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.Pass_name();
            obj.control = () => this.Pass();
            return obj;
        }
        Reg_label() {
            return this.$.$mol_locale.text('$hyoo_realworld_sign_up_Reg_label');
        }
        reg(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.Reg_label();
            obj.click = (val) => this.reg(val);
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Username_field(),
                this.Mail_field(),
                this.Pass_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Have_account", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "username", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Username", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Username_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "mail", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Mail", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Mail_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "pass", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Pass", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Pass_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "reg", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Submit", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Form", null);
    $.$hyoo_realworld_sign_up = $hyoo_realworld_sign_up;
})($ || ($ = {}));
//up.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/sign/up/up.view.css", "[hyoo_realworld_sign_up_submit] {\n\tflex: 0 1 auto;\n}\n");
})($ || ($ = {}));
//up.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld_sign_up extends $.$hyoo_realworld_sign_up {
            reg() {
                const person = this.$.$hyoo_realworld_sign.register({
                    username: this.username(),
                    email: this.mail(),
                    password: this.pass(),
                });
                this.$.$mol_state_arg.value('person', person.username);
                this.$.$mol_state_arg.value('section', 'articles');
            }
        }
        $$.$hyoo_realworld_sign_up = $hyoo_realworld_sign_up;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//up.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld extends $.$mol_book2 {
        Article(id) {
            const obj = new this.$.$hyoo_realworld_article_page();
            return obj;
        }
        Feed(id) {
            const obj = new this.$.$hyoo_realworld_feed_page();
            return obj;
        }
        Article_edit(id) {
            const obj = new this.$.$hyoo_realworld_article_edit();
            return obj;
        }
        Profile() {
            const obj = new this.$.$hyoo_realworld_person_page();
            obj.section = (name) => this.section(name);
            return obj;
        }
        Person() {
            const obj = new this.$.$hyoo_realworld_person_page();
            return obj;
        }
        sections() {
            return {
                articles: this.feed_current(),
                article: this.article_current(),
                edit: this.edit_current(),
                profile: this.Profile(),
                home: this.Home(),
                tags: this.Tags(),
                sign_in: this.Sign_in(),
                sign_up: this.Sign_up()
            };
        }
        section(name) {
            if (name !== undefined)
                return name;
            return "";
        }
        feed_current() {
            const obj = new this.$.$hyoo_realworld_feed_page();
            return obj;
        }
        article_current() {
            const obj = new this.$.$hyoo_realworld_article_page();
            return obj;
        }
        edit_current() {
            const obj = new this.$.$hyoo_realworld_article_edit();
            return obj;
        }
        Home() {
            const obj = new this.$.$hyoo_realworld_home_page();
            return obj;
        }
        Tags() {
            const obj = new this.$.$hyoo_realworld_tags_page();
            return obj;
        }
        Sign_in() {
            const obj = new this.$.$hyoo_realworld_sign_in();
            return obj;
        }
        Sign_up() {
            const obj = new this.$.$hyoo_realworld_sign_up();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld.prototype, "Article", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld.prototype, "Feed", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_realworld.prototype, "Article_edit", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "Profile", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "Person", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "section", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "feed_current", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "article_current", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "edit_current", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "Home", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "Tags", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "Sign_in", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_realworld.prototype, "Sign_up", null);
    $.$hyoo_realworld = $hyoo_realworld;
})($ || ($ = {}));
//realworld.view.tree.js.map
;
var $node = $node || {} ; $node[ "/hyoo/realworld/logo.png" ] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABoUAAAEBCAYAAAC+OawFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAABcQAAAXEAEYYRHbAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjIx8SBplQAAj9xJREFUeF7t3QecHGX5B/AkgBQpomBDRf9iV1CxcP2SXHoPCb33XtWlqGdDgdu9nstdOgECCSC9ikYREXZm92pyKUAA6VV6Sy7/3xNmcTI8e7c7Zevv+/n8PujdzPu+O3s7l3ufmXeGubF582aGYTIYIiIiIiIiIiIiIqKs0CatGYYJLkREREREREREREREWaFNWjMME1yIiIiIiIiIiIiIiLJCm7T2EiIiIiIiIiIiIiIiIspBWmHHS4iIiIiIiIiIiIiIiCgHaYUdLyEiIiIiIiIiIiIiIqIcpBV2vISIiIiIiIiIiIiIiIhykFbY8RIqXrUr+oaF/rx2l0MWdu9W0xLbberczt1OWda/2+/veHR7axMiIiIiIiIiIiIiIsoWrbDjJVR8fn3bI9NGN8UOLYtEj5g9v3vJ+Nb4iqoGc0VNU2zF9Pbua6e2d/26JBw99LBFvQdddveGva3diIiIiIiIiIiIiIgok7TCjpdQ8Tj92jUzJrTG/zG2JfZiWcR4tTQcfa08YmwqCxubSxH5L/7/AP77dkk4+mp1o/nK+NZ4z/R5PWVWE0RERERERERERERElClaYcdLqLAdtKB7lwlz4qNndnQ9K4Uft6luNIyySLRydFN8T6tpIiIiIiIiIiIiIiIKklbY8RIqXBfctH5aVYMZrqw3X9UKPS7yYlW98Vf8d1+rCyIiIiIiIiIiIiIiCopW2PESKjxVKzcPn9jWNX5cS/yF0rDxrq2o40OiA/jvw8cv7atHdrS6JCIiIiIiIiIiIiIiv2mFHS+hwlMRMSrLI8b6jxZ0/EtVg/ne5Lau8IHzuz5mdUtERERERERERERERH7SCjteQoVj9orNw8Y0x0eVhaMbSsOG3NGjFnT8SmW9+daB87ouPfOGdTtYQyAiIiIiIiIiIiIiIr9ohR0vocJx/g1rR45uij1pLfGmFnL8TnWDuenkZasvtYZARERERERERERERER+0Qo7XkKFYea87u0mtXXeqRVugk5ZOLpubHPsp2cv77dGQ0REREREREREREREnmmFHS+h/DeyITpsXEv8qIp6402taJMsZWHj9aoG87mp7V3PTW7rNKe1d21AO8/h6y/j+xud2ydLecTYNGlOfP4hbT1cRo6IiIiIiIiIiIiIyC9aYcdLKP9VRKI7lIWjN5fWGZu0oo0zFRFj84Q5nfeOb+08fuKceOmFN68vvfyex/b53e2P/PC4K1eV1jTGplY3mH8a3xpPuTBUWW8+M6be/LI1JCIiIiIiIiIiIiIi8kor7HgJ5bfa2tphNc2x6WUR4x2tWOPIQFnY2FjZYPz07Bs37Gw1kdRBC7q/XloX/XOqzyiaPb/7SWtXIiIiIiIiIiIiIiLySivseAnltzOa7thmUlvnlVqRRsnjlRFj5si62Ahr9yFsHlYZMb9TGo7eprSlZkJTdC9rZyIiIiIiIiIiIiIi8kIr7HgJ5beaDnP7kY2mWqBx5tCFvYsr6o2PWbumrKrB2Hvq3C61TWeqGszfWrsREREREREREREREZEXWmHHSyi/HbSwZ0+tOONMedh46aLlq7azdktL7cqVw2qaYrPKlHadKQtHF5+7/IltrF2JiIiIiIiIiIiIiMgtrbDjJZTfZnZ03q4VZ+wpixibq+vjX7Z2cSV047qvjW6KbdDat6emObb+qKV9+1m7ERERERERERERERGRW1phx0sov5WGo0MWhaa3dw2ctmK9p6LQKctW7zBrfvcDQ90thO+vL683WRQiIiIiIiIiIiIiIvJKK+x4CeW3krqhi0LlEXPOxLZuV0vH2VXWm4ejvbec7dtTUmesR1gUIiIiIiIiIiIiIiLySivseAnlt1SKQiVho6EkbG5r7eIa2pqFsChERERERERERERERJQJWmHHSyi/sShERERERERERERERFSgtMKOl1B+S6UoNK4lfv8Ji7o+ae3iyinXrt528tx4Hdp7z9m+PSwKERERERERERERERH5RCvseAnlt5GNxpBFoYqIsXlUa/fXrF1cGd0S27Gi3vi31r492Gbt+JbYvtZuRERERERERERERETkllbY8RLKb6de09+gFWecmdDaudTaxZUJLZ3fL48Yz2ht21PdYN5+ytWrP2XtRkREREREREREREREbmmFHS+h/HbydWv21IozzpRHZBm52NHWbmmZvWLF8FGNsZVa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snZL229uX39GWdh4Xmn3I7ngxnUV1m5EREREREREREREROSFVtjxEspvM+Z13aYVZ7SMbjA+M6mtx9ozNRXh6M5l4ejdWnvOVDeYA9ZuRERERERERERERETklVbY8RLKb7+/c0N1Zb2pFmmcqYgYxqim+A9Hze209h5ceSS+G/ZZjH3fdbal5ZBFvWdZuxIRERERERERERERkVdaYcdLKL9N7jBHjG6KtWlFGiUby8JGtOSyh7508rJ1O9Wu3DzcauZDs1dsHjZl/iPbn3btmtOx/Y1ISgWhae1d756wbNXXrWaIiIiIiIiIiIiIiMgrrbDjJZT/JrTEy8sjxotasUbJQEld9N0D53U/OrW9+9QZ83p2tpoZdsZ1a78/qil2/Jjm+K0V9eYm2daxrxr0vXny3K72o5b2fcxqioiIiIiIiIiIiIiIvNIKO15C+e+ghd07jG+NX18aNqSQoxZutJRHsH1dtK+kLhqXVNWbT5cp2w0VtPPIjHldIy+595GP3HlEREREREREREREREQuaYUdL6H8d8TSrmGV9cY+VQ1mXCvaBBkpIk2Z2zm3qnUlC0JERERERERERERERH7SCjteQoXj0MW9R1XW68WboFIeMRpmLOr+cAk6IiIiIiIiIiIiIiLyiVbY8RIqHLNr+7YZ0xS7qDxivFaa4vOAPOT9UY3mHWOb+nawuiciIiIiIiIiIiIiIj9phR0vocKy/9lrho9qNM+rajCfUQo5vqQkHB0oC0cXnXTVqlGX3bOBy8YREREREREREREREQVBK+x4CRWeyfO6PnbEkt4zRzWZm7SijpeURYzNoxtj7WV/emDX2bNXWD0SEREREREREREREZHvtMKOl1Bhmr1ixfDZK3q3rYwY91XWm56XkyuPGAMVEePho6/oW4q2R1jdEBERERERERERERFRULTCjpdQYTvqit7PzOzoPr0iYrRPautUCz6DpTyyJXePbYnPPWhe98hpDZ0sCBERERERERERERERZYJW2PESKnynL+/ftrrB2PGopb0/nNbeObc8En27NBx9D0l299Am+f7UuZ2vnXrN6gurmrs+PX1+746X3PwIC0JERERERERERERERJmiFXa8hIrTeTes+/xRV/TVVYSjHaV1/8u0eZ0dF968/meRe5/4hLUpERERERERERERERFlg1bY8RIiIiIiIiIiIiIiIiLKQVphx0uIiIiIiIiIiIiIiIgoB2mFHS8hIiIiIiIiIiIiIiKiHKQVdhiGyZ8QEREREREREREREaVEm2RmGCZ/QkRERERERERERETFZtiw/wdit3hRc/GcCwAAAABJRU5ErkJggg=="

;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/realworld/realworld.view.css", "[hyoo_realworld] {\n\t--mol_theme_control: #367c36;\n}\n\n[hyoo_realworld] [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: #5cb85c;\n\ttext-shadow: 0 1px 3px rgba(0,0,0,.3);\n}\n\n[hyoo_realworld_tags] {\n\tflex: 0 0 10rem;\n}\n\n[hyoo_realworld_sign_in] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_realworld_sign_up] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_realworld_person_page] {\n\tflex: 0 0 20rem;\n}\n\n\n[hyoo_realworld_home_page] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_realworld_feed] {\n\tflex: 0 0 30rem;\n}\n\n[hyoo_realworld_article] ,\n[hyoo_realworld_article_edit] {\n\tflex: 0 0 50rem;\n}\n");
})($ || ($ = {}));
//realworld.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_realworld extends $.$hyoo_realworld {
            article_current() {
                return this.Article(this.article()?.slug);
            }
            feed_current() {
                return this.Feed(this.tag());
            }
            edit_current() {
                return this.Article_edit(this.article()?.slug);
            }
            article() {
                const slug = this.$.$mol_state_arg.value('article');
                if (!slug)
                    return null;
                return this.$.$hyoo_realworld_article.item(slug);
            }
            edit() {
                return this.$.$mol_state_arg.value('edit') !== null;
            }
            tag() {
                return this.$.$mol_state_arg.value('tag') || '';
            }
            signed() {
                return this.$.$hyoo_realworld_sign.signed();
            }
            section(next) {
                return this.$.$mol_state_arg.value('section', next);
            }
            person(next) {
                return this.$.$mol_state_arg.value('person', next);
            }
            pages() {
                return [
                    this.Home(),
                    this.section() ? this.sections()[this.section()] : this.sections().articles,
                    this.tag() && this.feed_current(),
                    this.article() && this.article_current(),
                    this.edit() && (this.signed() ? this.edit_current() : this.sections().sign_in),
                    this.person() ? this.Person() : null,
                ].filter(Boolean);
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld.prototype, "article", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld.prototype, "edit", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld.prototype, "tag", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_realworld.prototype, "section", null);
        $$.$hyoo_realworld = $hyoo_realworld;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//realworld.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//env.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//env.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $.$mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return {
                ...super.some(),
                a: 1
            };
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//attributes.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $.$mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//binding.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $.$mol_view {
        outer_width(v) {
            return this.Test().width(v);
        }
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $.$mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//binding_right.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $.$mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//simple.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $.$mol_view {
        Page(index) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(index);
            return obj;
        }
        page(index) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $.$mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//subcomponent.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as readonly ( ${item_type} )[]` : ` as readonly any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...['\t\t\t"', SourceNode(opt.row, opt.col, fileName, key[1] + '" : '), arg, ' ', ...(v || []), ' ,\n']);
                                        needSet = ns;
                                    });
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        var decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($_1) {
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($_1.$$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            await test(context);
        }
        $_1.$mol_ambient({}).$mol_log3_done({
            place: '$mol_test',
            message: 'Completed',
            count: $_1.$mol_test_all.length,
        });
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(() => {
            scheduled = false;
            $mol_test_run();
        }, 0);
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
//assert.test.js.map
;
"use strict";
//assert.js.map
;
"use strict";
//deep.test.js.map
;
"use strict";
//deep.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $.$mol_jsx("input", { value: '123' });
            $.$mol_assert_equal(dom.outerHTML, '<input value="123">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $.$mol_jsx("div", { class: 'foo bar' });
            $.$mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $.$mol_jsx("div", { style: { color: 'red' } });
            $.$mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $.$mol_jsx("div", { dataset: { foo: 'bar' } });
            $.$mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $.$mol_jsx("div", { lang: "ru", hidden: true });
            $.$mol_assert_equal(dom.outerHTML, '<div lang="ru" hidden=""></div>');
        },
        'Define child nodes'() {
            const dom = $.$mol_jsx("div", null,
                "hello",
                $.$mol_jsx("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = ({ hint }, target) => {
                return $.$mol_jsx("button", { title: hint }, target());
            };
            const dom = $.$mol_jsx(Button, { id: "/foo", hint: "click me" }, () => 'hey!');
            $.$mol_assert_equal(dom.outerHTML, '<button title="click me" id="/foo">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $.$mol_jsx("div", null,
                    $.$mol_jsx(Bar, { id: "/bar" },
                        $.$mol_jsx("img", { id: "/icon" })));
            };
            const Bar = (props, icon) => {
                return $.$mol_jsx("span", null, icon);
            };
            const dom = $.$mol_jsx(Foo, { id: "/foo" });
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo"><span id="/foo/bar"><img id="/foo/icon"></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $.$mol_jsx("div", null,
                    $.$mol_jsx("span", { id: "/bar" }),
                    $.$mol_jsx("span", { id: "/bar" }));
            };
            $.$mol_assert_fail(() => $.$mol_jsx(App, { id: "/foo" }), 'JSX already has tag with id "/bar"');
        },
    });
})($ || ($ = {}));
//jsx.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElement: (name) => $.$mol_dom_context.document.createElement(name)
    };
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if ($.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $.$mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid && $.$mol_jsx_document.getElementById(guid);
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node)
            node = $.$mol_jsx_document.createElement(Elem);
        $.$mol_dom_render_children(node, [].concat(...childNodes));
        for (const key in props) {
            if (typeof props[key] === 'string') {
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            node[key] = props[key];
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'nulls & undefineds'() {
            $.$mol_assert_ok($.$mol_compare_deep(null, null));
            $.$mol_assert_ok($.$mol_compare_deep(undefined, undefined));
            $.$mol_assert_not($.$mol_compare_deep(undefined, null));
            $.$mol_assert_not($.$mol_compare_deep({}, null));
        },
        'number'() {
            $.$mol_assert_ok($.$mol_compare_deep(1, 1));
            $.$mol_assert_ok($.$mol_compare_deep(Number.NaN, Number.NaN));
            $.$mol_assert_not($.$mol_compare_deep(1, 2));
        },
        'Number'() {
            $.$mol_assert_ok($.$mol_compare_deep(Object(1), Object(1)));
            $.$mol_assert_ok($.$mol_compare_deep(Object(Number.NaN), Object(Number.NaN)));
            $.$mol_assert_not($.$mol_compare_deep(Object(1), Object(2)));
        },
        'empty POJOs'() {
            $.$mol_assert_ok($.$mol_compare_deep({}, {}));
        },
        'different POJOs'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { b: 2 }));
        },
        'different POJOs with same keys but different values'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { a: 2 }));
        },
        'different POJOs with different keys but same values'() {
            $.$mol_assert_not($.$mol_compare_deep({}, { a: undefined }));
        },
        'Array'() {
            $.$mol_assert_ok($.$mol_compare_deep([], []));
            $.$mol_assert_ok($.$mol_compare_deep([1, [2]], [1, [2]]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2], [1, 3]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2,], [1, 3, undefined]));
        },
        'same POJO trees'() {
            $.$mol_assert_ok($.$mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
        },
        'different classes with same values'() {
            class Obj {
                constructor() {
                    this.foo = 1;
                }
            }
            const a = new Obj;
            const b = new class extends Obj {
            };
            $.$mol_assert_not($.$mol_compare_deep(a, b));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $.$mol_assert_ok($.$mol_compare_deep(a, b));
        },
        'empty Element'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", null), $.$mol_jsx("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null), $.$mol_jsx("span", null)));
        },
        'Element with attributes'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", { dir: "rtl" })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", { dir: "ltr" })));
        },
        'Element with styles'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: { color: 'red' } })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: {} })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: { color: 'blue' } })));
        },
        'Element with content'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "bar",
                $.$mol_jsx("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("hr", null))));
        },
        'Element with handlers'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { onclick: () => 1 }), $.$mol_jsx("div", { onclick: () => 1 })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { onclick: () => 1 }), $.$mol_jsx("div", { onclick: () => 2 })));
        },
        'Date'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Date(12345), new Date(12345)));
            $.$mol_assert_not($.$mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $.$mol_assert_ok($.$mol_compare_deep(/\x22/mig, /\x22/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x21/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Map'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Map, new Map));
            $.$mol_assert_ok($.$mol_compare_deep(new Map([[[1], [2]]]), new Map([[[1], [2]]])));
            $.$mol_assert_not($.$mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
        },
        'Set'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Set, new Set));
            $.$mol_assert_ok($.$mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $.$mol_assert_not($.$mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array, new Uint8Array));
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $.$mol_assert_not($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
    });
})($ || ($ = {}));
//deep.test.js.map
;
"use strict";
var $;
(function ($) {
    const a_stack = [];
    const b_stack = [];
    let cache = null;
    function $mol_compare_deep(a, b) {
        if (Object.is(a, b))
            return true;
        const a_type = typeof a;
        const b_type = typeof b;
        if (a_type !== b_type)
            return false;
        if (a_type === 'function')
            return a['toString']() === b['toString']();
        if (a_type !== 'object')
            return false;
        if (!a || !b)
            return false;
        if (a instanceof Error)
            return false;
        if (a['constructor'] !== b['constructor'])
            return false;
        if (a instanceof RegExp)
            return a.toString() === b['toString']();
        const ref = a_stack.indexOf(a);
        if (ref >= 0) {
            return Object.is(b_stack[ref], b);
        }
        if (!cache)
            cache = new WeakMap;
        let a_cache = cache.get(a);
        if (a_cache) {
            const b_cache = a_cache.get(b);
            if (typeof b_cache === 'boolean')
                return b_cache;
        }
        else {
            a_cache = new WeakMap();
            cache.set(a, a_cache);
        }
        a_stack.push(a);
        b_stack.push(b);
        let result;
        try {
            if (Symbol.iterator in a) {
                const a_iter = a[Symbol.iterator]();
                const b_iter = b[Symbol.iterator]();
                while (true) {
                    const a_next = a_iter.next();
                    const b_next = b_iter.next();
                    if (a_next.done !== b_next.done)
                        return result = false;
                    if (a_next.done)
                        break;
                    if (!$mol_compare_deep(a_next.value, b_next.value))
                        return result = false;
                }
                return result = true;
            }
            let count = 0;
            for (let key in a) {
                try {
                    if (!$mol_compare_deep(a[key], b[key]))
                        return result = false;
                }
                catch (error) {
                    $.$mol_fail_hidden(new $.$mol_error_mix(`Failed ${JSON.stringify(key)} fields comparison of ${a} and ${b}`, error));
                }
                ++count;
            }
            for (let key in b) {
                --count;
                if (count < 0)
                    return result = false;
            }
            if (a instanceof Number || a instanceof String || a instanceof Symbol || a instanceof Boolean || a instanceof Date) {
                if (!Object.is(a['valueOf'](), b['valueOf']()))
                    return result = false;
            }
            return result = true;
        }
        finally {
            a_stack.pop();
            b_stack.pop();
            if (a_stack.length === 0) {
                cache = null;
            }
            else {
                a_cache.set(b, result);
            }
        }
    }
    $.$mol_compare_deep = $mol_compare_deep;
})($ || ($ = {}));
//deep.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $.$mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $.$mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $.$mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $.$mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            $.$mol_fail = fail;
            if (typeof ErrorRight === 'string') {
                $mol_assert_equal(error.message, ErrorRight);
            }
            else {
                $mol_assert_ok(error instanceof ErrorRight);
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $.$mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $.$mol_fail(new Error(`Not equal (${i + 1}:${j + 1})\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $.$mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let [index, value] of Object.entries(tail)) {
            if (!$.$mol_compare_deep(value, head)) {
                const print = (val) => {
                    if (!val)
                        return val;
                    if (typeof val !== 'object')
                        return val;
                    if ('outerHTML' in val)
                        return val.outerHTML;
                    try {
                        return JSON.stringify(val);
                    }
                    catch (error) {
                        console.error(error);
                        return val;
                    }
                };
                return $.$mol_fail(new Error(`Not like (1:${+index + 2})\n${print(head)}\n---\n${print(value)}`));
            }
        }
    }
    $.$mol_assert_like = $mol_assert_like;
})($ || ($ = {}));
//assert.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'get'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_equal(proxy.foo, 777);
        },
        'has'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_equal('foo' in proxy, true);
        },
        'set'() {
            const target = { foo: 777 };
            const proxy = $.$mol_delegate({}, () => target);
            proxy.foo = 123;
            $.$mol_assert_equal(target.foo, 123);
        },
        'getOwnPropertyDescriptor'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_like(Object.getOwnPropertyDescriptor(proxy, 'foo'), {
                value: 777,
                writable: true,
                enumerable: true,
                configurable: true,
            });
        },
        'ownKeys'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777, [Symbol.toStringTag]: 'bar' }));
            $.$mol_assert_like(Reflect.ownKeys(proxy), ['foo', Symbol.toStringTag]);
        },
        'getPrototypeOf'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_equal(Object.getPrototypeOf(proxy), Foo.prototype);
        },
        'setPrototypeOf'() {
            class Foo {
            }
            const target = {};
            const proxy = $.$mol_delegate({}, () => target);
            Object.setPrototypeOf(proxy, Foo.prototype);
            $.$mol_assert_equal(Object.getPrototypeOf(target), Foo.prototype);
        },
        'instanceof'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_ok(proxy instanceof Foo);
            $.$mol_assert_ok(proxy instanceof $.$mol_delegate);
        },
        'autobind'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_ok(proxy instanceof Foo);
            $.$mol_assert_ok(proxy instanceof $.$mol_delegate);
        },
    });
})($ || ($ = {}));
//delegate.test.js.map
;
"use strict";
//writable.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve();
            this.cancelled = false;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mock.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_tick = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//tick.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'init with overload'() {
            class X extends $.$mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_log3_come = () => { };
        $.$mol_log3_done = () => { };
        $.$mol_log3_fail = () => { };
        $.$mol_log3_warn = () => { };
        $.$mol_log3_rise = () => { };
        $.$mol_log3_area = () => () => { };
    });
})($ || ($ = {}));
//log3.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'run callback'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $.$mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $.$mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            Plus1.last = 0;
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $.$mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $.$mol_assert_equal(Plus1.last, 2);
            $.$mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                constructor() {
                    this.level = 2;
                }
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $.$mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static pow(a) {
                    return a ** this.level;
                }
            }
            Foo.level = 2;
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $.$mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $.$mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//wrapper.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_timeout = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//timeout.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_frame = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//frame.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'objects by reference'() {
            $.$mol_assert_equal($.$mol_compare_any({}, {}), false);
        },
        'primitives by value'() {
            $.$mol_assert_equal($.$mol_compare_any('a', 'a'), true);
        },
        'NaN by value'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, Number.NaN), true);
        },
        'NaN not equal zero'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, 0), false);
        },
    });
})($ || ($ = {}));
//any.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return source when same object'() {
            const target = {};
            $.$mol_assert_equal($.$mol_conform(target, target), target);
        },
        'return target when some is not object'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(true, obj), true);
            $.$mol_assert_equal($.$mol_conform(obj, true), obj);
        },
        'return target when some is null'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(null, obj), null);
            $.$mol_assert_equal($.$mol_conform(obj, null), obj);
        },
        'return target when some is undefined'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(undefined, obj), undefined);
            $.$mol_assert_equal($.$mol_conform(obj, undefined), obj);
        },
        'return target when different keys count'() {
            const target = [1, 2, 3];
            const source = [1, 2, 3, undefined];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when array values are strong equal'() {
            const source = [1, 2, 3];
            $.$mol_assert_equal($.$mol_conform([1, 2, 3], source), source);
        },
        'return source when object values are strong equal'() {
            const source = { a: 1, b: 2 };
            $.$mol_assert_equal($.$mol_conform({ a: 1, b: 2 }, source), source);
        },
        'return target when some values are not equal'() {
            const target = [1, 2, 3];
            const source = [1, 2, 5];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when values are deep equal'() {
            const source = { foo: { bar: 1 } };
            $.$mol_assert_equal($.$mol_conform({ foo: { bar: 1 } }, source), source);
        },
        'return target with equal values from source and not equal from target'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 2 } };
            const target = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'return target when equal but with different class'() {
            const target = { '0': 1 };
            $.$mol_assert_equal($.$mol_conform(target, [1]), target);
        },
        'return target when conformer for class is not defined'() {
            const Obj = class {
            };
            const source = new Obj;
            const target = new Obj;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
        },
        'return target when has cyclic reference'() {
            const source = { foo: {} };
            source['self'] = source;
            const target = { foo: {} };
            target['self'] = target;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result['self'], target);
            $.$mol_assert_equal(result.foo, source.foo);
        },
        'return source when equal dates'() {
            const source = new Date(12345);
            const target = new Date(12345);
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return source when equal regular expressions'() {
            const source = /\x22/mig;
            const target = /\x22/mig;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return cached value if already conformed'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const target = { foo: { xxx: 2 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            target.foo.xxx = 1;
            $.$mol_assert_equal($.$mol_conform(target.foo, source.foo), target.foo);
        },
        'skip readlony fields'() {
            const source = { foo: {}, bar: {} };
            const target = { foo: {}, bar: {} };
            Object.defineProperty(target, 'bar', { value: {}, writable: false });
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'object with NaN'() {
            const source = { foo: Number.NaN };
            const target = { foo: Number.NaN };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'array with NaN'() {
            const source = [Number.NaN];
            const target = [Number.NaN];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
    });
})($ || ($ = {}));
//conform.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'trim array'() {
            const array = [undefined, null, 0, false, null, undefined, undefined];
            const correct = [undefined, null, 0, false, null];
            $.$mol_array_trim(array);
            $.$mol_assert_like(array, correct);
        }
    });
})($ || ($ = {}));
//trim.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push(async ($) => {
        await $_1.$mol_fiber_warp();
        $_1.$mol_fiber.deadline = Date.now() + 100;
    });
    $_1.$mol_test({
        'sync to async': async ($) => {
            const sum = $_1.$mol_fiber_async((a, b) => a + b);
            const res = await sum(1, 2);
            $_1.$mol_assert_equal(res, 3);
        },
    });
})($ || ($ = {}));
//fiber.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Value has js-path name'() {
            class App extends $_1.$mol_object2 {
                static get title() { return new $_1.$mol_object2; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "title", null);
            $_1.$mol_assert_equal(`${App.title}`, 'App.title');
        },
        'Simple property'() {
            class App extends $_1.$mol_object2 {
            }
            App.value = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", void 0);
            $_1.$mol_assert_equal(App.value, 1);
            App.value = 2;
            $_1.$mol_assert_equal(App.value, 2);
        },
        'Instant actualization'($) {
            class Source extends $_1.$mol_object2 {
                constructor() {
                    super(...arguments);
                    this.value = 1;
                }
                get $() { return $; }
                destructor() { }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], Source.prototype, "value", void 0);
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get source() { return Source.create(); }
                static get value() { return this.source.value + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value, 2);
            App.source.value = 2;
            $_1.$mol_assert_equal(App.value, 3);
        },
        'Access to cached value'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get value() { return 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), undefined);
            $_1.$mol_assert_equal(App.value, 1);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), 1);
        },
        'Do not recalc slaves on equal changes'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get result() { return this.first[0] + this.counter++; }
            }
            App.first = [1];
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.first = [1];
            $_1.$mol_assert_equal(App.result, 1);
        },
        'Do not recalc grand slave on equal direct slave result '($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return Math.abs(this.first); }
                static get result() { return this.second + ++this.counter; }
            }
            App.first = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = -1;
            $_1.$mol_assert_equal(App.result, 2);
        },
        'Recalc when [not changed master] changes [following master]'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() {
                    this.third = this.first;
                    return 0;
                }
                static get result() { return this.second + this.third + ++this.counter; }
            }
            App.first = 1;
            App.third = 0;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "third", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = 5;
            $_1.$mol_assert_equal(App.result, 7);
        },
        'Branch switching'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return 2; }
                static get result() {
                    return (this.condition ? this.first : this.second) + this.counter++;
                }
            }
            App.first = 1;
            App.condition = true;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 3);
            App.first = 10;
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden self invalidation'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return this.first + 1; }
                static get result() {
                    this.second;
                    return this.first++;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_fail(() => App.result);
        },
        'Side effect inside computation'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static increase() { return ++this.first; }
                static get result() {
                    return this.increase() + 1;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_fiber.method
            ], App, "increase", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden cyclic dependency'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get first() { return this.second - 1; }
                static get second() { return this.first + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            $_1.$mol_assert_fail(() => App.first);
        },
        'Forget sub fibers on complete'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static count() { return this.counter++; }
                static get result() { return this.count() + this.data; }
            }
            App.counter = 0;
            App.data = 1;
            __decorate([
                $_1.$mol_fiber.method
            ], App, "count", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "data", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.data = 2;
            $_1.$mol_assert_equal(App.result, 3);
        },
        async 'Automatic destroy owned value on self destruction'($) {
            let counter = 0;
            class Having extends $_1.$mol_object2 {
                destructor() { counter++; }
            }
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get having() { return Having.create(); }
                static get result() {
                    if (this.condition)
                        this.having;
                    return 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "having", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            App.result;
            App.condition = false;
            App.result;
            $_1.$mol_assert_equal(counter, 0);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(counter, 1);
        },
        async 'Do not destroy putted value'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get target() {
                    return this.condition ? this.source : 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "target", null);
            App.source = 1;
            $_1.$mol_assert_equal(App.target, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.target, 0);
            await $_1.$mol_fiber_warp();
            App.condition = true;
            $_1.$mol_assert_equal(App.target, 1);
        },
        'Restore after error'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get broken() {
                    if (this.condition)
                        $_1.$mol_fail(new Error('test error'));
                    return 1;
                }
                static get result() { return this.broken; }
            }
            App.condition = false;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "broken", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = true;
            $_1.$mol_assert_fail(() => App.result);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 1);
        },
        async 'auto fresh only when alive'($) {
            let state = 1;
            const monitor = new $.$mol_atom2;
            monitor.$ = $;
            monitor.calculate = () => {
                new $.$mol_after_frame($_1.$mol_atom2.current.fresh);
                return state;
            };
            $_1.$mol_assert_equal(monitor.get(), 1);
            state = 2;
            $_1.$mol_assert_equal(monitor.get(), 1);
            $.$mol_after_mock_warp();
            $_1.$mol_assert_equal(monitor.get(), 2);
            state = 3;
            $_1.$mol_assert_equal(monitor.get(), 2);
            monitor.destructor();
            $_1.$mol_assert_equal(monitor.value, undefined);
            $.$mol_after_mock_warp();
            await $.$mol_fiber_warp();
            $_1.$mol_assert_equal(monitor.value, undefined);
        },
    });
})($ || ($ = {}));
//atom2.test.js.map
;
"use strict";
//param.test.js.map
;
"use strict";
//result.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Property method'($) {
            class App extends $_1.$mol_object2 {
                static value(next = 1) { return next + 1; }
            }
            App.$ = $;
            __decorate([
                $_1.$mol_mem
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value(), 2);
            App.value(2);
            $_1.$mol_assert_equal(App.value(), 3);
        },
        'auto sync of properties'($) {
            class X extends $_1.$mol_object2 {
                foo(next) {
                    return next || 1;
                }
                bar() {
                    return this.foo() + 1;
                }
                xxx() {
                    return this.bar() + 1;
                }
            }
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "foo", null);
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "bar", null);
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "xxx", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.bar(), 2);
            $_1.$mol_assert_equal(x.xxx(), 3);
            x.foo(5);
            $_1.$mol_assert_equal(x.xxx(), 7);
        },
        async 'must be deferred destroyed when no longer referenced'($) {
            let foo;
            let foo_destroyed = false;
            class B extends $_1.$mol_object2 {
                showing(next) {
                    if (next === void 0)
                        return true;
                    return next;
                }
                foo() {
                    return foo = new class extends $_1.$mol_object {
                        destructor() {
                            foo_destroyed = true;
                        }
                    };
                }
                bar() {
                    return this.showing() ? this.foo() : null;
                }
            }
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "showing", null);
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "foo", null);
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "bar", null);
            var b = new B;
            b.$ = $;
            var bar = b.bar();
            $_1.$mol_assert_ok(bar);
            b.showing(false);
            b.bar();
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_ok(foo_destroyed);
            $_1.$mol_assert_not(b.bar());
            b.showing(true);
            $_1.$mol_defer.run();
            $_1.$mol_assert_unique(b.bar(), bar);
        },
        async 'wait for data'($) {
            class Test extends $_1.$mol_object2 {
                source() {
                    return $_1.$mol_fiber_sync(() => new Promise(done => done('Jin')))();
                }
                middle() {
                    return this.source();
                }
                target() {
                    return this.middle();
                }
            }
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "source", null);
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "middle", null);
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "target", null);
            const t = new Test;
            t.$ = $;
            $_1.$mol_assert_fail(() => t.target().valueOf(), Promise);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(t.target(), 'Jin');
        },
    });
})($ || ($ = {}));
//mem.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'number'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
            dict.set(123, 321);
            $.$mol_assert_equal(dict.get(123), 321);
            $.$mol_assert_equal(dict.has(123), true);
            dict.delete(123);
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
        },
        'pojo as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
            dict.set({ foo: 123 }, 321);
            $.$mol_assert_equal(dict.get({ foo: 123 }), 321);
            $.$mol_assert_equal(dict.has({ foo: 123 }), true);
            dict.delete({ foo: 123 });
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
        },
        'array as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
            dict.set([123], 321);
            $.$mol_assert_equal(dict.get([123]), 321);
            $.$mol_assert_equal(dict.has([123]), true);
            dict.delete([123]);
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
        },
        'html element as key'() {
            const el = $.$mol_jsx("div", null);
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
            dict.set(el, 321);
            $.$mol_assert_equal(dict.get(el), 321);
            $.$mol_assert_equal(dict.has(el), true);
            $.$mol_assert_equal(dict.get($.$mol_jsx("div", null)), undefined);
            $.$mol_assert_equal(dict.has($.$mol_jsx("div", null)), false);
            dict.delete(el);
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
        },
        'for-of key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            for (const [key, val] of dict) {
                keys.push(key);
                vals.push(val);
            }
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
        'forEach key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            dict.forEach((val, key) => {
                keys.push(key);
                vals.push(val);
            });
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
    });
})($ || ($ = {}));
//dict.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'keyed reactive properties'($) {
            $_1.$mol_fiber_warp();
            class Fib extends $_1.$mol_object2 {
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            Fib.$ = $;
            __decorate([
                $_1.$mol_mem_key
            ], Fib, "value", null);
            $_1.$mol_assert_equal(Fib.value(10), 89);
            Fib.value(1, 2);
            $_1.$mol_assert_equal(Fib.value(10), 144);
        },
        'cached property with simple key'($) {
            class X extends $_1.$mol_object2 {
                foo(id, next) {
                    if (next == null)
                        return new Number(123);
                    return new Number(next);
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 123);
            $_1.$mol_assert_equal(x.foo(0), x.foo(0));
            $_1.$mol_assert_unique(x.foo(0), x.foo(1));
            x.foo(0, 321);
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 321);
            x.foo(0, null);
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 123);
        },
        'cached property with complex key'($) {
            class X extends $_1.$mol_object2 {
                foo(ids) {
                    return Math.random();
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.foo([0, 1]), x.foo([0, 1]));
            $_1.$mol_assert_unique(x.foo([0, 1]), x.foo([0, 2]));
        },
    });
})($ || ($ = {}));
//key.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value'() {
            const foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_field(proto, name, descr) {
        if (!descr)
            descr = Object.getOwnPropertyDescriptor(proto, name);
        const get = descr ? (descr.get || $.$mol_const(descr.value)) : (() => undefined);
        const set = descr && descr.set || function (next) { get_cache(this).put(next); };
        const store = new WeakMap();
        Object.defineProperty(proto, name + "@", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.calculate = get.bind(host);
                cache[Symbol.toStringTag] = `${host}.${name}`;
                cache.abort = () => {
                    store.delete(host);
                    cache.forget();
                    return true;
                };
                $.$mol_owning_catch(host, cache);
                store.set(host, cache);
            }
            return cache;
        };
        return {
            get() {
                return get_cache(this).get();
            },
            set,
        };
    }
    $.$mol_atom2_field = $mol_atom2_field;
})($ || ($ = {}));
//field.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        async 'Autorun'($) {
            class App extends $_1.$mol_object2 {
                static get init() {
                    ++this.counter;
                    return this.state;
                }
            }
            App.$ = $;
            App.state = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "state", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "init", null);
            const autorun = $_1.$mol_atom2_autorun(() => App.init);
            autorun.$ = $;
            try {
                await $_1.$mol_fiber_warp();
                $_1.$mol_assert_equal(App.counter, 1);
                App.state = 2;
                $_1.$mol_assert_equal(App.counter, 1);
                await $_1.$mol_fiber_warp();
                $_1.$mol_assert_equal(App.counter, 2);
                App.state = 3;
            }
            finally {
                autorun.destructor();
            }
            App.state = 4;
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(App.counter, 2);
        },
    });
})($ || ($ = {}));
//autorun.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'memoize field'() {
            class Foo {
                static get two() {
                    return ++this.one;
                }
                static set two(next) { }
            }
            Foo.one = 1;
            __decorate([
                $.$mol_memo.field
            ], Foo, "two", null);
            $.$mol_assert_equal(Foo.two, 2);
            $.$mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $.$mol_assert_equal(Foo.two, 3);
            $.$mol_assert_equal(Foo.two, 3);
        },
    });
})($ || ($ = {}));
//memo.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'FQN of anon function'($) {
            const $$ = Object.assign($, { $mol_func_name_test: (() => () => { })() });
            $_1.$mol_assert_equal($$.$mol_func_name_test.name, '');
            $_1.$mol_assert_equal($$.$mol_func_name($$.$mol_func_name_test), '$mol_func_name_test');
            $_1.$mol_assert_equal($$.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));
//name.test.js.map
;
"use strict";
//extract.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'id auto generation'($) {
            class $mol_view_test_item extends $_1.$mol_view {
            }
            class $mol_view_test_block extends $_1.$mol_view {
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            $mol_view_test_block.$ = $;
            __decorate([
                $_1.$mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $_1.$mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $_1.$mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'($) {
            var x = new class extends $_1.$mol_view {
            };
            x.$ = $;
            $_1.$mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'($) {
            class $mol_view_test extends $_1.$mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'($) {
            class $mol_view_test_item extends $_1.$mol_view {
            }
            class $mol_view_test_block extends $_1.$mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            x.$ = $;
            $_1.$mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $_1.$mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'($) {
            class $mol_view_test extends $_1.$mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.getAttribute('href'), '#haha');
            $_1.$mol_assert_equal(node.getAttribute('required'), 'true');
            $_1.$mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'($) {
            class $mol_view_test extends $_1.$mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'($) {
            var clicked = false;
            class $mol_view_test extends $_1.$mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_node();
            node.click();
            $_1.$mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_sheet_test1 extends $.$mol_view {
        Item() { return new $.$mol_view; }
    }
    $.$mol_style_sheet_test1 = $mol_style_sheet_test1;
    class $mol_style_sheet_test2 extends $.$mol_view {
        List() { return new $mol_style_sheet_test1; }
    }
    $.$mol_style_sheet_test2 = $mol_style_sheet_test2;
    $.$mol_test({
        'component block styles'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                display: 'block',
                zIndex: 1,
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tdisplay: block;\n\tz-index: 1;\n}\n');
        },
        'various units'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px, per } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                width: per(50),
                height: px(50),
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: 50%;\n\theight: 50px;\n}\n');
        },
        'various functions'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { calc } = $.$mol_style_func;
            const { px, per } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                width: calc(`${per(100)} - ${px(1)}`),
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: calc(100% - 1px);\n}\n');
        },
        'property groups'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                flex: {
                    grow: 5
                }
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tflex-grow: 5;\n}\n');
        },
        'property shorthand'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                padding: [px(5), 'auto']
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tpadding: 5px auto;\n}\n');
        },
        'sequenced values'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { url } = $.$mol_style_func;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                background: {
                    image: [[url('foo')], [url('bar')]],
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbackground-image: url("foo"),url("bar");\n}\n');
        },
        'sequenced structs'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { rem } = $.$mol_style_unit;
            const { hsla } = $.$mol_style_func;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                box: {
                    shadow: [
                        {
                            inset: true,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'red',
                        },
                        {
                            inset: false,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'blue',
                        },
                    ],
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbox-shadow: inset 0 0 0.5rem 0 red,0 0 0.5rem 0 blue;\n}\n');
        },
        'component block styles with pseudo class'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                ':focus': {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test]:focus {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with pseudo element'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '::first-line': {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test]::first-line {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with media query'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@media': {
                    'print': {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '@media print {\n[mol_style_sheet_test] {\n\tcolor: red;\n\tdisplay: block;\n}\n}\n');
        },
        'component block styles with attribute value'() {
            class $mol_style_sheet_test extends $.$mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            color: 'red',
                            display: 'block',
                        },
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test][mol_theme="$mol_theme_dark"] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles'() {
            class $mol_style_sheet_test extends $.$mol_view {
                Item() { return new $.$mol_view; }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                Item: {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element of element styles'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                List: {
                    Item: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2_list_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles with block attribute value'() {
            class $mol_style_sheet_test extends $.$mol_view {
                Item() { return new $.$mol_view; }
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            Item: {
                                color: 'red',
                            },
                        },
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test][mol_theme="$mol_theme_dark"] [mol_style_sheet_test_item] {\n\tcolor: red;\n}\n');
        },
        'inner component styles by class'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                $mol_style_sheet_test1: {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2] [mol_style_sheet_test1] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'child component styles by class'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                '>': {
                    $mol_style_sheet_test1: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2] > [mol_style_sheet_test1] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
    });
})($ || ($ = {}));
//sheet.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'null by default'() {
            const key = String(Math.random());
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $.$mol_state_session.value(key, '$mol_state_session_test');
            $.$mol_assert_equal($.$mol_state_session.value(key), '$mol_state_session_test');
            $.$mol_state_session.value(key, null);
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//session.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'equal paths'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2, 3, 4],
                suffix: [[], [], []],
            });
        },
        'different suffix'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 5, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [3, 5], [5, 4]],
            });
        },
        'one contains other'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2], [1, 2, 3]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [], [3]],
            });
        },
        'fully different'() {
            const diff = $.$mol_diff_path([1, 2], [3, 4], [5, 6]);
            $.$mol_assert_like(diff, {
                prefix: [],
                suffix: [[1, 2], [3, 4], [5, 6]],
            });
        },
    });
})($ || ($ = {}));
//path.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is number'() {
            $.$mol_data_number(0);
        },
        'Is not number'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_number('x');
            }, 'x is not a number');
        },
        'Is object number'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_number(new Number(''));
            }, '0 is not a number');
        },
    });
})($ || ($ = {}));
//number.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is string'() {
            $.$mol_data_string('');
        },
        'Is not string'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_string(0);
            }, '0 is not a string');
        },
        'Is object string'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_string(new String('x'));
            }, 'x is not a string');
        },
    });
})($ || ($ = {}));
//string.test.js.map
;
"use strict";
//equals.test.js.map
;
"use strict";
//merge.test.js.map
;
"use strict";
//undefined.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'config by value'() {
            const N = $.$mol_data_setup((a) => a, 5);
            $.$mol_assert_equal(N.config, 5);
        },
    });
})($ || ($ = {}));
//setup.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Fit to record'() {
            const User = $.$mol_data_record({ age: $.$mol_data_number });
            User({ age: 0 });
        },
        'Extends record'() {
            const User = $.$mol_data_record({ age: $.$mol_data_number });
            User({ age: 0, name: 'Jin' });
        },
        'Shrinks record'() {
            $.$mol_assert_fail(() => {
                const User = $.$mol_data_record({ age: $.$mol_data_number, name: $.$mol_data_string });
                User({ age: 0 });
            }, '["name"] undefined is not a string');
        },
        'Shrinks deep record'() {
            $.$mol_assert_fail(() => {
                const User = $.$mol_data_record({ wife: $.$mol_data_record({ age: $.$mol_data_number }) });
                User({ wife: {} });
            }, '["wife"] ["age"] undefined is not a number');
        },
    });
})($ || ($ = {}));
//record.test.js.map
;
"use strict";
//tail.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'function'() {
            $.$mol_assert_not($.$mol_func_is_class(function () { }));
        },
        'generator'() {
            $.$mol_assert_not($.$mol_func_is_class(function* () { }));
        },
        'async'() {
            $.$mol_assert_not($.$mol_func_is_class(async function () { }));
        },
        'arrow'() {
            $.$mol_assert_not($.$mol_func_is_class(() => null));
        },
        'named class'() {
            $.$mol_assert_ok($.$mol_func_is_class(class Foo {
            }));
        },
        'unnamed class'() {
            $.$mol_assert_ok($.$mol_func_is_class(class {
            }));
        },
    });
})($ || ($ = {}));
//class.test.js.map
;
"use strict";
//foot.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'single function'() {
            const stringify = $.$mol_data_pipe((input) => input.toString());
            $.$mol_assert_equal(stringify(5), '5');
        },
        'two functions'() {
            const isLong = $.$mol_data_pipe((input) => input.toString(), (input) => input.length > 2);
            $.$mol_assert_equal(isLong(5.0), false);
            $.$mol_assert_equal(isLong(5.1), true);
        },
        'three functions'() {
            const pattern = $.$mol_data_pipe((input) => input.toString(), (input) => new RegExp(input), (input) => input.toString());
            $.$mol_assert_equal(pattern(5), '/5/');
        },
        'classes'() {
            class Box {
                constructor(value) {
                    this.value = value;
                }
            }
            const boxify = $.$mol_data_pipe((input) => input.toString(), Box);
            $.$mol_assert_like(boxify(5), new Box('5'));
        },
    });
})($ || ($ = {}));
//pipe.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'parse and serial'() {
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1Y').toString(), 'P42.1YT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1M').toString(), 'P42.1MT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1D').toString(), 'P42.1DT');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1h').toString(), 'PT42.1H');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1m').toString(), 'PT42.1M');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1s').toString(), 'PT42.1S');
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6.7s').toString(), 'P1Y2M3DT4H5M6.7S');
        },
        'format typed'() {
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6s').toString('P#Y#M#DT#h#m#s'), 'P1Y2M3DT4H5M6S');
        },
    });
})($ || ($ = {}));
//duration.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'parse and serial'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014').toString(), '2014');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').toString(), '2014-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').toString(), '2014-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03').toString(), '2014-01-02T03');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04').toString(), '2014-01-02T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05').toString(), '2014-01-02T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006').toString(), '2014-01-02T03:04:05.006');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006Z').toString(), '2014-01-02T03:04:05.006+00:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006+07:00').toString(), '2014-01-02T03:04:05.006+07:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05+07:08').toString(), '2014-01-02T03:04:05+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04+07:08').toString(), '2014-01-02T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04+07:08').toString(), 'T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04:05').toString(), 'T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04').toString(), 'T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('T03').toString(), 'T03');
        },
        'format simple'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000000').toString('AD YY-M-D h:m:s'), '21 14-1-2 1:2:3');
        },
        'format padded'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('YYYY-MM-DD hh:mm:ss'), '2014-01-02 01:02:03');
        },
        'format time zone'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03+05:00').toString('Z'), '+05:00');
        },
        'format names'() {
            $.$mol_assert_ok(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('Month Mon | WeekDay WD'));
        },
        'shifting'() {
            $.$mol_assert_equal(new $.$mol_time_moment('T15:54:58.243+03:00').shift({}).toString(), 'T15:54:58.243+03:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P1Y').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P12M').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P365D').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('PT8760h').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT8760h').toString(), '2015-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT-8760h').toString(), '2013-01');
        },
        'normalization'() {
            $.$mol_assert_equal(new $.$mol_time_moment({ year: 2015, month: 6, day: 34 }).normal.toString(), '2015-08-04');
        },
        'iso week day'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2017-09-17').weekday, $.$mol_time_moment_weekdays.sunday);
            $.$mol_assert_equal(new $.$mol_time_moment('2017-09-18').weekday, $.$mol_time_moment_weekdays.monday);
        },
        'change offset'() {
            $.$mol_assert_equal(new $.$mol_time_moment('2021-04-10 +03:00').toOffset('Z').toString(), '2021-04-09T21:00:00+00:00');
        }
    });
})($ || ($ = {}));
//moment.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is empty array'() {
            $.$mol_data_array($.$mol_data_number)([]);
        },
        'Is array'() {
            $.$mol_data_array($.$mol_data_number)([1, 2]);
        },
        'Is not array'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_array($.$mol_data_number)({ [0]: 1, length: 1, map: () => { } });
            }, '[object Object] is not an array');
        },
        'Has wrong item'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_array($.$mol_data_number)([1, '1']);
            }, '[1] 1 is not a number');
        },
        'Has wrong deep item'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_array($.$mol_data_array($.$mol_data_number))([[], [0, 0, false]]);
            }, '[1] [2] false is not a number');
        },
    });
})($ || ($ = {}));
//array.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $.$mol_state_local {
            static value(key, next = this.state[key], force) {
                return this.state[key] = (next || null);
            }
        }
        $mol_state_local_mock.state = {};
        __decorate([
            $.$mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//local.mock.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
            $.$mol_state_local.value(key, 123);
            $.$mol_assert_equal($.$mol_state_local.value(key), 123);
            $.$mol_state_local.value(key, null);
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//local.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is null'() {
            $.$mol_data_nullable($.$mol_data_number)(null);
        },
        'Is not null'() {
            $.$mol_data_nullable($.$mol_data_number)(0);
        },
        'Is undefined'() {
            $.$mol_assert_fail(() => {
                const Type = $.$mol_data_nullable($.$mol_data_number);
                Type(undefined);
            }, 'undefined is not a number');
        },
    });
})($ || ($ = {}));
//nullable.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is boolean - true'() {
            $.$mol_data_boolean(true);
        },
        'Is boolean - false'() {
            $.$mol_data_boolean(false);
        },
        'Is not boolean'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_boolean('x');
            }, 'x is not a boolean');
        },
        'Is object boolean'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_boolean(new Boolean(''));
            }, 'false is not a boolean');
        },
    });
})($ || ($ = {}));
//boolean.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Is integer'() {
            $.$mol_data_integer(0);
        },
        'Is float'() {
            $.$mol_assert_fail(() => {
                $.$mol_data_integer(1.1);
            }, '1.1 is not an integer');
        },
    });
})($ || ($ = {}));
//integer.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'decode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $.$mol_assert_equal($.$mol_charset_decode(encoded), str);
            $.$mol_assert_equal($.$mol_charset_decode(encoded, 'utf8'), str);
        },
        'decode empty string'() {
            const encoded = new Uint8Array([]);
            $.$mol_assert_equal($.$mol_charset_decode(encoded), '');
        },
    });
})($ || ($ = {}));
//decode.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'encode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $.$mol_assert_like($.$mol_charset_encode(str), encoded);
        },
    });
})($ || ($ = {}));
//encode.test.js.map
;
"use strict";
var $;
(function ($) {
    class TestClass extends Uint8Array {
    }
    $.$mol_test({
        'Uint8Array vs itself'() {
            $.$mol_assert_ok($.$mol_compare_array(new Uint8Array, new Uint8Array));
            $.$mol_assert_ok($.$mol_compare_array(new Uint8Array([0]), new Uint8Array([0])));
            $.$mol_assert_not($.$mol_compare_array(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Uint8Array vs subclassed array'() {
            $.$mol_assert_not($.$mol_compare_array(new Uint8Array, new TestClass));
        },
    });
})($ || ($ = {}));
//array.test.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $_1.$mol_test({
            'handle clicks by default'($) {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    $,
                    event_click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $_1.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $_1.$mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'($) {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    $,
                    event_click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $_1.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $_1.$mol_assert_not(clicked);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//button.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'all cases of using maybe'() {
            $.$mol_assert_equal($.$mol_maybe(0)[0], 0);
            $.$mol_assert_equal($.$mol_maybe(false)[0], false);
            $.$mol_assert_equal($.$mol_maybe(null)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//maybe.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_work = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//work.test.js.map
;
"use strict";
//intersect.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'escape'() {
            const specials = $.$mol_regexp.from('.*+?^${}()|[]\\');
            $.$mol_assert_equal(specials.source, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
        },
        'char code'() {
            const space = $.$mol_regexp.from(32);
            $.$mol_assert_like(' '.match(space), [' ']);
        },
        'repeat fixed'() {
            const { repeat, decimal_only: digit } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            $.$mol_assert_like('#2020#'.match(year), ['2020']);
        },
        'greedy repeat'() {
            const { repeat, repeat_greedy, latin_only: letter } = $.$mol_regexp;
            $.$mol_assert_like('abc'.match(repeat(letter, 1, 2)), ['a', 'b', 'c']);
            $.$mol_assert_like('abc'.match(repeat_greedy(letter, 1, 2)), ['ab', 'c']);
        },
        'repeat range'() {
            const { repeat_greedy, decimal_only: digit } = $.$mol_regexp;
            const year = repeat_greedy(digit, 2, 4);
            $.$mol_assert_like('#2#'.match(year), null);
            $.$mol_assert_like('#20#'.match(year), ['20']);
            $.$mol_assert_like('#2020#'.match(year), ['2020']);
            $.$mol_assert_like('#20201#'.match(year), ['2020']);
        },
        'repeat from'() {
            const { repeat_greedy, latin_only: letter } = $.$mol_regexp;
            const name = repeat_greedy(letter, 2);
            $.$mol_assert_like('##'.match(name), null);
            $.$mol_assert_like('#a#'.match(name), null);
            $.$mol_assert_like('#ab#'.match(name), ['ab']);
            $.$mol_assert_like('#abc#'.match(name), ['abc']);
        },
        'from string'() {
            const regexp = $.$mol_regexp.from('[\\d]');
            $.$mol_assert_equal(regexp.source, '\\[\\\\d\\]');
            $.$mol_assert_equal(regexp.flags, 'gsu');
        },
        'from regexp'() {
            const regexp = $.$mol_regexp.from(/[\d]/i);
            $.$mol_assert_equal(regexp.source, '[\\d]');
            $.$mol_assert_equal(regexp.flags, 'i');
        },
        'case ignoring'() {
            const xxx = $.$mol_regexp.from('x', { ignoreCase: true });
            $.$mol_assert_like(xxx.flags, 'gisu');
            $.$mol_assert_like(xxx.exec('xx')[0], 'x');
            $.$mol_assert_like(xxx.exec('XX')[0], 'X');
        },
        'multiline mode'() {
            const { end, from } = $.$mol_regexp;
            const xxx = from(['x', end], { multiline: true });
            $.$mol_assert_like(xxx.exec('x\ny')[0], 'x');
            $.$mol_assert_like(xxx.flags, 'gmsu');
        },
        'flags override'() {
            const triplet = $.$mol_regexp.from($.$mol_regexp.from(/.../, { ignoreCase: true }), { multiline: true });
            $.$mol_assert_like(triplet.toString(), '/.../gmsu');
        },
        'sequence'() {
            const { begin, end, decimal_only: digit, repeat, from } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const date = from([begin, year, dash, month, dash, day, end]);
            $.$mol_assert_like(date.exec('2020-01-02')[0], '2020-01-02');
        },
        'optional'() {
            const name = $.$mol_regexp.from(['A', ['4']]);
            $.$mol_assert_equal('AB'.match(name)[0], 'A');
            $.$mol_assert_equal('A4'.match(name)[0], 'A4');
        },
        'only groups'() {
            const regexp = $.$mol_regexp.from({ dog: '@' });
            $.$mol_assert_like([...'#'.matchAll(regexp)][0].groups, undefined);
            $.$mol_assert_like([...'@'.matchAll(regexp)][0].groups, { dog: '@' });
        },
        'catch skipped'() {
            const regexp = $.$mol_regexp.from(/(@)(\d?)/g);
            $.$mol_assert_like([...'[[@]]'.matchAll(regexp)].map(f => [...f]), [
                ['[['],
                ['@', '@', ''],
                [']]'],
            ]);
        },
        'enum variants'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $.$mol_regexp.from(Sex);
            $.$mol_assert_like([...''.matchAll(sexism)].length, 0);
            $.$mol_assert_like([...'trans'.matchAll(sexism)][0].groups, undefined);
            $.$mol_assert_like([...'male'.matchAll(sexism)][0].groups, { male: 'male', female: '' });
            $.$mol_assert_like([...'female'.matchAll(sexism)][0].groups, { male: '', female: 'female' });
        },
        'recursive only groups'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $.$mol_regexp.from({ Sex });
            $.$mol_assert_like([...''.matchAll(sexism)].length, 0);
            $.$mol_assert_like([...'male'.matchAll(sexism)][0].groups, { Sex: 'male', male: 'male', female: '' });
            $.$mol_assert_like([...'female'.matchAll(sexism)][0].groups, { Sex: 'female', male: '', female: 'female' });
        },
        'sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([begin, { year }, dash, { month }, dash, { day }, end]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $.$mol_assert_like(found[0].groups, {
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'sequence with groups of mixed type'() {
            const prefix = '/';
            const postfix = '/';
            const regexp = $.$mol_regexp.from([{ prefix }, /(\w+)/, { postfix }, /([gumi]*)/]);
            $.$mol_assert_like([...'/foo/mi'.matchAll(regexp)], [
                Object.assign(["/foo/mi", "/", "foo", "/", "mi"], {
                    groups: {
                        prefix: '/',
                        postfix: '/',
                    },
                    index: 0,
                    input: "/",
                }),
            ]);
        },
        'recursive sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([
                begin, { date: [{ year }, dash, { month }] }, dash, { day }, end
            ]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $.$mol_assert_like(found[0].groups, {
                date: '2020-01',
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'parse multiple'() {
            const { decimal_only: digit, from } = $.$mol_regexp;
            const regexp = from({ digit });
            $.$mol_assert_like([...'123'.matchAll(regexp)].map(f => f.groups), [
                { digit: '1' },
                { digit: '2' },
                { digit: '3' },
            ]);
        },
        'variants'() {
            const { begin, or, end, from } = $.$mol_regexp;
            const sexism = from([
                begin, 'sex = ', { sex: ['male', or, 'female'] }, end
            ]);
            $.$mol_assert_like([...'sex = male'.matchAll(sexism)][0].groups, { sex: 'male' });
            $.$mol_assert_like([...'sex = female'.matchAll(sexism)][0].groups, { sex: 'female' });
            $.$mol_assert_like([...'sex = malefemale'.matchAll(sexism)][0].groups, undefined);
        },
        'force after'() {
            const { latin_only: letter, force_after, from } = $.$mol_regexp;
            const regexp = from([letter, force_after('.')]);
            $.$mol_assert_like('x.'.match(regexp), ['x']);
            $.$mol_assert_like('x,'.match(regexp), null);
        },
        'forbid after'() {
            const { latin_only: letter, forbid_after, from } = $.$mol_regexp;
            const regexp = from([letter, forbid_after('.')]);
            $.$mol_assert_like('x.'.match(regexp), null);
            $.$mol_assert_like('x,'.match(regexp), ['x']);
        },
        'char except'() {
            const { char_except, latin_only, tab } = $.$mol_regexp;
            const name = char_except(latin_only, tab);
            $.$mol_assert_like('a'.match(name), null);
            $.$mol_assert_like('\t'.match(name), null);
            $.$mol_assert_like('('.match(name), ['(']);
        },
        'unicode only'() {
            const { unicode_only, from } = $.$mol_regexp;
            const name = from([
                unicode_only('Script', 'Cyrillic'),
                unicode_only('Hex_Digit'),
            ]);
            $.$mol_assert_like('FF'.match(name), null);
            $.$mol_assert_like('ФG'.match(name), null);
            $.$mol_assert_like('ФF'.match(name), ['ФF']);
        },
        'generate by optional with inner group'() {
            const { begin, end, from } = $.$mol_regexp;
            const animals = from([begin, '#', ['^', { dog: '@' }], end]);
            $.$mol_assert_equal(animals.generate({}), '#');
            $.$mol_assert_equal(animals.generate({ dog: false }), '#');
            $.$mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $.$mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'generate by optional with inner group with variants'() {
            const { begin, end, from } = $.$mol_regexp;
            const animals = from([begin, '#', ['^', { animal: { dog: '@', fox: '&' } }], end]);
            $.$mol_assert_equal(animals.generate({}), '#');
            $.$mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $.$mol_assert_equal(animals.generate({ fox: true }), '#^&');
            $.$mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'complex example'() {
            const { begin, end, char_only, char_range, latin_only, slash_back, repeat_greedy, from, } = $.$mol_regexp;
            const atom_char = char_only(latin_only, "!#$%&'*+/=?^`{|}~-");
            const atom = repeat_greedy(atom_char, 1);
            const dot_atom = from([atom, repeat_greedy(['.', atom])]);
            const name_letter = char_only(char_range(0x01, 0x08), 0x0b, 0x0c, char_range(0x0e, 0x1f), 0x21, char_range(0x23, 0x5b), char_range(0x5d, 0x7f));
            const quoted_pair = from([
                slash_back,
                char_only(char_range(0x01, 0x09), 0x0b, 0x0c, char_range(0x0e, 0x7f))
            ]);
            const name = repeat_greedy({ name_letter, quoted_pair });
            const quoted_name = from(['"', { name }, '"']);
            const local_part = from({ dot_atom, quoted_name });
            const domain = dot_atom;
            const mail = from([begin, local_part, '@', { domain }, end]);
            $.$mol_assert_equal('foo..bar@example.org'.match(mail), null);
            $.$mol_assert_equal('foo..bar"@example.org'.match(mail), null);
            $.$mol_assert_like([...'foo.bar@example.org'.matchAll(mail)][0].groups, {
                domain: "example.org",
                dot_atom: "foo.bar",
                name: "",
                name_letter: "",
                quoted_name: "",
                quoted_pair: "",
            });
            $.$mol_assert_like([...'"foo..bar"@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "",
                quoted_name: '"foo..bar"',
                name: "foo..bar",
                name_letter: "r",
                quoted_pair: "",
                domain: "example.org",
            });
            $.$mol_assert_equal(mail.generate({ dot_atom: 'foo.bar', domain: 'example.org' }), 'foo.bar@example.org');
            $.$mol_assert_equal(mail.generate({ name: 'foo..bar', domain: 'example.org' }), '"foo..bar"@example.org');
            $.$mol_assert_fail(() => mail.generate({ dot_atom: 'foo..bar', domain: 'example.org' }), 'Wrong param: dot_atom=foo..bar');
        },
    });
})($ || ($ = {}));
//regexp.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        '$mol_syntax2_md_flow'() {
            const check = (input, right) => {
                const tokens = [];
                $.$mol_syntax2_md_flow.tokenize(input, (...token) => tokens.push(token));
                $.$mol_assert_like(JSON.stringify(tokens), JSON.stringify(right));
            };
            check('Hello,\nWorld..\r\n\r\n\nof Love!', [
                ['block', 'Hello,\nWorld..\r\n\r\n\n', ['Hello,\nWorld..', '\r\n\r\n\n'], 0],
                ['block', 'of Love!', ['of Love!', ''], 19],
            ]);
            check('# Header1\n\nHello!\n\n## Header2', [
                ['header', '# Header1\n\n', ['#', ' ', 'Header1', '\n\n'], 0],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 11],
                ['header', '## Header2', ['##', ' ', 'Header2', ''], 19],
            ]);
            check('```\nstart()\n```\n\n```js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```', [
                ['code', '```\nstart()\n```\n\n', ['```', '', 'start()\n', '```', '\n\n'], 0],
                ['code', '```js\nrestart()\n```\n\n', ['```', 'js', 'restart()\n', '```', '\n\n'], 17],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 38],
                ['code', '```\nstop()\n```', ['```', '', 'stop()\n', '```', ''], 46],
            ]);
            check('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n', [
                ['table', '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n', ['| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n', '\n'], 0],
                ['table', '| Cell11 | Cell12\n| Cell21 | Cell22\n', ['| Cell11 | Cell12\n| Cell21 | Cell22\n', ''], 68],
            ]);
        },
    });
})($ || ($ = {}));
//md.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'tree parsing'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\nbar\n").sub.length, 2);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\nbar\n").sub[1].type, "bar");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\n\n\n").sub.length, 1);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("=foo\n\\bar\n").sub.length, 2);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("=foo\n\\bar\n").sub[1].data, "bar");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo bar \\pol").sub[0].sub[0].sub[0].data, "pol");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo bar\n\t\\pol\n\t\\men").sub[0].sub[0].sub[1].data, "men");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'inserting'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, 'a', 'b', 'c').toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, 'a', 'b', 'c', 'd').toString(), 'a b c \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, 0, 0, 0).toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, 0, 0, 0, 0).toString(), 'a b \\\n\t\\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, null, null, null).toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, null, null, null, null).toString(), 'a b \\\n\t\\\n');
        },
        'fromJSON'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([]).toString(), '/\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
        'toJSON'() {
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n').sub[0]), '[]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\tfalse\n\ttrue\n').sub[0]), '[false,true]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\t0\n\t1\n\t2.3\n').sub[0]), '[0,1,2.3]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n').sub[0]), '["","foo","bar\\nbaz"]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n').sub[0]), '{"foo":false,"bar\\nbaz":"lol"}');
        },
        'hack'() {
            const res = $_1.$mol_tree.fromString(`foo bar xxx`).hack({
                '': (tree, context) => [tree.hack(context)],
                'bar': (tree, context) => [tree.hack(context).clone({ type: '777' })],
            });
            $_1.$mol_assert_equal(res.toString(), new $_1.$mol_tree({ type: 'foo 777 xxx' }).toString());
        },
        'errors handling'($) {
            const errors = [];
            class Tree extends $_1.$mol_tree {
            }
            Tree.$ = $.$mol_ambient({
                $mol_fail: error => errors.push(error.message)
            });
            Tree.fromString(`
				\t \tfoo
				bar \\data
			`, 'test');
            $_1.$mol_assert_like(errors, ['Syntax error at test:2\n \tfoo']);
        },
    });
})($ || ($ = {}));
//tree.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Attach to document'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            $.$mol_jsx_attach(doc, () => $.$mol_jsx("body", { id: "/foo" }, "bar"));
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//attach.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_attach(next, action) {
        const prev = $.$mol_jsx_document;
        try {
            $.$mol_jsx_document = next;
            return action();
        }
        finally {
            $.$mol_jsx_document = prev;
        }
    }
    $.$mol_jsx_attach = $mol_jsx_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Class as component'() {
            class Foo extends $_1.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.title = '';
                }
                render() {
                    return $_1.$mol_jsx("div", null,
                        this.title,
                        " ",
                        this.childNodes.join('-'));
                }
            }
            const dom = $_1.$mol_jsx(Foo, { id: "/foo", title: "bar" },
                "xxx",
                123);
            $_1.$mol_assert_equal(dom.outerHTML, '<div id="/foo">bar xxx-123</div>');
        },
        'View by element'() {
            class Br extends $_1.$mol_jsx_view {
                render() {
                    view = this;
                    return $_1.$mol_jsx("br", { id: "/foo" });
                }
            }
            let view;
            $_1.$mol_assert_equal(Br.of($_1.$mol_jsx(Br, null)), view);
        },
        'Attached view rerender'() {
            const doc = $_1.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Title extends $_1.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.value = 'foo';
                }
                render() {
                    return $_1.$mol_jsx("div", null, this.value);
                }
            }
            const dom = $_1.$mol_jsx_attach(doc, () => $_1.$mol_jsx(Title, { id: "/foo" }));
            const title = Title.of(dom);
            $_1.$mol_assert_equal(title.ownerDocument, doc);
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            title.value = 'bar';
            title.valueOf();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
        async 'Reactive attached view'($) {
            const doc = $_1.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Task extends $_1.$mol_object2 {
                title(next) { return next || 'foo'; }
            }
            __decorate([
                $_1.$mol_mem
            ], Task.prototype, "title", null);
            class App extends $_1.$mol_jsx_view {
                task() { return new Task; }
                valueOf() {
                    return super.valueOf();
                }
                render() {
                    return $_1.$mol_jsx("div", null, this.task().title());
                }
            }
            __decorate([
                $_1.$mol_mem
            ], App.prototype, "task", null);
            __decorate([
                $_1.$mol_mem
            ], App.prototype, "valueOf", null);
            const task = new Task;
            task.$ = $;
            const autorun = $.$mol_atom2_autorun(() => $_1.$mol_jsx_attach(doc, () => $_1.$mol_jsx(App, { "$": $, id: "/foo", task: () => task })));
            autorun.$ = $;
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            task.title('bar');
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_jsx_view extends $.$mol_object2 {
        static of(node) {
            return node[this];
        }
        valueOf() {
            const prefix = $.$mol_jsx_prefix;
            const booked = $.$mol_jsx_booked;
            const document = $.$mol_jsx_document;
            try {
                $.$mol_jsx_prefix = this[Symbol.toStringTag];
                $.$mol_jsx_booked = new Set;
                $.$mol_jsx_document = this.ownerDocument;
                return this.render();
            }
            finally {
                $.$mol_jsx_prefix = prefix;
                $.$mol_jsx_booked = booked;
                $.$mol_jsx_document = document;
            }
        }
        render() {
            return $.$mol_fail(new Error('dom_tree() not implemented'));
        }
    }
    Symbol.toStringTag;
    $.$mol_jsx_view = $mol_jsx_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $_1.$mol_test({
            'simple props'($) {
                const app = $_1.$mol_view_tree_test_simple.make({ $ });
                $_1.$mol_assert_equal(app.some(), 1);
                $_1.$mol_assert_equal(app.bool(), true);
                $_1.$mol_assert_equal(app.str(), 'test');
                $_1.$mol_assert_ok(Array.isArray(app.arr()));
                $_1.$mol_assert_ok(Array.isArray(app.arr_string()));
            },
            'default value'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_equal(app.value(), '123');
            },
            'both binding'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_ok(app.value() !== 1);
                app.value(1);
                $_1.$mol_assert_equal(app.value(), 1);
            },
            'left binding'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_not(app.head_complete_enabled());
                $_1.$mol_assert_not(app.enabled());
            },
            'sub component'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                $_1.$mol_assert_ok(app.Test() instanceof $_1.$mol_view_tree_test_binding_right_test);
            },
            'right binding - change owner property'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $_1.$mol_assert_ok(app.outer_width() !== val);
                $_1.$mol_assert_ok(app.Test().width() !== val);
                app.outer_width(val);
                $_1.$mol_assert_equal(app.outer_width(), val);
                $_1.$mol_assert_equal(app.Test().width(), val);
            },
            'right binding - change part property'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $_1.$mol_assert_ok(app.outer_width() !== val);
                $_1.$mol_assert_ok(app.Test().width() !== val);
                app.Test().width(val);
                $_1.$mol_assert_equal(app.Test().width(), val);
                $_1.$mol_assert_equal(app.outer_width(), val);
            },
            'attributes merging'($) {
                const app = $_1.$mol_view_tree_test_attributes.make({ $ });
                $_1.$mol_assert_like(app.some(), { a: 1, b: 2 });
            },
            'subcomponent indexed'($) {
                const app = $_1.$mol_view_tree_test_attributes_subcomponent.make({ $ });
                const val = 123;
                app.page = (index) => index;
                $_1.$mol_assert_equal(app.Page(val).Sub(), val);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//tree.test.js.map

//# sourceMappingURL=node.test.js.map
