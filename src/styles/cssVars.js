import experimental_extendTheme from "@mui/material/styles/experimental_extendTheme";

export const cssVars = experimental_extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: "#4CAF4F",
				},
				secondary: {
					main: "#4D4D4D",
				},
			},
		},
		light: {
			palette: {
				primary: {
					main: "#4CAF4F",
				},
				secondary: {
					main: "#4D4D4D",
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
		h3: {
			fontSize: 44.55,
			fontWeight: 600,
		},
		h5: { fontSize: 25.6, fontWeight: 600 },
		navbar: {
			fontSize: 11.14,
			fontWeight: 500,
		},
		subtitle2: {
			color: "#717171",
			fontSize: 11.14,
		},
	},
});
