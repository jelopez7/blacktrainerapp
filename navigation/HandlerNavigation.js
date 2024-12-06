import React from "react";
import { useSelector } from "react-redux";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

export default function HandlerNavigation() {
  const { user } = useSelector((state) => state.auth);

  return user ? <AppNavigation /> : <AuthNavigation />;
}
