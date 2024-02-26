exports.up = function (knex) {
  return knex.schema.createTable("webinars", function (table) {
    table.increments("id");
    table.string("title").notNullable();
    table.string("guestSpeaker").notNullable();
    table.string("description");
    table.string("zoomLink");
    table.string("time");
    table.string("date");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("webinars");
};
