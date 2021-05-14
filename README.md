# Kakao-Git-Webhook

*  깃서버에 푸시할때 카톡 알림을 받기 위한 서버

### 정보
-   주소 : http://cpplove.iptime.org:9203/api/webhook/{room}
-  POST
- Content type : JSON
- room은 카톡 알림을 받을 카톡방 이름

### 사용법
1. 깃 웹훅에서 Content type을 JSON으로 설정
2. 주소 설정은 카톡방 이름이 ㅎㅇㅎㅇ라면 -> http://cpplove.iptime.org:9203/api/webhook/ㅎㅇㅎㅇ
