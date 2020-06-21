import React from "react";
import { View, Text, Image } from "react-native";

import GoogleBinaries from "./assets/GoogleLogo.png";

const GoogleButton = () => {
  return (
    <View>
      <Image width={100} height={100} source={GoogleBinaries} />
      <Text>image test</Text>
    </View>
  );
};

export default GoogleButton;
