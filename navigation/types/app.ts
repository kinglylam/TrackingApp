import { NavigatorScreenParams } from '@react-navigation/native';

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;
  HomeStack: NavigatorScreenParams<HomeRoutes>;
  ProfileStack: NavigatorScreenParams<ProfileRoutes>;
  OrderStack: NavigatorScreenParams<OrderRoutes>;
  ShopStack: NavigatorScreenParams<ShopRoutes>;
  Payment: NavigatorScreenParams<PaymentRoute>;
  OnboardingStack: NavigatorScreenParams<OnboardingRoutes>;
  WalletStack: NavigatorScreenParams<WalletRoutes>;
};

export type TabRoutes = {
  Home: undefined;
  Order: undefined;
  Profile: undefined;
  Wallet: undefined;
  Shop: undefined;
};
export type PaymentRoute = {
  wallet: undefined;
  TransactionHistory: undefined;
  MyBank: undefined;
  PaymentOptions: undefined;
};
export type HomeRoutes = {
  More: undefined;
  Notification: undefined;
  NewsFeed: undefined;
  NewsDetailsScreen: undefined;
};
export type WalletRoutes = {
  More: undefined;
  Bank: undefined;
  AddBank: undefined;
  AddAccount: undefined;
  TransactionHistory: undefined;
  MyPost: undefined;
  HomeWallet: undefined;
};
export type ProfileRoutes = {
  More: undefined;
  EditProfile: undefined;
  SavedLocation: undefined;
  FAQ: undefined;
  SuggestFeature: undefined;
  Settings: undefined;
  Security: undefined;
  Support: undefined;
  ChangPassword: undefined;
  DeleteAccount: undefined;
  NotiPreference: undefined;
  GeoLocation: undefined;
  FingerPrint: undefined;
};

export type ShopRoutes = {
  More: undefined;
  MedicalDevices: undefined;
  Medicines?: { filter: string };
  CartHome: undefined;
  ViewProduct: undefined;
  Payment: undefined;
  MedicalConsummables: undefined;
  DrugClasses: undefined;
  MyOrder: { index: number };
  AllProducts: undefined;
  OrderDetails: undefined;
  AddShop: undefined;
  Inventory: { id: string };
  AddMedConsumable: undefined;
  AddMedDevice: undefined;
  AddMedicine: undefined;
  DrugDetails: undefined;
  MedDeviceDetails: undefined;
  MedConsumablesDetails: undefined;
  ShopManagement: { id: string };
  Statistics: undefined;
  SavedSupervisors: { shopId: string };
  AddSupervisor: { shopId: string; shopName: string };
  PCN: undefined;
  PracticeLicense: undefined;
  EditMedicine: undefined;
  EditConsumable: undefined;
  EditDevice: undefined;
  OrderHomeShop: { id: string };
  ToConfirmShop: undefined;
  DispatchShop: undefined;
  ProcessingShop: undefined;
  ReturnedShop: undefined;
  TransitShop: undefined;
  CancelledShop: undefined;
  CompletedShop: undefined;
  Shop:undefined
};
export type OrderRoutes = {
  OrderHome: undefined;
  ToConfirm: undefined;
  Ongoing: undefined;
};
export type OnboardingRoutes = {
  VerificationHome: undefined;
  BizInfo: undefined;
  CAC: undefined;
  ContactPerson: undefined;
  LocationPicker: undefined;
  HomeVerification: undefined;
  ProfileSave: undefined;
};
