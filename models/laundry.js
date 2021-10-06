export const laundry = {
  type: 'object',
  required: ['name', 'address', 'latitude', 'longitude',
    'display_price', 'user_id'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
    },
    address: {
      type: 'string',
      minLength: 1,
    },
    latitude: {
      type: 'string',
      minLength: 1,
    },
    longitude: {
      type: 'string',
      minimum: 1,
    },
    display_price: {
      type: 'number',
      minimum: 1,
    },
    user_id: {
      type: 'integer',
    },
  },
};
