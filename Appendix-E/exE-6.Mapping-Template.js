// 목록 E.6 오류 조건을 위한 매핑 템플릿

#set ($message = $util.parseJson($input.path('$.errorMessage')))
{
  "code" : "$message.code",
  "message" : $message.message,
  "encoding" : "$message.encoding"
}
