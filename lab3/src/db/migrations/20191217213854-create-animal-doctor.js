'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Animal_Doctor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animalId: {
        type: Sequelize.INTEGER,
        field: 'animal_id'
      },
      doctorId: {
        type: Sequelize.INTEGER,
        field: 'doctor_id'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Animal_Doctor');
  }
};
