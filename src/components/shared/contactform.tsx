"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useForm as uForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Github } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  issue: z.string().max(500, {
    message: "Describe your issue within 500 characters.",
  }),
});

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      issue: "",
    },
  });
  const [state, handleSubmit2] = uForm("xvoejeeo");

  const handleForm = () => {
    // Display success message and reset the form
    setSuccessMessage(
      "Thank you for submitting the form! We will get back to you soon."
    );
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await handleSubmit2(values);
    } catch (error) {
      setServerError(
        "There was an issue submitting the form. Please try again."
      );
    }
  };

  // Effect hook to reset success message on form submit success
  useEffect(() => {
    if (state.succeeded) {
      handleForm();
    }
  }, [state.succeeded]);

  return (
    <section className="w-full px-2 max-w-screen-md mb-16 mt-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-orange-500 bg-opacity-50 text-center mt-4">
        Let&apos;s Get in Touch
      </h2>
      <p className="text-muted-foreground mb-6 text-center">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>
      <div className="grid items-start w-full gap-12 mx-auto lg:grid-cols-2 lg:px-12 mb-6 pt-10 pb-6 bg-opacity-8 px-4 rounded-lg gradient2 dark:gradient1 shadow shadow-orange-600 dark:shadow-orange-900 border border-secondary">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-slate-300"
          >
            <div className="space-y-4 text-lg">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <label className="text-lg text-foreground/75">
                        Full Name
                      </label>
                      <FormControl>
                        <input
                          placeholder="your-email"
                          className="flex h-10 w-full text-foreground rounded-md border border-orange-500 dark:border-orange-900 placeholder:text-muted-foreground bg-background/75 px-3 py-2 text-sm shadow-inner shadow-orange-400 dark:shadow-orange-900 hover:border-orange-600 hover:transition-all focus:border-orange-600 dark:focus:border-orange-900 focus:outline-none focus:ring-1 focus-within:ring-1 focus-within:ring-orange-500"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="space-y-4 text-lg">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <label className="text-lg text-foreground/75">
                        Email Address
                      </label>
                      <FormControl>
                        <input
                          placeholder="user2025@example.com"
                          className="flex h-10 w-full text-foreground rounded-md border border-orange-500 dark:border-orange-900 placeholder:text-muted-foreground bg-background/75 px-3 py-2 text-sm shadow-inner shadow-orange-400 dark:shadow-orange-900 hover:border-orange-600 hover:transition-all focus:border-orange-600 dark:focus:border-orange-900 focus:outline-none focus:ring-1 focus-within:ring-1 focus-within:ring-orange-500"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="space-y-4 text-lg">
              <FormField
                control={form.control}
                name="issue"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <label className="text-lg text-foreground/75">
                        Issue
                      </label>
                      <FormControl>
                        <textarea
                          placeholder="Tell us a little bit about your issue in details here"
                          className="min-h-[110px] mb-5 text-foreground shadow-inner shadow-orange-400 dark:shadow-orange-900
                flex w-full rounded-md border border-orange-500 dark:border-orange-900 bg-background/75 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 hover:border-orange-600 hover:transition-all focus:border-orange-600 dark:focus:border-orange-900 focus:outline-none focus:ring-1 focus-within:ring-1 focus-within:ring-orange-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-br relative group/btn from-orange-500 to-orange-600 block w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] py-2 hover:from-orange-600 hover:to-orange-500 hover:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] duration-300 ease-in-out text-center transition-all"
              disabled={state.submitting}
            >
              <b>SUBMIT</b>
              <Send className="inline mx-2 h-4" />
            </Button>
          </form>
        </Form>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-10 text-foreground/75">
            Connect with Us
          </h3>

          <div>
            <div className="flex gap-8 mb-12">
              <Link
                className="flex items-center justify-center w-10 h-10 rounded-full border bg-orange-200 dark:bg-transparent border-orange-600 shadow-inner shadow-orange-600 dark:shadow-orange-800 hover:shadow-md hover:shadow-orange-500 hover:transition hover:duration-300 hover:ease-in-out"
                href="#"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <div className="text-md text-foreground">
                <p>Email to us at </p>
                <p>jhaayush52411@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-8 mb-12">
              <Link
                className="flex items-center justify-center w-10 h-10 rounded-full border bg-orange-200 dark:bg-transparent border-orange-600 shadow-inner shadow-orange-600 dark:shadow-orange-800 hover:shadow-md hover:shadow-orange-500 hover:transition hover:duration-300 hover:ease-in-out"
                href="#"
              >
                <Phone className="w-5 h-5" />
              </Link>
              <div className="text-md text-foreground">
                <p>Call us at </p>
                <p>+91 9693403626 </p>
              </div>
            </div>

            <div className="flex gap-8 mb-12">
              <Link
                className="flex items-center justify-center w-10 h-10 rounded-full border bg-orange-200 dark:bg-transparent border-orange-600 shadow-inner shadow-orange-600 dark:shadow-orange-800 hover:shadow-md hover:shadow-orange-500 hover:transition hover:duration-300 hover:ease-in-out"
                href="https://chat.whatsapp.com/B9MoUs1prPIKszJyTW7WdP?mode=ems_copy_t"
              >
                <MessageCircleMore className="w-5 h-5" />
              </Link>
              <div className="text-md text-foreground">
                <p>Chat with us at </p>
                <p className="underline">
                  <a href="https://chat.whatsapp.com/B9MoUs1prPIKszJyTW7WdP?mode=ems_copy_t">
                    Here
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-12 py-7">
            <Link
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 dark:bg-orange-800 border border-orange-600 hover:shadow-md hover:shadow-orange-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="https://www.youtube.com/watch?v=gyBAWJRAMEg&t=1s"
            >
              <Youtube className="w-5 h-5 text-white" />
            </Link>
            <Link
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 dark:bg-orange-800 border border-orange-600 hover:shadow-md hover:shadow-orange-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <Link
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 dark:bg-orange-800 border border-orange-700  hover:shadow-md hover:shadow-orange-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="https://www.linkedin.com/in/ayush-jha-755280190/"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
            <Link
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 dark:bg-orange-800 border border-orange-700 hover:shadow-md hover:shadow-orange-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="https://github.com/ayusssh01/rubics-ai"
            >
              <Github className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-4 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      {serverError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-4 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{serverError}</span>
        </div>
      )}
    </section>
  );
}
