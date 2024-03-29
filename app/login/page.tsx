"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const form = useForm({
    defaultValues: {
      refCode: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <main className="flex justify-center items-start pt-10 bg-[url('/game-login-bg.gif')] bg-no-repeat bg-cover h-screen">
      <Card className="px-6 py-4">
        <CardHeader>
          <CardTitle>Welcome to Vgames</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex items-center gap-3"
            >
              <FormField
                control={form.control}
                name="refCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reference code</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your ref-code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="flex justify-end"
                size="sm"
                disabled={!form.formState.isDirty}
              >
                Go
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
