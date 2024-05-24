'use strict';

/**
 * user-statistic router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-statistic.user-statistic', {
    config: {
        find: {
            middlewares: ['api::user-statistic.populate'],
        },
        findOne: {
            middlewares: ['api::user-statistic.populate-top'],
        }
    }
});
