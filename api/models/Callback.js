module.exports = {
  attributes: {
    applicationID: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    callback: {
      type: 'string',
      required: true
    }
  },
  datastore: 'default'
};
