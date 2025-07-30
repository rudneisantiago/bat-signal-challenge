import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    gap: 15,
  },
  inputGroup: {
    width: "80%",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    boxShadow: "2px 2px",
    shadowOpacity: 5,
  },
  inputFocused: {
    borderColor: "blue",
  },
  inputMultline: {
    minHeight: 100,
  },
});
