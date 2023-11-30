import { z } from "zod"

// {
//     name: { type: String, required: true },
//     lastName: { type: String, required: true },
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//   }

export const userSchema = z.object({
  name: z.string().min(3).max(20),
  lastName: z.string().min(3).max(40),
  username: z.string().min(4).max(16),
  password: z.string().min(4).max(16),
})
