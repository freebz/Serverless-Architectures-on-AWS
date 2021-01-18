# 목록 6.2 create-function 명령의 실제 예제

aws lambda create-function --function-name cli-function --handler \
    index.handler --memory-size 128 --runtime nodejs4.3 --role \
    arn:aws:iam::038221756127:role/lambda-s3-execution-role --timeout 3 \
    --zip-file fileb://index.zip --publish
