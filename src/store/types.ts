export type Day = {
  datetime: string;
  tempmax: number;
  temp: number;
  feelslike: number;
  windspeed: number;
  conditions: string;
  description: string;
  icon: string;
  hours: Hour[];
};

export type Weather = {
  address: string;
  timezone: string;
  days: Day[];
};

export type WeatherHour = {
  address: string;
  timezone: string;
  hours: Day[];
};

export type Hour = {
  datetime: string;
  temp: number;
  conditions: string;
  icon: string;
};

export type Coords = {
  longitude: number;
  latitude: number;
};
