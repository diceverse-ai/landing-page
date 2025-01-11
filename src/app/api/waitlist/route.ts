import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend con la API key directamente para pruebas
const resend = new Resend('re_R36eexjG_GpR1CaDe3GooVYgWa8o7uiy4');

// ID de la audiencia (audience) en Resend - asegúrate de reemplazar esto con tu ID real
const diceverse_AUDIENCE_ID = 'dee127f4-5114-413e-8b7d-d9b24fcbba36';

export async function POST(request: Request) {
  try {
    const { email, firstName = '', lastName = '' } = await request.json();
    console.log('Attempting to send email to:', email); // Para debugging

    // Primero, enviar el correo electrónico
    const emailData = await resend.emails.send({
      from: 'Team - DiceVerse AI <developers@diceverse-ai.com>',
      to: [email],
      subject: 'Welcome to diceverse Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #6366f1;">Welcome to diceverse!</h1>
          <p>Thank you for joining our waitlist. We're thrilled to have you on board!</p>
          <p>We'll keep you updated on our progress and let you know as soon as we launch.</p>
          <br/>
          <p>Best regards,</p>
          <p>The diceverse Team</p>
        </div>
      `,
    });
    console.log('Email sent successfully:', emailData); // Para debugging

    // Luego, crear un contacto en Resend
    const contactData = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: diceverse_AUDIENCE_ID,
    });
    console.log('Contact created successfully:', contactData); // Para debugging

    return NextResponse.json({
      success: true,
      message: 'Successfully joined waitlist',
      emailData,
      contactData
    });
  } catch (error) {
    console.error('Error processing waitlist request:', error); // Para debugging
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to join waitlist',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}