import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";

const activityData = [
  { day: "Mon", commits: 12 },
  { day: "Tue", commits: 8 },
  { day: "Wed", commits: 15 },
  { day: "Thu", commits: 6 },
  { day: "Fri", commits: 20 },
  { day: "Sat", commits: 4 },
  { day: "Sun", commits: 2 },
];

export function ActivityChart() {
  const maxCommits = Math.max(...activityData.map((d) => d.commits));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Your coding activity this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between h-32 gap-2">
          {activityData.map((data) => (
            <div
              key={data.day}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <div
                className="w-full bg-primary rounded-t transition-all hover:opacity-80"
                style={{
                  height: `${(data.commits / maxCommits) * 100}%`,
                  minHeight: "4px",
                }}
              />
              <span className="text-xs text-muted-foreground">{data.day}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Total commits this week: <span className="font-semibold">67</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
