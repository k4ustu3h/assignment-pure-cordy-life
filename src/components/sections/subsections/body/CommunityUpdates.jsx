import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Arrow from "../../../../assets/Arrow";
import mailchimp from "../../../../assets/body/cummunity-updates/mailchimp.jpg";
import microsoft365 from "../../../../assets/body/cummunity-updates/microsoft-365.jpg";
import microsoftEdge from "../../../../assets/body/cummunity-updates/microsoft-edge.jpg";

export default function CommunityUpdates() {
	const updates = [
		{
			image: microsoftEdge,
			label: "Creating Streamlined Safeguarding Processes with OneRen",
		},
		{
			image: microsoft365,
			label: "What are your safeguarding responsibilities and how can you manage them?",
		},
		{
			image: mailchimp,
			label: "Revamping the Membership Model with Triathlon Australia",
		},
	];
	return (
		<Box px="100px">
			<Box alignItems="center" display="flex" flexDirection="column">
				<Typography color="secondary" variant="h5">
					Caring is the new marketing
				</Typography>
				<Typography
					textAlign="center"
					variant="subtitle2"
					width="437.13px"
				>
					The Nextcent blog is the best place to read about the latest
					membership insights, trends and more. See who's joining the
					community, read about how our community are increasing their
					membership income and lot's more.​
				</Typography>
			</Box>
			<Box display="flex" justifyContent="space-evenly" mt="11px">
				{updates.map((update) => {
					return (
						<Box
							alignItems="center"
							display="flex"
							flexDirection="column"
							key={update.label}
						>
							<Box>
								<img
									src={update.image}
									style={{
										borderRadius: "5.57px",
										height: "199.08px",
										objectFit: "cover",
										width: "256.15px",
									}}
								></img>
							</Box>
							<Box
								bgcolor="#F5F7FA"
								borderRadius="5.57px"
								boxShadow="0px 5.57px 11.14px #abbed166"
								mt="-67px"
								p="11px"
								textAlign="center"
								width="198.38px"
							>
								<Typography
									color="#717171"
									fontSize="13.92px"
									fontWeight={600}
									mb="11px"
								>
									{update.label}
								</Typography>
								<Box
									alignItems="center"
									display="flex"
									height="31.14px"
									justifyContent="center"
								>
									<Link
										color="primary"
										fontSize="13.92px"
										fontWeight={600}
										href="/"
									>
										Readmore
										<Arrow />
									</Link>
								</Box>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
