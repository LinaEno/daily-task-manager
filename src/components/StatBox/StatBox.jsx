// import {
//   ColorBoxD,
//   ColorBoxR,
//   NumberSpan,
//   StatText,
//   StatTitle,
//   StatTitleWrap,
//   StatWrap,
//   TextSpan,
//   WrapBox,
// } from './StatBox.styled';

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

export const StatBox = () => {
  return (
    <WrapBox>
      <StatWrap>
        <ColorBoxD></ColorBoxD>
        <StatTitleWrap>
          <StatTitle>Designing</StatTitle>
          <StatText>
            <NumberSpan>50%</NumberSpan>
            <TextSpan>of total time</TextSpan>
          </StatText>
        </StatTitleWrap>
      </StatWrap>
      <StatWrap>
        <ColorBoxR></ColorBoxR>
        <StatTitleWrap>
          <StatTitle>Research</StatTitle>
          <StatText>
            <NumberSpan>30%</NumberSpan>
            <TextSpan>of total design</TextSpan>
          </StatText>
        </StatTitleWrap>
      </StatWrap>
    </WrapBox>
  );
};
