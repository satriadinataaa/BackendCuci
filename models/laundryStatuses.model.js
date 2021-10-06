export const laundryStatuses = (sequelize, Sequelize) => {
  const LaundryStatuses = sequelize.define('laundry_statuses', {
    id_laundry_status: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
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
  },
  {
    timestamps: false,
  });
  return LaundryStatuses;
};
