import { useCallback, useState } from 'react';
import { Box, Button } from '@material-ui/core';

import WalletModal from 'src/components/WalletModal';

const Account = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleConnect = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <WalletModal isOpen={isModalOpen} onClose={handleClose} />
      <Box display="flex" alignItems="center">
        <Button color="secondary" variant="contained" onClick={handleConnect}>
          Connect Wallet
        </Button>
      </Box>
    </>
  );
};

export default Account;
