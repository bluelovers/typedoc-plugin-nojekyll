"use strict";
/**
 * Created by user on 2018/4/22/022.
 */
const plugin_1 = require("./plugin");
module.exports = (PluginHost, td) => {
    const app = PluginHost.owner;
    //app.converter.addComponent('markdown', MyTypeDocPlugin);
    app.application.renderer.addComponent(plugin_1.default.PLUGINID, plugin_1.default);
};
