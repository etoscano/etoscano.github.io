import PropTypes from 'prop-types';

export default function Column({ children, center, sticky, bgColor, paddingLR, bgLines, paddingBottom, size, margins, extraClass, ...props }) {
  return (
      <section className={[
        `col-${size}`,
        (margins? `col-${size}--margins` : '') ,
        (center? `col--center` : ''),
        (sticky? `col--sticky` : ''),
        (bgColor? `col--bgColor` : ''),
        (bgLines? `col--bgLines` : ''),
        (paddingBottom? `col--paddingBottom` : ''),
        (paddingLR? `col--paddingLR` : ''),
        extraClass
      ].join(' ')}>
        {children}
      </section>
  );
}


Column.propTypes = {
    size: PropTypes.number.isRequired,
    margins: PropTypes.bool
};
  
Column.defaultProps = {
  size: 6
};