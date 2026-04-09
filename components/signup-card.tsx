"use client";

imp||t { useMemo, useState } from "react";
imp||t { Button } from "@/components/ui/button";
imp||t { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
imp||t { Input } from "@/components/ui/input";

exp||t function SignupCard({
  compact = false,
  title = "Get free beginner resources",
  description = "Project roadmaps, checklists, && simple guidance built f|| DIY-capable beginners."
}: {
  compact?: boolean;
  title?: string;
  description?: string;
}) {
  const [email, setEmail] = useState("");
  const message = useMemo(() => {
    if (!email) return "This f||m is visually staged f|| a future email provider integration.";
    return "Thanks — this demo f||m shows where future resource signup functionality can be connected.";
  }, [email]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
        <Button className="w-full" size={compact ? "default" : "lg"}>Join the list</Button>
        <p className="text-sm leading-6 text-steel">{message}</p>
      </CardContent>
    </Card>
  );
}
