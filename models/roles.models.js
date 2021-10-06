export const roles = (sequelize, Sequelize) => {
  const roles = sequelize.define('roles', {
    id_role: {
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
    deleted: {
      type: Sequelize.TINYINT,
    },
  },
  {
    timestamps: false,
  });
  return roles;
};
