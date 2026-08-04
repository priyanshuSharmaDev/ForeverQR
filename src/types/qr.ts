export type QRContentType = "url" | "google-form" | "text" | "wifi";
export type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
export type DotStyle = "square" | "dots" | "rounded" | "extra-rounded" | "classy" | "classy-rounded";
export type CornerSquareStyle = "square" | "dot" | "extra-rounded";
export type CornerDotStyle = "square" | "dot";
export type ExportFormat = "png" | "svg" | "jpeg" | "webp";

export type QRConfig = {
  contentType: QRContentType;
  value: string;
  width: number;
  height: number;
  margin: number;
  errorCorrectionLevel: ErrorCorrectionLevel;
  dotStyle: DotStyle;
  cornerSquareStyle: CornerSquareStyle;
  cornerDotStyle: CornerDotStyle;
  foregroundColor: string;
  backgroundColor: string;
  transparentBackground: boolean;
  gradient: {
    enabled: boolean;
    type: "linear" | "radial";
    startColor: string;
    endColor: string;
    rotation: number;
  };
  logo: {
    enabled: boolean;
    dataUrl?: string;
    fileName?: string;
    size: number;
    margin: number;
    hideBackgroundDots: boolean;
  };
  frame: {
    enabled: boolean;
    style: "none" | "simple" | "rounded-card" | "top-label" | "bottom-label";
    label: string;
    labelColor: string;
    frameColor: string;
    backgroundColor: string;
    fontSize: number;
    borderRadius: number;
  };
};

export type WiFiConfig = {
  ssid: string;
  password: string;
  security: "WPA" | "WEP" | "nopass";
  hidden: boolean;
};
