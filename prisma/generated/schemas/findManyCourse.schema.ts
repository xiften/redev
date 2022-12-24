import { z } from "zod";
import { CourseWhereInputObjectSchema } from "./objects/CourseWhereInput.schema";
import { CourseOrderByWithRelationInputObjectSchema } from "./objects/CourseOrderByWithRelationInput.schema";
import { CourseWhereUniqueInputObjectSchema } from "./objects/CourseWhereUniqueInput.schema";
import { CourseScalarFieldEnumSchema } from "./enums/CourseScalarFieldEnum.schema";

export const CourseFindManySchema = z.object({
  where: CourseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CourseOrderByWithRelationInputObjectSchema,
      CourseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: CourseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CourseScalarFieldEnumSchema).optional(),
});
