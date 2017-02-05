/**
 * Created by magiclizi on 2017/2/5.
 */
var multer = require('./multerUtil');
//multer有single()中的名称必须是表单上传字段的name名称。
var upload=multer.single('userCre');
exports.dataInput = function (req, res) {
    upload(req, res, function (err) {
        //添加错误处理
        if (err) {
            return console.log(err);
        }
        //文件信息在req.file或者req.files中显示。
        var filename = req.file['filename'];
        var fileUrl = `http://139.196.210.143:7777/uploads/${filename}`;
        console.log(`上传文件信息：`);
        console.log(req.file)
        console.log(`文件url:${fileUrl}`);
        var uploadResult = {
            fileUrl:fileUrl
        }
        res.send(uploadResult);
    });
}