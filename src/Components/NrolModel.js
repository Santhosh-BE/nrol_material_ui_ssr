import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function NrolModel({
  open,
  setOpen,
  title,
  content,
  footer,
  modalSize = "false",
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog maxWidth={modalSize} open={open} onClose={handleClose}>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          {footer}
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
