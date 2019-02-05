# [fit] OpenAPI

---

![left](./img/history.svg)

# a brief history

- created in 2010 under the name Swagger
- became a member of the Linux Foundation in November 2015
- renamed to OpenAPI in 2016
- released version 3.0 in July 2017

---

```yaml
openapi: 3.0.0
info:
  title: Really Good, Bad Reviews
  description: A review site for bad things that are good.
  version: 0.0.0
servers:
  - url: http://localhost:4000/api
```

---

```yaml
components:
  schemas:
    Review:
      type: object
      required:
        - id
        - productName
      properties:
        id:
          type: string
        productName:
          type: string
          minLength: 3
```

---

```yaml
paths:
  /reviews:
    get:
      summary: List reviews
      operationId: listReviews
      tags: [Review]
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Review"
```

---

# but, why is this useful?

---

![right](./img/documentation.svg)

# documentation

---

![right](./img/contracts.svg)

# contracts

---

![right](./img/generation.svg)

# code generation
