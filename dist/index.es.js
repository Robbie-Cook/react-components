import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

// Class converting css-style dimensions (padding etc.) to an object

/**
 * Component for providing space in a UI
 *
 * Values must be given like so
 * <Spacer width="40px" />
 */

class Spacer extends Component {
  render() {
    const Spacer = styled.div`
      height: ${this.props.height};
      width: ${this.props.width};
    `;
    return React.createElement(Spacer, null);
  }

}

Spacer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/*
Styling for entire website. All common variables are being migrated here from
css/global-styles.css. 

This is to be replaced with React.Context, where this is an object passed 
through a color context
*/
class Colors {}

_defineProperty(Colors, "textColor", "#dcd6ce");

_defineProperty(Colors, "backgroundColor", "#0f0f0f");

_defineProperty(Colors, "link", {
  color: '#6385a9',
  // also defined in global-styles.css
  colorActive: '#1565c0',
  colorHighlight: '#6385a9'
});

_defineProperty(Colors, "text", {
  color: '#dcd6ce' // also defined in global-styles.css

});

_defineProperty(Colors, "page", {
  backgroundColor: '#0f0f0f',
  secondaryColor: '#EB6D6D' // reddish

});

/**
 * A loading screen
 */

class TransitionWrapper extends PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "PosedDiv", posed.div({
      visible: {
        opacity: 1,
        height: "auto"
      },
      hidden: {
        opacity: 0,
        height: "0px",
        transition: {
          default: {
            ease: "linear",
            duration: 100
          }
        }
      }
    }));

    _defineProperty(this, "StyledDiv", styled(this.PosedDiv)``);

    _defineProperty(this, "SpinnerWrapper", styled.div`
    min-width: 100px;
    color: ${Colors.text.color};
    animation-name: spin;
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `);
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement(this.StyledDiv, {
      pose: this.props.loaded ? "hidden" : "visible"
    }, React.createElement(this.SpinnerWrapper, null, React.createElement(FontAwesomeIcon, {
      style: {
        fontSize: "65px",
        display: "flex",
        margin: "auto"
      },
      icon: faCircleNotch
    }))), React.createElement(this.StyledDiv, {
      pose: this.props.loaded ? "visible" : "hidden"
    }, this.props.children));
  }

}

export { Spacer, TransitionWrapper };
//# sourceMappingURL=index.es.js.map
