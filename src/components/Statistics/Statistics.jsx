import PropTypes from "prop-types";

import {StatisticsSection, Title, StatList, StatItem} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
  function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

return (
<StatisticsSection>
    {title && <Title>{title}</Title>}
  <StatList>
     {stats.map(({id, label, percentage}) =>(
      <StatItem 
      key = {id}
      style={{backgroundColor: randomHexColor()}} 
      >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
      </StatItem>
     ) )}    
  </StatList>
</StatisticsSection>
 );
};

Statistics.propTypes = {
 title: PropTypes.string,
 stats: PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
 ).isRequired,
};

Statistics.defaultProps = {
  stats: [],
};