"use strict";

const populate = {
  user: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In user-statistic-populate middleware.");

    const sort = "rating:desc";
    const page = 1;
    const pageSize = 10;

    ctx.query = {
      ...ctx.query,
      populate,
      sort,
      pagination: {
        page,
        pageSize,
      },
    };

    await next();
  };
};
