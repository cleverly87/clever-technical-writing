// AWS SES Contact Form API Route
// Requires: npm install @aws-sdk/client-ses
// Set up AWS credentials in environment variables

import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION || 'eu-west-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const projectType = formData.get('project-type') as string;
    const message = formData.get('message') as string;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Project Type: ${projectType || 'Not specified'}

Message:
${message}

---
Sent from clever-technical-writing.com contact form
    `.trim();

    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!, // Your verified SES email
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!], // Your email address
      },
      Message: {
        Subject: {
          Data: `New Contact Form: ${name} - ${projectType || 'General Inquiry'}`,
        },
        Body: {
          Text: {
            Data: emailBody,
          },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}