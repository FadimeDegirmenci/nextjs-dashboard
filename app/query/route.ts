// import postgres from 'postgres';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// async function listInvoices() {
// 	const data = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data;
// }

// export async function GET() {
//   return Response.json({
//     message:
//       'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   });
//   try {
//   	return Response.json(await listInvoices());
//   } catch (error) {
//   	return Response.json({ error }, { status: 500 });
//   }
// }

//AŞAGIDAKI KISIM CHAT KISMI





import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data;
}

export async function GET() {
  try {
    // SQL sorgusunun sonucu JSON olarak döndürülür
    const invoices = await listInvoices();
    return new Response(JSON.stringify(invoices), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Hata durumunda 500 hata kodu ve hata mesajı döndürülür
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
