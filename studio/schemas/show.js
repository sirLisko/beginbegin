import Icon from 'react-icons/lib/md/event';

export default {
  name: 'show',
  title: 'Shows',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'where',
      title: 'Where',
      type: 'string',
    },
    {
      name: 'when',
      title: 'When',
      type: 'string',
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'date',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      where: 'where',
      note: 'note',
    },
    prepare(data) {
      return {
        ...data,
        title: data.title || data.where || data.note,
        subtitle: data.where,
      };
    },
  },
};
