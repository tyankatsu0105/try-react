import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { add, decrement, increment } from '@actions/counter';
import Redux from '@pages/Redux/components';
import { CounterState } from '@reducers/counter';

interface stateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): stateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ add, decrement, increment }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux);
