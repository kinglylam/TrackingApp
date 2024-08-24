import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Shipment } from '../../../types/shipment';
import Box from '../../../assets/box 1.png';
import {
  ArrowExpandIcon,
  SmallArrowRightIcon,
} from '../../../assets/icons';
import { pallets } from '../../../constants';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ShipmentItemProps {
  item: Shipment;
}

const ShipmentItem: React.FC<ShipmentItemProps> = ({
  item,
}) => {
  //   console.log('Shipment Item:', item);
  const [isExpanded, setIsExpanded] =
    useState<boolean>(false);

  const [mark, setMark] = useState<boolean>(false);

  const handleToggle = () => {
    setMark(prevState => !prevState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleToggle}>
          {mark ? (
            <AntDesign
              name="checksquareo"
              size={20}
              color="rgba(208, 213, 221, 1)"
            />
          ) : (
            <View style={styles.checkBoxContainer}></View>
          )}
        </TouchableOpacity>
        <Image source={Box} />
        <View>
          <Text style={styles.awbText}>AWB</Text>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.destView}>
            <Text style={styles.dest}>
              {item.destination_city}
            </Text>
            <SmallArrowRightIcon />
            <Text style={styles.dest}>
              {item.origin_city}
            </Text>
          </View>
        </View>

        <View style={styles.stutusView}>
          <Text style={styles.status}>{item.status}</Text>
        </View>

        <TouchableOpacity
          style={styles.expand}
          onPress={() => setIsExpanded(!isExpanded)}>
          <ArrowExpandIcon />
        </TouchableOpacity>
      </View>
      {isExpanded && (
        <View style={styles.details}>
          <View style={styles.locationRow}>
            <View>
              <Text style={styles.locationLabel}>
                Origin
              </Text>
              <Text style={styles.location}>
                {item.destination_city}
              </Text>
              <Text style={styles.address}>
                Dokki, 22 Nile St.
              </Text>
            </View>
            <AntDesign
              name="arrowright"
              size={24}
              color=""
            />
            <View>
              <Text style={styles.locationLabel}>
                Destination
              </Text>
              <Text style={styles.location}>
                {item.origin_city}
              </Text>
              <Text style={styles.address}>
                Simoha, 22 max St.
              </Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.callButton}>
              <Ionicons
                name="call-outline"
                size={24}
                color={pallets.white}
              />
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappButton}>
              <FontAwesome5
                name="whatsapp"
                size={24}
                color={pallets.white}
              />
              <Text style={styles.buttonText}>
                WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(244, 242, 248, 1)',
    padding: 12,
    borderRadius: 8,
    elevation: 1,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 3,
  },
  awbText: {
    color: 'rgba(63, 57, 92, 1)',
    fontSize: 13,
    fontWeight: '400',
  },
  status: {
    fontSize: 11,
    color: 'rgba(47, 80, 193, 1)',
    fontWeight: '400',
  },
  stutusView: {
    padding: 5,
    backgroundColor: 'rgba(217, 230, 253, 1)',
    borderRadius: 4,
  },
  details: {
    marginTop: 10,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(47, 80, 193, 1)',
  },
  location: {
    fontSize: 14,
  },
  address: {
    fontSize: 12,
    color: 'gray',
  },
  arrow: {
    marginHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  callButton: {
    backgroundColor: 'rgba(47, 80, 193, 1)',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  whatsappButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  checkBoxContainer: {
    height: 18,
    width: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(208, 213, 221, 1)',
    backgroundColor: pallets.white,
  },
  name: {
    color: pallets.black,
    fontSize: 18,
    fontWeight: '600',
  },
  destView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  dest: {
    color: 'rgba(117, 114, 129, 1)',
    fontSize: 13,
    fontWeight: '400',
  },
  expand: {
    padding: 7,
    borderRadius: 50,
    backgroundColor: pallets.white,
  },
});

export default ShipmentItem;
