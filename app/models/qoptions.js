var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var qOptionsSchema = new Schema({
  key: {type: String, required: true, unique: true },
  value: {type: String},
  created_at: Date,
  updated_at: Date
});

qOptionsSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  if (!this.current)
    this.current = 0;

  if (!this.issued)
    this.issued = 0;

  next();
});

var QOptions = mongoose.model('QOptions', qOptionsSchema);

module.exports = QOptions;
