'use strict';

/**
 * check-jwt router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::check-jwt.check-jwt');
