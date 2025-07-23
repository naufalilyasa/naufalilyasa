# 📘 Auth API Documentation

**Base URL:** `https://yourdomain.com/api/auth`  
**Authentication:** via **access token in HttpOnly cookies**

---

## 📌 Endpoints Summary

| Method | Endpoint    | Description                   | Auth Required         |
| ------ | ----------- | ----------------------------- | --------------------- |
| POST   | `/login`    | Login and get token in cookie | ❌ No                 |
| POST   | `/register` | Register new user             | ❌ No                 |
| POST   | `/logout`   | Logout and clear cookie       | ✅ Yes                |
| POST   | `/refresh`  | Refresh access token          | ✅ With refresh token |
| GET    | `/me`       | Check authenticate            | ✅ Yes                |

---

## 🔐 POST `/login`

**Description:** Logs in the user and sets an `accessToken` in HttpOnly cookie.

### 📥 Request Body:

```json
{
  "username": "usernametest",
  "password": "securepassword"
}
```

### 📤 Response `200 OK`:

```json
{
  "status": "success",
  "status_code": 200,
  "data": {
    "message": "Login successful",
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "username": "usernametest"
    }
  }
}
```

### 🍪 Set-Cookie Header:

```
Set-Cookie: accessToken=ACCESS_TOKEN_HERE; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=900
Set-Cookie: refreshToken=REFRESH_TOKEN_HERE; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=604800
```

### ❌ Response `401 Unauthorized`:

```json
{
  "status": "fail",
  "status_code": 401,
  "data": {
    "message": "Invalid username or password"
  }
}
```

---

## 🆕 POST `/register`

**Description:** Creates a new user.

### 📥 Request Body:

```json
{
  "name": "John Doe",
  "username": "usernameexample",
  "password": "strongpassword123",
  "passwordConfirm": "strongpassword123"
}
```

### 📤 Response `201 Created`:

```json
{
  "status": "success",
  "statusCode": 201,
  "data": {
    "message": "User registered successfully",
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "username": "usernameexample"
    }
  }
}
```

### ❌ Response `400 Bad Request`:

```json
{
  "status": "fail",
  "statusCode": 400,
  "data": {
    "message": "Username already exists"
  }
}
```

---

## 🚪 POST `/logout`

**Description:** Logs out the user by clearing the cookie.

### 📤 Response `200 OK`:

```json
{
  "status": "success",
  "statusCode": 200,
  "data": {
    "message": "Logged out successfully"
  }
}
```

### 🍪 Set-Cookie Header (clear token):

```
Set-Cookie: accessToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict;
Set-Cookie: refreshToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict;
```

---

## 🔄 POST `/refresh`

**Description:** Issues a new `accessToken` from the refresh token in cookies.

### 📤 Response `200 OK`:

```json
{
  "status": "success",
  "statusCode": 200,
  "data": {
    "message": "Access token refreshed"
  }
}
```

### 🍪 Set-Cookie Header (clear token):

```
Set-Cookie: accessToken=NEW_ACCESS_TOKEN; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=900
```

### ❌ Response `403 Forbidden`:

```json
{
  "status": "fail",
  "statusCode": 403,
  "data": {
    "message": "Refresh token invalid or expired"
  }
}
```

---

## 👤 GET `/me`

**Description:** Returns the profile of the currently logged-in user.

- 🔐 **Auth required:** Yes (via HttpOnly cookie)

### 📤 Response `200 OK`:

```json
{
  "status": "success",
  "statusCode": 200,
  "data": {
    "id": "user_123",
    "name": "Jane Doe",
    "username": "janedoe"
  }
}
```

### ❌ Response `401 Unauthorized`:

```json
{
  "status": "fail",
  "statusCode": 401,
  "data": {
    "message": "Unauthorized"
  }
}
```
