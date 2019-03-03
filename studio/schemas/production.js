import Icon from "react-icons/lib/md/group";

export default {
  name: "production",
  title: "Production",
  type: "document",
  icon: Icon,
  fields: [
    {
      name: "writer",
      title: "Writer",
      type: "string"
    },
    {
      name: "director",
      title: "Director",
      type: "string"
    },
    {
      name: "costumes",
      title: "Costumes",
      type: "string"
    },
    {
      title: "Cast",
      name: "cast",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    }
  ]
};
