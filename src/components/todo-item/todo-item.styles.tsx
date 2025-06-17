import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	align-items: center;
	column-gap: clamp(0.75rem, 3.75vw + 0.117rem, 1.5rem);
	padding-block: clamp(1rem, 1.25vw + 0.789rem, 1.25rem);
	padding-inline: clamp(1.25rem, 1.25vw + 1.039rem, 1.5rem);
	border-bottom: 1px solid var(--color-accent);
  
  &:hover button {
    transform: scale(1);
  }
`

export const TodoLabel = styled.label`
	position: relative;
	width: 24px;
	height: 24px;
	display: grid;
	place-items: center;
	background: var(--color-accent);
  border-radius: 50%;
  cursor: pointer;
	
	&:hover  {
		background: var(--linear);
	}
	
	svg {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		position: relative;
		z-index: 10;
    transform: scale(0);
    transition: transform 150ms;
	}
	
	&::before {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		position: relative;
		content: '';
		border-radius: 50%;
		z-index: 0;
		width: 22px;
		height: 22px;
		background: var(--color-base-100);
    transition: background 0.25s ease-in-out, transform 0.25s ease-in-out;
    transform: scale(1);
	}
`

export const TodoInput = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
	
	&:checked ~ p {
		color: var(--color-base-300);
		
		&::before {
			background-color: var(--color-base-300);
		}
	}
  
  &:checked ~ label {
		background: var(--linear);
  }
  
  &:checked ~ label::before {
    transform: scale(0);
    transition: background 0.2s ease-in-out, transform 0.25s ease-in-out;
  }
  
  &:checked + label svg {
    transform: scale(1);
    transition: transform 150ms;
  }
`

export const TodoTitle = styled.p`
	position: relative;
	color: var(--color-base-content);
	font-size: clamp(0.75rem, 0.625vw + 0.645rem, 1.125rem);
	
	&:before {
		position: absolute;
		top: 50%;
		content: '';
		display: block;
		width: 100%;
		height: 1px;
	}
`

export const TodoButton = styled.button`
  margin-inline-start: auto;
  transform: scale(0);
  transition: opacity 0.25s ease-in-out;
  
	svg {
		width: clamp(0.75rem, 1.875vw + 0.434rem, 1.125rem);
		height: clamp(0.75rem, 1.875vw + 0.434rem, 1.125rem);
	}
`