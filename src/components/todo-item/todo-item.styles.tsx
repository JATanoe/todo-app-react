import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: clamp(0.75rem, 3.75vw + 0.117rem, 1.5rem);
	padding-block: clamp(1rem, 1.25vw + 0.789rem, 1.25rem);
	padding-inline: clamp(1.25rem, 1.25vw + 1.039rem, 1.5rem);
	border-bottom: 1px solid var(--color-accent);
`

export const TodoInput = styled.input.attrs({
  type: 'checkbox',
})`
	background-color: transparent;
	border: none;
`

export const TodoLabel = styled.label`
	flex: 1;
	display: flex;
	align-items: center;
	column-gap: clamp(0.75rem, 1.026vw + 0.577rem, 1.5rem);
	
	p {
		color: var(--color-base-content);
		font-size: clamp(0.75rem, 0.625vw + 0.645rem, 1.125rem);
		
		&.completed {
			text-decoration-line: line-through;
			color: var(--color-base-300);
		}
	}
`

export const TodoButton = styled.button`
	svg {
		width: clamp(0.75rem, 1.875vw + 0.434rem, 1.125rem);
		height: clamp(0.75rem, 1.875vw + 0.434rem, 1.125rem);
	}
`