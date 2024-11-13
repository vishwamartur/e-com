import { PaymentCard } from "@/components/payment/PaymentCard"
import { PaymentHeader } from "@/components/payment/PaymentHeader"
import { PaymentLogos } from "@/components/payment/PaymentLogos"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-md">
        <PaymentHeader />
        <PaymentCard />
        <PaymentLogos />
      </div>
    </div>
  )
}