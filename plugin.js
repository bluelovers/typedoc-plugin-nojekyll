"use strict";
/**
 * Created by user on 2018/4/22/022.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const FS = require("fs-extra");
//import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
const components_1 = require("typedoc/dist/lib/output/components");
const events_1 = require("typedoc/dist/lib/output/events");
let NoJekyllTypeDocPlugin = class NoJekyllTypeDocPlugin extends components_1.RendererComponent {
    initialize() {
        //console.log(3, NoJekyllTypeDocPlugin.PLUGINID);
        this.listenTo(this.owner, {
            [events_1.RendererEvent.BEGIN]: this.onRendererBegin
        });
    }
    onRendererBegin(event) {
        //console.log(4, NoJekyllTypeDocPlugin.PLUGINID);
        const nojekyll = Path.join(event.outputDirectory, '.nojekyll');
        FS.ensureFile(nojekyll);
    }
};
NoJekyllTypeDocPlugin.PLUGINID = 'nojekyll';
NoJekyllTypeDocPlugin = __decorate([
    components_1.Component({ name: 'nojekyll' })
], NoJekyllTypeDocPlugin);
exports.NoJekyllTypeDocPlugin = NoJekyllTypeDocPlugin;
exports.default = NoJekyllTypeDocPlugin;
