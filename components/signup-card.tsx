"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function SignupCard({
  compact = false,
  title = "Get free beginner resources",
  description = "Project roadmaps, checklists, and simple guidance built for DIY-capable beginners."
}: {
  compact?: boolean;
  title?: string;
  description?: string;
}) {
  const [email, setEmail] = useState("");

  const message = useMemo(() => {
    if (!email) return "This form is visually staged for a future email provider integration.";
    return "Thanks — this demo form shows where future resource signup functionality can be connected.";
  }, [email]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <Button className="w-full" size={compact ? "default" : "lg"}>
          Join the list
        </Button>
        <p className="text-sm leading-6 text-steel">{message}</p>
      </CardContent>
    </Card>
  );
}
