import { Equal, Expect } from "./helpers/type-utils";

interface Entity {
  id: string;
}


interface User extends Entity {
  firstName: string;
  lastName: string;
}

interface Post extends Entity {
  id: string;
  title: string;
  body: string;
}

interface Comment extends Entity {
  id: string;
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
