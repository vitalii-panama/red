# Redshift API

This is a simple REST API that interacts with Redshift. It has a single endpoint `/redshift` which is used to push data.

## Prerequisites

- Node.js installed on your machine
- A running instance of Redshift

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install the dependencies

## Usage

The API has a single endpoint `/redshift` which is a GET request.

### /redshift

This endpoint pushes data to Redshift.

#### Request

```http
GET /redshift
Headers:

Authorization: Your authorization token. The valid token is 'pass'.
```

## Response

The response will be the result of the pushData function.

## Error Handling

If an error occurs during the process, it will be logged to the console.

## Note

Please replace 'pass' with your actual token in a production environment.
