import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sale",
  title: "Sale",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Sale Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Sale Description",
      type: "text",
    }),
    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      description: "Amount off in percentage",
    }),
    defineField({
      name: "couponCode",
      title: "Coupon Code",
      type: "string",
    }),
    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime",
    }),
    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "datetime",
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to activate or deactivate the sale",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountPercentage: "discountPercentage",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(select) {
      const status = select.isActive ? "Active" : "Inactive";
      return {
        title: select.title,
        subtitle: `${select.discountPercentage}% off | Code: ${select.couponCode} - ${status}`,
      };
    },
  },
});
