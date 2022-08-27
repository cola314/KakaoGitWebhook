# KakaoGitWebhook

**깃 서비스에 푸시할때 카톡 알림을 받기 위한 챗봇 서비스**

### 지원 깃 서비스
- GitHub
- Gitea

### 사용법
1. 깃 웹훅에서 `Content type`을 `application/json`으로 설정
2. `Payload URL`은 카톡방 이름이 ㅎㅇㅎㅇ라면 -> /api/webhook/ㅎㅇㅎㅇ
3. `Secret` 설정 (Optional)

### 주의사항
- 깃허브의 경우 `Payload URL`에 한글을 포함할 수 없으므로 URI 인코딩해준다
- ㅎㅇㅎㅇ라면 -> /api/webhook/%E3%85%8E%E3%85%87%E3%85%8E%E3%85%87

### API

#### Request

- `POST /api/webhook/{room}`

| Parameter | Description  |
| --------- | ------------ |
| room      | 카톡 방 이름 |

#### Response

| Status Code     | Description      |
| --------------- | ---------------- |
| 400 Bad Request | secret 인증 실패 |
| 200 OK          | 성공             |

### 환경변수

| 이름                   | 설명                     | 예시                                   |
| ---------------------- | ------------------------ | -------------------------------------- |
| `KAKAO_BOT_SERVER_API` | 챗봇 서버 API            | `"https://localhost/api/message/push"` |
| `KAKAO_BOT_API_KEY`    | 챗봇 API KEY             | `"key1234"`                            |
| `USE_SECRET`           | Webhook Secret 사용 여부 | `"true"`                               |
| `SECRET`               | Webhook Secret           | `"secret1234"`                         |
