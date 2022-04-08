const enum Hejie {
  up = 1,
  down,
  left,
  right,
}
enum Type {
  a = "A",
  b = "B",
}

const enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
type test = `${Hejie}-Haha`;

type PickFuncProp<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

interface tt {
  fn: function;
  name: string;
  age: number;
}
type jin = PickFuncProp<tt>;
