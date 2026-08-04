import type { QRConfig } from "../types/qr";

export type QRPreset = {
  name: string;
  patch: Partial<QRConfig>;
};

export const qrPresets: QRPreset[] = [
  { name: "Classic", patch: { dotStyle: "square", foregroundColor: "#101828", backgroundColor: "#FFFFFF" } },
  { name: "Rounded", patch: { dotStyle: "rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot" } },
  { name: "Dotted", patch: { dotStyle: "dots", cornerSquareStyle: "dot", cornerDotStyle: "dot" } },
  { name: "Minimal", patch: { margin: 20, dotStyle: "square", foregroundColor: "#344054" } },
  { name: "Elegant", patch: { dotStyle: "classy-rounded", foregroundColor: "#1D2939" } },
  { name: "Bold", patch: { dotStyle: "extra-rounded", foregroundColor: "#155EEF" } },
  { name: "Gradient Blue", patch: { gradient: { enabled: true, type: "linear", startColor: "#155EEF", endColor: "#06AED4", rotation: 35 } } },
  { name: "Violet", patch: { foregroundColor: "#7C3AED", backgroundColor: "#FFFFFF" } },
  { name: "Dark", patch: { foregroundColor: "#FFFFFF", backgroundColor: "#101828" } },
  { name: "Colorful", patch: { gradient: { enabled: true, type: "radial", startColor: "#155EEF", endColor: "#F04438", rotation: 90 } } }
];
