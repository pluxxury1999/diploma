'use strict';

/**
 * gamemode router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::gamemode.gamemode', {
    config: {
        find: {
            middlewares: ['api::gamemode.populate'],
        },
        findOne: {
            middlewares: ['api::gamemode.populate'],
        }
    }
});
