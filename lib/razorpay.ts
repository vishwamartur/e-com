"use client"

interface PaymentOptions {
  amount: number
  currency: string
  email: string
  name: string
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export const handleRazorpayPayment = ({
  amount,
  currency,
  email,
  name,
}: PaymentOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount,
      currency: currency,
      name: "Your Store Name",
      description: "Payment for your order",
      image: "https://your-logo-url.com/logo.png",
      prefill: {
        email: email,
        name: name,
      },
      theme: {
        color: "#000000",
      },
      handler: function (response: any) {
        resolve()
      },
      modal: {
        ondismiss: function () {
          reject(new Error("Payment cancelled"))
        },
      },
    }

    try {
      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      reject(new Error("Failed to initialize payment. Please try again."))
    }
  })
}