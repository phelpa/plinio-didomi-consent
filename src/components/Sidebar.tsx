import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      <Drawer variant="permanent">
        <Typography variant="h5" p={2}>
          Consent Manager
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={location.pathname === "/give-consent"}
              onClick={() => navigate("/give-consent")}
            >
              <ListItemText primary="Give Consent" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={location.pathname === "/consents"}
              onClick={() => navigate("/consents")}
            >
              <ListItemText primary="Collected Consents" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
