import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UnlockIllustration from "../../../../assets/body/unlock/UnlockIllustration";

export default function Unlock() {
	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="space-evenly"
			mx="100px"
		>
			<Box
				alignItems="center"
				display="flex"
				height="301.4px"
				justifyContent="center"
				width="307.66px"
			>
				<UnlockIllustration />
			</Box>
			<Box width="460.1px">
				<Typography color="secondary" variant="h5">
					The unseen of spending three years at Pixelgrade
				</Typography>
				<Typography mb="22px" variant="subtitle2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					sit amet justo ipsum. Sed accumsan quam vitae est varius
					fringilla. Pellentesque placerat vestibulum lorem sed porta.
					Nullam mattis tristique iaculis. Nullam pulvinar sit amet
					risus pretium auctor. Etiam quis massa pulvinar, aliquam
					quam vitae, tempus sem. Donec elementum pulvinar odio.
				</Typography>
				<Button variant="filled">Learn More</Button>
			</Box>
		</Box>
	);
}
