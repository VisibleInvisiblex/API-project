"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "EventImages";
    await queryInterface.bulkInsert(options, [
      {
        eventId: 1,
        url: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=eneko-urunuela-I2YSmEUAgDY-unsplash.jpg",
        preview: true,
      },
      {
        eventId: 2,
        url: "https://example.com/image12.jpg",
        preview: false,
      },
      {
        eventId: 3,
        url: "https://example.com/image13.jpg",
        preview: false,
      },
      {
        eventId: 2,
        url: "https://example.com/image14.jpg",
        preview: true,
      },
      {
        eventId: 1,
        url: "https://example.com/image10.jpg",
        preview: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "EventImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        url: {
          [Op.in]: [
            "https://example.com/image11.jpg",
            "https://example.com/image12.jpg",
            "https://example.com/image13.jpg",
            "https://example.com/image14.jpg",
            "https://example.com/image10.jpg",
          ],
        },
      },
      {}
    );
  },
};
