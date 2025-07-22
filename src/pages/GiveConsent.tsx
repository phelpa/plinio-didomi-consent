import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Typography,
} from "@mui/material";

const GiveConsent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newsletter: false,
    ads: false,
    statistics: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          label="Email address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        I agree to:
      </Typography>

      <Box sx={{ mb: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleCheckboxChange}
            />
          }
          label="Receive newsletter"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              name="ads"
              checked={formData.ads}
              onChange={handleCheckboxChange}
            />
          }
          label="Be shown targeted ads"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              name="statistics"
              checked={formData.statistics}
              onChange={handleCheckboxChange}
            />
          }
          label="Contribute to anonymous visit statistics"
        />
      </Box>

      <Button variant="contained" size="large" onClick={handleSubmit}>
        Give consent
      </Button>
    </Box>
  );
};

export default GiveConsent;
