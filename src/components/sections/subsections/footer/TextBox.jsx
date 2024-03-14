import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/base";
import { Icon } from "@iconify-icon/react";
import { Input as BaseInput } from "@mui/base/Input";
import { styled } from "@mui/system";

const Input = React.forwardRef(function CustomInput(props, ref) {
	const { slots, ...other } = props;
	return (
		<BaseInput
			slots={{
				root: InputRoot,
				input: InputElement,
				...slots,
			}}
			{...other}
			ref={ref}
		/>
	);
});

Input.propTypes = {
	slots: PropTypes.shape({
		input: PropTypes.elementType,
		root: PropTypes.elementType,
		textarea: PropTypes.elementType,
	}),
};

export default function TextBox() {
	return (
		<Input
			className="input"
			placeholder="Your email address"
			endAdornment={
				<InputAdornment>
					<IconButton size="small">
						<Icon
							height="12.53px"
							icon="lucide:send"
							width="12.53px"
						/>
					</IconButton>
				</InputAdornment>
			}
		/>
	);
}

const InputRoot = styled("div")(
	() => `
  align-items: center;
  background: #ffffff33;
  border-radius: 5.57px;
  display: flex;
  height: 27.84px;
  justify-content: center;
  width: 177.5px;
  &:focus-visible {
    outline: 0;
  }
  &:hover {
    border-color: none;
  }
`
);

const InputElement = styled("input")(
	() => `
  background: none;
  border: none;
  color: #D9DBE1;
  flex-grow: 1;
  font-size: 9.74px;
  height: 14px;
  outline: 0;
  padding: 8.35px;
  width: 88px;
  ::placeholder {
	color: #d9dbe1;
  }
  ::-ms-input-placeholder {
	color: #d9dbe1;
  }
`
);

const IconButton = styled(Button)(
	() => `
  align-items: center;
  background: inherit;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  `
);

const InputAdornment = styled("div")`
	align-items: center;
	display: inline-flex;
	justify-content: center;
	margin: 8px;
`;
