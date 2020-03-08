import LabelType from '../label/label-type';
export type HeaderItemType = {
  label: LabelType;
  onHeaderClick?: any;
};
export type HeaderNavigationType = {
  className?: string;
  headerItems: Array<HeaderItemType>;
};
