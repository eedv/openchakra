
export type MenuItemType = {
	children?: MenuItemsType
	soon?: boolean
	rootParentType?: ComponentType
  }

export type MenuItemsType = Partial<
	{
	  [k in ComponentType]: MenuItemType
	}
>

export const menuItems: MenuItemsType = {
	Accordion: {
	  children: {
		Accordion: {},
		AccordionItem: {},
		AccordionHeader: {},
		AccordionPanel: {},
		AccordionIcon: {},
	  },
	},
	Alert: {
	  children: {
		Alert: {},
		AlertDescription: {},
		AlertIcon: {},
		AlertTitle: {},
	  },
	},
	AspectRatioBox: {},
	AvatarGroup: {
	  rootParentType: 'Avatar',
	},
	Avatar: {},
	AvatarBadge: {
	  rootParentType: 'Avatar',
	},
	Badge: {},
	Box: {},
	Breadcrumb: {
	  children: {
		BreadcrumbItem: {},
		BreadcrumbLink: {},
	  },
	},
	Button: {},
	Checkbox: {},
	CircularProgress: {},
	CloseButton: {},
	Code: {},
	Divider: {},
	Flex: {},
	FormControl: {
	  children: {
		FormControl: {},
		FormLabel: {},
		FormHelperText: {},
		FormErrorMessage: {},
	  },
	},
	Grid: {},
	Heading: {},
	Icon: {},
	IconButton: {},
	Image: {},
	Input: {},
	InputGroup: {
	  rootParentType: 'Input',
	  children: {
		InputGroup: {},
		Input: {},
		InputLeftAddon: {},
		InputRightAddon: {},
		InputRightElement: {},
		InputLeftElement: {},
	  },
	},
	Link: {},
	List: {
	  children: {
		List: {},
		ListItem: {},
	  },
	},
	NumberInput: {},
	Progress: {},
	Radio: {},
	RadioGroup: {
	  rootParentType: 'Radio',
	},
	SimpleGrid: {},
	Spinner: {},
	Select: {},
	Stack: {},
	Switch: {},
	Tag: {},
	Text: {},
	Textarea: {},
	Menu: { soon: true },
	Tab: { soon: true },
	/*"Tabs",
	"TabList",
	"TabPanel",
	"TabPanels"*/
  }