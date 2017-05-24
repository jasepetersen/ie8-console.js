(function(cn) {
    // test if we can augment the console with any of the supported functions
    var augment = false;
    var supported = ["assert","clear","count","error","group","groupCollapsed","groupEnd","info","log","time","timeEnd","warn"];
    for (var i = 0, n = supported.length; i < n && !augment; i ++) {
        var fn = supported[i];
        if (!cn[fn]) augment = true;
    }

    // poly fill the unsupported functions, even if we can't augment the console
    var noop = function(){};
    var unsupported = ["debug","dir","dirxml","exception","msIsIndependentlyComposed","profile","profileEnd","select","table","timeStamp","trace"];
    for (var i = 0, n = unsupported.length; i < n; i++) {
        var fn = unsupported[i];
        if (!cn[fn]) cn[fn] = noop;
    }

    if (!augment) {
        cn.display = noop;
    } else {
        var _container = document.createElement("div");
        _container.id = "ie8-console";
        var _root = document.createElement("ol");
        _container.appendChild(_root);

        cn.display = function(opts) {
            document.body.appendChild(_container);
        }

        var _console = _root, _counts = {}, _times = {}, _time;

        var _msg = function(clazz, obj, args) {
            var el = document.createElement("li");
            if (typeof clazz === "string") {
                el.className = clazz;
            }
            if (typeof obj === "string") {
                el.innerHTML = obj;
            }
            _console.appendChild(el);
        }

        if (!cn.log) {
            cn.log = function(obj) {
                var args = [];
                if (arguments && arguments.length > 1) {
                    args = Array.prototype.slice(arguments,1);
                }
                _msg("ie8-console-log", obj, args);
            }
        }

        if (!cn.error) {
            cn.error = function(obj) {
                var args = [];
                if (arguments && arguments.length > 1) {
                    args = Array.prototype.slice(arguments,1);
                }
                _msg("ie8-console-error", obj, args);
            }
        }

        if (!cn.assert) {
            cn.assert = function(expression, obj) {
                if (!expression) {
                    cn.error(obj);
                }
            }
        }

        if (!cn.clear) {
            cn.clear = function() {
                while (_root.firstChild) {
                    _root.removeChild(_root.firstChild);
                }
                _console = _root;
            }
        }

        if (!cn.count) {
            cn.count = function(label) {
                if (label && typeof label === "string") {
                    if (!_counts[label]) {
                        _counts[label] = 0;
                    }
                    _counts[label]++;
                    cn.log(label + ": " + _counts[label]);
                }
            }
        }

        if (!cn.group) {
            cn.group = function(obj) {
                _msg("ie8-console-group",obj);
                // TODO set up nesting by reassigning _console
            }
        }

        if (!cn.groupCollapsed) {
            cn.groupCollapsed = function(obj) {
                _msg("ie8-console-group-collapsed",obj);
                // TODO set up nesting by reassigning _console
            }
        }

        if (!cn.groupEnd) {
            cn.groupEnd = function() {
                // TODO restore prior _console
            }
        }

        if (!cn.info) {
            cn.info = function(obj) {
                var args = [];
                if (arguments && arguments.length > 1) {
                    args = Array.prototype.slice(arguments,1);
                }
                _msg("ie8-console-info", obj, args);
            }
        }

        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            }
        }

        if (!cn.time) {
            cn.time = function(label) {
                if (typeof label === "string") {
                    _times[label] = Date.now();
                } else {
                    time = Date.now();
                }
            }
        }
        
        if (!cn.timeEnd) {
            cn.timeEnd = function(label) {
                var then = (typeof label === "string") ? _times[label] : time;
                if (then) {
                    var diff = (typeof label === "string") ? label : "default";
                    diff += ": " + (Date.now() - then).toFixed(3) + "ms";
                    cn.log(diff);
                }
                if (typeof label === "string") {
                    delete _times[label];
                }
                time = undefined;
            }
        }

        if (!cn.warn) {
            cn.warn = function(obj) {
                var args = [];
                if (arguments && arguments.length > 1) {
                    args = Array.prototype.slice(arguments,1);
                }
                _msg("ie8-console-warn", obj, args);
            }
        }
    }
})(window.console = window.console || {});
