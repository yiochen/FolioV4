import { transparentize } from 'polished';
import { css } from 'linaria';
import ACCENT from './accent';
import BACKGROUND from './background';

function opacity(opacity, color) {
  return transparentize(1 - opacity, color);
}

const styles = {
  accent: ACCENT,
  textColor: '#555',
  textNoteColor: '#999',
  background: BACKGROUND,
  textInvertColor: '#fff',
  textDecorationColor: '#f5f5f5',
  secondaryFont: 'Lato, Helvetica, sans-serif',
  experienceSplitBreakpoint: '650px',
  borderRadius: '3px',
  shadow: `0 3px 6px ${opacity(0.16, ACCENT)}, 0 3px 6px ${opacity(
    0.23,
    ACCENT,
  )}`,
  shadowHighlight: `0 14px 28px ${opacity(0.25, ACCENT)}, 0 10px 10px ${opacity(
    0.22,
    ACCENT,
  )}`,

  addShadow(interactive = false) {
    const css = {
      boxShadow: styles.shadow,
    };
    if (interactive) {
      css[`&:hover`] = {
        boxShadow: styles.shadowHighlight,
      };
      css.transition = 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1)';
    }

    return css;
  },
};

export const displayInLarger = css`
  display: none;
  @media (min-width: ${styles.experienceSplitBreakpoint}) {
    display: block;
  }
`;

export const displayInSmaller = css`
  display: block;
  @media (min-width: ${styles.experienceSplitBreakpoint}) {
    display: none;
  }
`;

export default styles;
