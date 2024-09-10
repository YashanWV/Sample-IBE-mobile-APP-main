import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Button,

} from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useFormikContext } from "formik";

import AppPickerItem from "./AppPickerItem";
import colors from "../config/colors";
import AppText from "./AppText";
import { DroplistCard } from "./cards";
import AppIcon from "./AppIcon";

function AppPicker({
  icon,
  icon2,
  items,
  name,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = AppPickerItem,
  placeholder,
  placeholderColor = colors.placeholder,
  selectedItem,
  width = "100%",
  marginBottom,
  marginTop,
  iconSize = 1,
  iconColor,
  label,
  backgroundColor = colors.bluegrey,
  borderColor = colors.primary2,
  textColor = colors.primary3,
  fontWeight = "500",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  let fieldLabel = "";

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          style={[
            styles.container,
            { width },
            { marginBottom },
            { marginTop },
            { backgroundColor },
            { borderColor },
          ]}
        >
          {/* <Text>AppPicker</Text> */}
          {icon && (
            <AppIcon
              name={icon}
              iconSize={34 * iconSize}
              iconColor={iconColor}
              style={[styles.iconcontainer, { backgroundColor: borderColor }]}
            />
          )}
          {selectedItem ? (
            <AppText style={[styles.text, { color: textColor, fontWeight }]}>
              {label === "value"
                ? items.find((item) => item.value === selectedItem).value
                : items.find((item) => item.value === selectedItem).label}
            </AppText>
          ) : (
            <AppText style={[styles.placeholder, { color: placeholderColor }]}>{placeholder}</AppText>
          )}

          {icon2 ? (
            <AppIcon
              name={icon2}
              iconColor={iconColor}
              iconSize={24 * iconSize}
              style={[styles.iconcontainer2, { backgroundColor: borderColor }]}
            />
          ) : (
            <FontAwesome5
              name="chevron-circle-down"
              size={17}
              color={borderColor}
            />
          )}
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <DroplistCard>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item.value);
                }}
              />
            )}
            style={styles.modelview}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </DroplistCard>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderRadius: 30,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 18,
    paddingRight: 18,
  },
  placeholder: {
    fontSize: 15,
    fontWeight: "500",
    flex: 1,
  },
  text: {

    fontSize: 15,

    flex: 1,
  },
  modelview: { marginLeft: 24, marginRight: 24, marginTop: 24, width: "100%" },
  iconcontainer: {
    height: 34,
    width: 34,
    borderRadius: 17,
    marginRight: 8,

  },
  iconcontainer2: {
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderRadius: 12,
  },
});

export default AppPicker;
