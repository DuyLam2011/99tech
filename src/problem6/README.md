## Overview

The service manages user scores, provides real-time updates, and ensures security against unauthorized score manipulation.

## Features

- Real-time scoreboard displaying the top 10 user scores.
- Secure API for updating scores.
- Live updates using WebSockets.
- Rate limiting to prevent abuse.
- Secure authentication with JWT.

## API Endpoints

### 1. Submit Score Update

**Endpoint:** `POST /api/score/update`

**Description:** Updates the user's score when they complete an action.

**Request Headers:**

```json
{
	"Authorization": "Bearer <JWT_TOKEN>",
	"Content-Type": "application/json"
}
```

**Request Body:**

```json
{
	"userId": "string",
	"actionId": "string"
}
```

**Response:**

```json
{
	"message": "Score updated successfully",
	"newScore": 1600
}
```

- **200 OK** – Score updated successfully
- **400 Bad Request** – Invalid input
- **401 Unauthorized** – Authentication failed
- **429 Too Many Requests** – Rate limit exceeded
- **500 Internal Server Error** – Server error

### 2. Retrieve Top 10 Scores

**Endpoint:** `GET /api/score/top10`

**Description:** Retrieves the current top 10 user scores.

**Response:**

```json
{
	"topScores": [
		{ "userId": "user1", "score": 1500 },
		{ "userId": "user2", "score": 1450 },
		{ "userId": "user3", "score": 1400 }
	]
}
```

### 3. WebSocket for Live Updates

**Endpoint:** `ws://api.example.com/score/live`

**Description:** Establishes a WebSocket connection to receive live updates of the scoreboard.

**Message Format:**

```json
{
	"type": "scoreUpdate",
	"userId": "user1",
	"newScore": 1600
}
```

## Database Schema

### Users Table

| Column   | Type   | Description                |
| -------- | ------ | -------------------------- |
| userId   | STRING | Unique identifier for user |
| username | STRING | Username of the user       |

### Scores Table

| Column | Type   | Description                         |
| ------ | ------ | ----------------------------------- |
| userId | STRING | Foreign key referencing Users table |
| score  | INT    | User's current score                |

## Security Considerations

1. **Authentication & Authorization:** All requests must be authenticated using JWT tokens.
2. **Rate Limiting:** Limit score updates to prevent spamming.
3. **Action Validation:** Verify that the actionId is legitimate and comes from an authorized source.
4. **Data Integrity:** Ensure that scores can only be updated through verified actions.
5. **Logging & Monitoring:** Implement logging to track unusual activity.

## Future Improvements

- Implement caching mechanisms to improve performance for frequent scoreboard requests.
- Introduce role-based access control (RBAC) for admin-level actions.
- Add support for multi-game leaderboards if expansion is needed.

## Execution Flow Diagram

### API Call Flow

User Action -> API Call (POST /api/score/update) -> Authentication Check -> Score Update in Database -> WebSocket Notification -> Frontend Updates Scoreboard

### WebSocket Flow

Client Connects -> WebSocket Subscription -> Server Pushes Score Updates -> Client Receives Updates
