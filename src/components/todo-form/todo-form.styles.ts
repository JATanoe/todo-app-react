import styled from "styled-components";

export const Container = styled.form`
	background-color: var(--color-base-100);
	display: flex;
	align-items: center;
	column-gap: clamp(0.75rem, 3.75vw + 0.117rem, 1.5rem);
	padding-block: clamp(0.875rem, 1.875vw + 0.559rem, 1.25rem);
	padding-inline: clamp(1.25rem, 1.25vw + 1.039rem, 1.5rem);
	border-radius: var(--radius);
	box-shadow: var(--shadow);
`

export const FormLabel = styled.label`
		width: clamp(1.25rem, 1.25vw + 1.039rem, 1.5rem);
		height: clamp(1.25rem, 1.25vw + 1.039rem, 1.5rem);
		border: 1px solid var(--color-accent);
		border-radius: 50%;
`

export const FormInput = styled.input`
	outline: none;
	border: none;
	color: var(--color-base-content);
	
	&::placeholder {
		color: var(--color-base-300);
	}
`