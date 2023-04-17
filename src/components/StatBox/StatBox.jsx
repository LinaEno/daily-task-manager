import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <WrapBox>
      <StatWrap>
        <ColorBoxD></ColorBoxD>
        <StatTitleWrap>
          <StatTitle>{t('profile.completed')}</StatTitle>
          <StatText>
            <NumberSpan>
              {completedPercentage ? completedPercentage.toFixed(0) : 0}%
            </NumberSpan>
            <TextSpan>{t('profile.total')}</TextSpan>
            {/* <TextSpan>of total amounts</TextSpan> */}
          </StatText>
        </StatTitleWrap>
      </StatWrap>
      <StatWrap>
        <ColorBoxR></ColorBoxR>
        <StatTitleWrap>
          <StatTitle>{t('profile.active')}</StatTitle>
          <StatText>
            <NumberSpan>
              {activePercentage ? activePercentage.toFixed(0) : 0}%
            </NumberSpan>
            <TextSpan>{t('profile.total')}</TextSpan>
            {/* <TextSpan>of total amounts</TextSpan> */}
          </StatText>
        </StatTitleWrap>
      </StatWrap>
    </WrapBox>
  );
};
