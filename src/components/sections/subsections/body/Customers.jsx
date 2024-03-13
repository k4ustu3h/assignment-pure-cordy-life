import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Arrow from "../../../../assets/Arrow";
import tesla from "../../../../assets/body/customers/tesla.jpg";
import ClientLogo0 from "../../../../assets/home/clients/ClientLogo0";
import ClientLogo1 from "../../../../assets/home/clients/ClientLogo1";
import ClientLogo2 from "../../../../assets/home/clients/ClientLogo2";
import ClientLogo3 from "../../../../assets/home/clients/ClientLogo3";
import ClientLogo4 from "../../../../assets/home/clients/ClientLogo4";
import ClientLogo5 from "../../../../assets/home/clients/ClientLogo5";

function Meet() {
	return (
		<Link color="#4CAF4F" fontSize="13.92px" fontWeight={600} href="/">
			Meet all customers <Arrow />
		</Link>
	);
}

export default function Customers() {
	const icons = [
		<ClientLogo0 />,
		<ClientLogo1 />,
		<ClientLogo2 />,
		<ClientLogo3 />,
		<ClientLogo4 />,
		<ClientLogo5 />,
		<Meet />,
	];
	return (
		<Box bgcolor="#f5f7fa" my="33px">
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="center"
				px="100px"
				py="22px"
			>
				<Box height="226.92px" width="226.92px">
					<img
						src={tesla}
						style={{
							borderRadius: "5.57px",
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</Box>
				<Box ml="54px" width="520.66px">
					<Typography
						mb="11px"
						color="#717171"
						fontSize="11.14px"
						fontWeight={500}
					>
						Maecenas dignissim justo eget nulla rutrum molestie.
						Maecenas lobortis sem dui, vel rutrum risus tincidunt
						ullamcorper. Proin eu enim metus. Vivamus sed libero
						ornare, tristique quam in, gravida enim. Nullam ut
						molestie arcu, at hendrerit elit. Morbi laoreet elit at
						ligula molestie, nec molestie mi blandit. Suspendisse
						cursus tellus sed augue ultrices, quis tristique nulla
						sodales. Suspendisse eget lorem eu turpis vestibulum
						pretium. Suspendisse potenti. Quisque malesuada enim
						sapien, vitae placerat ante feugiat eget. Quisque
						vulputate odio neque, eget efficitur libero condimentum
						id. Curabitur id nibh id sem dignissim finibus ac sit
						amet magna.
					</Typography>
					<Typography
						color="primary"
						fontWeight="600"
						fontSize="13.92px"
					>
						Tim Smith
					</Typography>
					<Typography color="#89939e" variant="subtitle2">
						British Dragon Boat Racing Association
					</Typography>
					<Box
						display="flex"
						mt="22px"
						justifyContent="space-between"
						fontSize="34px"
						alignItems="center"
					>
						{icons.map((icon) => {
							return icon;
						})}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
