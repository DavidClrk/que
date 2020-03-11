var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tokenSchema = new Schema({
  number: {type: Number, required: true },
  service: {type: String, required: true},
  counter: {type: Number},
  user: {type: String},
  issued_at: Date,
  called_at: Date
});

tokenSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // if created_at doesn't exist, add to that field
  if (!this.issued_at)
    this.issued_at = currentDate;

  next();
});

/*serviceSchema.pre('update', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  next();
});*/

var Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
