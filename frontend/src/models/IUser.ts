export interface IUser {
  "id": number,
  "name": string,
  "email": string,
  "phone": string,
  "public_key": string,
  "chain"?: string,
  "avatar": string,
  "gender": string,
  "birthdate"?: string | null,
  "file"?: Blob | File,
}