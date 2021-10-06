export const user = {
  type: 'object',
  required: ['email', 'password', 'name', 'role'],
  properties: {
    email: {
      type: 'string',
      minLength: 1,
      isEmail: true,
    },
    password: {
      type: 'string',
      minLength: 1,
    },
    name: {
      type: 'string',
      minLength: 1,
    },
    role: {
      type: 'integer',
      minimum: 1,
    },

  },
};
