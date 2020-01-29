import { grid1, grid1html } from './01-grid';
import {
  customProperties1,
  customProperties2,
  customProperties4
} from './02-custom-properties';
import { supports1, supports2 } from './03-supports';
import { filters1, filters2 } from './05-filters';

const images = {
  grid1: require('../images/grid/01.png'),
  grid2: require('../images/grid/02.apng'),
  customProperties1: require('../images/customproperties/01.png'),
  customProperties2: require('../images/customproperties/02.png'),
  customProperties4: require('../images/customproperties/04.png'),
  supports2: require('../images/supports/02.apng'),
  filters1: require('../images/filters/01.apng')
};

const css = {
  images,
  grid1,
  grid1html,
  customProperties1,
  customProperties2,
  customProperties4,
  supports1,
  supports2,
  filters1,
  filters2
};

export default css;
