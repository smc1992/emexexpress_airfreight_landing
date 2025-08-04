import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Base URL for assets in emails - falls back to default if not set in environment
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://airfreight.emexexpress.de';
const LOGO_URL = `${BASE_URL}/LOGO.png`;

// Function to generate a unique tracking ID
function generateTrackingId(): string {
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `EMX-${timestamp.toString(36).toUpperCase()}-${randomPart}`;
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
  try {
    const formData = await request.json();
    const trackingId = generateTrackingId();
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
    
    // Configure nodemailer with IONOS SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.de',
      port: 587, // Standard SMTP port for TLS
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'web.request@emexexpress.de',
        pass: '@Eme2025@25@@'
      }
    });

    // Create HTML email template for admin with all form data (tracking style)
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
          }
          .header {
            background-color: #f8f8f8;
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
          }
          .logo {
            max-height: 50px;
          }
          .tracking-box {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 20px 0;
            text-align: center;
          }
          .tracking-id {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin: 5px 0;
          }
          .status {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin: 10px 0;
            text-transform: uppercase;
          }
          .details {
            margin: 20px 0;
            padding: 0 15px;
          }
          .detail-row {
            margin-bottom: 10px;
          }
          .address-box {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 15px 0;
          }
          .footer {
            background-color: #f8f8f8;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #777;
            border-top: 1px solid #ddd;
            margin-top: 20px;
          }
          .highlight {
            color: #001E3C;
            font-weight: bold;
          }
          .btn {
            display: inline-block;
            background-color: #001E3C;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            margin: 15px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          table td {
            padding: 8px;
            vertical-align: top;
          }
          .section-title {
            font-weight: bold;
            background-color: #f0f0f0;
            padding: 8px;
            margin: 15px 0 10px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${LOGO_URL}" alt="EMEX Express Logo" class="logo">
          </div>
          
          <div class="tracking-box">
            <div>TRACKING ID: <span class="tracking-id">${trackingId}</span></div>
            <div class="status">NEW LEAD SUBMISSION</div>
            <div>
              The lead was submitted at:<br>
              ${formattedDate}, ${formattedTime} Uhr
            </div>
          </div>
          
          <div class="details">
            <div class="section-title">CUSTOMER INFORMATION</div>
            <table>
              <tr>
                <td width="40%"><strong>Full Name:</strong></td>
                <td>${formData.fullName || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Company:</strong></td>
                <td>${formData.company || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>${formData.email || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>${(formData.phonePrefix || '') + ' ' + (formData.phoneNumber || 'Not provided')}</td>
              </tr>
              <tr>
                <td><strong>Country:</strong></td>
                <td>${formData.country || 'Not provided'}</td>
              </tr>
            </table>
            
            <div class="section-title">SERVICE DETAILS</div>
            <table>
              <tr>
                <td width="40%"><strong>Service Type:</strong></td>
                <td class="highlight">${formData.service || 'Not provided'}</td>
              </tr>
            </table>
            
            <div class="section-title">ROUTE INFORMATION</div>
            <table>
              <tr>
                <td width="40%"><strong>Origin Country:</strong></td>
                <td>${formData.originCountry || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Origin Airport:</strong></td>
                <td>${formData.originAirport || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Destination Country:</strong></td>
                <td>${formData.destinationCountry || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Destination Airport:</strong></td>
                <td>${formData.destinationAirport || 'Not provided'}</td>
              </tr>
            </table>
            
            <div class="section-title">SHIPMENT DETAILS</div>
            <table>
              <tr>
                <td width="40%"><strong>Shipping Date:</strong></td>
                <td>${formData.shippingDate || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Gross Weight (kg):</strong></td>
                <td>${formData.grossWeight || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Number of Pieces:</strong></td>
                <td>${formData.numberOfPieces || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Package Type:</strong></td>
                <td>${formData.packageType || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Commodity:</strong></td>
                <td>${formData.commodity || 'Not provided'}</td>
              </tr>
              <tr>
                <td><strong>Additional Details:</strong></td>
                <td>${formData.additionalDetails || 'Not provided'}</td>
              </tr>
            </table>
          </div>
          
          <div class="address-box">
            <strong>EMEX EXPRESS / EMEX CORPORATE GMBH</strong><br>
            Der Squaire am Flughafen 12<br>
            60549 Frankfurt<br>
            Germany
          </div>
          
          <div class="footer">
            <p>This is an automated message from the EMEX Express website lead form.</p>
            <p>Lead ID: ${trackingId} | Submission time: ${timestamp.toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create HTML email template for customer confirmation
    const customerHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
          }
          .header {
            background-color: #f8f8f8;
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
          }
          .logo {
            max-height: 50px;
          }
          .tracking-box {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 20px 0;
            text-align: center;
          }
          .tracking-id {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin: 5px 0;
          }
          .status {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin: 10px 0;
            text-transform: uppercase;
          }
          .content {
            padding: 20px 15px;
          }
          .address-box {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 15px 0;
          }
          .footer {
            background-color: #f8f8f8;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #777;
            border-top: 1px solid #ddd;
            margin-top: 20px;
          }
          .highlight {
            color: #001E3C;
            font-weight: bold;
          }
          .btn {
            display: inline-block;
            background-color: #001E3C;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            margin: 15px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${LOGO_URL}" alt="EMEX Express Logo" class="logo">
          </div>
          
          <div class="tracking-box">
            <div>TRACKING ID: <span class="tracking-id">${trackingId}</span></div>
            <div class="status">REQUEST RECEIVED</div>
            <div>
              Your request was received at:<br>
              ${formattedDate}, ${formattedTime} Uhr
            </div>
          </div>
          
          <div class="content">
            <p>Dear ${formData.fullName},</p>
            
            <p>Thank you for your request. We have received your inquiry regarding <span class="highlight">${formData.service}</span> services.</p>
            
            <p>Our team will review your request and contact you shortly to discuss your airfreight needs in detail.</p>
            
            <p>Please save your tracking ID for future reference: <strong>${trackingId}</strong></p>
            
            <div style="background-color: #f8f8f8; border: 1px solid #ddd; padding: 15px; margin: 15px 0; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #001E3C; font-size: 16px;">Summary of Your Request</h3>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                <tr>
                  <td style="padding: 5px; font-weight: bold; width: 40%;">Service Type:</td>
                  <td style="padding: 5px;">${formData.service || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Route:</td>
                  <td style="padding: 5px;">${formData.originAirport || formData.originCountry || 'Not provided'} → ${formData.destinationAirport || formData.destinationCountry || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Shipping Date:</td>
                  <td style="padding: 5px;">${formData.shippingDate || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Gross Weight:</td>
                  <td style="padding: 5px;">${formData.grossWeight ? formData.grossWeight + ' kg' : 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Number of Pieces:</td>
                  <td style="padding: 5px;">${formData.numberOfPieces || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Package Type:</td>
                  <td style="padding: 5px;">${formData.packageType || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 5px; font-weight: bold;">Commodity:</td>
                  <td style="padding: 5px;">${formData.commodity || 'Not provided'}</td>
                </tr>
              </table>
            </div>
            
            <p>If you have any immediate questions, please don't hesitate to contact us.</p>
            
            <p>Best regards,<br>Your EMEX Express Team</p>
          </div>
          
          <div class="address-box">
            <strong>EMEX EXPRESS / EMEX CORPORATE GMBH</strong><br>
            Der Squaire am Flughafen 12<br>
            60549 Frankfurt<br>
            Germany
          </div>
          
          <div class="footer">
            <p>This is an automated confirmation of your request submitted through the EMEX Express website.</p>
            <p>Request ID: ${trackingId} | Submission time: ${timestamp.toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text versions for fallback
    const adminTextContent = `
      EMEX EXPRESS - NEW LEAD SUBMISSION
      
      TRACKING ID: ${trackingId}
      STATUS: NEW LEAD SUBMISSION
      Submitted at: ${timestamp.toLocaleString()}
      
      CUSTOMER INFORMATION
      Full Name: ${formData.fullName || 'Not provided'}
      Company: ${formData.company || 'Not provided'}
      Email: ${formData.email || 'Not provided'}
      Phone: ${(formData.phonePrefix || '') + ' ' + (formData.phoneNumber || 'Not provided')}
      Country: ${formData.country || 'Not provided'}
      
      SERVICE DETAILS
      Service Type: ${formData.service || 'Not provided'}
      
      ROUTE INFORMATION
      Origin Country: ${formData.originCountry || 'Not provided'}
      Origin Airport: ${formData.originAirport || 'Not provided'}
      Destination Country: ${formData.destinationCountry || 'Not provided'}
      Destination Airport: ${formData.destinationAirport || 'Not provided'}
      
      SHIPMENT DETAILS
      Shipping Date: ${formData.shippingDate || 'Not provided'}
      Gross Weight (kg): ${formData.grossWeight || 'Not provided'}
      Number of Pieces: ${formData.numberOfPieces || 'Not provided'}
      Package Type: ${formData.packageType || 'Not provided'}
      Commodity: ${formData.commodity || 'Not provided'}
      Additional Details: ${formData.additionalDetails || 'Not provided'}
      
      EMEX EXPRESS / EMEX CORPORATE GMBH
      Der Squaire am Flughafen 12
      60549 Frankfurt
      Germany
      
      This is an automated message from the EMEX Express website lead form.
      Lead ID: ${trackingId} | Submission time: ${timestamp.toLocaleString()}
    `;

    const customerTextContent = `
      EMEX EXPRESS - REQUEST CONFIRMATION
      
      TRACKING ID: ${trackingId}
      STATUS: REQUEST RECEIVED
      Received at: ${timestamp.toLocaleString()}
      
      Dear ${formData.fullName},
      
      Thank you for your request. We have received your inquiry regarding ${formData.service} services.
      
      Our team will review your request and contact you shortly to discuss your airfreight needs in detail.
      
      Please save your tracking ID for future reference: ${trackingId}
      
      If you have any immediate questions, please don't hesitate to contact us.
      
      Best regards,
      Your EMEX Express Team
      
      EMEX EXPRESS / EMEX CORPORATE GMBH
      Der Squaire am Flughafen 12
      60549 Frankfurt
      Germany
      
      This is an automated confirmation of your request submitted through the EMEX Express website.
      Request ID: ${trackingId} | Submission time: ${timestamp.toLocaleString()}
    `;

    // Configure admin email options
    const adminMailOptions = {
      from: 'web.request@emexexpress.de',
      to: 'web.request@emexexpress.de',
      subject: `New Lead: ${trackingId} - ${formData.service} - ${formData.company}`,
      html: adminHtmlContent,
      text: adminTextContent
    };

    // Configure customer email options (only if customer email is provided)
    const customerMailOptions = {
      from: 'web.request@emexexpress.de',
      to: formData.email,
      subject: `Your Request Confirmation - EMEX Express - ID: ${trackingId}`,
      html: customerHtmlContent,
      text: customerTextContent
    };

    // Define error type
    type EmailError = {
      type: string;
      message: string;
    };
    
    // Send emails and track success/failure
    const results = {
      adminEmailSent: false,
      customerEmailSent: false,
      errors: [] as EmailError[]
    };

    try {
      // Send admin notification email
      await transporter.sendMail(adminMailOptions);
      results.adminEmailSent = true;
    } catch (error: any) {
      results.errors.push({ type: 'admin', message: error.message });
      logEmailError(error, formData, 'admin');
    }

    // Only send customer email if they provided an email address
    if (formData.email) {
      try {
        await transporter.sendMail(customerMailOptions);
        results.customerEmailSent = true;
      } catch (error: any) {
        results.errors.push({ type: 'customer', message: error.message });
        logEmailError(error, formData, 'customer');
      }
    }

    // If any email failed, log it but still return success for the form submission
    if (results.errors.length > 0) {
      console.error('Email sending errors:', results.errors);
      
      // Send a notification about the failed email to admin
      if (!results.adminEmailSent || !results.customerEmailSent) {
        try {
          await transporter.sendMail({
            from: 'web.request@emexexpress.de',
            to: 'web.request@emexexpress.de',
            subject: `⚠️ EMAIL DELIVERY FAILURE - Lead ID: ${trackingId}`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #cc0000;">⚠️ Email Delivery Failure</h2>
                <p><strong>Lead ID:</strong> ${trackingId}</p>
                <p><strong>Customer:</strong> ${formData.fullName} (${formData.company})</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Failed emails:</strong></p>
                <ul>
                  ${!results.adminEmailSent ? '<li>Admin notification email</li>' : ''}
                  ${!results.customerEmailSent ? '<li>Customer confirmation email</li>' : ''}
                </ul>
                <p><strong>Error details:</strong></p>
                <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${JSON.stringify(results.errors, null, 2)}</pre>
                <p>Please check the email logs for more details and ensure this lead is processed manually.</p>
              </div>
            `,
            text: `
              ⚠️ EMAIL DELIVERY FAILURE
              
              Lead ID: ${trackingId}
              Customer: ${formData.fullName} (${formData.company})
              Email: ${formData.email}
              
              Failed emails:
              ${!results.adminEmailSent ? '- Admin notification email' : ''}
              ${!results.customerEmailSent ? '- Customer confirmation email' : ''}
              
              Error details:
              ${JSON.stringify(results.errors, null, 2)}
              
              Please check the email logs for more details and ensure this lead is processed manually.
            `
          });
        } catch (notificationError) {
          console.error('Failed to send email failure notification:', notificationError);
          logEmailError(notificationError, formData, 'failure-notification');
        }
      }
    }

    // Return success even if emails failed (we've logged the errors)
    // This ensures the user experience isn't affected by email delivery issues
    return NextResponse.json({ 
      success: true,
      trackingId,
      emailStatus: results
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error in email processing:', error);
    
    // Try to log the error
    try {
      const logDir = path.join(process.cwd(), 'logs');
      const logFile = path.join(logDir, 'email-errors.log');
      
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const timestamp = new Date().toISOString();
      const errorMessage = `[${timestamp}] General Error: ${error.message}\n`;
      
      fs.appendFileSync(logFile, errorMessage);
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
    
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
