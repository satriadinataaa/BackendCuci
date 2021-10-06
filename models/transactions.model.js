export const transactions = (sequelize, Sequelize) => {
  const Transactions = sequelize.define('transactions', {
    id_transaction: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    laundry_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    laundry_status_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    payment_status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    payment_link: {
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
  return Transactions;
};
