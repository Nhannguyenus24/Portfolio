import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    let contacts = [];
    try {
      const data = await fs.readFile('contact.json', 'utf8');
      contacts = JSON.parse(data);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error('Error reading file', err);
        return NextResponse.json({ error: "Failed to read contact file." }, { status: 500 });
      }
    }

    contacts.push({ email, subject, message });
    const jsonData = JSON.stringify(contacts, null, 2);
    await fs.writeFile('contact.json', jsonData);
    console.log('Data successfully added to contact.json');

    return NextResponse.json({ message: "Data successfully added and email sent!" });

  } catch (error) {
    console.error("Error processing request: ", error);
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
}
