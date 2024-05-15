'use strict';

/**
 * check-jwt controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::check-jwt.check-jwt');
