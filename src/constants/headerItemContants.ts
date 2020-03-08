import { IHeaderItemType } from '../components/headerNavigation/header-navigation-types';

export const headerItems: Array<IHeaderItemType> = [
  {
    label: {
      label: 'Lufthansa Flight App',
      labelcolor: '#ff9900',
      textcolor: 'white',
      labelwidth: 4,
      labelheight: 2,
      labelstartcolumn: 1,
      labelstartrow: 1,
      className: 'title-label',
    },
  },
  {
    label: {
      label: '|',
      labelcolor: '#ff9900',
      textcolor: 'white',
      labelwidth: 1,
      labelheight: 2,
      labelstartcolumn: 2,
      labelstartrow: 1,
      className: 'title-divider',
    },
  },
  {
    label: {
      label: 'Schedules',
      labelcolor: '#ff9900',
      textcolor: 'white',
      labelwidth: 1,
      labelheight: 2,
      labelstartcolumn: 2,
      labelstartrow: 1,
      className: 'title-schedules',
    },
    onHeaderClick: () => {
      console.log('Clicked');
    },
  },
  {
    label: {
      label: 'Status',
      labelcolor: '#ff9900',
      textcolor: 'white',
      labelwidth: 1,
      labelheight: 2,
      labelstartcolumn: 2,
      labelstartrow: 1,
      className: 'title-status',
    },
    onHeaderClick: () => {
      console.log('Clicked status');
    },
  },
];
