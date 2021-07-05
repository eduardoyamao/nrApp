import React, { Fragment } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";

const Sobre = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Sobre</Text>
      </SafeAreaView>
    </Fragment>
  );
};

export default Sobre;