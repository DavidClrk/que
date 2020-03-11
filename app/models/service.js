var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
  name: {type: String, required: true, unique: true },
  first: {type: Number, required: true},
  last: {type: Number, required: true},
  current: {type: Number},
  issued: {type: Number},
  created_at: Date,
  updated_at: Date
});

serviceSchema.pre('save', function(next) {
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

/*serviceSchema.pre('update', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  next();
});*/

var Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
