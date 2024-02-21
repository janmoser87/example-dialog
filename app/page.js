"use client";

import { Button, Modal, ModalDialog, ModalClose, Typography } from "@mui/joy";

import { useState } from "react";

export default function Home() {
	const [showModal, setShowModal] = useState(false);

	/**
   * I want this modal to be positioned 10px from the top border of the screen.
   * As you can see, <ModalDialog sx={{top: "10px"}}> is not the solution,
   * the modal partially overflows the screen.
   * 
   * Desired behavior:
   * 
   * /---------------/
   * /     _____     /
   * /    |     |    /
   * /    |_____|    /
   * /               /
   * /               /
   * /                /
   * /                /
   * /--------------- /
  

   * Actuall behavior:
   * 
   * /---------------/
   * /    |_____|    /
   * /               /
   * /               /
   * /                /
   * /                /
   * /--------------- /
  */
	const myModal = (
		<Modal open={showModal} onClose={() => setShowModal(false)}>
			<ModalDialog sx={{ top: "10px" }}>
				<ModalClose />
				<Typography>
					Modal content<br />
          Modal content<br />
          Modal content<br />
          Modal content<br />
          Modal content<br />
          Modal content<br />
				</Typography>
			</ModalDialog>
		</Modal>
	);

	return (
		<div>
			<Button onClick={() => setShowModal(true)}>Open modal</Button>
			{showModal && myModal}
		</div>
	);
}
