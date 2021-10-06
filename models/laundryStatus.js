export const laundryStatus = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
    },
  },
};
