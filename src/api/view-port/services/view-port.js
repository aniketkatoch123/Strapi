'use strict';

/**
 * view-port service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::view-port.view-port');
