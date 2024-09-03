export async function POST(req: Request) {
  try {
    const dataObject = await req.json();
    const sendData = { data: dataObject };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/prospects`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      }
    );
    const { data, error } = await res.json();
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
