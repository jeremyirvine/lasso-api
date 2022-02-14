import { TransportError } from "./types"

export function URLSerializeObject(obj: any) {
  let queryString = ""
  for (let i = 0; i < Object.keys(obj).length; i++) {
    let key = Object.keys(obj)[i]
    let prefix = i == 0 ? "?" : "&"

    queryString += `${prefix}${key}=${encodeURIComponent(obj[key])}`
  }

  console.log(queryString)

  return queryString
}

export function IsError(obj: any): obj is TransportError {
  return obj._istransporterror 
}
