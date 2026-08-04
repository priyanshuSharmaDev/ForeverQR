import type { QRConfig } from "../types/qr";

export const defaultQRConfig: QRConfig = {
  contentType: "url",
  value: "https://docs.google.com/forms/",
  width: 1024,
  height: 1024,
  margin: 16,
  errorCorrectionLevel: "Q",
  dotStyle: "rounded",
  cornerSquareStyle: "extra-rounded",
  cornerDotStyle: "dot",
  foregroundColor: "#101828",
  backgroundColor: "#FFFFFF",
  transparentBackground: false,
  gradient: {
    enabled: false,
    type: "linear",
    startColor: "#155EEF",
    endColor: "#7C3AED",
    rotation: 45
  },
  logo: {
    enabled: false,
    size: 0.18,
    margin: 8,
    hideBackgroundDots: true
  },
  frame: {
    enabled: false,
    style: "none",
    label: "Scan Me",
    labelColor: "#101828",
    frameColor: "#155EEF",
    backgroundColor: "#FFFFFF",
    fontSize: 40,
    borderRadius: 40
  }
};
