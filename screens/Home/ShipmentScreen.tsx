import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { RootNavigationProp } from '../../navigation/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {
  AppRoutes,
  TabRoutes,
} from '../../navigation/types/app';
import profilePic from '../../assets/profilePic.png';
import {
  AddScanIcon,
  FilterIcon,
  HomeLogoIcon,
  NotificationIcon,
  SearchIcon,
} from '../../assets/icons';
import { pallets } from '../../constants';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { PageWrapper } from '../../components/PageWrapper';
import ShipmentList from './components/ShipmentList';

const { height } = Dimensions.get('window');

const HorizontalLine = () => {
  return <View style={styles.horizontalLine} />;
};

const ShipmentScreen = ({
  navigation,
  route,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Home'>) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [markAll, setMarkAll] = useState(false);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleToggle = () => {
    setMarkAll(prevState => !prevState);
  };
  return (
    <PageWrapper showDownInset={false}>
      <View style={styles.container}>
        <View style={styles.headerComp}>
          <Image source={profilePic} />
          <HomeLogoIcon />
          <NotificationIcon />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.greet}>Hello,</Text>
          <Text style={styles.name}>Ibrahim Shaker</Text>
        </View>

        <View style={styles.inputContainer}>
          <Input
            placeholder="Search"
            LeftComponent={<SearchIcon />}
          />

          <View style={styles.doubleButtonContainer}>
            <View style={styles.doubleButton}>
              <Button
                text="Filters"
                onPress={() => {
                  setModalVisible(true);
                }}
                backgroundColor={pallets.lightGrey}
                textColor={pallets.grey}
                icon={<FilterIcon />}
              />
            </View>
            <View style={styles.doubleButton}>
              <Button
                text="Add Scan"
                onPress={() => {}}
                backgroundColor={pallets.primaryBlue}
                textColor={pallets.white}
                icon={<AddScanIcon />}
              />
            </View>
          </View>
        </View>

        <View style={styles.listStyle}>
          <View style={styles.listHeader}>
            <Text style={styles.lhText}>Shipments</Text>

            <TouchableOpacity
              onPress={handleToggle}
              style={styles.toggleContainer}>
              {markAll ? (
                <AntDesign
                  name="checksquareo"
                  size={23}
                  color="rgba(208, 213, 221, 1)"
                />
              ) : (
                <View style={styles.emptyToggle}></View>
              )}
              <Text style={styles.lhT2}>Mark All</Text>
            </TouchableOpacity>
          </View>
          <ShipmentList />
        </View>

        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection={['down']}
          propagateSwipe={true}
          onSwipeComplete={() => setModalVisible(false)}
          isVisible={modalVisible}
          style={styles.modal}>
          <View
            style={[
              styles.modalContainer,
              { height: height * 0.37 },
            ]}>
            <HorizontalLine />
            <View>
              <Text>Received</Text>
              <Text>Received</Text>
              <Text>Received</Text>
            </View>
          </View>
        </Modal>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  headerComp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    paddingVertical: 10,
    gap: 5,
  },
  greet: {
    fontSize: 14,
    fontWeight: '400',
    color: pallets.grey,
  },
  name: {
    fontSize: 28,
    fontWeight: '600',
    color: pallets.black,
  },
  doubleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  doubleButton: {
    width: '48%',
  },
  inputContainer: {
    gap: 20,
    paddingBottom: 30,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  horizontalLine: {
    borderBottomColor: '#c2bcbc',
    borderBottomWidth: 3.5,
    width: '20%',
    alignSelf: 'center',
    marginTop: 5,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  listStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  listHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lhText: {
    fontWeight: '600',
    fontSize: 22,
  },
  lhT2: {
    color: 'rgba(47, 80, 193, 1)',
    fontSize: 18,
    fontWeight: '400',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emptyToggle: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: 'rgba(208, 213, 221, 1)',
  },
});

export default ShipmentScreen;
