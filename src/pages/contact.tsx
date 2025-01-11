import { useState, useEffect } from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  // const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [] as string[],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    //No APIS for now ?  TODO: Add API for contact form

    // try {
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       ...formData,
    //       subject: "New Metaswap Dev Lead",
    //     }),
    //   });

    //   if (response.ok) {
    //     toast({
    //       title: "Success!",
    //       description: "Your message has been sent successfully.",
    //       variant: "default",
    //     });
    //     setFormData({ name: "", email: "", message: "" });
    //   } else {
    //     throw new Error("Failed to send message");
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to send message. Please try again.",
    //     variant: "default",
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Container title="Contact - Metaswap">
      <div className="mt-40 flex w-full flex-col items-center space-y-8">
        <h1 className="text-4xl font-semibold tracking-tight xl:text-6xl">
          Get in <span className="text-gradient clash-grotesk">Touch</span>
        </h1>

        <p className="max-w-lg text-center text-muted-foreground">
          We are a full-stack development agency ready to bring your projects to
          life. Let&apos;s build something amazing together.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">

        <div className="space-y-2">
          <label className="text-sm font-medium">Services</label>
          <div className="space-y-2 p-2 border rounded bg-white bg-opacity-10">
            {[
              "Software development",
              "UI/UX",
              "Project Management",
              "Consulting",
            ].map((service) => (
              <div key={service} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={service}
            checked={formData.services.includes(service)}
            onChange={(e) => {
              if (e.target.checked) {
                setFormData({
            ...formData,
            services: [...formData.services, service],
                });
              } else {
                setFormData({
            ...formData,
            services: formData.services.filter((s) => s !== service),
                });
              }
            }}
            className="w-4 h-4"
          />
          <label htmlFor={service} className="text-sm">
            {service}
          </label>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Currently selected: {formData.services.join(", ") || "None"}
          </p>
        </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
    </Container>
  );
}

// External APi function :

// import type { NextApiRequest, NextApiResponse } from "next";
// import dotenv from "dotenv";
// import sendgrid, { ResponseError } from "@sendgrid/mail";
// import type { MailDataRequired } from "@sendgrid/mail";

// dotenv.config();

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

// interface ContactFormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY);
//     console.log("SENDGRID_FROM:", process.env.SENDGRID_FROM);

//     const { name, email, subject, message } = req.body as ContactFormData;
//     let retries = 3;
//     const delay = (ms: number) =>
//       new Promise((resolve) => setTimeout(resolve, ms));

//     while (retries > 0) {
//       try {
//         const msg: MailDataRequired = {
//           to: "dominiqmartinez13@gmail.com",
//           from: process.env.SENDGRID_FROM!,
//           subject: `New Contact Form Submission: ${subject}`,
//           html: `
//             <h3>New Contact Form Submission</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Subject:</strong> ${subject}</p>
//             <p><strong>Message:</strong> ${message}</p>
//           `,
//         };

//         const [clientResponse] = await sendgrid.send(msg);
//         const headers = clientResponse.headers as Record<string, string>;
//         const messageId = headers["x-message-id"];
//         console.log("Message sent: %s", messageId);
//         console.log("SendGrid response:", clientResponse);
//         res.status(200).json({
//           success: true,
//           messageId: messageId,
//         });
//         return;
//       } catch (error: unknown) {
//         console.error(`Attempt ${4 - retries} failed:`, error);
//         if (error instanceof ResponseError) {
//           console.error("Error response body:", error.response.body);
//         } else {
//           console.error("Unexpected error:", error);
//         }
//         retries--;
//         if (retries === 0) {
//           console.error("All retry attempts failed");
//           throw error;
//         }
//         console.log(`Retrying... ${retries} attempts remaining`);
//         await delay(2000);
//       }
//     }
//   } catch (error: unknown) {
//     console.error("Unexpected error:", error);
//     if (error instanceof ResponseError) {
//       console.error("Error response body:", error.response.body);
//     } else {
//       console.error("Unexpected error:", error);
//     }
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// }
