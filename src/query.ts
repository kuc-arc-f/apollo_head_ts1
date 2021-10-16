
export const GQL_QUERY = `
  type Query {
    hello: String
    tasks: [Task]
    task(id: String): Task
    contents(site_id: String, content_name: String): [Content]
    contents_uid(site_id: String, content_name: String, user_id: String
    ): [Content]
    content(id: String): Content
    content_count(site_id: String, content_name: String): Int
    users: [User]
    user(mail: String, password: String): User
    sessions(user_id: String): [Session]
    session(user_id: String, key: String): Session
  }
`;