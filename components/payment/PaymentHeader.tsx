import { CreditCard } from "lucide-react"

export function PaymentHeader() {
  return (
    <div className="text-center mb-8">
      <CreditCard className="mx-auto h-12 w-12 text-primary" />
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
        Secure Payment
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Complete your purchase securely
      </p>
    </div>
  )
}