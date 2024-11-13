import { Lock, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PaymentForm } from "./PaymentForm"

export function PaymentCard() {
  return (
    <Card className="backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Payment Details
        </CardTitle>
        <CardDescription>Enter your card information below</CardDescription>
      </CardHeader>
      <CardContent>
        <PaymentForm />
      </CardContent>
      <Separator />
      <CardFooter className="mt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          Your payment information is encrypted and secure
        </div>
      </CardFooter>
    </Card>
  )
}