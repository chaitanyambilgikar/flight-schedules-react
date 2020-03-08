interface ILabelType {
  label: string;
  labelcolor: string;
  textcolor: string;
  labelwidth: number;
  labelheight: number;
  labelrelativeheight?: string;
  labelstartcolumn: number;
  labelstartrow: number;
  labelborder?: string;
  labelfont?: string;
  labelcursor?: string;
  labelhover?: string;

  onLabelClick?: any;
  className?: string;
}

export default ILabelType;
