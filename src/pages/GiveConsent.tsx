import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addConsent } from "../services/mockApi";

const GiveConsent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newsletter: false,
    ads: false,
    statistics: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const isAnyCheckboxChecked =
    formData.newsletter || formData.ads || formData.statistics;

  const hasNameAndEmail = formData.name && formData.email;

  const isFormValid = hasNameAndEmail && isAnyCheckboxChecked;

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await addConsent(formData);
      navigate("/consents");
    } catch (error) {
      console.error("Error submitting consent:", error);
    } finally {
      setLoading(false);
    }
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
          required
          disabled={loading}
        />
        <TextField
          label="Email address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          variant="outlined"
          required
          disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          }
          label="Contribute to anonymous visit statistics"
        />
      </Box>

      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        disabled={!isFormValid || loading}
      >
        {loading ? "Submitting..." : "Give consent"}
      </Button>
    </Box>
  );
};

export default GiveConsent;
