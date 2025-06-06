import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ForgotPasswordForm } from "./components/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <Card className="p-6">
      <div className="mb-2 flex flex-col space-y-2 text-left">
        <h1 className="text-md font-semibold tracking-tight">
          Forgot Password
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your registered email and <br /> we will send you a link to
          reset your password.
        </p>
      </div>
      <ForgotPasswordForm />
      <p className="text-muted-foreground mt-4 px-8 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="hover:text-primary underline underline-offset-4"
        >
          Register
        </Link>
        .
      </p>
    </Card>
  )
}
