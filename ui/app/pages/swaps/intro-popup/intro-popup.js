import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSwapsFromToken } from '../../../ducks/swaps/swaps';
import { I18nContext } from '../../../contexts/i18n';
import { BUILD_QUOTE_ROUTE } from '../../../helpers/constants/routes';
import { useNewMetricEvent } from '../../../hooks/useMetricEvent';
import { getSwapsDefaultToken } from '../../../selectors';
import Button from '../../../components/ui/button';
import Popover from '../../../components/ui/popover';

export default function IntroPopup({ onClose }) {
  const dispatch = useDispatch(useDispatch);
  const history = useHistory();
  const t = useContext(I18nContext);

  const swapsDefaultToken = useSelector(getSwapsDefaultToken);
  const enteredSwapsEvent = useNewMetricEvent({
    event: 'Swaps Opened',
    properties: {
      source: 'Intro popup',
      active_currency: swapsDefaultToken.symbol,
    },
    category: 'swaps',
  });
  const dyorVisitedEvent = useNewMetricEvent({
    event: 'DYOR Visited ',
    category: 'swaps',
  });
  const fiatOnrampVisitedEvent = useNewMetricEvent({
    event: 'Fiat Onramp Visited',
    category: 'swaps',
  });
  const referralPartnersVisitedEvent = useNewMetricEvent({
    event: 'Referral Partners Visited',
    category: 'swaps',
  });
  const productOverviewDismissedEvent = useNewMetricEvent({
    event: 'Product Overview Dismissed',
    category: 'swaps',
  });

  return (
    <div className="intro-popup">
      <Popover
        className="intro-popup__popover"
        title={t('swapIntroPopupTitle')}
        subtitle={t('swapIntroPopupSubTitle')}
        onClose={() => {
          productOverviewDismissedEvent();
          onClose();
        }}
        footerClassName="intro-popup__footer"
        footer={
          <Button
            type="confirm"
            className="intro-popup__button"
            onClick={() => {
              onClose();
              enteredSwapsEvent();
              dispatch(setSwapsFromToken(swapsDefaultToken));
              history.push(BUILD_QUOTE_ROUTE);
            }}
          >
            {t('swapStartSwapping')}
          </Button>
        }
      >
        <div className="intro-popup__content">
          <div className="intro-popup__liquidity-sources-label">
            {t('swapIntroMarketplacesLabel')}
          </div>
          <div className="intro-popup__source-logo-container">
            <img
              src="images/referral-partners-grouped.png"
              alt="Referral Partners"
            />
          </div>
          <div className="intro-popup__learn-more-header">
            {t('swapIntroLearnMoreHeader')}
          </div>
          <div
            className="intro-popup__learn-more-link"
            onClick={() => {
              global.platform.openTab({
                url: 'https://dyor.octo.fi/',
              });
              dyorVisitedEvent();
            }}
          >
            {t('swapIntroLearnMoreLink')}
          </div>
          <div
            className="intro-popup__learn-more-link"
            onClick={() => {
              global.platform.openTab({
                url: 'https://app.octo.fi/#/fiat/on',
              });
              fiatOnrampVisitedEvent();
            }}
          >
            {t('swapBuyEth')}
          </div>
          <div
            className="intro-popup__learn-more-link"
            onClick={() => {
              global.platform.openTab({
                url: 'https://octo.fi/partners',
              });
              referralPartnersVisitedEvent();
            }}
          >
            {t('browseReferralPartners')}
          </div>
        </div>
      </Popover>
    </div>
  );
}

IntroPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};
