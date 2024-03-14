import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify-icon/react";
import { Input as BaseInput, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";
import { Button } from "@mui/base";

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
	/**
	 * The components used for each slot inside the InputBase.
	 * Either a string to use a HTML element or a component.
	 * @default {}
	 */
	slots: PropTypes.shape({
		input: PropTypes.elementType,
		root: PropTypes.elementType,
		textarea: PropTypes.elementType,
	}),
};

export default function TextBox() {
	return (
		<Input
			placeholder="Your email address"
			endAdornment={
				<InputAdornment>
					<IconButton
						size="small"
						aria-label="toggle password visibility"
					>
						<Icon icon="lucide:send" width="24" height="24" />
					</IconButton>
				</InputAdornment>
			}
		/>
	);
}

const InputRoot = styled("div")(
	() => `
  border-radius: 5.57px;
  color: #D9DBE1;
  background: #ffffff33;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputClasses.focused} {
    border-color: #00000000;
    box-shadow:  #00000000;
  }

  &:hover {
    border-color: none;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const InputElement = styled("input")(
	() => `
  font-family: inherit;
  flex-grow: 1;
  color: #D9DBE1;
  background: none;
  border: none;
  padding: 8px 12px;
`
);

const IconButton = styled(Button)(
	() => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: #fff
  `
);

const InputAdornment = styled("div")`
	margin: 8px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;
