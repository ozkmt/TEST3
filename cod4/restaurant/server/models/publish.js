/**
 * 作品上传
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var PublishSchema = new Schema({   
        username:{ type: String },//昵称
        sid:{ type: String },//账号
        // p_id:{type: String},//作品号
        p_title:{ type: String },//标题
        img_cover:{ type: String },//封面
        p_describe:{ type: String },//介绍
        p_contain:[Schema.Types.Mixed],//内容
        p_date:{type: String},//日期
        p_zan:{type:Number},//点赞数
        p_comment:[Schema.Types.Mixed]//评论
});

module.exports = mongoose.model('Publish',PublishSchema);