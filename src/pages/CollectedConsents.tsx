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
  TablePagination,
} from "@mui/material";
import { getConsents } from "../services/mockApi";
import type { Consent } from "../services/mockApi";

const CollectedConsents = () => {
  const [consents, setConsents] = useState<Consent[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const rowsPerPage = 2;

  useEffect(() => {
    const fetchConsents = async () => {
      try {
        setLoading(true);
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

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  if (loading) {
    return <Typography>Loading consents...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Collected Consents
      </Typography>

      {consents.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No consents collected yet. Submit a consent to see it here.
        </Typography>
      ) : (
        <>
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
                {consents
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((consent) => (
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
            <TablePagination
              component="div"
              count={consents.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[rowsPerPage]}
            />
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default CollectedConsents;
