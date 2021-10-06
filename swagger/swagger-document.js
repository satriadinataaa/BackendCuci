export const swaggerDocument = {

  'openapi': '3.0.1',
  'info': {
    'title': 'Cuciin API',
    'description': 'Collection of cuciin api',
    'contact': {
      'email': 'rizkipratama0602@gmail.com.com',
    },
    'license': {
      'name': 'MIT',
      'url': 'https://opensource.org/licenses/MIT',
    },
    'version': '1.0.0',
  },
  'tags': [
    {
      'name': 'Ping',
      'description': 'Connection Test',
    },
    {
      'name': 'User',
      'description': 'Operations about user',
    },
    {
      'name': 'Laundry',
      'description': 'Operations about laundry',
    },
    {
      'name': 'Transaction',
      'description': 'Operations about transaction',
    },
  ],
  'paths': {
    '/': {
      'get': {
        'tags': [
          'Ping',
        ],
        'summary': 'Connection Test',
        'operationId': 'Test',
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'application/json': {
                'type': 'string',
              },
            },
          },
        },
      },
    },
    '/users': {
      'get': {
        'tags': [
          'User',
        ],
        'summary': 'Get All users',
        'operationId': 'getAllUsers',
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/User',
                },
              },
            },
          },
        },
      },
      'post': {
        'tags': [
          'User',
        ],
        'summary': 'Create a User',
        'operationId': 'createUser',
        'requestBody': {
          'description': 'Created user object',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/User',
              },
            },
          },
          'required': true,
        },
        'responses': {
          '201': {
            'description': 'User created successfully',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/UserCreated',
                },
              },
            },
          },
          '400': {
            'description': 'Invalid payload supplied',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/users/id/{user_id}': {
      'get': {
        'tags': [
          'User',
        ],
        'summary': 'Get User by User Id',
        'operationId': 'getUserById',
        'parameters': [
          {
            'name': 'user_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/User',
              },
            },
          },
        },
      },
    },
    '/users/name': {
      'get': {
        'tags': [
          'User',
        ],
        'summary': 'Get User by Name',
        'operationId': 'getUserByName',
        'requestBody': {
          'description': 'Get User by Name',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'name': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/User',
              },
            },
          },
        },
      },
    },
    '/users/{user_id}': {
      'put': {
        'tags': [
          'User',
        ],
        'summary': 'Update User by User Id',
        'operationId': 'updateUserById',
        'parameters': [
          {
            'name': 'user_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'requestBody': {
          'description': 'Update user object',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/User',
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/User',
              },
            },
          },
        },
      },
      'delete': {
        'tags': [
          'User',
        ],
        'summary': 'Delete User by User Id',
        'operationId': 'deleteUserById',
        'parameters': [
          {
            'name': 'user_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/UserDeleted',
              },
            },
          },
        },
      },
    },
    '/laundries': {
      'get': {
        'tags': [
          'Laundry',
        ],
        'summary': 'Get All laundries',
        'operationId': 'getAllLaundries',
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Laundry',
                },
              },
            },
          },
        },
      },
      'post': {
        'tags': [
          'Laundry',
        ],
        'summary': 'Create a Laundry',
        'operationId': 'createLaundry',
        'requestBody': {
          'description': 'Created laundry object',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Laundry',
              },
            },
          },
          'required': true,
        },
        'responses': {
          '201': {
            'description': 'Laundry created successfully',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/LaundryCreated',
                },
              },
            },
          },
          '400': {
            'description': 'Invalid payload supplied',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/laundries/{laundry_id}': {
      'get': {
        'tags': [
          'Laundry',
        ],
        'summary': 'Get Laundry by Laundry Id',
        'operationId': 'getLaundryById',
        'parameters': [
          {
            'name': 'laundry_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/Laundry',
              },
            },
          },
        },
      },
      'put': {
        'tags': [
          'Laundry',
        ],
        'summary': 'Update Laundry by Laundry Id',
        'operationId': 'updateLaundryById',
        'parameters': [
          {
            'name': 'laundry_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'requestBody': {
          'description': 'Update laundry object',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Laundry',
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/Laundry',
              },
            },
          },
        },
      },
      'delete': {
        'tags': [
          'Laundry',
        ],
        'summary': 'Delete Laundry by Laundry Id',
        'operationId': 'deleteLaundryById',
        'parameters': [
          {
            'name': 'laundry_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/LaundryDeleted',
              },
            },
          },
        },
      },
    },
    '/transactions': {
      'post': {
        'tags': [
          'Transaction',
        ],
        'summary': 'Create a Transaction',
        'operationId': 'createTransaction',
        'requestBody': {
          'description': 'Created transaction object',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Transaction',
              },
            },
          },
          'required': true,
        },
        'responses': {
          '201': {
            'description': 'Transaction created successfully',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/TransactionCreated',
                },
              },
            },
          },
          '400': {
            'description': 'Invalid payload supplied',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/transactions/laundry/{laundry_id}': {
      'get': {
        'tags': [
          'Transaction',
        ],
        'summary': 'Get Transaction by Laundry Id',
        'operationId': 'getTransactionByLaundryId',
        'parameters': [
          {
            'name': 'laundry_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/TransactionSuccessResponse',
              },
            },
          },
        },
      },
    },
    '/transactions/{transaction_id}': {
      'get': {
        'tags': [
          'Transaction',
        ],
        'summary': 'Get Transaction by Transaction Id',
        'operationId': 'getTransactionById',
        'parameters': [
          {
            'name': 'transaction_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/Transaction',
              },
            },
          },
        },
      },
      'put': {
        'tags': [
          'Transaction',
        ],
        'summary': 'Update Transaction by Transaction Id',
        'operationId': 'updateTransactionById',
        'parameters': [
          {
            'name': 'transaction_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'requestBody': {
          'description': 'Update transaction object',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Transaction',
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/Transaction',
              },
            },
          },
        },
      },
      'delete': {
        'tags': [
          'Transaction',
        ],
        'summary': 'Delete Transaction by Transaction Id',
        'operationId': 'deleteTransactionsById',
        'parameters': [
          {
            'name': 'transaction_id',
            'in': 'path',
            'required': true,
            'type': 'string',
          },
        ],
        'responses': {
          '200': {
            'description': 'Successful operation',
            'content': {
              'schema': {
                '$ref': '#/components/schemas/TransactionDeleted',
              },
            },
          },
        },
      },
    },
  },
  'components': {
    'schemas': {
      'User': {
        'type': 'object',
        'properties': {
          'email': {
            'type': 'string',
            'example': 'satriadinata2@gmail.com',
          },
          'password': {
            'type': 'string',
          },
          'name': {
            'type': 'string',
          },
          'role': {
            'type': 'integer',
            'format': 'int64',
            'default': '1',
          },
        },
      },
      'UserSuccessResponse': {
        'type': 'array',
        'items': {
          '$ref': '#/components/schemas/User',
        },
      },
      'UserCreated': {
        'type': 'object',
        'properties': {
          'message': {
            'type': 'string',
            'example': 'user username created!',
          },
        },
      },
      'UserDeleted': {
        'type': 'object',
        'properties': {
          'message': {
            'type': 'string',
            'example': 'user username deleted!',
          },
        },
      },
      'Error': {
        'type': 'object',
        'properties': {
          'error': {
            'type': 'string',
          },
        },
      },
      'Laundry': {
        'type': 'object',
        'properties': {
          'name': {
            'type': 'string',
          },
          'address': {
            'type': 'string',
          },
          'description': {
            'type': 'string',
          },
          'latitude': {
            'type': 'string',
          },
          'longitude': {
            'type': 'string',
          },
          'display_price': {
            'type': 'integer',
            'format': 'int64',
          },
          'photos_url': {
            'type': 'string',
          },
          'contact_person': {
            'type': 'string',
          },
          'deleted': {
            'type': 'integer',
            'format': 'int32',
            'default': 0,
          },
          'user_id': {
            'type': 'integer',
            'format': 'int64',
          },
        },
      },
      'LaundrySuccessResponse': {
        'type': 'array',
        'items': {
          '$ref': '#/components/schemas/Laundry',
        },
      },
      'LaundryCreated': {
        'type': 'object',
        'properties': {
          'message': {
            'type': 'string',
            'example': 'laundry created!',
          },
        },
      },
      'LaundryDeleted': {
        'type': 'object',
        'properties': {
          'message': {
            'type': 'string',
            'example': 'laundry deleted!',
          },
        },
      },
      'Transaction': {
        'type': 'object',
        'properties': {
          'user_id': {
            'type': 'integer',
            'format': 'int64',
          },
          'laundry_id': {
            'type': 'integer',
            'format': 'int64',
          },
          'laundry_status_id': {
            'type': 'integer',
            'format': 'int64',
          },
          'total_price': {
            'type': 'integer',
            'format': 'int64',
          },
          'payment_status': {
            'type': 'string',
          },
          'payment_link': {
            'type': 'string',
          },
        },
      },
      'TransactionSuccessResponse': {
        'type': 'array',
        'items': {
          '$ref': '#/components/schemas/Transaction',
        },
      },
      'TransactionCreated': {
        'type': 'object',
        'properties': {
          'message': {
            'type': 'string',
            'example': 'transaction created!',
          },
        },
      },
      'TransactionDeleted': {
        'type': 'object',
        'properties': {
          'message': {
            'type': 'string',
            'example': 'transaction deleted!',
          },
        },
      },
    },
  },
};
