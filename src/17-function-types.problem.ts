import { Equal, Expect } from "./helpers/type-utils";

 type OnFocusFunction = {
  (isFocused: boolean): void;
};

const addListener = (onFocusChange: OnFocusFunction) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
