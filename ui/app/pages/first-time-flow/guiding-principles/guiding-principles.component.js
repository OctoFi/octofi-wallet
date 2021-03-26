import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MetaFoxLogo from '../../../components/ui/metafox-logo';
import PageContainerFooter from '../../../components/ui/page-container/page-container-footer';

export default class GuidingPrinciples extends Component {
  static propTypes = {
    history: PropTypes.object,
    setParticipateInMetaMetrics: PropTypes.func,
    nextRoute: PropTypes.string,
    participateInMetaMetrics: PropTypes.bool,
  };

  static contextTypes = {
    metricsEvent: PropTypes.func,
    t: PropTypes.func,
  };

  render() {
    const { metricsEvent, t } = this.context;
    const {
      nextRoute,
      history,
      setParticipateInMetaMetrics,
      participateInMetaMetrics,
    } = this.props;

    return (
      <div className="guiding-principles">
        <div className="guiding-principles__main">
          <MetaFoxLogo />
          <div className="guiding-principles__title">
            {t('octoFiGuidingPrinciples')}
          </div>
          <div className="guiding-principles__body">
            <div className="guiding-principles__description">
              {t('principlesDescription', [
                <a
                  href="https://den.octo.fi/p/manifesto"
                  target="_blank"
                  rel="noreferrer"
                  key="principlesDescriptionLink"
                >
                  {t('principlesLink')}
                </a>,
              ])}
            </div>
            <div className="guiding-principles__description">
              {t('dontTrustVerify')}
            </div>
            <div className="guiding-principles__description">
              {t('newDescriptionLearn')}
            </div>

            <div className="guiding-principles__description guiding-principles__bold">
              {t('octofiWill')}
            </div>

            <div className="guiding-principles__committments">
              <div className="guiding-principles__row">
                <i className="fa fa-check" />
                <div className="guiding-principles__row-description">
                  {t('provideCashbacks')}
                </div>
              </div>
              <div className="guiding-principles__row guiding-principles__break-row">
                <i className="fa fa-times" />
                <div className="guiding-principles__row-description">
                  {t('metametricsCommitmentsNeverCollectKeysEtc', [
                    <span
                      className="guiding-principles__bold"
                      key="neverCollectKeys"
                    >
                      {t('boldNever')}
                    </span>,
                  ])}
                </div>
              </div>
              <div className="guiding-principles__row">
                <i className="fa fa-times" />
                <div className="guiding-principles__row-description">
                  {t('metametricsCommitmentsNeverCollectIP', [
                    <span
                      className="guiding-principles__bold"
                      key="neverCollectKeys"
                    >
                      {t('boldNever')}
                    </span>,
                  ])}
                </div>
              </div>
              <div className="guiding-principles__row">
                <i className="fa fa-times" />
                <div className="guiding-principles__row-description">
                  {t('metametricsCommitmentsNeverSellDataForProfit', [
                    <span
                      className="guiding-principles__bold"
                      key="neverCollectKeys"
                    >
                      {t('boldNever')}
                    </span>,
                  ])}
                </div>
              </div>
            </div>
          </div>
          <div className="guiding-principles__footer">
            <PageContainerFooter
              hideCancel
              onSubmit={async () => {
                await setParticipateInMetaMetrics(false);

                try {
                  if (
                    participateInMetaMetrics === null ||
                    participateInMetaMetrics === true
                  ) {
                    await metricsEvent({
                      eventOpts: {
                        category: 'Onboarding',
                        action: 'Metrics Option',
                        name: 'Metrics Opt Out',
                      },
                      isOptIn: true,
                      flushImmediately: true,
                    });
                  }
                } finally {
                  history.push(nextRoute);
                }
              }}
              submitText={t('continue')}
              submitButtonType="primary"
              disabled={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
