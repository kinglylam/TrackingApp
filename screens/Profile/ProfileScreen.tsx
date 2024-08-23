import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const ProfileScreen = () => {
  const { logout } = useContext(
    AuthContext,
  ) as AuthContextType;
  return (
    <View>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            Alert.alert(
              `Are you sure you want to logout`,
              "Don't worry you can always come back at any time to continue",
              [
                { text: 'Cancel' },
                {
                  text: 'Logout',
                  onPress: () => logout(),
                },
              ],
            );
          }}>
          <Text style={{ color: 'red' }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});

export default ProfileScreen;
