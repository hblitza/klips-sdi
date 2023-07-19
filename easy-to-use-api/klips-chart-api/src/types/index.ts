export type Params = {
  region?: string;
  geomwkt?: string;
  threshold?: string;
  currentTimestamp?: string;
  startTimestamp?: string;
  endTimestamp?: string;
  pointInRegion?: string;
  wktGeometry?: string;
};

export type PathNameConfig = {
  [pathName: string]: string;
};

export type TimeSeriesDatapoint = {
  [bandName: string]: string;
  'timestamp': string;
};

export type TimeSeriesData = TimeSeriesDatapoint[];

export type Datapoint = [string, string];

export type DataPointObject = {
  [key: string]: Datapoint[];
};

export type BoundingBoxObject = {
  [key: string]: BoundingBox;
};

export type BoundingBox = [
  number,
  number,
  number,
  number
];
