export const componentGroups = [
  "Forms",
  "Data Display",
  "Navigation",
  "Overlays",
  "Layout",
] as const;

export type ComponentGroup = (typeof componentGroups)[number];

export interface ComponentEntry {
  slug: string;
  name: string;
  group: ComponentGroup;
  description: string;
  keywords: string[];
  shadcnUrl: string;
}

const entries: Array<[string, string, ComponentGroup, string, string[]?]> = [
  ["button", "Button", "Forms", "Triggers an action or event.", ["action", "cta"]],
  ["button-group", "Button Group", "Forms", "Groups related actions into one control."],
  ["input", "Input", "Forms", "A text field for user input."],
  ["input-group", "Input Group", "Forms", "Combines inputs with icons and actions."],
  ["input-otp", "Input OTP", "Forms", "An accessible one-time password input."],
  ["textarea", "Textarea", "Forms", "A multi-line text input."],
  ["label", "Label", "Forms", "An accessible label for a control."],
  ["checkbox", "Checkbox", "Forms", "Selects one or more options."],
  ["radio-group", "Radio Group", "Forms", "Selects one option from a set."],
  ["select", "Select", "Forms", "Chooses an option from a menu."],
  ["native-select", "Native Select", "Forms", "A styled platform-native select."],
  ["switch", "Switch", "Forms", "Toggles a setting on or off."],
  ["slider", "Slider", "Forms", "Selects a value from a range."],
  ["toggle", "Toggle", "Forms", "A two-state button."],
  ["toggle-group", "Toggle Group", "Forms", "A set of related two-state buttons."],
  ["field", "Field", "Forms", "Composes labels, controls, help, and errors."],
  ["form", "Form", "Forms", "A validated React Hook Form composition."],
  ["combobox", "Combobox", "Forms", "A searchable option picker."],
  ["date-picker", "Date Picker", "Forms", "Selects a date from a calendar popover."],
  ["avatar", "Avatar", "Data Display", "An image with a resilient text fallback."],
  ["badge", "Badge", "Data Display", "A compact status or category label."],
  ["card", "Card", "Data Display", "Groups related content and actions."],
  ["table", "Table", "Data Display", "Displays structured tabular data."],
  ["data-table", "Data Table", "Data Display", "An interactive sortable data grid."],
  ["chart", "Chart", "Data Display", "Theme-aware data visualization primitives."],
  ["calendar", "Calendar", "Data Display", "A date selection calendar."],
  ["carousel", "Carousel", "Data Display", "Cycles through a collection of content."],
  ["aspect-ratio", "Aspect Ratio", "Data Display", "Maintains a fixed media ratio."],
  ["separator", "Separator", "Data Display", "Visually divides content."],
  ["skeleton", "Skeleton", "Data Display", "A placeholder for loading content."],
  ["progress", "Progress", "Data Display", "Shows task completion progress."],
  ["item", "Item", "Data Display", "A flexible row for lists and settings."],
  ["kbd", "Kbd", "Data Display", "Displays a keyboard key or shortcut."],
  ["typography", "Typography", "Data Display", "Text hierarchy and prose styles."],
  ["empty", "Empty", "Data Display", "A composed empty-state treatment."],
  ["breadcrumb", "Breadcrumb", "Navigation", "Shows a page's location in a hierarchy."],
  ["pagination", "Pagination", "Navigation", "Moves between pages of content."],
  ["tabs", "Tabs", "Navigation", "Switches between related views."],
  ["navigation-menu", "Navigation Menu", "Navigation", "A structured site navigation menu."],
  ["menubar", "Menubar", "Navigation", "A desktop-style persistent menu."],
  ["sidebar", "Sidebar", "Navigation", "A responsive application navigation rail."],
  ["command", "Command", "Navigation", "A fast searchable command menu.", ["cmdk", "search"]],
  ["dialog", "Dialog", "Overlays", "A modal window above the page."],
  ["alert-dialog", "Alert Dialog", "Overlays", "A modal confirmation for important actions."],
  ["sheet", "Sheet", "Overlays", "A panel sliding from an edge."],
  ["drawer", "Drawer", "Overlays", "A mobile-friendly bottom panel."],
  ["popover", "Popover", "Overlays", "Floating content anchored to a trigger."],
  ["hover-card", "Hover Card", "Overlays", "A rich preview shown on hover."],
  ["tooltip", "Tooltip", "Overlays", "A short description for a control."],
  ["dropdown-menu", "Dropdown Menu", "Overlays", "A contextual list of actions."],
  ["context-menu", "Context Menu", "Overlays", "Actions opened by right-click."],
  ["alert", "Alert", "Overlays", "An inline message for important information."],
  ["toast", "Toast", "Overlays", "A brief non-blocking notification.", ["sonner"]],
  ["spinner", "Spinner", "Overlays", "Indicates an in-progress operation."],
  ["accordion", "Accordion", "Layout", "Vertically expands and collapses sections."],
  ["collapsible", "Collapsible", "Layout", "Shows and hides a content region."],
  ["resizable", "Resizable", "Layout", "Creates adjustable panel layouts."],
  ["scroll-area", "Scroll Area", "Layout", "A custom cross-browser scroll container."],
];

export const components: ComponentEntry[] = entries.map(
  ([slug, name, group, description, keywords = []]) => ({
    slug,
    name,
    group,
    description,
    keywords,
    shadcnUrl: `https://ui.shadcn.com/docs/components/base/${slug}`,
  }),
);

export function getComponent(slug: string) {
  return components.find((component) => component.slug === slug);
}
