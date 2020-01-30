import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

const url = "http://192.168.100.116:3000/ubicacion";

export default class Localitation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLocalitation() {
    let mensaje = "";

    let setStoragge = async ubic => {
      try {
        await AsyncStorage.setItem("Ubicacion", ubic);
        getStoragge();
      } catch (err) {
        console.log(err);
      }
    };

    let clearStoragge = async () => {
      try {
        await AsyncStorage.clear();
      } catch (err) {
        console.log(err);
      }
    };

    let getStoragge = async () => {
      try {
        mensaje = await AsyncStorage.getItem("Ubicacion");
      } catch (err) {
        console.log(err);
      }
    };

    navigator.geolocation.getCurrentPosition(posiscion => {
      var fecha = new Date();
      let latitud = posiscion.coords.latitude;
      let longitud = posiscion.coords.longitude;
      let data = {
        user_name: "Jose Molina",
        latitud,
        longitud,
        fecha: fecha
      };

      return alert(JSON.stringify(data));
      setStoragge(data.ubicacion);

      const header = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };

      return fetch(url, header)
        .then(response => response.json())
        .then(responseJson => {
          alert(mensaje);
          clearStoragge();
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Iniciar"
          style={{ color: "blue" }}
          onPress={() => {
            setInterval(this.getLocalitation, 5000);
          }}
        />
        <Button
          title="Parar"
          style={{ color: "red", marginTop: 50 }}
          onPress={() => {
            clearInterval(this.getLocalitation());
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  boton: {
    backgroundColor: "#367698",
    color: "white"
  }
});
