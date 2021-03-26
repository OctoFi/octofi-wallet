import { connect } from 'react-redux';
import { setParticipateInMetaMetrics } from '../../../store/actions';
import { getFirstTimeFlowTypeRoute } from '../../../selectors';
import GuidingPrinciples from './guiding-principles.component';

const mapStateToProps = (state) => {
  const { participateInMetaMetrics } = state.metamask;

  return {
    nextRoute: getFirstTimeFlowTypeRoute(state),
    participateInMetaMetrics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setParticipateInMetaMetrics: (val) =>
      dispatch(setParticipateInMetaMetrics(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuidingPrinciples);
