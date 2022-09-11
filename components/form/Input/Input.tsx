import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

type InputProps = {
  CalculateString: string;
};

const Input = ({ CalculateString }: InputProps) => {
  return (
    <View
      style={{
        height: '30%',
        width: '100%',
        position: 'relative',
      }}
    >
      <ScrollView
        horizontal={true}
        decelerationRate={0.5}
        invertStickyHeaders
        contentContainerStyle={styles.container}
        // style={{ position: 'relative', flexGrow: 1 }}
      >
        <Text
          style={{
            color: '#fff',
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontSize: RFPercentage(6),
          }}
        >
          {CalculateString}
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
export default Input;
