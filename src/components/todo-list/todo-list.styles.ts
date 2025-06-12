import styled from "styled-components";

export const Container = styled.ul`
	background-color: var(--color-base-100);
	display: grid;
	grid-auto-rows: auto;
	border-radius: var(--radius);
	box-shadow: var(--shadow);
	
	:where(& > :is(:last-child)) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--color-primary);
		font-size: clamp(0.75rem, 0.625vw + 0.645rem, 0.875rem);
		padding-block: calc(var(--spacing) * 4);
		padding-inline: clamp(1.25rem, 1.25vw + 1.039rem, 1.5rem);
		border-bottom: none !important;
		
		button {
			&:hover {
				color: var(--color-base-content);
			}
		}
	}
`
