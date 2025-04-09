'use server';

import { LATEST_PRODUCTS_LIMIT, PAGE_SIZE } from '../constants';
import { PrismaClient } from '@prisma/client';
import { convertToPlainObject } from '../utils';


// Get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  // take : how many we want to fetch
  // orderBy : how we want to sort the data

  return convertToPlainObject(data);
}