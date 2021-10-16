
export const GQL_MUTATION = `
type Mutation {
  addContent(apikey: String!, content_name: String, values: String!
  user_id: String): Content
  updateContent(apikey: String!, id: String!, content_name: String,values: String!
  ): Content
  deleteContent(apikey: String! , id: String!): Content
  addSession(user_id: String!, key: String, value: String!): Session
  deleteSession(user_id: String!, key: String): Session
}
`;
