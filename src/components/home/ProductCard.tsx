import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {
  icon: React.ReactNode;
  pill: string;
  title: string;
  description: string;
  bullets: string[];
  onCtaClick: () => void;
};

export default function ProductCard({
  icon,
  pill,
  title,
  description,
  bullets,
  onCtaClick,
}: Props) {
  return (
    <Card className="rounded-2xl border bg-white shadow-sm h-full">
      <div className="flex h-full flex-col">
        <CardHeader className="pb-0">
          {/* ícone mono */}
          <div className="h-12 w-12 rounded-2xl bg-black/[0.04] text-[#0b1a2a] grid place-items-center">
            {icon}
          </div>

          <div className="mt-6">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              {pill}
            </Badge>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#0b1a2a]">
              {title}
            </h3>

            <p className="mt-3 text-black/60 leading-relaxed">
              {description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="pt-6 flex flex-col flex-1">
          <ul className="space-y-3 text-sm text-black/55">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f0b247]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* ✅ empurra CTA pro final -> todos alinhados */}
          <div className="mt-auto pt-8">
            <Button
              onClick={onCtaClick}
              className="w-full rounded-xl py-6 text-base font-semibold bg-[#0a2a4a] hover:bg-[#08243f]"
            >
              Tenho Interesse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
