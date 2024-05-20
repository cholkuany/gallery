'use server'
 
import { z } from 'zod'
 
const schema = z.object({
  search: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})
 
export default async function search(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('search'),
  })
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 return { message: 'success'}
}