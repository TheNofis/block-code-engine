export default function ({ next, options }) {
  const { increment } = options;
  return next + increment;
}
