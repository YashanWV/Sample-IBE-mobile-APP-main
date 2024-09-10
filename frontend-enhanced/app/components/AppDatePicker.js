import React, { useState } from "react";
import { View, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormikContext } from "formik";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AppIcon from "./AppIcon";

function AppDatePicker({
  name,
  placeholder,
  width = "100%",
  marginBottom,
  icon,
  icon2,
  iconSize = 1,
  marginTop,
  backgroundColor = colors.bluegrey,
  borderColor = colors.primary2,
  placeholderColor = colors.placeholder,
  textColor = colors.primary3
}) {
  const { setFieldValue, values } = useFormikContext();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    // Adjusting for timezone offset
    const adjustedDate = new Date(
      currentDate.getTime() + Math.abs(currentDate.getTimezoneOffset() * 60000)
    );

    // Formatting the date to 'YYYY-MM-DD'
    const formattedDate = adjustedDate.toISOString().split("T")[0];

    setFieldValue(name, formattedDate);
  };

  return (
    <TouchableWithoutFeedback
      style={[
        styles.container,
        { width },
        { marginBottom },
        { marginTop },
        {
          backgroundColor,
          borderColor,
        },
      ]}
      onPress={() => setShow(true)}
    >
      <View style={styles.datepicker}>
        {icon && (
          <AppIcon
            name={icon}
            iconSize={34 * iconSize}
            iconColor={colors.white}
            style={[styles.iconcontainer, { backgroundColor: borderColor }]}
          />
        )}
        <AppText
          style={[
            styles.text,
            { color: values[name] ? textColor : placeholderColor },
          ]}
        >
          {values[name] ? values[name] : placeholder}
        </AppText>
        {/* <Button onPress={() => setShow(true)} title="Select Date" /> */}
        {icon2 ? (
          <AppIcon
            name={icon2}
            iconColor={colors.white}
            iconSize={24 * iconSize}
            style={[styles.iconcontainer2, { backgroundColor: borderColor }]}
          />
        ) : (
          <View style={{ position: "absolute", right: 0 }}>
            <FontAwesome5
              name="chevron-circle-down"
              size={17}
              color={borderColor}
            />
          </View>
        )}
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    backgroundColor: colors.bluegrey1,
    borderRadius: 30,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.primary2,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 18,
    paddingRight: 18,
  },
  datepicker: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
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

export default AppDatePicker;
