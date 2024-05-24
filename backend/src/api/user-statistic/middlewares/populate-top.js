"use strict";

const populate = {
  user: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In user-statistic-populate middleware.");

    // Сортировка и пагинация из URL
    const sort = "totalGames:desc";
    const page = 1;
    const pageSize = 10;

    // Объединение параметров в запрос
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
