import PropTypes from 'prop-types';
import React from 'react';

import {toClasses} from '../../../utils';
import {MaxButton} from '../MaxButton/MaxButton';
import {TokenSelector} from '../TokenSelector/TokenSelector';
import {Input} from '../index';
import styles from './TokenInput.module.scss';
import {INPUT_PLACEHOLDER} from './TokenInput.strings';

export const TokenInput = ({
  value,
  hasError,
  tokenData,
  onMaxClick,
  onTokenSelect,
  onInputChange
}) => (
  <div className={toClasses(styles.tokenInput, hasError && styles.hasError)}>
    <Input
      placeholder={INPUT_PLACEHOLDER}
      style={{
        fontSize: '24px',
        fontWeight: '600'
      }}
      type="number"
      value={value}
      onChange={onInputChange}
    />
    <MaxButton onClick={onMaxClick} />
    <TokenSelector tokenData={tokenData} onClick={onTokenSelect} />
  </div>
);

TokenInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasError: PropTypes.bool,
  tokenData: PropTypes.object,
  onMaxClick: PropTypes.func,
  onTokenSelect: PropTypes.func,
  onInputChange: PropTypes.func
};
