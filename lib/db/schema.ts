import { sql } from '@vercel/postgres';
import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  images: z.array(z.string()),
  category: z.string(),
  sizes: z.array(z.string()),
  stock: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const orderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number(),
    size: z.string(),
    price: z.number(),
  })),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  shippingAddress: z.object({
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    pincode: z.string(),
    phone: z.string(),
  }),
  paymentStatus: z.enum(['pending', 'paid', 'failed']),
  paymentId: z.string().optional(),
  total: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['user', 'admin']),
  createdAt: z.date(),
  updatedAt: z.date(),
});