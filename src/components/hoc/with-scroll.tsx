import { parse } from 'querystring';
import * as React from 'react';
import { scrollToId } from '../../ui/utils';

export interface Props {
  location?: {
    search: string;
  };
}

const withScroll = <P extends object>(
  Component: React.ComponentType<P>,
  options?: {},
) =>
  class WithScroll extends React.Component<P & Props> {
    componentDidMount() {
      const { location } = this.props;
      if (location) {
        const id = parse(location.search)['?id'];
        scrollToId(id ? `${id}` : 'top', options);
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };

export default withScroll;
