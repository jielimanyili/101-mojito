/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('myMojit', function(Y, NAME) {

/**
 * The myMojit module.
 *
 * @module myMojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.done('Hello, world. I have created my first Mojito app at ' + (new Date()) + '.');
            // ac.models.myMojitModelFoo.getData(function(err, data) {
            //     if (err) {
            //         ac.error(err);
            //         return;
            //     }
            //     ac.assets.addCss('./index.css');
            //     ac.done({
            //         status: 'Mojito is working.',
            //         data: data
            //     });
            // });
        }

    };

}, '0.0.1', {requires: ['mojito', 'myMojitModelFoo']});
