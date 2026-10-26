import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { ArrowLeft, Inbox } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | Submissions",
};

export default async function AdminPage() {
  const dbPath = path.join(process.cwd(), "submissions.json");
  let submissions = [];

  try {
    const data = await fs.readFile(dbPath, "utf-8");
    submissions = JSON.parse(data);
    
    // Sort by newest first
    submissions.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    // File doesn't exist or is empty
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-display tracking-tight text-foreground">
              Contact Submissions
            </h1>
            <p className="text-muted mt-2">Manage all messages received from your portfolio contact form.</p>
          </div>
          <Link href="/" className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors bg-primary/10 px-4 py-2 rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        {submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-card/50 rounded-3xl border border-card-border">
            <Inbox className="w-16 h-16 text-muted mb-4 opacity-50" />
            <h2 className="text-xl font-semibold text-foreground">No submissions yet</h2>
            <p className="text-muted mt-2">When someone contacts you, their message will appear here.</p>
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-card-border overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-card-border/50 text-foreground/80 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4 w-full">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {submissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-muted">
                        {new Date(sub.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-6 py-4 font-medium text-foreground">{sub.name}</td>
                      <td className="px-6 py-4">
                        <a href={`mailto:${sub.email}`} className="text-primary hover:underline">
                          {sub.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-muted max-w-xs truncate" title={sub.message}>
                        {sub.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
