"use client"

import { JSX } from "react"
import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: React.ReactNode
  disabled?: boolean
  desc: JSX.Element | string
  cancelBtnText?: string
  confirmText?: React.ReactNode
  destructive?: boolean
  handleConfirm: () => void
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}

export function ConfirmDialog(props: Props) {
  const {
    title,
    desc,
    children,
    className,
    confirmText,
    cancelBtnText,
    destructive,
    isLoading,
    disabled = false,
    handleConfirm,
    ...actions
  } = props
  return (
    <AlertDialog {...actions}>
      <AlertDialogContent className={cn(className && className)}>
        <AlertDialogHeader>
          <AlertDialogTitle>{String(title)}</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>{String(desc)}</div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>
            {cancelBtnText ?? "Cancel"}
          </AlertDialogCancel>
          <Button
            variant={destructive ? "destructive" : "default"}
            onClick={handleConfirm}
            disabled={disabled || isLoading}
          >
            {confirmText ?? "Continue"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
