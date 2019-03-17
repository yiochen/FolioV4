const resumeAccent = '#373d48';
const fontSize = 12;

export function rem(value) {
  return fontSize * value + 'pt';
}

const textFormat = {
  fontWeight: 'normal',
  letterSpacing: 0,
  marginBottom: rem(0.5),
};

const h1 = {
  ...textFormat,
  fontSize: rem(3.2),
  marginBottom: rem(1),
};

const h2 = {
  ...textFormat,
  fontSize: rem(1.2),
};

const h3 = {
  ...textFormat,
  fontSize: rem(1),
};

const h4 = {
  ...textFormat,
  fontSize: rem(1),
};

const p = {
  ...textFormat,
  fontSize: rem(1),
};

const span = {
  ...textFormat,
  fontSize: rem(1),
};

export default {
  resumeAccent,
  fontSizeRaw: fontSize,
  fontSize: rem(1),
  h1,
  h2,
  h3,
  h4,
  p,
  span,
};
