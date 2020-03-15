import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Label from 'components/label';
import {
  IHeaderItemType,
  IHeaderNavigationType,
} from './header-navigation-types';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const renderHeaderItem: (
  headerItem: IHeaderItemType,
) => React.ReactNode = headerItem => {
  const { label, onHeaderClick, link } = headerItem;
  const HeaderItem = (
    <Label key={label.label} onLabelClick={onHeaderClick} {...label} />
  );
  return onHeaderClick ? (
    <StyledLink to={`${link}`} key={label.label}>
      {HeaderItem}
    </StyledLink>
  ) : (
    HeaderItem
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
