import { NextRequest, NextResponse } from 'next/server'
import { createUser } from '@/lib/user-service'
import { z } from 'zod'

const registerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request data
    const validatedData = registerSchema.parse(body)
    
    // Create user with hashed password
    const user = await createUser(validatedData)
    
    return NextResponse.json({
      success: true,
      message: 'User registered successfully',
      user
    }, { status: 201 })
    
  } catch (error) {
    console.error('Registration error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error
      }, { status: 400 })
    }
    
    // Handle Prisma unique constraint error (duplicate email)
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json({
        success: false,
        message: 'Email already exists'
      }, { status: 409 })
    }
    
    return NextResponse.json({
      success: false,
      message: 'Registration failed'
    }, { status: 500 })
  }
}