module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    position: {
      type: 'string',
      required: true
    },
    salary: {
      type: 'string',
      required: true
    }
  },
  datastore: 'default'
};
