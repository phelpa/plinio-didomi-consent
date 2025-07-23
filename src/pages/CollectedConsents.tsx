import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { getConsents } from "../services/mockApi";
import type { Consent } from "../services/mockApi";

const CollectedConsents = () => {
  const [consents, setConsents] = useState<Consent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsents = async () => {
      try {
        const data = await getConsents();
        setConsents(data);
      } catch (error) {
        console.error("Error fetching consents:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConsents();
  }, []);

  if (loading) {
    return <Typography>Loading consents...</Typography>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Newsletter</TableCell>
              <TableCell>Targeted Ads</TableCell>
              <TableCell>Statistics</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consents.map((consent) => (
              <TableRow key={consent.id}>
                <TableCell>{consent.name}</TableCell>
                <TableCell>{consent.email}</TableCell>
                <TableCell>
                  <Chip
                    label={consent.newsletter ? "Yes" : "No"}
                    color={consent.newsletter ? "success" : "default"}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={consent.ads ? "Yes" : "No"}
                    color={consent.ads ? "success" : "default"}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={consent.statistics ? "Yes" : "No"}
                    color={consent.statistics ? "success" : "default"}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {new Date(consent.timestamp).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CollectedConsents;
