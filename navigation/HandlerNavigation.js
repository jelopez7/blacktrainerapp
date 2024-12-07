import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import { getToken } from "../utils/token";
import { checkingUser } from "../actions/auth";
import { Text } from "@rneui/base";

export default function HandlerNavigation() {
  const { user, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingUser());
  }, []);

  if (loading) return <Text>Cargando...</Text>;

  return user ? <AppNavigation /> : <AuthNavigation />;
}
