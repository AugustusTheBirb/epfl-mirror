/// <reference types="vite/client" />

import type React from "react";

declare module "@google/model-viewer";

declare module '*.mp4'  { const src: string; export default src; }
declare module '*.webm' { const src: string; export default src; }
declare module '*.gif'  { const src: string; export default src; }
declare module '*.glb'  { const src: string; export default src; }
declare module '*.glb?url'  { const src: string; export default src; }

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'model-viewer': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			> & {
				src?: string;
				poster?: string;
				alt?: string;
				autoplay?: boolean;
				ar?: boolean;
				exposure?: number | string;
				'camera-controls'?: boolean;
				'auto-rotate'?: boolean;
				'shadow-intensity'?: number | string;
				'interaction-prompt'?: string;
				'environment-image'?: string;
			};
		}
	}
}

export {};
