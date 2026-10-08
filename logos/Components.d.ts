// Components.d.ts — the complete catalog of the 8 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.BSSHOPIconRed) and usable directly in JSX.
import * as React from 'react';

// figma layer: "BSSHOP/Icon Red" (node 114:2912)
export interface BSSHOPIconRedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "DeliveryPaymentSelectorView_GoPay" (node 4515:56936)
export interface DeliveryPaymentSelectorViewGoPayProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "40";
}

// figma layer: "DeliveryPaymentSelectorView_Mastercard" (node 4228:37026)
export interface DeliveryPaymentSelectorViewMastercardProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "40";
}

// figma layer: "DeliveryPaymentSelectorView_Osobne2" (node 11041:297340)
export interface DeliveryPaymentSelectorViewOsobne2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "40" | "24";
}

// figma layer: "DeliveryPaymentSelectorView_Schenker" (node 11041:297804)
export interface DeliveryPaymentSelectorViewSchenkerProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "40";
}

// figma layer: "DeliveryPaymentSelectorView_Toptrans" (node 4277:15573)
export interface DeliveryPaymentSelectorViewToptransProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "40";
}

// figma layer: "DeliveryPaymentSelectorView_Visa" (node 4228:37063)
export interface DeliveryPaymentSelectorViewVisaProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "40";
}

// figma layer: "EssoxView_logo" (node 4515:57796)
export interface EssoxViewLogoProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "40";
}

declare const BSSHOPIconRed: React.FC<BSSHOPIconRedProps>;
declare const DeliveryPaymentSelectorViewGoPay: React.FC<DeliveryPaymentSelectorViewGoPayProps>;
declare const DeliveryPaymentSelectorViewMastercard: React.FC<DeliveryPaymentSelectorViewMastercardProps>;
declare const DeliveryPaymentSelectorViewOsobne2: React.FC<DeliveryPaymentSelectorViewOsobne2Props>;
declare const DeliveryPaymentSelectorViewSchenker: React.FC<DeliveryPaymentSelectorViewSchenkerProps>;
declare const DeliveryPaymentSelectorViewToptrans: React.FC<DeliveryPaymentSelectorViewToptransProps>;
declare const DeliveryPaymentSelectorViewVisa: React.FC<DeliveryPaymentSelectorViewVisaProps>;
declare const EssoxViewLogo: React.FC<EssoxViewLogoProps>;
declare global {
  interface Window {
    BSSHOPIconRed: React.FC<BSSHOPIconRedProps>;
    DeliveryPaymentSelectorViewGoPay: React.FC<DeliveryPaymentSelectorViewGoPayProps>;
    DeliveryPaymentSelectorViewMastercard: React.FC<DeliveryPaymentSelectorViewMastercardProps>;
    DeliveryPaymentSelectorViewOsobne2: React.FC<DeliveryPaymentSelectorViewOsobne2Props>;
    DeliveryPaymentSelectorViewSchenker: React.FC<DeliveryPaymentSelectorViewSchenkerProps>;
    DeliveryPaymentSelectorViewToptrans: React.FC<DeliveryPaymentSelectorViewToptransProps>;
    DeliveryPaymentSelectorViewVisa: React.FC<DeliveryPaymentSelectorViewVisaProps>;
    EssoxViewLogo: React.FC<EssoxViewLogoProps>;
  }
}
