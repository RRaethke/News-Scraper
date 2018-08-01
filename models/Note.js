var mongoose = require("mongoose");

// save a reference to the Schema constructor
var Schema = mongoose.Schema;

// create a new note schema
var NoteSchema = new Schema({
  body: {
    type: String,
    required: true,
    trim: true
  }
});

// create model
var Note = mongoose.model("note", NoteSchema);

// export the model
module.exports = Note;