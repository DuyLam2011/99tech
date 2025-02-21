# Express TypeScript CRUD API

This project is a **CRUD API** built for 99Tech interview using **Express.js** and **TypeScript**, with **MongoDB** as the database using **Mongoose** for data modeling. It supports basic CRUD operations for managing items.

## Features

- **Express.js** for handling HTTP requests
- **Mongoose** for MongoDB interactions
- **TypeScript** for type safety and better development experience
- **CORS enabled** for all origins
- **dotenv** for managing environment variables
- **RESTful endpoints** for managing resources

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)

## Installation

1. **Install dependencies**
   npm install

2. **Create a `.env` file** and configure MongoDB connection:

MONGO_URI=
PORT=3000

3. **Start the development server**
   npm run start

## API Endpoints

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | `/items`     | Fetch all items           |
| GET    | `/items/:id` | Fetch a single item by ID |
| POST   | `/items`     | Create a new item         |
| PUT    | `/items/:id` | Update an existing item   |
| DELETE | `/items/:id` | Delete an item by ID      |

## Example Usage

### Fetch All Items

curl -X GET {URL}/items

### Create an Item

curl -X POST {URL}/items \
 -H "Content-Type: application/json" \
 -d '{"name": "Sample Item", "description": "This is a test item"}'

### Update an Item

curl -X PUT {URL}/items/{id} \
 -H "Content-Type: application/json" \
 -d '{"name": "Updated Name", "description": "Updated Description"}'

### Delete an Item

curl -X DELETE {URL}/items/{id}

## Running in Production

To run the project in production mode:
npm run build
npm run start
