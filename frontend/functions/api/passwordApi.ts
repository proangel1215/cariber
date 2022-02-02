import { Auth } from "../../models/auth"
import { strapiPasswordApi } from "../../models/content"

export default async function passwordApi(formData: FormData) {
  const response = await fetch(strapiPasswordApi, {
    method: "POST",
    body: formData,
  })
  return await response.json() as Auth
}