import { NavigatorScreenParams } from '@react-navigation/native';

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;
  HomeStack: NavigatorScreenParams<HomeRoutes>;
};

export type TabRoutes = {
  Home: undefined;
  Scan: undefined;
  Profile: undefined;
  Wallet: undefined;
};

export type HomeRoutes = {};
