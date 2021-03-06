import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/ui/button';
import MetaFoxLogo from '../../../components/ui/metafox-logo';
import { INITIALIZE_GUIDING_PRINCIPLES_ROUTE } from '../../../helpers/constants/routes';

export default class SelectAction extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    isInitialized: PropTypes.bool,
    setFirstTimeFlowType: PropTypes.func,
    nextRoute: PropTypes.string,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  componentDidMount() {
    const { history, isInitialized, nextRoute } = this.props;

    if (isInitialized) {
      history.push(nextRoute);
    }
  }

  handleCreate = () => {
    this.props.setFirstTimeFlowType('create');
    this.props.history.push(INITIALIZE_GUIDING_PRINCIPLES_ROUTE);
  };

  handleImport = () => {
    this.props.setFirstTimeFlowType('import');
    this.props.history.push(INITIALIZE_GUIDING_PRINCIPLES_ROUTE);
  };

  render() {
    const { t } = this.context;

    return (
      <div className="select-action">
        <MetaFoxLogo />

        <div className="select-action__wrapper">
          <div className="select-action__body">
            <div className="select-action__body-header">{t('newToOctoFi')}</div>
            <div className="select-action__description">
              <p>{t('newDescription')}</p>
              <p>{t('newDescriptionChoose')}</p>
            </div>
            <div className="select-action__select-buttons">
              <div className="select-action__select-button">
                <div className="select-action__button-content">
                  <div className="select-action__button-symbol">
                    <img src="/images/thin-plus.svg" alt="" />
                  </div>
                  <div className="select-action__button-text-big">
                    {t('letsGoSetUp')}
                  </div>
                  <div className="select-action__button-text-small">
                    {t('thisWillCreate')}
                  </div>
                </div>
                <Button
                  type="primary"
                  className="first-time-flow__button"
                  onClick={this.handleCreate}
                >
                  {t('createAWallet')}
                </Button>
              </div>

              <div className="select-action__import">
                <a
                  className="first-time-flow__import"
                  onClick={this.handleImport}
                >
                  {t('importWallet')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
