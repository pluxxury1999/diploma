'use strict';

/**
 * check-jwt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::check-jwt.check-jwt');
