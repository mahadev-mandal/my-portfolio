import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function ServicesCard({ imgPath, heading, content }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        border: "8px solid #fed79a",
        borderRadius: 5,
        textAlign: "center",
        pt:3,
      }}
    >
      <Box>
        <img src={imgPath} alt="" style={{ width: "30%" }} />
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Button size="small" sx={{ mt: 2 }}>
          More
        </Button>
      </CardContent>
    </Card>
  );
}
