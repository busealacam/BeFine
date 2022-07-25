import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Create a function which will generate our style sheet
import { ITheme } from '../interface/ITheme';
import { useTheme } from '../globals/Theme';
// based on the received theme
// Note that we're working with theme interface values
const createStyles = (theme: ITheme) => {
  const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      backgroundColor: theme.color.PRIMARY_COLOR,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: theme.spacing.base,
      width: '100%'
    },
    text: {
      color: theme.color.SECONDARY_COLOR,
      fontSize: 14,
    },
  });  return styles;
};export interface ToolbarProps {
  title: string;
}export const Toolbar = React.memo<ToolbarProps>((props) => {
  // Consume the provided value of our theme context
  const { theme } = useTheme()  // Generate our style sheet based on the current theme
  // We're using the React.useMemo hook for optimization,
  // the Styles object will be re-generated if the theme changes
  const Styles = React.useMemo(
    () => createStyles(theme),
    [theme]
  );  return(
    <View style={Styles.container}>
      <Text style={Styles.text}>
        {props.title}
      </Text>
    </View>
  );
});