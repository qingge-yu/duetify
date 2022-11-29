// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Instrument = require('./models/instrument')
const Style = require('./models/style')
const Piece = require('./models/piece')

// Local variables will come in handy for holding retrieved documents
let user, instrument, style, piece;
let users, instruments, styles, pieces;
