import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from 'commonStyle/Common.styled';
import { theme } from '../commonStyle/Thema';
import { HederTitleFeedback } from './Feedback.styled';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistic/Statistics';
import { Section } from './Feedback.styled';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = props => {
    this.setState(preventState => {
      return { [props]: (preventState[props] += 1) };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return ((good * 100) / (good + neutral + bad)).toFixed(1) + '%';
  };
  render() {
    const KEYS = Object.keys(this.state);
    const Obj = Object.entries(this.state);

    return (
      <ThemeProvider theme={theme}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Section title="Feedback">
            <HederTitleFeedback>Please leave Feedback</HederTitleFeedback>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gridGap={`${theme.space[3]}px`}
            >
              <Buttons options={KEYS} onLeaveFeedback={this.onLeaveFeedback} />
            </Box>
          </Section>
          <Section title="Statistics">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              marginRight="auto"
            >
              <Statistics
                message="Statistics"
                Obj={Obj}
                total={this.countTotalFeedback(this.state)}
                positivePercentage={this.countPositiveFeedbackPercentage(
                  this.state
                )}
                state={this.state}
              />
            </Box>
          </Section>
        </Box>
      </ThemeProvider>
    );
  }
}
