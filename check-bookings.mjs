import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const consultations = await prisma.consultation.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: {
      certificate: true
    }
  });
  
  if (consultations.length === 0) {
    console.log("No consultations found.");
    return;
  }
  
  console.log(`Found ${consultations.length} consultation(s):\n`);
  for (const c of consultations) {
    console.log(`- ${c.firstName} ${c.lastName} | ${c.status} | ${c.leaveType} | ${c.createdAt.toISOString().split('T')[0]}`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
