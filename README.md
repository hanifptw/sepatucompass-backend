# Sepatu Compass Backend

## Links

- production : ``

- local : `http://localhost:3000`

Products:

| Endpoint        | HTTP     | Description             |
| --------------- | -------- | ----------------------- |
| `/products`     | `GET`    | `Get all products`      |
| `/products/:id` | `GET`    | `Get products by id`    |
| `/products`     | `POST`   | `add new product`       |
| `/products`     | `DELETE` | `Delete all products`   |
| `/products/:id` | `DELETE` | `Delete products by id` |
| `/products/:id` | `PUT`    | `Update products by id` |

Auth:

| Endpoint           | HTTP     | Permission    |
| ------------------ | -------- | ------------- |
| `/users`           | `GET`    | Public        |
| `/users/:username` | `GET`    | Public        |
| `/auth/register`   | `POST`   | Public        |
| `/auth/login`      | `POST`   | Public        |
| `/auth/me`         | `GET`    | Authenticated |
| `/auth/logout`     | `POST`   | Authenticated |
| `/cart`            | `GET`    | Authenticated |
| `/cart/items`      | `POST`   | Authenticated |
| `/cart/items/:id`  | `DELETE` | Authenticated |
| `/cart/items/:id`  | `PUT`    | Authenticated |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
