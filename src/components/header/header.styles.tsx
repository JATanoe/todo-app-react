import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const HeaderLogo = styled.h1`
	color: var(--color-white);
	font-size: clamp(1.25rem, 6.25vw + 0.195rem, 2.5rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.469rem;
	
	@media (width >= 23.438rem) {
		letter-spacing: 0.938rem;
	}
`


export const HeaderSwitch = styled.div`
	label {
		svg {
			width: clamp(1.25rem, 1.875vw + 0.934rem, 1.625rem);
			height: clamp(1.25rem, 1.875vw + 0.934rem, 1.625rem);
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			transition: transform 250ms;
			
			&.switch-on {
				transition-delay: 150ms;
			}
			
			&.switch-off {
				transform: scale(0);
			}
		}
	}
`

export const SwitchLabel = styled.label`
	width: 32px;
	height: 32px;
	display: grid;
	place-items: center;
	cursor: pointer;
	line-height: 1;
`

export const SwitchToggle = styled.input.attrs({type: 'checkbox'})`
	display: none;
	
	&:checked + .switch-on {
		transform: rotate(360deg) scale(0);
	}
	
	&:checked ~ .switch-off {
		transition-delay: 150ms;
		transform: scale(1) rotate(360deg);
	}
`