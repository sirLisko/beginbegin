import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdGroup from 'react-icons/lib/md/group';

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
        .icon(MdSettings),
      S.listItem()
        .title('Manifesto')
        .child(
          S.editor()
            .id('manifesto')
            .schemaType('manifesto')
            .documentId('manifesto'),
        )
        .icon(MdGroup),
      S.listItem()
        .title('Production')
        .child(
          S.editor()
            .id('production')
            .schemaType('production')
            .documentId('production'),
        )
        .icon(MdGroup),
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId()),
      ),
    ]);
