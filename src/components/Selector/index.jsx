import Select from 'react-select';
import { Container } from './styles';
import LoadingIcon from '../LoadingIcon';

const Selector = (props) => {
  const { label, loading, width, getOptionLabel, options} = props

  const customStyles = {
    control: (styles) => ({
      ...styles,
      minWidth: "max-content",
    }),
    menu: (styles) => ({
      ...styles,
      minWidth: "max-content",
    }),
    option: (styles) => ({
     ...styles,
    }),
  };

  const listOptions = options ? options.map(e => ({value: e, label: e})) : []

  return (
    <Container width={width}>
      <div style={{margin: loading ? '1px 0' : '4px 0', display: 'flex'}}>
        <span>{label}</span>
        <LoadingIcon loading={loading} padding='3px 0 0 5px' />
      </div>

      <Select {...props}
        menuPlacement="auto"
        menuPosition="fixed"
        styles={customStyles}
        options={getOptionLabel ? options : listOptions}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#bbc9d8',
            primary50: '#bbc9d8',
            primary: '#01579B',
          },
        })}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
     </Container>
  );
}

export default Selector