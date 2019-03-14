import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import review from "./review";
import siteSettings from "./siteSettings";
import production from "./production";
import show from "./show";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    production,
    show,
    review,
    siteSettings

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
});
