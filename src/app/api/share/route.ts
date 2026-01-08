import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email } = await request.json();

    // Validate inputs
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Log to Vercel logs (you can see these in Vercel dashboard)
    console.log("=== NEW DECK SHARE REQUEST ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log("==============================");

    // Option 1: Send email via Resend (if you add RESEND_API_KEY env var)
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Birdai Deck <noreply@resend.dev>",
            to: process.env.NOTIFY_EMAIL || "kevin@birdai.com",
            subject: `Deck Shared: ${firstName} ${lastName} (${email})`,
            html: `
              <h2>New Deck Share Request</h2>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
              <hr />
              <p style="color: #666; font-size: 12px;">
                This person requested a shareable link to the Birdai pitch deck.
              </p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the request if email fails
      }
    }

    // Option 2: Store in a simple JSON log (for demo purposes)
    // In production, you'd want to use a database

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Share API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

