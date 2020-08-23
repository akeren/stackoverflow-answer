# Stack Overflow Answer

I created this repository as the reference to the question I answered on stack overflow about how to structure a RESTFul API in **Node.js** using **express** and best practices that one should adopt while building **APIs** such that the codebase is maintainable and scalable over time.

## Endpoints

| Methods | Endpoints          | Access  | Description             |
| ------- | ------------------ | ------- | ----------------------- |
| GET     | /api/v1/qandas     | Public  | Return all the qandas   |
| POST    | /api/v1/qandas     | Public  | Create qandas           |
| GET     | /api/v1/qandas/:id | Public  | Get a qanda             |
| PATCH   | /api/v1/qandas/:id | Private | Update a specific qanda |
| DELETE  | /api/v1/qandas     | Private | Delete a qanda          |

## Installation

- clone the repository
- install the package dependencies by typing the command below

```shell
    npm install
```

- After the above process, you can start the server by simply typing :

```shell
    npm run dev
```

- Once your server has started, go ahaed interact with the endpoints with any tool you are comfortable with e.g **Post Man**
