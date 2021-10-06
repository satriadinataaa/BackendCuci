export const transaction = {
  type: 'object',
  required:
    ['user_id', 'laundry_id', 'total_price', 'payment_status',
      'payment_link', 'laundry_status_id'],
  properties: {
    user_id: {
      type: 'integer',
    },
    laundry_id: {
      type: 'integer',
    },
    total_price: {
      type: 'integer',
      minLength: 1,
    },
    payment_status: {
      type: 'string',
      minLength: 1,
    },
    payment_link: {
      type: 'string',
      minLength: 1,
    },
    laundry_status_id: {
      type: 'integer',
    },
  },
};
