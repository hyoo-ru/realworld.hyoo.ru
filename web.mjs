"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
//hyoo/hyoo.ts
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
//mol/ambient/ambient.ts
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
//mol/delegate/delegate.ts
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
            if (having instanceof $mol_delegate)
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
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
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
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
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
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        return val && typeof val.then === 'function';
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));
//mol/promise/like/like.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
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
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
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
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
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
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
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
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
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
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
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
            if (view instanceof $mol_dom_context.Node) {
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
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
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
//mol/dom/render/children/children.ts
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
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach_force() {
        if (all.length) {
            el.innerHTML += '\n' + all.join('\n\n');
            all = [];
        }
        timer = null;
        return el;
    }
    $.$mol_style_attach_force = $mol_style_attach_force;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick($mol_style_attach_force);
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
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
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
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
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
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
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if ($mol_promise_like(error))
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
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
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
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
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
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
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            catch (err) {
                $mol_fail_log(err);
            }
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 20, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
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
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        scroll_left(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
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
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
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
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
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
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
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
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
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
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
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
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        menu_title() {
            return "";
        }
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
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages()[0]?.title() || this.title();
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 1px;\n\theight: 1rem;\n\tbackground: var(--mol_theme_special);\n\tborder-radius: var(--mol_gap_round);\n\topacity: .5;\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -1px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -1px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
//mol/data/value/value.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/partial/undefined/undefined.ts
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
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] =
                        sub[field](val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//mol/data/record/record.ts
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
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
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
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//mol/data/string/string.ts
;
"use strict";
//mol/type/unary/unary.ts
;
"use strict";
//mol/type/param/param.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//mol/func/is/class/class.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));
//mol/data/pipe/pipe.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
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
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
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
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
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
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
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
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
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
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
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
                    this.offset = new $mol_time_duration(parsed[7]);
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
                this.offset = new $mol_time_duration({
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
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
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
            const duration = new $mol_time_duration(config);
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
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
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
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
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
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//mol/data/array/array.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
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
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
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
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
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
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_transport extends $mol_object2 {
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
        $mol_mem
    ], $hyoo_realworld_transport, "token", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_transport, "headers", null);
    __decorate([
        $mol_action
    ], $hyoo_realworld_transport, "load", null);
    __decorate([
        $mol_action
    ], $hyoo_realworld_transport, "save", null);
    $.$hyoo_realworld_transport = $hyoo_realworld_transport;
})($ || ($ = {}));
//hyoo/realworld/transport/transport.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_tags_json = $mol_data_array($mol_data_string);
    const Response = $mol_data_record({
        tags: $.$hyoo_realworld_tags_json,
    });
    class $hyoo_realworld_tags extends $mol_object2 {
        static list() {
            return Response(this.$.$hyoo_realworld_transport.load(`tags`)).tags;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_realworld_tags, "list", null);
    $.$hyoo_realworld_tags = $hyoo_realworld_tags;
})($ || ($ = {}));
//hyoo/realworld/tags/tags.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_nullable(sub) {
        return $mol_data_setup((val) => {
            if (val === null)
                return null;
            return sub(val);
        }, sub);
    }
    $.$mol_data_nullable = $mol_data_nullable;
})($ || ($ = {}));
//mol/data/nullable/nullable.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_boolean = (val) => {
        if (typeof val === 'boolean')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a boolean`));
    };
})($ || ($ = {}));
//mol/data/boolean/boolean.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_person_json = $mol_data_record({
        username: $mol_data_string,
        bio: $mol_data_nullable($mol_data_string),
        image: $mol_data_string,
        following: $mol_data_boolean,
    });
    const Response = $mol_data_record({
        profile: $.$hyoo_realworld_person_json,
    });
    class $hyoo_realworld_person extends $mol_object2 {
        static item(username) {
            const obj = new this;
            obj.name = $mol_const(username);
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
        $mol_mem
    ], $hyoo_realworld_person.prototype, "json", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_person, "item", null);
    $.$hyoo_realworld_person = $hyoo_realworld_person;
})($ || ($ = {}));
//hyoo/realworld/person/person.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//mol/data/number/number.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_integer(val) {
        const val2 = $mol_data_number(val);
        if (Math.floor(val2) === val2)
            return val2;
        return $mol_fail(new $mol_data_error(`${val} is not an integer`));
    }
    $.$mol_data_integer = $mol_data_integer;
})($ || ($ = {}));
//mol/data/integer/integer.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_article_json = $mol_data_record({
        title: $mol_data_string,
        slug: $mol_data_string,
        body: $mol_data_string,
        createdAt: $mol_data_pipe($mol_data_string, $mol_time_moment),
        updatedAt: $mol_data_pipe($mol_data_string, $mol_time_moment),
        tagList: $hyoo_realworld_tags_json,
        description: $mol_data_string,
        author: $hyoo_realworld_person_json,
        favorited: $mol_data_boolean,
        favoritesCount: $mol_data_integer,
    });
    const Response_one = $mol_data_record({
        article: $.$hyoo_realworld_article_json,
    });
    const Response_page = $mol_data_record({
        articles: $mol_data_array($.$hyoo_realworld_article_json),
        articlesCount: $mol_data_integer,
    });
    class $hyoo_realworld_article extends $mol_object2 {
        static item(slug) {
            const obj = new this;
            obj.slug = $mol_const(slug);
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
                return $mol_delegate($hyoo_realworld_article.prototype, () => this.list_page({ tag, page })[index % page_size]);
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
        $mol_mem
    ], $hyoo_realworld_article.prototype, "json", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_article, "item", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article, "changes", null);
    __decorate([
        $mol_action
    ], $hyoo_realworld_article, "save", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_article, "list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_article, "list_page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_article, "list_page_json", null);
    $.$hyoo_realworld_article = $hyoo_realworld_article;
})($ || ($ = {}));
//hyoo/realworld/article/article.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
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
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(next) {
            return this.Body().scroll_top(next);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
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
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
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
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
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
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
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
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document?.currentScript
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_huggingface_run(space, method, ...data) {
        while (true) {
            try {
                if (typeof method === 'number') {
                    return $mol_wire_sync(this).$mol_huggingface_ws(space, method, ...data);
                }
                else {
                    return this.$mol_huggingface_rest(space, method, ...data);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                if (error instanceof Error && error.message === `Queue full`) {
                    $mol_fail_log(error);
                    continue;
                }
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_huggingface_run = $mol_huggingface_run;
    function $mol_huggingface_rest(space, method, ...data) {
        const uri = `https://${space}.hf.space/run/${method}`;
        const response = $mol_fetch.json(uri, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });
        if ('error' in response) {
            $mol_fail(new Error(response.error ?? 'Unknown API error'));
        }
        return response.data;
    }
    $.$mol_huggingface_rest = $mol_huggingface_rest;
    function $mol_huggingface_ws(space, fn_index, ...data) {
        const session_hash = $mol_guid();
        const socket = new WebSocket(`wss://${space}.hf.space/queue/join`);
        const promise = new Promise((done, fail) => {
            socket.onclose = event => {
                if (event.reason)
                    fail(new Error(event.reason));
            };
            socket.onerror = event => {
                fail(new Error(`Socket error`));
            };
            socket.onmessage = event => {
                const message = JSON.parse(event.data);
                switch (message.msg) {
                    case 'send_hash':
                        return socket.send(JSON.stringify({ session_hash, fn_index }));
                    case 'estimation': return;
                    case 'queue_full':
                        fail(new Error(`Queue full`));
                    case 'send_data':
                        return socket.send(JSON.stringify({ session_hash, fn_index, data }));
                    case 'process_starts': return;
                    case 'process_completed':
                        if (message.success) {
                            return done(message.output.data);
                        }
                        else {
                            return fail(new Error(message.output.error ?? `Unknown API error`));
                        }
                    default:
                        return fail(new Error(`Unknown message type: ${message.msg}`));
                }
            };
        });
        return Object.assign(promise, {
            destructor: () => socket.close()
        });
    }
    $.$mol_huggingface_ws = $mol_huggingface_ws;
})($ || ($ = {}));
//mol/huggingface/huggingface.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_lingua_translate(lang, text) {
        if (!text.trim())
            return '';
        const cache_key = `$hyoo_lingua_translate(${JSON.stringify(lang)},${JSON.stringify(text)})`;
        const cached = this.$mol_state_local.value(cache_key);
        if (cached)
            return String(cached);
        const translated = this.$mol_huggingface_run('hyoo-translate', 0, lang, text)[0];
        return this.$mol_state_local.value(cache_key, translated);
    }
    $.$hyoo_lingua_translate = $hyoo_lingua_translate;
})($ || ($ = {}));
//hyoo/lingua/translate/translate.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            try {
                return $mol_wire_sync($hyoo_lingua_translate).call(this.$, lang, en);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    $.$hyoo_realworld_comment_json = $mol_data_record({
        author: $hyoo_realworld_person_json,
        id: $mol_data_integer,
        body: $mol_data_string,
        createdAt: $mol_data_pipe($mol_data_string, $mol_time_moment),
        updatedAt: $mol_data_pipe($mol_data_string, $mol_time_moment),
    });
    const Response_one = $mol_data_record({
        comment: $.$hyoo_realworld_comment_json,
    });
    const Response_list = $mol_data_record({
        comments: $mol_data_array($.$hyoo_realworld_comment_json),
    });
    class $hyoo_realworld_comment extends $mol_object2 {
        static item(id) {
            const obj = new this;
            obj.id = $mol_const(id);
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
        $mol_mem
    ], $hyoo_realworld_comment.prototype, "json", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_comment, "item", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_comment, "changes", null);
    __decorate([
        $mol_action
    ], $hyoo_realworld_comment, "save", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_comment, "list", null);
    $.$hyoo_realworld_comment = $hyoo_realworld_comment;
})($ || ($ = {}));
//hyoo/realworld/comment/comment.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading(),
                decoding: this.decoding(),
                crossOrigin: this.cors()
            };
        }
        attr() {
            return {
                ...super.attr(),
                width: this.natural_width(),
                height: this.natural_height()
            };
        }
        event() {
            return {
                load: (next) => this.load(next)
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
        decoding() {
            return "async";
        }
        cors() {
            return null;
        }
        natural_width(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        natural_height(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        load(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_width", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_height", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "load", null);
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/image/image.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
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
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
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
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
//mol/state/arg/arg.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
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
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom_context.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
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
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
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
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
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
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
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
                        $mol_fail_log(error);
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
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
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
                    if (kid instanceof $mol_view) {
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
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
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
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
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
                $mol_fail(new Error('Captured empty substring'));
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
        get native() {
            return new RegExp(this.source, this.flags);
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
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
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
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
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
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
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
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
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
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $mol_dimmer {
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
                href: this.uri(),
                target: "_blank"
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//mol/text/code/token/-view.tree/token.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
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
//mol/text/code/token/token.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
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
            obj.uri = () => this.token_uri(id);
            return obj;
        }
        find_pos(id) {
            return null;
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
        token_uri(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//mol/text/code/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
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
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//mol/syntax2/syntax2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$\r?\n?)+)([\n\r]*)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\p{Letter})|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));
//mol/syntax2/md/md.ts
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
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
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
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
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
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
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
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
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
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
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
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));
//mol/blob/blob.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
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
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
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
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
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
                    $mol_state_time.now(0);
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
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
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
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
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
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
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
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3";
        }
    }
    $.$mol_icon_clipboard = $mol_icon_clipboard;
})($ || ($ = {}));
//mol/icon/clipboard/-view.tree/clipboard.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_clipboard_outline extends $mol_icon {
        path() {
            return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3M7,7H17V5H19V19H5V5H7V7Z";
        }
    }
    $.$mol_icon_clipboard_outline = $mol_icon_clipboard_outline;
})($ || ($ = {}));
//mol/icon/clipboard/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_copy extends $mol_button_minor {
        blobs() {
            return [
                this.text_blob(),
                this.html_blob()
            ];
        }
        data() {
            return {};
        }
        sub() {
            return [
                this.Icon(),
                this.title()
            ];
        }
        text() {
            return this.title();
        }
        text_blob(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_blob([
                this.text()
            ], {
                type: "text/plain"
            });
            return obj;
        }
        html() {
            return "";
        }
        html_blob(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_blob([
                this.html()
            ], {
                type: "text/html"
            });
            return obj;
        }
        Icon() {
            const obj = new this.$.$mol_icon_clipboard_outline();
            return obj;
        }
        title() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "text_blob", null);
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "html_blob", null);
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "Icon", null);
    $.$mol_button_copy = $mol_button_copy;
})($ || ($ = {}));
//mol/button/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));
//mol/html/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            data() {
                return Object.fromEntries(this.blobs().map(blob => [blob.type, blob]));
            }
            html() {
                return $mol_html_encode(this.text());
            }
            attachments() {
                return [new ClipboardItem(this.data())];
            }
            click(event) {
                const cb = $mol_wire_sync(this.$.$mol_dom_context.navigator.clipboard);
                cb.write(this.attachments());
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "html", null);
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "attachments", null);
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/copy/copy.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $mol_stack {
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
        find_pos(id) {
            return null;
        }
        uri_base() {
            return "";
        }
        sub() {
            return [
                this.Rows(),
                this.Copy()
            ];
        }
        sidebar_showed() {
            return false;
        }
        render_visible_only() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        syntax() {
            return null;
        }
        uri_resolve(id) {
            return "";
        }
        highlight() {
            return "";
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.syntax = () => this.syntax();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.render_visible_only = () => this.render_visible_only();
            obj.rows = () => this.rows();
            return obj;
        }
        text_export() {
            return "";
        }
        Copy() {
            const obj = new this.$.$mol_button_copy();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_code_Copy_hint');
            obj.text = () => this.text_export();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Rows", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Copy", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//mol/text/code/-view.tree/code.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
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
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            text_export() {
                return this.text() + '\n';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            Rows: {
                padding: $mol_gap.text,
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//mol/float/-view.tree/float.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//mol/float/-css/float.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.aria_checked(),
                role: this.aria_role()
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        aria_checked() {
            return "false";
        }
        aria_role() {
            return "checkbox";
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
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
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
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $mol_check {
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
        checked(next) {
            return this.expanded(next);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//mol/check/expand/-view.tree/expand.view.tree.ts
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
//mol/check/expand/expand.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//mol/check/expand/-css/expand.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(id) {
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
        minimal_width() {
            return 0;
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
            obj.minimal_width = () => this.minimal_width();
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
            obj.expanded = (next) => this.cell_expanded(id, next);
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
        cell_expanded(id, next) {
            if (next !== undefined)
                return next;
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
        $mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $mol_list {
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $mol_view {
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $mol_view {
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//mol/grid/-view.tree/grid.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
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
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
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
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
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
                const next2 = $mol_state_session.value(key, next);
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
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/grid/grid.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 1px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 1px 0 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 1px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: right;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//mol/grid/-css/grid.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $mol_link {
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
        $mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//mol/link/iconed/-view.tree/iconed.view.tree.ts
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
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri).replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/iconed/iconed.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n\topacity: .75;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//mol/link/iconed/-css/iconed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $mol_scroll {
        uri(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        dom_name() {
            return "object";
        }
        window() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                data: this.uri(),
                type: this.mime()
            };
        }
        sub() {
            return [
                this.Fallback()
            ];
        }
        message() {
            return {
                hashchange: (next) => this.uri_change(next)
            };
        }
        mime() {
            return "";
        }
        title() {
            return "";
        }
        Fallback() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.uri();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        uri_change(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "Fallback", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri_change", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//mol/embed/native/-view.tree/native.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/native/native.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));
//mol/embed/native/-css/native.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_youtube extends $mol_icon {
        path() {
            return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
        }
    }
    $.$mol_icon_youtube = $mol_icon_youtube;
})($ || ($ = {}));
//mol/icon/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $mol_embed_native {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                ...super.attr(),
                data: null,
                type: null,
                src: this.uri(),
                srcdoc: this.html(),
                allow: this.allow()
            };
        }
        fullscreen() {
            return true;
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        clipboard_read() {
            return true;
        }
        clipboard_write() {
            return true;
        }
        uri(next) {
            if (next !== undefined)
                return next;
            return "about:config";
        }
        html() {
            return null;
        }
        allow() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//mol/frame/-view.tree/frame.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                    ...this.clipboard_read() ? [`clipboard-read ${this.uri()}`] : [],
                    ...this.clipboard_write() ? [`clipboard-write ${this.uri()}`] : [],
                ].join('; ');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/frame/frame.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));
//mol/frame/frame.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_youtube extends $mol_check {
        uri() {
            return "";
        }
        video_preview() {
            return "";
        }
        video_id() {
            return "";
        }
        checked(next) {
            return this.active(next);
        }
        sub() {
            return [
                this.Image(),
                this.Hint(),
                this.Frame()
            ];
        }
        active(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        title() {
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.video_preview();
            return obj;
        }
        Hint() {
            const obj = new this.$.$mol_icon_youtube();
            return obj;
        }
        video_embed() {
            return "";
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.title = () => this.title();
            obj.uri = () => this.video_embed();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "active", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Hint", null);
    __decorate([
        $mol_mem
    ], $mol_embed_youtube.prototype, "Frame", null);
    $.$mol_embed_youtube = $mol_embed_youtube;
})($ || ($ = {}));
//mol/embed/youtube/-view.tree/youtube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi/${this.video_id()}/sddefault.jpg`;
            }
            sub() {
                return this.active()
                    ? [this.Frame()]
                    : [this.Image(), this.Hint()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "sub", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/youtube/youtube.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/youtube/youtube.view.css", "[mol_embed_youtube] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_youtube_image] {\n\tflex: auto 1 1;\n}\n\n[mol_embed_youtube_hint] {\n\tposition: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.3;\n    transform: translate(-50%, -50%);\n}\n\n[mol_embed_youtube]:hover [mol_embed_youtube_hint] {\n\topacity: .6;\n}\n");
})($ || ($ = {}));
//mol/embed/youtube/-css/youtube.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_any extends $mol_view {
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Object() {
            const obj = new this.$.$mol_embed_native();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        Youtube() {
            const obj = new this.$.$mol_embed_youtube();
            obj.title = () => this.title();
            obj.uri = () => this.uri();
            return obj;
        }
        title() {
            return "";
        }
        uri() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Object", null);
    __decorate([
        $mol_mem
    ], $mol_embed_any.prototype, "Youtube", null);
    $.$mol_embed_any = $mol_embed_any;
})($ || ($ = {}));
//mol/embed/any/-view.tree/any.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            sub() {
                switch (this.type()) {
                    case 'image': return [this.Image()];
                    case 'youtube': return [this.Youtube()];
                    default: return [this.Object()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/any/any.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        param() {
            return "";
        }
        flow_tokens() {
            return [];
        }
        auto() {
            return [
                this.auto_scroll()
            ];
        }
        Paragraph(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.block_content(id);
            return obj;
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.quote_text(id);
            obj.highlight = () => this.highlight();
            obj.auto_scroll = () => null;
            return obj;
        }
        List(id) {
            const obj = new this.$.$mol_text_list();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.type = () => this.list_type(id);
            obj.text = () => this.list_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        item_index(id) {
            return 0;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.minimal_height = () => 40;
            obj.level = () => this.header_level(id);
            obj.content = () => this.block_content(id);
            obj.arg = () => this.header_arg(id);
            return obj;
        }
        Pre(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.pre_text(id);
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.sidebar_showed = () => this.pre_sidebar_showed();
            return obj;
        }
        Cut(id) {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "hr";
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
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.table_cell_text(id);
            return obj;
        }
        Grid(id) {
            const obj = new this.$.$mol_grid();
            obj.rows = () => this.grid_rows(id);
            return obj;
        }
        Grid_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.grid_cells(id);
            return obj;
        }
        Grid_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.highlight = () => this.highlight();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.grid_cell_text(id);
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_dimmer();
            obj.dom_name = () => "span";
            obj.needle = () => this.highlight();
            obj.haystack = () => this.line_text(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            obj.dom_name = () => "span";
            obj.type = () => this.line_type(id);
            obj.sub = () => this.line_content(id);
            return obj;
        }
        Code_line(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => false;
            obj.highlight = () => this.highlight();
            obj.text = () => this.line_text(id);
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.syntax = () => this.code_syntax();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => this.line_content(id);
            return obj;
        }
        Link_http(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => [
                this.link_host(id)
            ];
            return obj;
        }
        Embed(id) {
            const obj = new this.$.$mol_embed_any();
            obj.uri = () => this.link_uri(id);
            obj.title = () => this.line_text(id);
            return obj;
        }
        auto_scroll() {
            return null;
        }
        block_content(id) {
            return [];
        }
        uri_resolve(id) {
            return "";
        }
        quote_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        list_type(id) {
            return "-";
        }
        list_text(id) {
            return "";
        }
        header_level(id) {
            return 1;
        }
        header_arg(id) {
            return {};
        }
        pre_text(id) {
            return "";
        }
        code_sidebar_showed() {
            return true;
        }
        pre_sidebar_showed() {
            return this.code_sidebar_showed();
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
        table_cell_text(id) {
            return "";
        }
        grid_rows(id) {
            return [];
        }
        grid_cells(id) {
            return [];
        }
        grid_cell_text(id) {
            return "";
        }
        line_text(id) {
            return "";
        }
        line_type(id) {
            return "";
        }
        line_content(id) {
            return [];
        }
        code_syntax() {
            return null;
        }
        link_uri(id) {
            return "";
        }
        link_host(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Paragraph", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "List", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Pre", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Grid_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Code_line", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link_http", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Embed", null);
    $.$mol_text = $mol_text;
    class $mol_text_header extends $mol_paragraph {
        level() {
            return 1;
        }
        sub() {
            return [
                this.Link()
            ];
        }
        arg() {
            return {};
        }
        content() {
            return [];
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_header_Link_hint');
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_header.prototype, "Link", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $mol_paragraph {
        dom_name() {
            return "span";
        }
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
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
//mol/text/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?\)\./, '').replace(/[()]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t|  (?:\+\+|--|\*\*|  ))/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                if (/^#\!/.test(uri)) {
                    const params = {};
                    for (const chunk of uri.slice(2).split(this.$.$mol_state_arg.separator)) {
                        if (!chunk)
                            continue;
                        const vals = chunk.split('=').map(decodeURIComponent);
                        params[vals.shift()] = vals.join('=');
                    }
                    return this.$.$mol_state_arg.link(params);
                }
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\toverflow-x: overlay;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 60rem;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: top;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\toverflow-x: overlay;\n\ttab-size: 2;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));
//mol/text/text/-css/text.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_list extends $mol_text {
        auto_scroll() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_list_type: this.type()
            };
        }
        Paragraph(id) {
            const obj = new this.$.$mol_text_list_item();
            obj.index = () => this.item_index(id);
            obj.sub = () => this.block_content(id);
            return obj;
        }
        type() {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_list.prototype, "Paragraph", null);
    $.$mol_text_list = $mol_text_list;
    class $mol_text_list_item extends $mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_list_item_index: this.index()
            };
        }
        index() {
            return 0;
        }
    }
    $.$mol_text_list_item = $mol_text_list_item;
})($ || ($ = {}));
//mol/text/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\r\n\tpadding-left: 1.75rem;\r\n}\r\n\r\n[mol_text_list_item] {\r\n\tcontain: none;\r\n\tdisplay: list-item;\r\n}\r\n\r\n[mol_text_list_item]::before {\r\n\tcontent: attr( mol_text_list_item_index ) \".\";\r\n\twidth: 1.25rem;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tmargin-left: -1.75rem;\r\n\ttext-align: end;\r\n}\r\n\r\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\r\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\r\n\tcontent: \"•\";\r\n}\r\n");
})($ || ($ = {}));
//mol/text/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_message extends $mol_view {
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
        $mol_mem
    ], $mol_message.prototype, "moment", null);
    __decorate([
        $mol_mem
    ], $mol_message.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $mol_message.prototype, "Name", null);
    __decorate([
        $mol_mem
    ], $mol_message.prototype, "Author", null);
    __decorate([
        $mol_mem
    ], $mol_message.prototype, "Moment", null);
    __decorate([
        $mol_mem
    ], $mol_message.prototype, "Info", null);
    __decorate([
        $mol_mem
    ], $mol_message.prototype, "Text", null);
    $.$mol_message = $mol_message;
})($ || ($ = {}));
//mol/message/-view.tree/message.view.tree.ts
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
//mol/message/message.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/message/message.view.css", "[mol_message] {\n\tmax-width: 58rem;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n}\n\n[mol_message_avatar] {\n\twidth: 1.5rem;\n\theight: 1.5rem;\n}\n\n[mol_message_text] {\n\tflex: 1000 1 10rem;\n\tpadding: 0;\n}\n\n[mol_message_info] {\n\tflex: 1 1 100%;\n\tbox-shadow: none;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n[mol_message_info] > * {\n\tmargin: .25rem;\n}\n\n[mol_message_author] {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n[mol_message_author] > * {\n\tmargin: .25rem;\n}\n\n[mol_message_name] {\n\tfont-weight: bolder;\n}\n\n[mol_message_moment] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/message/-css/message.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_comment_card extends $mol_message {
        comment() {
            const obj = new this.$.$hyoo_realworld_comment();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_realworld_comment_card.prototype, "comment", null);
    $.$hyoo_realworld_comment_card = $hyoo_realworld_comment_card;
})($ || ($ = {}));
//hyoo/realworld/comment/card/-view.tree/card.view.tree.ts
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
                return new $mol_time_moment(this.comment().updated_moment()).toOffset(new $mol_time_moment().offset);
            }
            avatar_link() {
                const args = this.$.$mol_state_arg.dict();
                return this.$.$mol_state_arg.make_link({ ...args, person: this.comment().author().name() });
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_realworld_comment_card.prototype, "moment", null);
        $$.$hyoo_realworld_comment_card = $hyoo_realworld_comment_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/realworld/comment/card/card.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_edit extends $mol_icon {
        path() {
            return "M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z";
        }
    }
    $.$mol_icon_edit = $mol_icon_edit;
})($ || ($ = {}));
//mol/icon/edit/-view.tree/edit.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//mol/bar/-view.tree/bar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\t/* box-shadow: inset 0 0 0 1px var(--mol_theme_line); */\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/bar/-css/bar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
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
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
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
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
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
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
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
        selection(next) {
            if (next !== undefined)
                return next;
            return [
                0,
                0
            ];
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
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard(),
                enterkeyhint: this.enter()
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
                input: (event) => this.event_change(event)
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
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        value_changed(next) {
            return this.value(next);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
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
        keyboard() {
            return "text";
        }
        enter() {
            return "go";
        }
        length_max() {
            return +Infinity;
        }
        type(next) {
            if (next !== undefined)
                return next;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit_with_ctrl() {
            return false;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => this.submit_with_ctrl();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
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
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $mol_stack {
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
        symbols_alt() {
            return {
                comma: "<",
                period: ">",
                dash: "−",
                equals: "≈",
                graveAccent: "́",
                forwardSlash: "÷",
                E: "€",
                X: "×",
                C: "©",
                P: "§",
                H: "₽",
                key0: "°",
                key8: "•",
                key2: "@",
                key3: "#",
                key4: "$",
                key6: "^",
                key7: "&",
                bracketOpen: "[",
                bracketClose: "]",
                slashBack: "|"
            };
        }
        symbols_alt_shift() {
            return {
                V: "✅",
                X: "❌",
                O: "⭕",
                key1: "❗",
                key4: "💲",
                key7: "❓",
                comma: "«",
                period: "»",
                semicolon: "“",
                quoteSingle: "”",
                dash: "—",
                equals: "≠",
                graveAccent: "̱",
                bracketOpen: "{",
                bracketClose: "}"
            };
        }
        clickable(next) {
            if (next !== undefined)
                return next;
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
        value(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        spellcheck() {
            return true;
        }
        length_max() {
            return +Infinity;
        }
        selection(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        bring() {
            return this.Edit().bring();
        }
        Edit() {
            const obj = new this.$.$mol_textarea_edit();
            obj.value = (next) => this.value(next);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.spellcheck = () => this.spellcheck();
            obj.length_max = () => this.length_max();
            obj.selection = (next) => this.selection(next);
            obj.submit = (next) => this.submit(next);
            obj.submit_with_ctrl = () => true;
            return obj;
        }
        row_numb(id) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (id) => this.row_numb(id);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
    class $mol_textarea_edit extends $mol_string {
        dom_name() {
            return "textarea";
        }
        enter() {
            return "enter";
        }
        field() {
            return {
                ...super.field(),
                scrollTop: 0
            };
        }
    }
    $.$mol_textarea_edit = $mol_textarea_edit;
})($ || ($ = {}));
//mol/textarea/-view.tree/textarea.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    let end = start + rows[i].length;
                    if (end >= from && start <= to) {
                        if (to === from || start !== to) {
                            rows[i] = '\t' + rows[i];
                            to += 1;
                            end += 1;
                        }
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from + 1, to]);
            }
            indent_dec() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    const end = start + rows[i].length;
                    if (end >= from && start <= to && rows[i].startsWith('\t')) {
                        rows[i] = rows[i].slice(1);
                        to -= 1;
                        if (start < from)
                            from -= 1;
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from, to]);
            }
            symbol_insert(event) {
                const symbol = event.shiftKey
                    ? this.symbols_alt_shift()[$mol_keyboard_code[event.keyCode]]
                    : this.symbols_alt()[$mol_keyboard_code[event.keyCode]];
                if (!symbol)
                    return;
                document.execCommand('insertText', false, symbol);
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                if (event.altKey && !event.ctrlKey) {
                    this.symbol_insert(event);
                }
                else {
                    switch (event.keyCode) {
                        case !event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_inc();
                            break;
                        case event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_dec();
                            break;
                        default: return;
                    }
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
//mol/textarea/textarea.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tword-break: break-word;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.75rem;\n\twidth: calc( 100% - 1.75rem );\n}\n\n[mol_textarea_edit]:hover + [mol_textarea_view] {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_textarea_edit]:focus + [mol_textarea_view] {\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/textarea/-css/textarea.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_comment_add extends $mol_bar {
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
        $mol_mem
    ], $hyoo_realworld_comment_add.prototype, "article", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_comment_add.prototype, "message", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_comment_add.prototype, "Message", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_comment_add.prototype, "post", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_comment_add.prototype, "Submit", null);
    $.$hyoo_realworld_comment_add = $hyoo_realworld_comment_add;
})($ || ($ = {}));
//hyoo/realworld/comment/add/-view.tree/add.view.tree.ts
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
            $mol_action
        ], $hyoo_realworld_comment_add.prototype, "post", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_comment_add.prototype, "postable", null);
        $$.$hyoo_realworld_comment_add = $hyoo_realworld_comment_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/realworld/comment/add/add.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/comment/add/add.view.css", "[hyoo_realworld_comment_add_status] {\n\tflex: 0 0 auto;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/comment/add/-css/add.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_article_page extends $mol_page {
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
        Comment_card(id) {
            const obj = new this.$.$hyoo_realworld_comment_card();
            obj.comment = () => this.comment(id);
            return obj;
        }
        Tag_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                tag: this.tag_name(id),
                article: null
            });
            obj.sub = () => [
                this.tag_name(id)
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
        comment(id) {
            const obj = new this.$.$hyoo_realworld_comment();
            return obj;
        }
        tag_name(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_article_page.prototype, "Comment_card", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_article_page.prototype, "Tag_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Edit_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Edit_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Close_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Tags", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Comments", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "article", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_page.prototype, "Comment_add", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_article_page.prototype, "comment", null);
    $.$hyoo_realworld_article_page = $hyoo_realworld_article_page;
})($ || ($ = {}));
//hyoo/realworld/article/page/-view.tree/page.view.tree.ts
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
            $mol_mem
        ], $hyoo_realworld_article_page.prototype, "article", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_page.prototype, "comments", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_page.prototype, "comment_cards", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_realworld_article_page.prototype, "comment", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_page.prototype, "tags", null);
        $$.$hyoo_realworld_article_page = $hyoo_realworld_article_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/realworld/article/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/article/page/page.view.css", "[hyoo_realworld_article_page_comment_add] {\n\tmargin: .75rem;\n}\n\n[hyoo_realworld_article_page_comments] {\n\tpadding: .75rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: none;\n}\n\n[hyoo_realworld_article_page_comments] > * {\n\tmargin: .75rem;\n}\n\n[hyoo_realworld_article_page_tag_link] {\n\tmargin: 0;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/article/page/-css/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_feed {
        articles;
        articlesCount;
    }
    $.$hyoo_realworld_feed = $hyoo_realworld_feed;
})($ || ($ = {}));
//hyoo/realworld/feed/feed.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_article_card extends $mol_row {
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
        $mol_mem
    ], $hyoo_realworld_article_card.prototype, "article", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_card.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_card.prototype, "Author_name", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_card.prototype, "Author", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_card.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_card.prototype, "Descr", null);
    $.$hyoo_realworld_article_card = $hyoo_realworld_article_card;
})($ || ($ = {}));
//hyoo/realworld/article/card/-view.tree/card.view.tree.ts
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
//hyoo/realworld/article/card/card.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/article/card/card.view.css", "[hyoo_realworld_article_card] {\n\tmargin-bottom: 1px;\n\tpadding: .5rem;\n}\n\n[hyoo_realworld_article_card] > * {\n\tmargin: 0 .25rem;\n}\n\n[hyoo_realworld_article_card_title] {\n\tfont-weight: bolder;\n}\n\n[hyoo_realworld_article_card_author] {\n\tmargin: 0;\n\tdisplay: flex;\n\tflex: 1 1 100%;\n}\n\n[hyoo_realworld_article_card_author] > * {\n\tmargin: .25rem;\n}\n\n[hyoo_realworld_article_card_avatar] {\n\twidth: 24px;\n\theight: 24px;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/article/card/-css/card.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_feed_page extends $mol_page {
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
        Article_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                article: this.article_slug(id)
            });
            obj.sub = () => [
                this.Article_card(id)
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
        article_slug(id) {
            return "";
        }
        article(id) {
            const obj = new this.$.$hyoo_realworld_article();
            return obj;
        }
        Article_card(id) {
            const obj = new this.$.$hyoo_realworld_article_card();
            obj.article = () => this.article(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_feed_page.prototype, "Article_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_feed_page.prototype, "Add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_feed_page.prototype, "Add_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_feed_page.prototype, "Article_links", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_feed_page.prototype, "article", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_feed_page.prototype, "Article_card", null);
    $.$hyoo_realworld_feed_page = $hyoo_realworld_feed_page;
})($ || ($ = {}));
//hyoo/realworld/feed/page/-view.tree/page.view.tree.ts
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
            $mol_mem
        ], $hyoo_realworld_feed_page.prototype, "articles", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_feed_page.prototype, "article_links", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_realworld_feed_page.prototype, "article_slug", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_realworld_feed_page.prototype, "article", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_feed_page.prototype, "body_scroll_top", null);
        $$.$hyoo_realworld_feed_page = $hyoo_realworld_feed_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/realworld/feed/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/feed/page/page.view.css", "[hyoo_realworld_feed_page_article_links] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: .75rem;\n}\n\n[hyoo_realworld_feed_page_article_link] {\n\tpadding: 0;\n\tflex: none;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/feed/page/-css/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
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
            obj.minimal_height = () => 32;
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
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        content() {
            return [
                this.control()
            ];
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
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_allowed() {
            return true;
        }
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
        rows() {
            return [
                this.Body(),
                this.Foot()
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
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.view.css", "[mol_form] {\r\n\tgap: var(--mol_gap_block);\r\n}\r\n\r\n[mol_form_body] {\r\n\tgap: var(--mol_gap_block);\r\n}");
})($ || ($ = {}));
//mol/form/-css/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_article_edit extends $mol_page {
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
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_title", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_title", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_title_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_descr", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_descr", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_descr_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_content", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_content", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_content_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "article_tags", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_tags", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Article_tags_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "save", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Save", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_article_edit.prototype, "Form", null);
    $.$hyoo_realworld_article_edit = $hyoo_realworld_article_edit;
})($ || ($ = {}));
//hyoo/realworld/article/edit/-view.tree/edit.view.tree.ts
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
            $mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_title", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_descr", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_content", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_edit.prototype, "article_tags", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_edit.prototype, "save", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_article_edit.prototype, "saveable", null);
        $$.$hyoo_realworld_article_edit = $hyoo_realworld_article_edit;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/realworld/article/edit/edit.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/article/edit/edit.view.css", "[hyoo_realworld_article_edit_form] {\n\tpadding: .75rem;\n}\n\n[hyoo_realworld_article_edit_save] {\n\tflex: 0 1 auto;\n}\n\n[hyoo_realworld_article_edit_save_status] {\n\talign-self: stretch;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/article/edit/-css/edit.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_person_page extends $mol_page {
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
        $mol_mem
    ], $hyoo_realworld_person_page.prototype, "section", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_person_page.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_person_page.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_person_page.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_person_page.prototype, "Username", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_person_page.prototype, "Bio", null);
    $.$hyoo_realworld_person_page = $hyoo_realworld_person_page;
})($ || ($ = {}));
//hyoo/realworld/person/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const Response = $mol_data_record({
        user: $mol_data_record({
            token: $mol_data_string,
            username: $mol_data_string,
        }),
    });
    class $hyoo_realworld_sign extends $mol_object2 {
        static auth(creds) {
            const res = this.$.$hyoo_realworld_transport.save(`user`, 'post', { user: creds });
            const person = Response(res).user;
            this.$.$hyoo_realworld_transport.token(person.token);
            return person;
        }
        static register(creds) {
            const res = this.$.$hyoo_realworld_transport.save(`user`, 'post', { user: creds });
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
        $mol_action
    ], $hyoo_realworld_sign, "auth", null);
    __decorate([
        $mol_action
    ], $hyoo_realworld_sign, "register", null);
    $.$hyoo_realworld_sign = $hyoo_realworld_sign;
})($ || ($ = {}));
//hyoo/realworld/sign/sign.ts
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
//hyoo/realworld/person/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/person/page/page.view.css", "[hyoo_realworld_person_page_image] {\n\tflex: 0 1 auto;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/person/page/-css/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_home_page extends $mol_page {
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
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Page_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Articles", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Tags", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Favorites", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Profile", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Settings", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Sign_in", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_home_page.prototype, "Sign_up", null);
    $.$hyoo_realworld_home_page = $hyoo_realworld_home_page;
})($ || ($ = {}));
//hyoo/realworld/home/page/-view.tree/page.view.tree.ts
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
//hyoo/realworld/home/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/home/page/page.view.css", "[hyoo_realworld_home_page] {\n  flex: 0 0 10rem;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/home/page/-css/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_tags_page extends $mol_page {
        title() {
            return this.$.$mol_locale.text('$hyoo_realworld_tags_page_title');
        }
        body() {
            return [
                this.Tag_links()
            ];
        }
        Tag_link(id) {
            const obj = new this.$.$mol_link();
            obj.minimal_height = () => 40;
            obj.minimal_width = () => 40;
            obj.arg = () => ({
                tag: this.tag_id(id),
                article: null,
                edit: null
            });
            obj.title = () => this.tag_name(id);
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
        tag_id(id) {
            return "";
        }
        tag_name(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld_tags_page.prototype, "Tag_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_tags_page.prototype, "Tag_links", null);
    $.$hyoo_realworld_tags_page = $hyoo_realworld_tags_page;
})($ || ($ = {}));
//hyoo/realworld/tags/page/-view.tree/page.view.tree.ts
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
            $mol_mem
        ], $hyoo_realworld_tags_page.prototype, "tags", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld_tags_page.prototype, "tag_links", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_realworld_tags_page.prototype, "tag_id", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_realworld_tags_page.prototype, "tag_name", null);
        $$.$hyoo_realworld_tags_page = $hyoo_realworld_tags_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/realworld/tags/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/tags/page/page.view.css", "[hyoo_realworld_tags_page_tag_links] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: .75rem;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/tags/page/-css/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_sign_in extends $mol_page {
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
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Need_account", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "mail", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Mail", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Mail_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Pass_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "auth", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_in.prototype, "Form", null);
    $.$hyoo_realworld_sign_in = $hyoo_realworld_sign_in;
})($ || ($ = {}));
//hyoo/realworld/sign/in/-view.tree/in.view.tree.ts
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
//hyoo/realworld/sign/in/in.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/sign/in/in.view.css", "[hyoo_realworld_sign_in_submit] {\n\tflex: 0 1 auto;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/sign/in/-css/in.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld_sign_up extends $mol_page {
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
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Close_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Close", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Have_account", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "username", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Username", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Username_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "mail", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Mail", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Mail_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Pass", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Pass_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "reg", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld_sign_up.prototype, "Form", null);
    $.$hyoo_realworld_sign_up = $hyoo_realworld_sign_up;
})($ || ($ = {}));
//hyoo/realworld/sign/up/-view.tree/up.view.tree.ts
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
//hyoo/realworld/sign/up/up.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/sign/up/up.view.css", "[hyoo_realworld_sign_up_submit] {\n\tflex: 0 1 auto;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/sign/up/-css/up.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_realworld extends $mol_book2 {
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
        $mol_mem_key
    ], $hyoo_realworld.prototype, "Article", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld.prototype, "Feed", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_realworld.prototype, "Article_edit", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "Profile", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "Person", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "section", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "feed_current", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "article_current", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "edit_current", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "Home", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "Tags", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "Sign_in", null);
    __decorate([
        $mol_mem
    ], $hyoo_realworld.prototype, "Sign_up", null);
    $.$hyoo_realworld = $hyoo_realworld;
})($ || ($ = {}));
//hyoo/realworld/-view.tree/realworld.view.tree.ts
;
var $node = $node || {} ; $node[ "/hyoo/realworld/logo.png" ] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABoUAAAEBCAYAAAC+OawFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAABcQAAAXEAEYYRHbAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjIx8SBplQAAj9xJREFUeF7t3QecHGX5B/AkgBQpomBDRf9iV1CxcP2SXHoPCb33XtWlqGdDgdu9nstdOgECCSC9ikYREXZm92pyKUAA6VV6Sy7/3xNmcTI8e7c7Zevv+/n8PujdzPu+O3s7l3ufmXeGubF582aGYTIYIiIiIiIiIiIiIqKs0CatGYYJLkREREREREREREREWaFNWjMME1yIiIiIiIiIiIiIiLJCm7T2EiIiIiIiIiIiIiIiIspBWmHHS4iIiIiIiIiIiIiIiCgHaYUdLyEiIiIiIiIiIiIiIqIcpBV2vISIiIiIiIiIiIiIiIhykFbY8RIqXrUr+oaF/rx2l0MWdu9W0xLbberczt1OWda/2+/veHR7axMiIiIiIiIiIiIiIsoWrbDjJVR8fn3bI9NGN8UOLYtEj5g9v3vJ+Nb4iqoGc0VNU2zF9Pbua6e2d/26JBw99LBFvQdddveGva3diIiIiIiIiIiIiIgok7TCjpdQ8Tj92jUzJrTG/zG2JfZiWcR4tTQcfa08YmwqCxubSxH5L/7/AP77dkk4+mp1o/nK+NZ4z/R5PWVWE0RERERERERERERElClaYcdLqLAdtKB7lwlz4qNndnQ9K4Uft6luNIyySLRydFN8T6tpIiIiIiIiIiIiIiIKklbY8RIqXBfctH5aVYMZrqw3X9UKPS7yYlW98Vf8d1+rCyIiIiIiIiIiIiIiCopW2PESKjxVKzcPn9jWNX5cS/yF0rDxrq2o40OiA/jvw8cv7atHdrS6JCIiIiIiIiIiIiIiv2mFHS+hwlMRMSrLI8b6jxZ0/EtVg/ne5Lau8IHzuz5mdUtERERERERERERERH7SCjteQoVj9orNw8Y0x0eVhaMbSsOG3NGjFnT8SmW9+daB87ouPfOGdTtYQyAiIiIiIiIiIiIiIr9ohR0vocJx/g1rR45uij1pLfGmFnL8TnWDuenkZasvtYZARERERERERERERER+0Qo7XkKFYea87u0mtXXeqRVugk5ZOLpubHPsp2cv77dGQ0REREREREREREREnmmFHS+h/DeyITpsXEv8qIp6402taJMsZWHj9aoG87mp7V3PTW7rNKe1d21AO8/h6y/j+xud2ydLecTYNGlOfP4hbT1cRo6IiIiIiIiIiIiIyC9aYcdLKP9VRKI7lIWjN5fWGZu0oo0zFRFj84Q5nfeOb+08fuKceOmFN68vvfyex/b53e2P/PC4K1eV1jTGplY3mH8a3xpPuTBUWW8+M6be/LI1JCIiIiIiIiIiIiIi8kor7HgJ5bfa2tphNc2x6WUR4x2tWOPIQFnY2FjZYPz07Bs37Gw1kdRBC7q/XloX/XOqzyiaPb/7SWtXIiIiIiIiIiIiIiLySivseAnltzOa7thmUlvnlVqRRsnjlRFj5si62Ahr9yFsHlYZMb9TGo7eprSlZkJTdC9rZyIiIiIiIiIiIiIi8kIr7HgJ5beaDnP7kY2mWqBx5tCFvYsr6o2PWbumrKrB2Hvq3C61TWeqGszfWrsREREREREREREREZEXWmHHSyi/HbSwZ0+tOONMedh46aLlq7azdktL7cqVw2qaYrPKlHadKQtHF5+7/IltrF2JiIiIiIiIiIiIiMgtrbDjJZTfZnZ03q4VZ+wpixibq+vjX7Z2cSV047qvjW6KbdDat6emObb+qKV9+1m7ERERERERERERERGRW1phx0sov5WGo0MWhaa3dw2ctmK9p6LQKctW7zBrfvcDQ90thO+vL683WRQiIiIiIiIiIiIiIvJKK+x4CeW3krqhi0LlEXPOxLZuV0vH2VXWm4ejvbec7dtTUmesR1gUIiIiIiIiIiIiIiLySivseAnlt1SKQiVho6EkbG5r7eIa2pqFsChERERERERERERERJQJWmHHSyi/sShERERERERERERERFSgtMKOl1B+S6UoNK4lfv8Ji7o+ae3iyinXrt528tx4Hdp7z9m+PSwKERERERERERERERH5RCvseAnlt5GNxpBFoYqIsXlUa/fXrF1cGd0S27Gi3vi31r492Gbt+JbYvtZuRERERERERERERETkllbY8RLKb6de09+gFWecmdDaudTaxZUJLZ3fL48Yz2ht21PdYN5+ytWrP2XtRkREREREREREREREbmmFHS+h/HbydWv21IozzpRHZBm52NHWbmmZvWLF8FGNsZVa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snZL229uX39GWdh4Xmn3I7ngxnUV1m5EREREREREREREROSFVtjxEspvM+Z13aYVZ7SMbjA+M6mtx9ozNRXh6M5l4ejdWnvOVDeYA9ZuRERERERERERERETklVbY8RLKb7+/c0N1Zb2pFmmcqYgYxqim+A9Hze209h5ceSS+G/ZZjH3fdbal5ZBFvWdZuxIRERERERERERERkVdaYcdLKL9N7jBHjG6KtWlFGiUby8JGtOSyh7508rJ1O9Wu3DzcauZDs1dsHjZl/iPbn3btmtOx/Y1ISgWhae1d756wbNXXrWaIiIiIiIiIiIiIiMgrrbDjJZT/JrTEy8sjxotasUbJQEld9N0D53U/OrW9+9QZ83p2tpoZdsZ1a78/qil2/Jjm+K0V9eYm2daxrxr0vXny3K72o5b2fcxqioiIiIiIiIiIiIiIvNIKO15C+e+ghd07jG+NX18aNqSQoxZutJRHsH1dtK+kLhqXVNWbT5cp2w0VtPPIjHldIy+595GP3HlEREREREREREREREQuaYUdL6H8d8TSrmGV9cY+VQ1mXCvaBBkpIk2Z2zm3qnUlC0JERERERERERERERH7SCjteQoXj0MW9R1XW68WboFIeMRpmLOr+cAk6IiIiIiIiIiIiIiLyiVbY8RIqHLNr+7YZ0xS7qDxivFaa4vOAPOT9UY3mHWOb+nawuiciIiIiIiIiIiIiIj9phR0vocKy/9lrho9qNM+rajCfUQo5vqQkHB0oC0cXnXTVqlGX3bOBy8YREREREREREREREQVBK+x4CRWeyfO6PnbEkt4zRzWZm7SijpeURYzNoxtj7WV/emDX2bNXWD0SEREREREREREREZHvtMKOl1Bhmr1ixfDZK3q3rYwY91XWm56XkyuPGAMVEePho6/oW4q2R1jdEBERERERERERERFRULTCjpdQYTvqit7PzOzoPr0iYrRPautUCz6DpTyyJXePbYnPPWhe98hpDZ0sCBERERERERERERERZYJW2PESKnynL+/ftrrB2PGopb0/nNbeObc8En27NBx9D0l299Am+f7UuZ2vnXrN6gurmrs+PX1+746X3PwIC0JERERERERERERERJmiFXa8hIrTeTes+/xRV/TVVYSjHaV1/8u0eZ0dF968/meRe5/4hLUpERERERERERERERFlg1bY8RIiIiIiIiIiIiIiIiLKQVphx0uIiIiIiIiIiIiIiIgoB2mFHS8hIiIiIiIiIiIiIiKiHKQVdhiGyZ8QEREREREREREREaVEm2RmGCZ/QkRERERERERERETFZtiw/wdit3hRc/GcCwAAAABJRU5ErkJggg=="

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
                return this.$.$mol_state_arg.value('section', next) ?? '';
            }
            person(next) {
                return this.$.$mol_state_arg.value('person', next) ?? '';
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
            $mol_mem
        ], $hyoo_realworld.prototype, "article", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld.prototype, "edit", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld.prototype, "tag", null);
        __decorate([
            $mol_mem
        ], $hyoo_realworld.prototype, "section", null);
        $$.$hyoo_realworld = $hyoo_realworld;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/realworld/realworld.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/realworld/realworld.view.css", "[hyoo_realworld] {\n\t--mol_theme_control: #367c36;\n}\n\n[hyoo_realworld] [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: #5cb85c;\n\ttext-shadow: 0 1px 3px rgba(0,0,0,.3);\n}\n\n[hyoo_realworld_tags] {\n\tflex: 0 0 10rem;\n}\n\n[hyoo_realworld_sign_in] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_realworld_sign_up] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_realworld_person_page] {\n\tflex: 0 0 20rem;\n}\n\n\n[hyoo_realworld_home_page] {\n\tflex: 0 0 20rem;\n}\n\n[hyoo_realworld_feed] {\n\tflex: 0 0 30rem;\n}\n\n[hyoo_realworld_article] ,\n[hyoo_realworld_article_edit] {\n\tflex: 0 0 50rem;\n}\n");
})($ || ($ = {}));
//hyoo/realworld/-css/realworld.view.css.ts

export default $
//# sourceMappingURL=web.js.map
