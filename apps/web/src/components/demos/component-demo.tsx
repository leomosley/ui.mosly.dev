import {
  AlertCircleIcon,
  BellIcon,
  BoldIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  InboxIcon,
  ItalicIcon,
  MailIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  UnderlineIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
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
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const chartData = [
  { month: "Jan", visitors: 186 },
  { month: "Feb", visitors: 305 },
  { month: "Mar", visitors: 237 },
  { month: "Apr", visitors: 473 },
  { month: "May", visitors: 409 },
  { month: "Jun", visitors: 514 },
];
const chartConfig = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
} satisfies ChartConfig;

function Surface({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div
      className={`flex min-h-80 w-full items-center justify-center p-6 sm:p-10 ${wide ? "max-w-4xl" : "max-w-2xl"}`}
    >
      {children}
    </div>
  );
}

function CalendarDemo({ picker = false }: { picker?: boolean }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  if (!picker)
    return (
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />
    );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon data-icon="inline-start" />
          {date?.toLocaleDateString() ?? "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Select framework");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-52 justify-between">
          {value}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {["Astro", "Next.js", "Remix", "Vite"].map((item) => (
                <CommandItem
                  key={item}
                  onSelect={() => {
                    setValue(item);
                    setOpen(false);
                  }}
                >
                  <CheckIcon />
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function TableDemo({ interactive = false }: { interactive?: boolean }) {
  return (
    <div className="w-full">
      <Table>
        <TableCaption>
          {interactive ? "Click a heading to sort in a full implementation." : "Recent invoices"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ["INV-1042", "Paid", "$250.00"],
            ["INV-1041", "Pending", "$150.00"],
            ["INV-1040", "Paid", "$350.00"],
          ].map((row) => (
            <TableRow key={row[0]}>
              <TableCell className="font-mono">{row[0]}</TableCell>
              <TableCell>
                <Badge variant="secondary">{row[1]}</Badge>
              </TableCell>
              <TableCell className="text-right">{row[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function OverlayDemo({ slug }: { slug: string }) {
  if (slug === "dialog")
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Update your public profile details.</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
              <Input id="dialog-name" defaultValue="Leo Mosley" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  if (slug === "alert-dialog")
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete project</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  if (slug === "sheet")
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Project settings</SheetTitle>
            <SheetDescription>Configure how this project behaves.</SheetDescription>
          </SheetHeader>
          <FieldGroup className="px-4">
            <Field>
              <FieldLabel htmlFor="sheet-name">Name</FieldLabel>
              <Input id="sheet-name" defaultValue="Mosly UI" />
            </Field>
          </FieldGroup>
          <SheetFooter>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  if (slug === "drawer")
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move project</DrawerTitle>
            <DrawerDescription>Select a new workspace for this project.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Continue</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  return null;
}

export function ComponentDemo({ slug }: { slug: string }) {
  let demo: React.ReactNode;
  switch (slug) {
    case "button":
      demo = (
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Loading
          </Button>
        </div>
      );
      break;
    case "button-group":
      demo = (
        <ButtonGroup>
          <Button variant="outline">
            <BoldIcon />
          </Button>
          <ButtonGroupSeparator />
          <Button variant="outline">
            <ItalicIcon />
          </Button>
          <ButtonGroupSeparator />
          <Button variant="outline">
            <UnderlineIcon />
          </Button>
        </ButtonGroup>
      );
      break;
    case "input":
      demo = (
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="leo@mosly.dev" />
          <FieldDescription>We'll only use this for project updates.</FieldDescription>
        </Field>
      );
      break;
    case "input-group":
      demo = (
        <InputGroup className="max-w-sm">
          <InputGroupInput placeholder="Search components..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      );
      break;
    case "input-otp":
      demo = (
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      );
      break;
    case "textarea":
      demo = (
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" placeholder="Tell us what you're building..." />
        </Field>
      );
      break;
    case "label":
      demo = (
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="label-demo">Project name</Label>
          <Input id="label-demo" defaultValue="Design system" />
        </div>
      );
      break;
    case "checkbox":
      demo = (
        <Field orientation="horizontal">
          <Checkbox id="updates" defaultChecked />
          <FieldLabel htmlFor="updates">Email me product updates</FieldLabel>
        </Field>
      );
      break;
    case "radio-group":
      demo = (
        <FieldSet>
          <FieldLegend>Plan</FieldLegend>
          <RadioGroup defaultValue="pro">
            <Field orientation="horizontal">
              <RadioGroupItem id="free" value="free" />
              <FieldLabel htmlFor="free">Free</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem id="pro" value="pro" />
              <FieldLabel htmlFor="pro">Pro</FieldLabel>
            </Field>
          </RadioGroup>
        </FieldSet>
      );
      break;
    case "select":
      demo = (
        <Select>
          <SelectTrigger className="w-52">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="engineer">Engineer</SelectItem>
              <SelectItem value="founder">Founder</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      );
      break;
    case "native-select":
      demo = (
        <NativeSelect className="w-52">
          <NativeSelectOption value="">Select a role</NativeSelectOption>
          <NativeSelectOption value="designer">Designer</NativeSelectOption>
          <NativeSelectOption value="engineer">Engineer</NativeSelectOption>
        </NativeSelect>
      );
      break;
    case "switch":
      demo = (
        <Field orientation="horizontal" className="max-w-sm">
          <FieldContent>
            <FieldLabel htmlFor="notifications">Notifications</FieldLabel>
            <FieldDescription>Receive updates when projects change.</FieldDescription>
          </FieldContent>
          <Switch id="notifications" defaultChecked />
        </Field>
      );
      break;
    case "slider":
      demo = <Slider defaultValue={[35]} max={100} className="w-full max-w-sm" />;
      break;
    case "toggle":
      demo = (
        <Toggle aria-label="Toggle bold">
          <BoldIcon />
        </Toggle>
      );
      break;
    case "toggle-group":
      demo = (
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem value="bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      );
      break;
    case "field":
    case "form":
      demo = (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Start with a name and notification preference.</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="project">Project name</FieldLabel>
                <Input id="project" placeholder="Acme redesign" />
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="notify" />
                <FieldLabel htmlFor="notify">Notify collaborators</FieldLabel>
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Create project</Button>
          </CardFooter>
        </Card>
      );
      break;
    case "combobox":
      demo = <ComboboxDemo />;
      break;
    case "date-picker":
      demo = <CalendarDemo picker />;
      break;
    case "avatar":
      demo = (
        <div className="flex items-center -space-x-2">
          <Avatar>
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>+4</AvatarFallback>
          </Avatar>
        </div>
      );
      break;
    case "badge":
      demo = (
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Error</Badge>
        </div>
      );
      break;
    case "card":
      demo = (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project orbit</CardTitle>
            <CardDescription>12 active collaborators</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={72} />
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View project
            </Button>
          </CardFooter>
        </Card>
      );
      break;
    case "table":
      demo = <TableDemo />;
      break;
    case "data-table":
      demo = <TableDemo interactive />;
      break;
    case "chart":
      demo = (
        <ChartContainer config={chartConfig} className="h-64 w-full max-w-xl">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="visitors"
              type="natural"
              fill="var(--color-visitors)"
              fillOpacity={0.22}
              stroke="var(--color-visitors)"
            />
          </AreaChart>
        </ChartContainer>
      );
      break;
    case "calendar":
      demo = <CalendarDemo />;
      break;
    case "carousel":
      demo = (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {[1, 2, 3, 4].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center text-4xl font-semibold">
                    {item}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
      break;
    case "aspect-ratio":
      demo = (
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted flex w-full max-w-lg items-center justify-center rounded-lg"
        >
          <SparklesIcon className="text-muted-foreground size-10" />
        </AspectRatio>
      );
      break;
    case "separator":
      demo = (
        <div className="w-full max-w-sm">
          <h3 className="font-medium">Mosly UI</h3>
          <p className="text-muted-foreground text-sm">A restrained shadcn theme.</p>
          <Separator className="my-4" />
          <div className="flex h-5 items-center gap-4 text-sm">
            <span>Theme</span>
            <Separator orientation="vertical" />
            <span>Components</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
          </div>
        </div>
      );
      break;
    case "skeleton":
      demo = (
        <div className="flex w-full max-w-sm items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      );
      break;
    case "progress":
      demo = <Progress value={64} className="w-full max-w-sm" />;
      break;
    case "item":
      demo = (
        <Item variant="outline" className="w-full max-w-md">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Design review</ItemTitle>
            <ItemDescription>4 new comments on the dashboard.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              Open
            </Button>
          </ItemActions>
        </Item>
      );
      break;
    case "kbd":
      demo = (
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      );
      break;
    case "typography":
      demo = (
        <article className="max-w-lg">
          <h1 className="text-4xl font-semibold tracking-tight">Interface, quietly precise.</h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            A restrained hierarchy with tight display type and calm supporting text.
          </p>
          <blockquote className="border-primary mt-6 border-l-2 pl-4 text-sm">
            Good tools disappear into the work.
          </blockquote>
        </article>
      );
      break;
    case "empty":
      demo = (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>
              Create your first project to start organizing the work.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Create project</Button>
          </EmptyContent>
        </Empty>
      );
      break;
    case "breadcrumb":
      demo = (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
      break;
    case "pagination":
      demo = (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
      break;
    case "tabs":
      demo = (
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-muted-foreground p-4">
            A concise project overview.
          </TabsContent>
          <TabsContent value="activity" className="text-muted-foreground p-4">
            Recent project activity.
          </TabsContent>
        </Tabs>
      );
      break;
    case "navigation-menu":
      demo = (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent className="p-3">
                <NavigationMenuLink href="/components" className="block w-56 rounded-md p-3">
                  <strong>Components</strong>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Browse every themed primitive.
                  </p>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="px-4 py-2 text-sm">
                Theme
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      break;
    case "menubar":
      demo = (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New project</MenubarItem>
              <MenubarItem>Open workspace</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Command palette</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      );
      break;
    case "sidebar":
      demo = (
        <div className="h-96 w-full overflow-hidden rounded-lg border">
          <SidebarProvider>
            <Sidebar collapsible="icon">
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {[
                        [InboxIcon, "Inbox"],
                        [SettingsIcon, "Settings"],
                      ].map(([Icon, label]) => (
                        <SidebarMenuItem key={String(label)}>
                          <SidebarMenuButton tooltip={String(label)}>
                            <Icon />
                            <span>{String(label)}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <div className="flex h-14 items-center border-b px-4">
                <SidebarTrigger />
              </div>
              <div className="p-6">
                <Skeleton className="h-40 w-full" />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      );
      break;
    case "command":
      demo = (
        <Command className="w-full max-w-md rounded-lg border">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                Calendar
              </CommandItem>
              <CommandItem>
                <UserIcon />
                Profile
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      );
      break;
    case "dialog":
    case "alert-dialog":
    case "sheet":
    case "drawer":
      demo = <OverlayDemo slug={slug} />;
      break;
    case "popover":
      demo = (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>Set the component dimensions.</PopoverDescription>
            </PopoverHeader>
            <FieldGroup className="mt-4">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="width">Width</FieldLabel>
                <Input id="width" defaultValue="100%" />
              </Field>
            </FieldGroup>
          </PopoverContent>
        </Popover>
      );
      break;
    case "hover-card":
      demo = (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@leomosley</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Leo Mosley</p>
                <p className="text-muted-foreground text-sm">Designing tools for focused work.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      );
      break;
    case "tooltip":
      demo = (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <BellIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
      break;
    case "dropdown-menu":
      demo = (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
      break;
    case "context-menu":
      demo = (
        <ContextMenu>
          <ContextMenuTrigger className="bg-muted flex h-40 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem>
                <CopyIcon />
                Copy
              </ContextMenuItem>
              <ContextMenuItem>
                <MailIcon />
                Share
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      );
      break;
    case "alert":
      demo = (
        <Alert className="max-w-lg">
          <AlertCircleIcon />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>Your theme is ready to install in any shadcn project.</AlertDescription>
        </Alert>
      );
      break;
    case "toast":
      demo = (
        <Button
          onClick={() =>
            toast.success("Theme installed", {
              description: "Mosly tokens were added to globals.css.",
            })
          }
        >
          Show toast
        </Button>
      );
      break;
    case "spinner":
      demo = (
        <div className="flex items-center gap-4">
          <Spinner />
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Saving
          </Button>
        </div>
      );
      break;
    case "accordion":
      demo = (
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="one">
            <AccordionTrigger>Is this a component library?</AccordionTrigger>
            <AccordionContent>
              No. It is a theme for the standard shadcn components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>Does it support light mode?</AccordionTrigger>
            <AccordionContent>Yes. Dark is simply the default.</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      break;
    case "collapsible":
      demo = (
        <Collapsible className="w-full max-w-sm">
          <div className="flex items-center justify-between">
            <p className="font-medium">3 design tokens</p>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                Toggle
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-3 flex flex-col gap-2">
            {["--background", "--primary", "--border"].map((token) => (
              <div key={token} className="bg-muted rounded-md px-3 py-2 font-mono text-sm">
                {token}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
      break;
    case "resizable":
      demo = (
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-64 w-full max-w-xl rounded-lg border"
        >
          <ResizablePanel defaultSize="35%">
            <div className="flex h-full items-center justify-center">
              <span className="text-sm font-medium">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="65%">
            <div className="flex h-full items-center justify-center">
              <span className="text-sm font-medium">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      );
      break;
    case "scroll-area":
      demo = (
        <ScrollArea className="h-72 w-full max-w-sm rounded-lg border p-4">
          <div className="flex flex-col gap-3">
            {Array.from({ length: 20 }, (_, index) => (
              <div key={index} className="text-sm">
                Component {String(index + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        </ScrollArea>
      );
      break;
    default:
      demo = <p className="text-muted-foreground">Demo coming soon.</p>;
  }
  return (
    <Surface wide={["table", "data-table", "chart", "sidebar", "resizable"].includes(slug)}>
      {demo}
    </Surface>
  );
}
