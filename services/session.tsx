import * as SecureStore from "expo-secure-store";
import { User } from "../models/User";

export async function setSecureStore(key: string, value: any) {
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureStore(key: string) {
  const result = await SecureStore.getItemAsync(key);

  if (key == "user") {
    //@ts-ignore
    return JSON.parse(result);
  } else {
    return result;
  }
}
