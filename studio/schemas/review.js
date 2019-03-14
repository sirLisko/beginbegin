import Icon from 'react-icons/lib/md/grade';

export default {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Snippet',
      name: 'snippet',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(data) {
      return {
        ...data,
        title: data.title,
      };
    },
  },
};
