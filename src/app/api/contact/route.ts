import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Contact from '../../../../models/Contact';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Create new contact document
    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      service,
      message,
    });
    
    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}