# Unhandled Exception in Express.js POST Route

This repository demonstrates a common error in Express.js applications: unhandled exceptions in request handling.  The `bug.js` file shows a POST route that lacks proper error handling for malformed or missing data in the request body. This can lead to server crashes and unexpected behavior.  The `bugSolution.js` file provides a corrected version with comprehensive error handling.

## How to reproduce the bug:

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.
4. Send a POST request to `/users` with a missing `name` field or a malformed JSON body.

You'll observe the server crashing or returning a 500 error.  This is because the code attempts to access `newUser.name` without checking if `newUser` or `newUser.name` exists.

## Solution:

The `bugSolution.js` file demonstrates how to properly handle potential errors:
* Check if the request body is present and contains the necessary data.
* Use try...catch blocks to handle potential parsing errors.
* Return appropriate HTTP status codes (e.g., 400 Bad Request) when errors occur.
* Provide informative error messages to the client.