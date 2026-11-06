type P = { size?: number; d: string; fill?: string };

function Svg({ size = 11, d, fill = 'currentColor' }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const ARROW_RIGHT = 'M4 11h11.2l-4.6-4.6L12 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2Z';
export const ARROW_LEFT = 'M20 11H8.8l4.6-4.6L12 5l-7 7 7 7 1.4-1.4L8.8 13H20v-2Z';
export const ARROW_UP_RIGHT = 'M7 5h12v12h-2V8.4L6.4 19 5 17.6 15.6 7H7V5Z';
export const WRAP = 'M12 5V2L8 6l4 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7Z';
export const CLOSE = 'M18.3 7.1 13.4 12l4.9 4.9-1.4 1.4-4.9-4.9-4.9 4.9-1.4-1.4L10.6 12 5.7 7.1l1.4-1.4 4.9 4.9 4.9-4.9 1.4 1.4Z';
export const PLUS = 'M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z';
export const DOWNLOAD = 'M11 3h2v9.2l3.6-3.6L18 10l-6 6-6-6 1.4-1.4L11 12.2V3ZM4 19h16v2H4v-2Z';
export const ARROW_DOWN = 'M11 3h2v13.2l4.6-4.6L19 13l-7 7-7-7 1.4-1.4L11 16.2V3Z';
export const ARROW_UP = 'M12 4 3 14h6v6h6v-6h6L12 4Z';
export const NOTE = 'M9 3v12.3A3.5 3.5 0 1 0 11 18.5V7.8l8-1.6v6.1A3.5 3.5 0 1 0 21 15.5V3L9 5.4V3Z';
export const SUN = 'M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16 1.8 2.6h-3.6L12 2Zm0 20-1.8-2.6h3.6L12 22ZM2 12l2.6-1.8v3.6L2 12Zm20 0-2.6 1.8v-3.6L22 12ZM4.9 4.9l3.1.5-2.6 1.8-.5-2.3Zm14.2 14.2-3.1-.5 2.6-1.8.5 2.3ZM19.1 4.9l-.5 2.3-2.6-1.8 3.1-.5ZM4.9 19.1l.5-2.3 2.6 1.8-3.1.5Z';
export const MOON = 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z';

export { Svg as Icon };
