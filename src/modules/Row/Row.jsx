import PropTypes from 'prop-types';
import Column from '../Column/Column.jsx'

export default function Row({ children, extraClass, ...props }) {
  return (
  <div className={['row', extraClass].join(' ')}>
    {children}
  </div>
  );
}

  
Row.defaultProps = {
  children: <>
    <Column size={6}/>
    <Column size={6}/> 
  </>
};