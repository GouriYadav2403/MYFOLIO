import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    };

    // Use a JSON file as a simple database
    const dbPath = path.join(process.cwd(), "submissions.json");
    
    let submissions = [];
    try {
      const data = await fs.readFile(dbPath, "utf-8");
      submissions = JSON.parse(data);
    } catch (error) {
      // If file doesn't exist or is empty, we just start with empty array
    }

    submissions.push(newSubmission);
    await fs.writeFile(dbPath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true, submission: newSubmission });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
