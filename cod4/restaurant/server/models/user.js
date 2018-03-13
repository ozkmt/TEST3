/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({   
        username:{ type: String },
        phone:{ type: String },
        email:{ type: String },
        password:{ type: String },
        school:{ type: String },
        major:{ type: String }
});

module.exports = mongoose.model('User',UserSchema);