# 목록 G.29 CloudFormation 패키지

aws cloudformation package \
    --template-file sam_template.yaml \
    --output-template-file sam_processed.yaml \
    --s3-bucket serverless-artifacts
