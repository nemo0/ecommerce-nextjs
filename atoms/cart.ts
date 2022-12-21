import { atom } from "recoil";

const cartAtom = atom({
  key: "cartAtom",
  default: {} as any,
});

export default cartAtom;
