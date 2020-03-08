import React from 'react';
import styled from 'styled-components';
import Label from '../label';
import {
  IHeaderItemType,
  IHeaderNavigationType,
} from './header-navigation-types';

const renderHeaderItem: (
  headerItem: IHeaderItemType,
) => React.ReactNode = headerItem => {
  const {
    label: {
      label,
      labelcolor,
      textcolor,
      labelwidth,
      labelheight,
      labelstartcolumn,
      labelstartrow,
      labelborder,
      labelcursor,
      labelfont,
      labelhover,
      labelrelativeheight,
    },
    onHeaderClick,
  } = headerItem;
  return (
    <Label
      key={label}
      label={label}
      labelcolor={labelcolor}
      textcolor={textcolor}
      labelwidth={labelwidth}
      labelheight={labelheight}
      labelstartcolumn={labelstartcolumn}
      labelstartrow={labelstartrow}
      onLabelClick={onHeaderClick}
      labelborder={labelborder}
      labelcursor={labelcursor}
      labelfont={labelfont}
      labelhover={labelhover}
      labelrelativeheight={labelrelativeheight}
    />
  );
};

const UnstyledHeaderNavigation: React.FunctionComponent<IHeaderNavigationType> = ({
  headerItems,
  className,
  children,
  ...props
}) => {
  const headerLabels = headerItems.map(renderHeaderItem);
  return (
    <div className={className} {...props}>
      {headerLabels}
    </div>
  );
};

export const HeaderNavigation = styled(UnstyledHeaderNavigation)`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
  margin: 0px 5px;
`;
