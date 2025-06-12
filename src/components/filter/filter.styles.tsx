import styled from "styled-components";

export const Container = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	column-gap: calc(var(--spacing) * 4.5);
	background-color: var(--color-base-100);
	padding: calc(var(--spacing) * 3.75);
	border-radius: var(--radius);
	
	@media (width >= 26.25rem) {
		display: none;
	}
	
	li > & {
		display: none;
		background-color: transparent;
		padding: 0;
		@media (width >= 26.25rem) {
			display: inline-flex;
		}
	}
`

export const FilterButton = styled.button`
	color: var(--color-primary);
	font-size: var(--text-sm);
	font-weight: var(--font-weight-semibold);
	letter-spacing: -0.19px;
	
	&.active {
		color: var(--color-secondary);
	}
`