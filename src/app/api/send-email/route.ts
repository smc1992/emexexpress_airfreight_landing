import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Define an interface for the form data for type safety
interface FormData {
  fullName: string;
  company?: string;
  email: string;
  phonePrefix?: string;
  phoneNumber?: string;
  country?: string;
  service: string;
  originCountry?: string;
  originAirport?: string;
  destinationCountry?: string;
  destinationAirport?: string;
  shippingDate?: string;
  grossWeight?: string;
  numberOfPieces?: string;
  packageType?: string;
  commodity?: string;
  additionalDetails?: string;
}

// Base URL for assets in emails - falls back to default if not set in environment
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://airfreight.emexexpress.de';
const LOGO_URL = `${BASE_URL}/LOGO.png`;

// Function to generate a unique Request ID
function generateRequestId(): string {
  const randomPart = Math.floor(10000 + Math.random() * 90000).toString();
  return `EMX-${randomPart}`;
}

// Function to log email errors
function logEmailError(error: any, formData: any, emailType: string): void {
  try {
    const logDir = path.join(process.cwd(), 'logs');
    const logFile = path.join(logDir, 'email-errors.log');
    
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString();
    const errorMessage = `[${timestamp}] Email Type: ${emailType}, Error: ${error.message}, Customer: ${formData.fullName}, Company: ${formData.company}, Email: ${formData.email}\n`;
    
    fs.appendFileSync(logFile, errorMessage);
    console.error(`Email error logged to ${logFile}`);
  } catch (logError) {
    console.error('Failed to log email error:', logError);
  }
}

export async function POST(request: Request) {
  let formData: FormData | null = null;
  try {
        formData = await request.json();

    if (!formData) {
      throw new Error('Form data is missing in the request body.');
    }
    const requestId = generateRequestId();
    const timestamp = new Date();
    const formattedDate = timestamp.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    const formattedTime = timestamp.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.de',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Admin Email Content
    const adminHtmlContent = `
      <!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:0;padding:0}.container{max-width:600px;margin:0 auto}.header{background-color:#f8f8f8;padding:10px;text-align:center;border-bottom:1px solid #ddd}.logo{max-height:50px}.tracking-box{background-color:#f8f8f8;border:1px solid #ddd;padding:15px;margin:20px 0;text-align:center}.tracking-id{font-size:24px;font-weight:bold;color:#333;margin:5px 0}.status{font-size:18px;font-weight:bold;color:#333;margin:10px 0;text-transform:uppercase}.details{margin:20px 0;padding:0 15px}.section-title{font-weight:bold;background-color:#f0f0f0;padding:8px;margin:15px 0 10px 0}table{width:100%;border-collapse:collapse}table td{padding:8px;vertical-align:top}.highlight{color:#001E3C;font-weight:bold}.footer{background-color:#f8f8f8;padding:15px;text-align:center;font-size:12px;color:#777;border-top:1px solid #ddd;margin-top:20px}</style></head><body><div class="container"><div class="header"><img src="${LOGO_URL}" alt="EMEX Express Logo" class="logo"></div><div class="tracking-box"><div>REQUEST ID: <span class="tracking-id">${requestId}</span></div><div class="status">NEW LEAD SUBMISSION</div><div>Submitted at:<br>${formattedDate}, ${formattedTime} Uhr</div></div><div class="details"><div class="section-title">CUSTOMER INFORMATION</div><table><tr><td width="40%"><strong>Full Name:</strong></td><td>${formData.fullName||'N/A'}</td></tr><tr><td><strong>Company:</strong></td><td>${formData.company||'N/A'}</td></tr><tr><td><strong>Email:</strong></td><td>${formData.email||'N/A'}</td></tr><tr><td><strong>Phone:</strong></td><td>${(formData.phonePrefix||'')+' '+(formData.phoneNumber||'N/A')}</td></tr><tr><td><strong>Country:</strong></td><td>${formData.country||'N/A'}</td></tr></table><div class="section-title">SERVICE & ROUTE</div><table><tr><td width="40%"><strong>Service:</strong></td><td class="highlight">${formData.service||'N/A'}</td></tr><tr><td><strong>Route:</strong></td><td>${formData.originAirport||formData.originCountry||'N/A'} → ${formData.destinationAirport||formData.destinationCountry||'N/A'}</td></tr></table><div class="section-title">SHIPMENT DETAILS</div><table><tr><td width="40%"><strong>Shipping Date:</strong></td><td>${formData.shippingDate||'N/A'}</td></tr><tr><td><strong>Gross Weight:</strong></td><td>${formData.grossWeight||'N/A'} kg</td></tr><tr><td><strong>Pieces:</strong></td><td>${formData.numberOfPieces||'N/A'}</td></tr><tr><td><strong>Commodity:</strong></td><td>${formData.commodity||'N/A'}</td></tr><tr><td><strong>Details:</strong></td><td>${formData.additionalDetails||'N/A'}</td></tr></table></div><div class="footer"><p>This is an automated message. | Lead ID: ${requestId}</p></div></div></body></html>
    `;

    // Customer Email Content
    const customerHtmlContent = `
      <!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:0;padding:0}.container{max-width:600px;margin:0 auto}.header{background-color:#f8f8f8;padding:10px;text-align:center;border-bottom:1px solid #ddd}.logo{max-height:50px}.tracking-box{background-color:#f8f8f8;border:1px solid #ddd;padding:15px;margin:20px 0;text-align:center}.tracking-id{font-size:24px;font-weight:bold;color:#333;margin:5px 0}.status{font-size:18px;font-weight:bold;color:#333;margin:10px 0;text-transform:uppercase}.content{padding:20px 15px}.highlight{color:#001E3C;font-weight:bold}.footer{background-color:#f8f8f8;padding:15px;text-align:center;font-size:12px;color:#777;border-top:1px solid #ddd;margin-top:20px}</style></head><body><div class="container"><div class="header"><img src="${LOGO_URL}" alt="EMEX Express Logo" class="logo"></div><div class="tracking-box"><div>Your Request ID: <span class="tracking-id">${requestId}</span></div><div class="status">REQUEST RECEIVED</div></div><div class="content"><p>Dear ${formData.fullName},</p><p>Thank you for your inquiry. Our team will review your request for <span class="highlight">${formData.service}</span> services and contact you shortly.</p><p>Please save your Request ID for future reference: <strong>${requestId}</strong></p><div style="background-color:#f8f8f8;border:1px solid #ddd;padding:15px;margin:15px 0;border-radius:4px"><h3 style="margin-top:0;color:#001E3C">Summary of Your Request</h3><table style="width:100%;border-collapse:collapse"><tr><td style="padding:5px;font-weight:bold;width:40%">Service:</td><td style="padding:5px">${formData.service||'N/A'}</td></tr><tr><td style="padding:5px;font-weight:bold">Route:</td><td style="padding:5px">${formData.originAirport||formData.originCountry||'N/A'} → ${formData.destinationAirport||formData.destinationCountry||'N/A'}</td></tr><tr><td style="padding:5px;font-weight:bold">Shipping Date:</td><td style="padding:5px">${formData.shippingDate||'N/A'}</td></tr><tr><td style="padding:5px;font-weight:bold">Gross Weight:</td><td style="padding:5px">${formData.grossWeight ? `${formData.grossWeight} kg` : 'N/A'}</td></tr><tr><td style="padding:5px;font-weight:bold">Pieces:</td><td style="padding:5px">${formData.numberOfPieces||'N/A'}</td></tr><tr><td style="padding:5px;font-weight:bold">Commodity:</td><td style="padding:5px">${formData.commodity||'N/A'}</td></tr><tr><td style="padding:5px;font-weight:bold">Details:</td><td style="padding:5px">${formData.additionalDetails||'N/A'}</td></tr></table></div><p>If you have any immediate questions, please contact us at <a href="mailto:Info@emexexpress.de">Info@emexexpress.de</a>.</p></div><div class="footer"><p>This is an automated confirmation. | Request ID: ${requestId}</p></div></div></body></html>
    `;

    // Send emails
    const adminMailPromise = transporter.sendMail({
      from: `"EMEX Express Lead" <${process.env.SMTP_USER}>`,
      to: 'Info@emexexpress.de, smc@emexlogistics.de',
      subject: `New Lead: ${formData.fullName || 'N/A'} - Request ID: ${requestId}`,
      html: adminHtmlContent
    });

    const customerMailPromise = transporter.sendMail({
      from: `"EMEX Express Confirmation" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: `Your EMEX Express Inquiry - Request ID: ${requestId}`,
      html: customerHtmlContent
    });

    const results = await Promise.allSettled([adminMailPromise, customerMailPromise]);

    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const emailType = index === 0 ? 'admin' : 'customer';
        console.error(`Failed to send ${emailType} email:`, result.reason);
        logEmailError(result.reason, formData, emailType);
      }
    });

    return NextResponse.json({ message: 'Emails sent', requestId });

  } catch (error: any) {
    console.error('Error in POST /api/send-email:', error);
    const errorFormData = formData || { fullName: 'N/A', email: 'N/A', service: 'N/A' };
    logEmailError(error, errorFormData, 'post-handler-crash');
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}
