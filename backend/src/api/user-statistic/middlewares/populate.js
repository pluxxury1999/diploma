"use strict";

const populate = {
  user: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In user-statistic-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
