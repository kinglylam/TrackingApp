import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  Text,
} from 'react-native';
import axios from 'axios';
import { Shipment } from '../../../types/shipment';

import { pallets } from '../../../constants';
import ShipmentItem from './ShipmenItem';

const ShipmentList = () => {
  const [shipments, setShipments] = useState<Shipment[]>(
    [],
  );
  const [refreshing, setRefreshing] =
    useState<boolean>(false);
  const [loadingMore, setLoadingMore] =
    useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchShipments = async (reset = false) => {
    try {
      const response = await axios.get(
        'https://shippex-demo.bc.brandimic.com/api/method/frappe.client.get_list',
        {
          params: {
            doctype: 'AWB',
            fields: '*',
            limit_start: reset ? 0 : (page - 1) * 10,
            limit_page_length: 10,
          },
        },
      );

      const data: Shipment[] = response.data.message;
      // console.log(data);
      if (Array.isArray(data)) {
        if (reset) {
          setShipments(data.slice(0, 15));
          setPage(2);
        } else {
          setShipments(prevShipments => [
            ...prevShipments,
            ...data,
          ]);
          setPage(prevPage => prevPage + 1);
        }
        setHasMore(data.length === 10);
      } else {
        console.error(
          'Unexpected API response structure:',
          response.data,
        );
      }
    } catch (error) {
      console.error('Error fetching shipments:', error);
    } finally {
      setRefreshing(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchShipments(true);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    setHasMore(true);
    await fetchShipments(true);
  };

  const onEndReached = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    await fetchShipments();
  };

  const renderShipmentItem = useCallback(
    ({ item }: { item: Shipment }) => (
      <ShipmentItem item={item} />
    ),
    [],
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        No shipments available.
      </Text>
    </View>
  );

  const keyExtractor = (item: Shipment, index: number) =>
    index.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={shipments}
        keyExtractor={keyExtractor}
        renderItem={renderShipmentItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: pallets.white,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ShipmentList;
