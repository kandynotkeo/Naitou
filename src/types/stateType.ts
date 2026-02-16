import { Dispatch, SetStateAction } from "react";

export type NamedState<K extends string, T> = {
  [P in K]: T;
} & {
  [P in `set${Capitalize<K>}`]: Dispatch<SetStateAction<T>>;
};
