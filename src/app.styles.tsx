import styled from "styled-components";

type ImageProp = {
  light: { mobile: string; desktop: string };
  dark: { mobile: string; desktop: string };
};

export const Container = styled.div`
	--container-max-width: 90rem;
	--min-width: 16.875rem;
	--max-width: 33.75rem; 
	
	position: relative;
	width: 100%;
	max-width: var(--container-max-width);
	min-height: 100vh;
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(var(--min-width), var(--max-width)) minmax(0, 1fr);
	grid-auto-rows: auto;
	margin-inline: auto;
`

export const HeroSection = styled.div<{ $image: ImageProp }>`
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  width: clamp(23.438rem, 665.625vw - 88.887rem, 90rem);
  height: clamp(12.5rem, 62.5vw + 1.953rem, 18.75rem);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: var(--color-base-200);

  /* default (light) */
  background-image: url(${props => props.$image.light.mobile});

  /* dark theme override */
  &:where([data-theme="dark"], [data-theme="dark"] *) {
    background-image: url(${props => props.$image.light.desktop});
  }

  /* larger screens */
  @media (min-width: 23.438rem) {
    background-image: url(${props => props.$image.dark.mobile});

    &:where([data-theme="dark"], [data-theme="dark"] *) {
      background-image: url(${props => props.$image.dark.desktop});
    }
  }
`

export const TodoSection = styled.div`
	grid-column: 2 / 3;
	grid-row: 1 / 2;
	
	position: relative;
	z-index: 1;
	display: grid;
	grid-auto-rows: auto;
	align-content: start;
	grid-row-gap: clamp(2.5rem, 2.5vw + 2.078rem, 3rem);
	padding-block-start: clamp(3rem, 7.5vw + 1.734rem, 4.5rem);
	padding-inline: clamp(1rem, -5vw + 1.844rem, 0rem);
`

export const Main = styled.main`
	display: grid;
  grid-row-gap: clamp(1rem, 2.5vw + 0.578rem, 1.5rem);
`

export const Footer = styled.footer`
	p {
		color: var(--color-primary);
		text-align: center;
	}
`