import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import review from './review';
import siteSettings from './siteSettings';
import production from './production';
import person from './person';
import manifesto from './manifesto';
import show from './show';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    production,
    person,
    show,
    review,
    siteSettings,
    manifesto,
  ]),
});
