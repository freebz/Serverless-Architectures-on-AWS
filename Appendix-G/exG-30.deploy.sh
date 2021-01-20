# 목록 G.30 CloudFormation 배포

aws cloudformation deploy \
    --template-file sam_template.yaml \
    --stack-name serverless-upload-stackB \
    --capabilities CAPABILITY_IAM
