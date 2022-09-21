import { StatisticItems } from '../Statistics.styled';
import { HederTitleFeedback } from 'components/Feedback.styled';
import { Box } from 'commonStyle/Common.styled';

export const RenderIfoStatistics = ({
  Obj,
  total,
  positivePercentage,
  state,
  message,
}) => {
  return (
    <Box>
      <HederTitleFeedback>{message}</HederTitleFeedback>
      {Obj.map((item, idsx) => {
        return (
          <StatisticItems key={idsx}>
            {item[0]}: {item[1]}
          </StatisticItems>
        );
      })}
      <StatisticItems>Total: {total}</StatisticItems>
      <StatisticItems>
        Positive feedback:
        {!Number.isNaN(state) && positivePercentage}
      </StatisticItems>
    </Box>
  );
};
