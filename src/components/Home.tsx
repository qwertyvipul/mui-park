import * as React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function Home() {
  const [layoutOpen, setLayoutOpen] = React.useState(true);

  const handleClickLayout = () => {
    setLayoutOpen(!layoutOpen);
  };

  return (
    <Container fixed>
      Home Page
      <List>
        <ListItemButton onClick={handleClickLayout}>
          <ListItemText primary="Layout" />
          {layoutOpen ? <ExpandLess /> : <ExpandMore />}
          <Collapse in={layoutOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Collapse Item" />
              </ListItem>
            </List>
          </Collapse>
        </ListItemButton>
      </List>
    </Container>
  );
}
