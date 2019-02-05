# [fit] OpenAPI

---

![right](./img/question.svg)

# what is that?

- it's a specification for how to describe APIs
- typically, with JSON/YAML
- there are lots of tools

^you might have used swagger a while ago, it's changed a bit since

---

# [have you seen this before?](https://petstore.swagger.io/?_ga=2.225501658.1329879516.1549308291-350804693.1541977383)

---

![left](./img/history.svg)

# a brief history

- created in 2010 under the name Swagger
- became a member of the Linux Foundation in November 2015
- renamed to OpenAPI in 2016
- released version 3.0 in July 2017

^major players have gotten involved, like Google, Microsoft, and IBM.

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

# [documentation](http://localhost:8080)

^talk about clients

---

![right](./img/contracts.svg)

# contracts

^talk about separate teams

---

![right](./img/generation.svg)

# [code generation](https://openapi-generator.tech/docs/generators.html)

^type checking, fake implemenations, etc

---

# [graphql should be mentioned](https://www.graphqlbin.com/v2/6RQ6TM)

^it's self-documenting
