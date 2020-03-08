import ILabelType from '../label/label-type';
export type IHeaderItemType = {
  label: ILabelType;
  onHeaderClick?: any;
};
export type IHeaderNavigationType = {
  className?: string;
  headerItems: Array<IHeaderItemType>;
};
