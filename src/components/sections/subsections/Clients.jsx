import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ClientLogo0 from "../../../assets/client_logos/ClientLogo0";
import ClientLogo1 from "../../../assets/client_logos/ClientLogo1";
import ClientLogo2 from "../../../assets/client_logos/ClientLogo2";
import ClientLogo3 from "../../../assets/client_logos/ClientLogo3";
import ClientLogo4 from "../../../assets/client_logos/ClientLogo4";
import ClientLogo5 from "../../../assets/client_logos/ClientLogo5";

export default function Clients() {
	return (
		<Box
			alignItems="center"
			display="flex"
			flexDirection="column"
			py="28px"
		>
			<Typography color="secondary" variant="h5">
				Our Clients
			</Typography>
			<Typography variant="subtitle2">
				We have been working with some Fortune 500+ clients
			</Typography>
			<Stack direction="row" fontSize="34px" spacing={6} mt="11px">
				<ClientLogo0 />
				<ClientLogo1 />
				<ClientLogo2 />
				<ClientLogo3 />
				<ClientLogo4 />
				<ClientLogo5 />
				<ClientLogo2 />
			</Stack>
		</Box>
	);
}
