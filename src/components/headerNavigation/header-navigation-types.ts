import ILabelType from '../label/label-type';
export type IHeaderItemType = {
  label: ILabelType;
  onHeaderClick?: any;
  link?: string;
};
export type IHeaderNavigationType = {
  className?: string;
  headerItems: Array<IHeaderItemType>;
};
