import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function Arrow() {
	return (
		<SvgIcon fontSize="inherit" sx={{ ml: "6px" }}>
			<svg
				fill="currentColor"
				viewBox="0 0 9 6"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="m6.5254 0.91211a0.38284 0.38284 0 0 0-0.26953 0.11133 0.38284 0.38284 0 0 0 0 0.54102l1.4355 1.4355h-7.2559a0.38284 0.38284 0 0 0-0.38281 0.38281 0.38284 0.38284 0 0 0 0.38281 0.38281h7.2539l-1.4336 1.4336a0.38284 0.38284 0 0 0 0 0.54297 0.38284 0.38284 0 0 0 0.54102 0l1.7188-1.7207c0.35018-0.35018 0.35018-0.92912 0-1.2793l-1.7188-1.7188a0.38284 0.38284 0 0 0-0.27148-0.11133z" />
			</svg>
		</SvgIcon>
	);
}
