import {
  ColorBoxD,
  ColorBoxR,
  NumberSpan,
  StatText,
  StatTitle,
  StatTitleWrap,
  StatWrap,
  TextSpan,
  WrapBox,
} from './StatBox.styled';

export const StatBox = ({ activePercentage, completedPercentage }) => {
  return (
    <WrapBox>
      <StatWrap>
        <ColorBoxD></ColorBoxD>
        <StatTitleWrap>
          <StatTitle>Completed</StatTitle>
          <StatText>
            <NumberSpan>
              {completedPercentage ? completedPercentage.toFixed(0) : 0}%
            </NumberSpan>
            <TextSpan>of total</TextSpan>
            {/* <TextSpan>of total amounts</TextSpan> */}
          </StatText>
        </StatTitleWrap>
      </StatWrap>
      <StatWrap>
        <ColorBoxR></ColorBoxR>
        <StatTitleWrap>
          <StatTitle>Active</StatTitle>
          <StatText>
            <NumberSpan>
              {activePercentage ? activePercentage.toFixed(0) : 0}%
            </NumberSpan>
            <TextSpan>of total</TextSpan>
            {/* <TextSpan>of total amounts</TextSpan> */}
          </StatText>
        </StatTitleWrap>
      </StatWrap>
    </WrapBox>
  );
};
