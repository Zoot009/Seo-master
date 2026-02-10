import prisma from './prisma'
import { hashPassword } from './auth'

export interface CreateUserData {
  firstName: string
  lastName: string
  companyName?: string
  email: string
  password: string
}

/**
 * Create a new user with hashed password
 * @param userData - User registration data
 * @returns Created user (without password)
 */
export async function createUser(userData: CreateUserData) {
  const { password, ...otherData } = userData
  
  // Hash the password before storing
  const hashedPassword = await hashPassword(password)
  
  // Create user in database
  const user = await prisma.user.create({
    data: {
      ...otherData,
      password: hashedPassword,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      companyName: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      // Exclude password from return
    },
  })
  
  return user
}

/**
 * Find user by email for login
 * @param email - User email
 * @returns User with password hash for comparison
 */
export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  })
}