import React, { useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { WalletWindowKey } from '@sei-js/core';
import { WalletSelectModalProps } from './types';
import { styles } from './styles';
import { SeiWalletContext } from '../../provider';


const WalletSelectModal = ({
  setShowConnectModal,
  inputWallets,
  walletSelectStyles,
}: WalletSelectModalProps) => {
  const coin98_png_1 = __importDefault(require("react/dist/lib/assets/coin98.png"));
  const falcon_png_1 = __importDefault(require("react/dist/lib/assets/falcon.png"));
  const keplr_png_1 = __importDefault(require("react/dist/lib/assets/keplr.png"));
  const leap_png_1 = __importDefault(require("react/dist/lib/assets/leap.png"));
  const default_svg_1 = __importDefault(require("react/dist/lib/assets/default.svg"));
  const getWalletIcon = (wallet) => {
    if (wallet === 'coin98') {
      return coin98_png_1.default;
    }
    else if (wallet === 'falcon') {
      return falcon_png_1.default;
    }
    else if (wallet === 'keplr') {
      return keplr_png_1.default;
    }
    else if (wallet === 'leap') {
      return leap_png_1.default;
    }
    else {
      return default_svg_1.default;
    }
  };

  const {
    installedWallets,
    connectedWallet,
    setInputWallet,
    supportedWallets,
  } = useContext(SeiWalletContext);

  const wallets = inputWallets || supportedWallets;

  const renderWallet = (wallet: WalletWindowKey) => {
    const renderConnection = () => {
      if (connectedWallet === wallet) return <p>connected</p>;
      if (installedWallets.includes(wallet)) return <p>detected</p>;
      return null;
    };

    const selectWallet = () => {
      if (setInputWallet) setInputWallet(wallet);
      setShowConnectModal(false);
    };

    return (
      <div key={wallet} style={styles.row} onClick={selectWallet}>
        <div style={styles.info}>
          <img
            style={styles.icon}
            alt={wallet}
            width={24}
            height={24}
            src={getWalletIcon(wallet)}
          />
          <p style={{ ...styles.name, ...walletSelectStyles?.name }}>
            {wallet}
          </p>
        </div>
        {renderConnection()}
      </div>
    );
  };
  return (
    <div style={{ ...styles.background, ...walletSelectStyles?.background }}>
      <OutsideClickHandler
        onOutsideClick={(e) => {
          e.stopPropagation();
          setShowConnectModal(false);
        }}
      >
        <div style={{ ...styles.card, ...walletSelectStyles?.card }}>
          <h2>Connect your wallet</h2>
          <br />
          {wallets.map(renderWallet)}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default WalletSelectModal;
