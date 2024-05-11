import { ImSpinner4 } from 'react-icons/im';

import { DivLoadingIcon } from './styles';

const LoadingIcon = (props) => {

  return (
    <DivLoadingIcon loading = {props.loading ? 1 : 0} style={{padding: props.padding}}>
      {props.loading && <ImSpinner4 style={{margin: props.margin}} size={props.size}/>}
    </DivLoadingIcon>
  );
}

export default LoadingIcon