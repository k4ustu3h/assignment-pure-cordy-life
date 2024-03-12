import experimental_extendTheme from "@mui/material/styles/experimental_extendTheme";

export const cssVars = experimental_extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: "#4CAF4F",
				},
			},
		},
		light: {
			palette: {
				primary: {
					main: "#4CAF4F",
				},
			},
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "filled" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.primary.main,
						borderRadius: 2.78,
						color: "white",
						fontSize: 11.14,
						paddingLeft: 22,
						paddingRight: 22,
						textTransform: "none",
						":hover": {
							backgroundColor: theme.palette.primary.main,
						},
					}),
				},
			],
		},
	},
	typography: {
		fontFamily: "Inter",
		navbar: {
			fontSize: 11.14,
			fontWeight: 500,
		},
	},
});
