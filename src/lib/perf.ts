// Removes `backdrop-blur*` utility classes from a class string.
//
// Why this exists: `backdrop-blur` is a real-time GPU compositing effect.
// On a single fixed element (header, bottom nav, a modal) it's basically
// free. Applied to every tile in a scrolling photo grid (dozens of tiles
// on screen at once, all opaque images that fully cover it anyway) it's
// pure wasted GPU work recalculated every frame during scroll -- which is
// what caused the janky/stuck scrolling. Use this wherever a theme class
// gets applied to a *repeated* grid item instead of a lone fixed element.
export function stripBackdropBlur(classNames: string): string {
  return classNames
    .split(' ')
    .filter((cls) => !/^backdrop-blur/.test(cls))
    .join(' ');
}
