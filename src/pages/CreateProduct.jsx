"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import FileUpload from "@/components/shadcn-space/file-upload/file-upload-05"
import { Pattern } from "@/components/examples/c-number-field-1"
import axios from "axios"

function CreateProuduct(){




    const formSchema = z.object({
        title: z
          .string()
          .min(5, "Bug title must be at least 5 characters.")
          .max(32, "Bug title must be at most 32 characters."),
        description: z
          .string()
          .min(20, "Description must be at least 20 characters.")
          .max(100, "Description must be at most 100 characters."),

          quantity:z.string(),
          price:z.string()
      })
      
    
        const form = useForm({
          resolver: zodResolver(formSchema),
          defaultValues: {
            title: "",
            description: "",
            quantity:"",
            price:""
          },
        })
      
        async function onSubmit(data) {

          console.log("this onsubmit is working")
          console.log(data)

          console.log("here")
          const user = await axios.get("http://localhost:3001/api/v1/user/email")
           console.log(user.data.data.id)

           const response = await axios.post("http://localhost:3001/api/v1/product",{
            name:data.title,
            description:data.description,
            image:'https://randomimageurl.com/assets/images/local/20260103_0531_Humorous%20Scene_simple_compose_01ke20wfqvfqasngxqh5dh36gh%20%281%29_compressed_q80.jpeg',
            price:Number(data.price),
            stockQuantity:Number(data.quantity),
            categoryId:1,
            sellerId:user.data.data.id
           })

           console.log(response)





           console.log("heree")
        }
return(
    <>
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
        <CardDescription>
          add your products to the list
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Product Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="your product"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="add description of you product in detail."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


<Controller
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    upload you file
                  </FieldLabel>
                 <FileUpload/>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


<Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Price
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}

                    autoComplete="off"
                    type="number"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


<Controller
              name="quantity"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    quantity
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}

                    autoComplete="off"
                    type="number"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />



{/* <Controller
              name="quantity"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    quantity
                  </FieldLabel>
                 <Pattern />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            /> */}


          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
    </>
)
}

export default CreateProuduct;
