import S from '@sanity/desk-tool/structure-builder';
import IconSettings from 'react-icons/lib/fa/cog';
import IconProduction from 'react-icons/lib/fa/bullhorn';
import IconManifesto from 'react-icons/lib/fa/quote-left';

const hiddenTypes = ['siteSettings', 'manifesto', 'production'];

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        )
        .icon(IconSettings),
      S.listItem()
        .title('Manifesto')
        .child(
          S.editor()
            .id('manifesto')
            .schemaType('manifesto')
            .documentId('manifesto'),
        )
        .icon(IconManifesto),
      S.listItem()
        .title('Production')
        .child(
          S.editor()
            .id('production')
            .schemaType('production')
            .documentId('production'),
        )
        .icon(IconProduction),
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId()),
      ),
    ]);
