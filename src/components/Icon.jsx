import * as React from 'react';
import styled from '@emotion/styled';

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-width: ${props => (props.size ? `${props.size}px` : '32px')};
  min-height: ${props => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  color: inherit;
`;

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case 'home':
      return (
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z"
            fill="currentColor"
          />
        </g>
      );
    case 'heart':
      return (
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 22l-9.192-9.192c-2.18-2.568-2.066-6.42.353-8.84A6.5 6.5 0 0 1 12 3.64a6.5 6.5 0 0 1 9.179 9.154L12 22zm7.662-10.509a4.5 4.5 0 0 0-6.355-6.337L12 6.282l-1.307-1.128a4.5 4.5 0 0 0-6.355 6.337l.114.132L12 19.172l7.548-7.549.114-.132z"
            fill="currentColor"
          />
        </g>
      );
    case 'search':
      return (
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            fill="currentColor"
          />
        </g>
      );
    case 'menu':
      return (
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
            fill="currentColor"
          />
        </g>
      );
    case 'back':
      return (
        <g>
          <path
            d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
            fill="currentColor"
          />
        </g>
      );
    default:
      return null;
  }
};

export default function Icon(props) {
  const { size = 32, glyph } = props;

  return (
    <SvgWrapper size={size} className="icon">
      <InlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={glyph}
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        fit
      >
        <title>{glyph}</title>
        <Glyph glyph={glyph} />
      </InlineSvg>
    </SvgWrapper>
  );
}
