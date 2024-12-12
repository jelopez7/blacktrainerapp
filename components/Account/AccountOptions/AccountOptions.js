import { Icon, ListItem, Text } from "@rneui/base";
import React, { useState } from "react";
import { map } from "lodash";
import { ChangeInfoForm } from "../ChangeInfoForm";
import { View } from "react-native";
import { Modal } from "../../Shared";

export function AccountOptions() {
  const [showModal, setShowModal] = useState(false);

  const [renderComponent, setRenderComponent] = useState(null);

  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

  const selectedComponent = (key) => {
    if (key === "height") {
      setRenderComponent(
        <ChangeInfoForm
          onClose={onCloseOpenModal}
          placeholder="Altura en CM"
          btn="Cambiar Altura"
        />
      );
    }
    if (key === "weight") {
      setRenderComponent(
        <ChangeInfoForm
          onClose={onCloseOpenModal}
          placeholder="Peso en KG"
          btn="Cambiar Peso"
        />
      );
    }

    onCloseOpenModal();
  };

  const menuOptions = getMenuOptions(selectedComponent);
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}

      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
  return [
    {
      title: "Cambiar altura",
      iconType: "material-community",
      iconNameLeft: "ruler",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("height"),
    },
    {
      title: "Cambiar Peso",
      iconType: "material-community",
      iconNameLeft: "scale-bathroom",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("weight"),
    },
    {
      title: "Cambiar Fecha de nacimiento",
      iconType: "material-community",
      iconNameLeft: "baby-carriage",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
  ];
}
