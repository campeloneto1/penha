import * as SecureStore from "expo-secure-store";

export async function setSecureStore(key: string, value: any) {
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureStore<Object>(key: string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    return "nada";
  }
}
