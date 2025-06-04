"use client"

import { HTMLAttributes, useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FirebaseError } from "firebase/app"
import { cn } from "@/lib/utils"
import { signIn, signInWithProvider, getAuthErrorMessage } from "@/lib/firebase/auth"
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
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, {
      message: "Please enter your password",
    }),
  remember: z.boolean().default(false),
})

export function UserAuthForm({
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
      email: "",
      password: "",
      remember: false,
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    
    try {
      await signIn(data.email, data.password, data.remember)
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      })
      
      router.push("/")
    } catch (error) {
      console.error("Login error:", error)
      
      const errorMessage = error instanceof FirebaseError 
        ? getAuthErrorMessage(error.code)
        : "An unexpected error occurred. Please try again."
      
      toast({
        title: "Sign in failed",
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
        description: `Successfully signed in with ${provider}.`,
      })
      
      router.push("/")
    } catch (error) {
      console.error(`${provider} login error:`, error)
      
      const errorMessage = error instanceof FirebaseError 
        ? getAuthErrorMessage(error.code)
        : `Failed to sign in with ${provider}. Please try again.`
      
      toast({
        title: "Sign in failed",
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
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-muted-foreground text-sm font-medium hover:opacity-75"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <PasswordInput 
                      placeholder="********" 
                      autoComplete="current-password"
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
              name="remember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button className="mt-2" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
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