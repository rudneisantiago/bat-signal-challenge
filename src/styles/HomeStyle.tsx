import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    gap: 200,
  },
  hidden: {
    display: "none",
  },
  imageContainer: {
    flexDirection: "column",
    borderColor: "#FFF",
    width: 300,
    height: 200,
    borderRadius: "50%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f9999",
  },
  image: {
    height: 125,
    resizeMode: "contain",
  },
  button: {
    fontSize: 25,
    backgroundColor: "#524d4d",
    color: "#e1ff00",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderColor: "#e1ff00",
    borderWidth: 1,
  },
});
