# Discord OAuth2 Login

NOTE: This is just a basic template to use or to give inspiration.

## Overview

The Discord OAuth2 Project is a web application built with Laravel and Vue.js
that simplifies user authentication by integrating Discord OAuth2
authentication. This project enables users to log in securely using their
Discord credentials, making it a convenient solution for user authentication in
your web applications.

## Features

-   Discord OAuth2 integration for seamless user login.
-   Laravel and Vue.js for a robust and modern web application stack.
-   Secure and efficient user authentication process.
-   Easy customization and integration into your existing projects.

## Prerequisites

Before getting started, ensure you have the following dependencies installed:

-   PHP 8.1
-   Composer
-   Node.js and npm
-   Discord Developer Application for OAuth2 configuration

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/CodebyJaron/laravel-vue-discord-oauth2.git
    ```

2. Install the Composer dependencies:

```bash
composer update
```

3. Install the NPM dependencies:

```bash
npm install
```

4. Copy the `.env.example` file to `.env` and fill in the required environment
   variables.
5. Generate a new application key:

```bash
php artisan key:generate
```

6. Run the database migrations:

```bash
php artisan migrate
```

7. Run the application:

```bash
php artisan serve && npm run dev
```
