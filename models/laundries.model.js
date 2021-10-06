export const laundries = (sequelize, Sequelize) => {
  const Laundries = sequelize.define('laundries', {
    id_laundry: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    display_price: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    photos_url: {
      type: Sequelize.JSON,
    },
    contact_person: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    deleted: {
      type: Sequelize.TINYINT,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id_user',
      },
    },
  },
  {
    timestamps: false,
  });
  return Laundries;
};
