export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export interface Time {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface TimeState {
  time?: Time;
  setTime?(time: Time): void;
}
