// This file is auto-generated by @hey-api/openapi-ts

export const TodoIdSchema = {
  type: "number",
} as const;

export const TodoSchema = {
  type: "object",
  properties: {
    id: {
      $ref: "#/components/schemas/TodoId",
    },
    title: {
      type: "string",
      minLength: 1,
    },
    done: {
      type: ["boolean", "null"],
      default: false,
    },
    doneAt: {
      type: ["string", "null"],
    },
  },
  required: ["id", "title"],
} as const;
