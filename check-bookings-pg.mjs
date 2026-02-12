import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function main() {
  await client.connect();
  
  const result = await client.query(`
    SELECT id, "firstName", "lastName", status, "leaveType", "createdAt", "paymentStatus"
    FROM "Consultation"
    ORDER BY "createdAt" DESC
    LIMIT 10
  `);
  
  if (result.rows.length === 0) {
    console.log("No consultations found.");
  } else {
    console.log(`Found ${result.rows.length} consultation(s):\n`);
    for (const c of result.rows) {
      const date = new Date(c.createdAt).toISOString().split('T')[0];
      console.log(`- ${c.firstName} ${c.lastName} | ${c.status} | ${c.paymentStatus} | ${c.leaveType} | ${date}`);
    }
  }
  
  await client.end();
}

main().catch(console.error);
