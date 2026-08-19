import {
  ActivityIcon,
  ArrowUpRightIcon,
  BellIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CircleIcon,
  CommandIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const activity = [
  { day: "Mon", completed: 24 },
  { day: "Tue", completed: 31 },
  { day: "Wed", completed: 28 },
  { day: "Thu", completed: 45 },
  { day: "Fri", completed: 38 },
  { day: "Sat", completed: 52 },
  { day: "Sun", completed: 61 },
];
const chartConfig = {
  completed: { label: "Completed", color: "var(--chart-1)" },
} satisfies ChartConfig;
const projects = [
  { name: "Mobile navigation", team: ["LM", "SK"], status: "In progress", progress: 72 },
  { name: "Onboarding flow", team: ["AM", "JD"], status: "In review", progress: 91 },
  { name: "Billing settings", team: ["LM", "TR"], status: "Planned", progress: 26 },
  { name: "Search indexing", team: ["SK", "JD"], status: "Complete", progress: 100 },
];

function CreateProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon data-icon="inline-start" />
          New project
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a project</DialogTitle>
          <DialogDescription>
            Add the basic details. You can refine the setup later.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="project-name">Project name</FieldLabel>
            <Input id="project-name" placeholder="Product launch" />
          </Field>
          <Field>
            <FieldLabel htmlFor="project-team">Team</FieldLabel>
            <Select>
              <SelectTrigger id="project-team">
                <SelectValue placeholder="Select team" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field orientation="horizontal">
            <div className="flex-1">
              <FieldLabel htmlFor="project-updates">Weekly digest</FieldLabel>
              <FieldDescription>Send the team a concise status summary.</FieldDescription>
            </div>
            <Switch id="project-updates" defaultChecked />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <Button>Create project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DashboardShowcase() {
  return (
    <div className="bg-background flex min-h-[760px] w-full overflow-hidden rounded-xl border">
      <aside className="bg-card hidden w-52 shrink-0 border-r lg:flex lg:flex-col">
        <div className="flex h-14 items-center gap-2 border-b px-4 font-medium">
          <span className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <CommandIcon className="size-3.5" />
          </span>
          Northstar
          <ChevronDownIcon className="text-muted-foreground ml-auto size-3.5" />
        </div>
        <nav className="flex flex-col gap-6 p-3 text-sm">
          <div className="flex flex-col gap-1">
            <button className="bg-accent text-accent-foreground flex items-center gap-2 rounded-md px-2.5 py-2 text-left">
              <LayoutDashboardIcon className="size-4" />
              Overview
            </button>
            <button className="text-muted-foreground hover:bg-accent flex items-center gap-2 rounded-md px-2.5 py-2 text-left">
              <ActivityIcon className="size-4" />
              Activity
            </button>
            <button className="text-muted-foreground hover:bg-accent flex items-center gap-2 rounded-md px-2.5 py-2 text-left">
              <FileTextIcon className="size-4" />
              Projects
              <Badge variant="secondary" className="ml-auto">
                8
              </Badge>
            </button>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 px-2.5 text-xs font-medium">Workspace</p>
            <div className="flex flex-col gap-1">
              <button className="text-muted-foreground hover:bg-accent flex items-center gap-2 rounded-md px-2.5 py-2 text-left">
                <UsersIcon className="size-4" />
                People
              </button>
              <button className="text-muted-foreground hover:bg-accent flex items-center gap-2 rounded-md px-2.5 py-2 text-left">
                <SettingsIcon className="size-4" />
                Settings
              </button>
            </div>
          </div>
        </nav>
        <div className="mt-auto border-t p-3">
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
            <Avatar className="size-7">
              <AvatarFallback>LM</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium">Leo Mosley</p>
              <p className="text-muted-foreground truncate text-[11px]">leo@mosly.dev</p>
            </div>
            <MoreHorizontalIcon className="text-muted-foreground ml-auto size-4" />
          </div>
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="flex h-14 items-center gap-3 border-b px-4 sm:px-5">
          <InputGroup className="hidden max-w-xs sm:flex">
            <InputGroupInput placeholder="Search workspace..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <span className="font-mono text-[10px]">⌘K</span>
            </InputGroupAddon>
          </InputGroup>
          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <BellIcon />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Import data</DropdownMenuItem>
                  <DropdownMenuItem>Workspace settings</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <CreateProjectDialog />
          </div>
        </header>
        <main className="flex flex-col gap-5 p-4 sm:p-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold tracking-tight">Good morning, Leo</h2>
              <SparklesIcon className="text-primary size-4" />
            </div>
            <p className="text-muted-foreground text-sm">
              Here’s what is moving across the workspace.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Active projects", "8", "+2 this month"],
              ["Open issues", "24", "6 high priority"],
              ["Cycle progress", "68%", "+12% this week"],
              ["Team velocity", "41", "points / week"],
            ].map(([label, value, note]) => (
              <Card key={label} className="gap-3 py-4">
                <CardHeader className="px-4">
                  <CardDescription>{label}</CardDescription>
                  <CardTitle className="text-2xl tracking-tight">{value}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground flex items-center gap-1 px-4 text-xs">
                  <ArrowUpRightIcon className="text-primary size-3" />
                  {note}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <Card>
              <CardHeader className="flex-row items-start justify-between">
                <div>
                  <CardTitle>Weekly activity</CardTitle>
                  <CardDescription>Issues completed across all projects.</CardDescription>
                </div>
                <Badge variant="outline">Last 7 days</Badge>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-56 w-full">
                  <AreaChart accessibilityLayer data={activity} margin={{ left: 4, right: 4 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      dataKey="completed"
                      type="natural"
                      fill="var(--color-completed)"
                      fillOpacity={0.2}
                      stroke="var(--color-completed)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cycle 24</CardTitle>
                <CardDescription>6 days remaining</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <Progress value={68} />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-semibold">34</p>
                    <p className="text-muted-foreground text-xs">Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">16</p>
                    <p className="text-muted-foreground text-xs">Remaining</p>
                  </div>
                </div>
                <Separator />
                {[
                  ["Design", 86],
                  ["Engineering", 61],
                  ["Product", 48],
                ].map(([name, value]) => (
                  <div key={name} className="flex items-center gap-3 text-sm">
                    <span className="w-20">{name}</span>
                    <Progress value={Number(value)} className="h-1.5" />
                    <span className="text-muted-foreground w-8 text-right font-mono text-xs">
                      {value}%
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <Card className="overflow-hidden">
            <Tabs defaultValue="projects">
              <CardHeader className="flex-row items-center justify-between border-b">
                <div>
                  <CardTitle>Workspace</CardTitle>
                  <CardDescription>Current delivery overview.</CardDescription>
                </div>
                <TabsList>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                </TabsList>
              </CardHeader>
              <TabsContent value="projects" className="mt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project</TableHead>
                      <TableHead className="hidden sm:table-cell">Team</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Progress</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.name}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <div className="flex -space-x-2">
                            {project.team.map((person) => (
                              <Avatar key={person} className="border-background size-6 border">
                                <AvatarFallback className="text-[9px]">{person}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={project.status === "Complete" ? "default" : "secondary"}>
                            {project.status === "Complete" ? <CheckCircle2Icon /> : <CircleIcon />}
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="flex items-center gap-2">
                            <Progress value={project.progress} className="h-1.5 w-20" />
                            <span className="text-muted-foreground font-mono text-xs">
                              {project.progress}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon-sm">
                            <MoreHorizontalIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent
                value="updates"
                className="text-muted-foreground m-0 p-8 text-center text-sm"
              >
                Workspace updates are all caught up.
              </TabsContent>
            </Tabs>
          </Card>
        </main>
      </div>
    </div>
  );
}
