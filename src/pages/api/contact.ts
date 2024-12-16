import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import sendgrid from "@sendgrid/mail";

dotenv.config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Log specific environment variables
    console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY);
    console.log("SENDGRID_FROM:", process.env.SENDGRID_FROM);

    const { name, email, subject, message } = req.body;
    let retries = 3;
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    while (retries > 0) {
      try {
        const msg = {
          to: "dominiqmartinez13@gmail.com",
          from: process.env.SENDGRID_FROM as string, // Ensure this is a string
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        };

        const response = await sendgrid.send(msg);
        console.log("Message sent: %s", response[0].headers["x-message-id"]);
        console.log("SendGrid response:", response);
        res.status(200).json({
          success: true,
          messageId: response[0].headers["x-message-id"],
        });
        return;
      } catch (error) {
        console.error(`Attempt ${4 - retries} failed:`, error);
        if (error instanceof Error && (error as any).response) {
          console.error("Error response body:", (error as any).response.body);
        }
        retries--;
        if (retries === 0) {
          console.error("All retry attempts failed");
          throw error;
        }
        console.log(`Retrying... ${retries} attempts remaining`);
        await delay(2000); // Wait 2 seconds between retries
      }
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    if (error instanceof Error && (error as any).response) {
      console.error("Error response body:", (error as any)?.response?.body);
    }
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
