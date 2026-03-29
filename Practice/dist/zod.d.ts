import { z } from "zod";
declare const userProfileSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    age: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type FinalUserSchema = z.infer<typeof userProfileSchema>;
export {};
//# sourceMappingURL=zod.d.ts.map