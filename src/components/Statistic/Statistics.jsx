import { Box } from 'commonStyle/Common.styled';
import { Notification } from '../Notificaton/Notification';
import { RenderIfoStatistics } from './RenderIfo/RenderInfo';

export const Statistics = ({
  message,
  Obj,
  total,
  positivePercentage,
  state,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <RenderIfoStatistics
          Obj={Obj}
          total={total}
          positivePercentage={positivePercentage}
          state={state}
          message={message}
        />
      )}
    </Box>
  );
};
