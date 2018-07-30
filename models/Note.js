var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method - "Note" then gets pluralized and switched to lower case. see 'notes' in the db
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
