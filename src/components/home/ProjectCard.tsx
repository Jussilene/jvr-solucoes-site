import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  href,
  tags = [],
}: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Card className="overflow-hidden hover:shadow-md transition">
        <div className="aspect-[16/9] bg-muted overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </a>
  );
}
