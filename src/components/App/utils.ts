import { TActiveKey, TData } from ".";

export const isNotMatchingId = (datas: TData[], key: TActiveKey) =>
  datas.every((data) => data.id !== key);
