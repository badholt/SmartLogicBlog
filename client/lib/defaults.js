const defaults = {

};

_.each(defaults, function(value, key) {
    Session.setDefault(key, value);
});
