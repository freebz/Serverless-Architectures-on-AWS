// 목록 8.10 비디오 목록 Lambda 함수

var params = {Bucket: process.env.BUCKET, Key: file.Key};
var url = s3.getSignedUrl('getObject', params);

files.push({
    'filename': url,
    'eTag': file.ETag.replace(/"/g,""),
    'size': file.Size
});
