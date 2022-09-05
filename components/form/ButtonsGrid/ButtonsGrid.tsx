import React from 'react';
import {
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
} from 'react-native';
import ButtonComponent from '../../ui/ButtonComponent/ButtonComponent';
import { navbarHeight } from './../../../App';
type ButtonsGridPropsType = {
  ButtonProps: ButtonType[];
};
export type ButtonType = {
  onPress: any;
  title: string;
  color: string;
};

const ButtonsGrid = ({ ButtonProps }: ButtonsGridPropsType) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        data={ButtonProps}
        keyExtractor={(ButtonData) => ButtonData.title}
        renderItem={({ item }) => {
          return (
            <ButtonComponent
              onPress={item.onPress}
              title={item.title}
              color={item.color}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    // marginBottom: navbarHeight || 0,
  },
});
export default ButtonsGrid;
