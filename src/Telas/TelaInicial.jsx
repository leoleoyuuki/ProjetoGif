import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const TelaInicial = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/HomePage.png")}
      style={styles.container}
    >
      <Text style={styles.mainText}>Pesquisar por:</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TelaResultado", {escolha: "gifs"})}
        >
          <Text style={styles.textBtn}>Gifs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TelaResultado", {escolha: "stickers"})}
        >
          <Text style={styles.textBtn}>Stickers</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 25,
    color: "white",
    marginBottom: 50,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  textBtn: {
    color: "black",
    fontWeight: "bold",
  },
});
