import { Overlay, Text } from "@rneui/base";
import React from "react";
import { styles } from "./Modal.styles";

export function Modal({ children, show, close }) {
  return (
    <Overlay
      isVisible={show}
      overlayStyle={styles.overlay}
      onBackdropPress={close}
    >
      {children}
    </Overlay>
  );
}
