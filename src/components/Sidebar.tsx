import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("give-consent");

  return (
    <Drawer variant="permanent">
      <Typography variant="h5" p={2}>
        Consent Manager
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "give-consent"}
            onClick={() => setSelectedItem("give-consent")}
          >
            <ListItemText primary="Give Consent" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "collected-consents"}
            onClick={() => setSelectedItem("collected-consents")}
          >
            <ListItemText primary="Collected Consents" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
