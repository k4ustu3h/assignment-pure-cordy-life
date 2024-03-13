import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Community0 from "../../../../assets/home/community/Community0";
import Community1 from "../../../../assets/home/community/Community1";
import Community2 from "../../../../assets/home/community/Community2";

export default function Community() {
	const communities = [
		{
			icon: <Community0 />,
			heading: "Membership Organisations",
			body: "Our membership management software provides full automation of membership renewals and payments",
		},
		{
			icon: <Community1 />,
			heading: "National Associations",
			body: "Our membership management software provides full automation of membership renewals and payments",
		},
		{
			icon: <Community2 />,
			heading: "Clubs And Groups",
			body: "Our membership management software provides full automation of membership renewals and payments",
		},
	];
	return (
		<Box textAlign="center">
			<Typography color="secondary" variant="h5">
				Manage your entire community <br />
				in a single system
			</Typography>
			<Typography variant="subtitle2" mt="6px">
				Who is Nextcent suitable for?
			</Typography>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-evenly"
				mt="11px"
				mx="100px"
			>
				{communities.map((community) => {
					return (
						<Box
							boxShadow="0px 1.39px 2.78px #abbed133"
							key={community.heading}
							px="22px"
							py="17px"
							width="208.12px"
						>
							{community.icon}
							<Typography
								color="secondary"
								mt="11px"
								variant="h5"
							>
								{community.heading}
							</Typography>
							<Typography mt="6px" variant="subtitle2">
								{community.body}
							</Typography>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
