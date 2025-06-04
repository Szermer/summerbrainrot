"use client"

import { HTMLAttributes, useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { FirebaseError } from "firebase/app"
import { cn } from "@/lib/utils"
import { signUp, signInWithProvider, getAuthErrorMessage } from "@/lib/firebase/auth"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/password-input"

const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Please enter your name" })
      .min(2, { message: "Name must be at least 2 characters long" }),
    email: z
      .string()
      .min(1, { message: "Please enter your email" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(1, {
        message: "Please enter your password",
      })
      .min(6, {
        message: "Password must be at least 6 characters long",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  })

export function RegisterForm({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = useState(false)
  const [socialLoading, setSocialLoading] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    
    try {
      await signUp(data.email, data.password, data.name)
      
      toast({
        title: "Account created!",
        description: "Welcome to Summer Brain Rot. You have successfully signed up.",
      })
      
      router.push("/")
    } catch (error) {
      console.error("Registration error:", error)
      
      const errorMessage = error instanceof FirebaseError 
        ? getAuthErrorMessage(error.code)
        : "An unexpected error occurred. Please try again."
      
      toast({
        title: "Registration failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSocialLogin(provider: 'google' | 'github' | 'facebook') {
    setSocialLoading(provider)
    
    try {
      await signInWithProvider(provider)
      
      toast({
        title: "Welcome!",
        description: `Successfully signed up with ${provider}.`,
      })
      
      router.push("/")
    } catch (error) {
      console.error(`${provider} registration error:`, error)
      
      const errorMessage = error instanceof FirebaseError 
        ? getAuthErrorMessage(error.code)
        : `Failed to sign up with ${provider}. Please try again.`
      
      toast({
        title: "Registration failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setSocialLoading(null)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      autoComplete="name"
                      disabled={isLoading}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="name@example.com" 
                      type="email"
                      autoComplete="email"
                      disabled={isLoading}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput 
                      placeholder="********" 
                      autoComplete="new-password"
                      disabled={isLoading}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput 
                      placeholder="********" 
                      autoComplete="new-password"
                      disabled={isLoading}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-2" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="w-full"
                type="button"
                disabled={isLoading || socialLoading !== null}
                onClick={() => handleSocialLogin('google')}
              >
                <IconBrandGoogle className="h-4 w-4" />
                {socialLoading === 'google' ? 'Connecting...' : 'Google'}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                type="button"
                disabled={isLoading || socialLoading !== null}
                onClick={() => handleSocialLogin('github')}
              >
                <IconBrandGithub className="h-4 w-4" />
                {socialLoading === 'github' ? 'Connecting...' : 'GitHub'}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                type="button"
                disabled={isLoading || socialLoading !== null}
                onClick={() => handleSocialLogin('facebook')}
              >
                <IconBrandFacebook className="h-4 w-4" />
                {socialLoading === 'facebook' ? 'Connecting...' : 'Facebook'}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}