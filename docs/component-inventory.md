# shadcn component inventory

The showcase must render every shadcn/ui component. This is the source list
(from https://ui.shadcn.com/docs/components). Grouped for the components-list
sidebar and the search index. Each entry becomes a demo under
`apps/web/src/components/demos/<name>.tsx` and a registry-agnostic showcase card.

> Note: shadcn's canary/base line churns. Target the **stable** component set
> below. If a component isn't in your installed shadcn version, skip it and note
> it in the demo registry rather than blocking.

## Forms & inputs

- button
- button-group
- input
- input-group
- input-otp
- textarea
- label
- checkbox
- radio-group
- select
- native-select
- switch
- slider
- toggle
- toggle-group
- field
- form (react-hook-form wiring)

## Data display

- avatar
- badge
- card
- table
- data-table
- chart
- calendar
- carousel
- aspect-ratio
- separator
- skeleton
- progress
- item
- kbd
- typography
- empty

## Navigation

- breadcrumb
- pagination
- tabs
- navigation-menu
- menubar
- sidebar
- command (also powers the ⌘K palette)

## Overlays & feedback

- dialog
- alert-dialog
- sheet
- drawer
- popover
- hover-card
- tooltip
- dropdown-menu
- context-menu
- alert
- toast (sonner)
- spinner

## Layout & disclosure

- accordion
- collapsible
- resizable
- scroll-area
- combobox
- date-picker

## Grouping for the sidebar

Suggested sections in the components list page (mirrors above): **Forms**,
**Data Display**, **Navigation**, **Overlays**, **Layout**. Keep a flat search
index of all names for ⌘K + the list search box.
