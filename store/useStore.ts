// // useStore.ts
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const STORAGE_KEY = 'shipments_data';

// export const saveShipmentsToStorage = async (
//   shipments: any[],
// ) => {
//   try {
//     await AsyncStorage.setItem(
//       STORAGE_KEY,
//       JSON.stringify(shipments),
//     );
//   } catch (error) {
//     console.error(
//       'Error saving shipments to storage:',
//       error,
//     );
//   }
// };

// export const getShipmentsFromStorage = async () => {
//   try {
//     const data = await AsyncStorage.getItem(STORAGE_KEY);
//     if (data) {
//       return JSON.parse(data);
//     }
//     return [];
//   } catch (error) {
//     console.error(
//       'Error retrieving shipments from storage:',
//       error,
//     );
//     return [];
//   }
// };
