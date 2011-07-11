

var Func = (function() {

    var each = function(array, fn) {
        for (var i = 0, len = array.length; i < len; ++i) {
            fn.call(this, array[i]);
        }
        return this;
    };

    var map = function(array, fn) {
        var results = [];
        each(array, function(item) {
            results.push(fn.call(this, item));
        });
        return results;
    };

    var reduce = function(array, seed, fn) {
        each(array, function(item) {
            seed = fn.call(this, seed, item);
        });
        return seed;
    };

    return {
        each: each,
        map: map,
        reduce: reduce
    }

})();
