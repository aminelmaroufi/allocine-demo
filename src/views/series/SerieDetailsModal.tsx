import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IMAGE_BASE_URL } from "../../config";
import { ISerie } from "../../models";

interface SerieDetailsModalProps {
  open: boolean;
  onClose: () => void;
  serie: ISerie | null;
}

const SerieDetailsModal: React.FC<SerieDetailsModalProps> = ({
  open,
  onClose,
  serie,
}) => {
  if (!serie) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: {
          border: "2px solid #000",
          borderRadius: "8px",
        },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="div">
            {serie.name}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={`${IMAGE_BASE_URL}${serie.poster_path}`}
                alt={serie.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <strong>Adult:</strong> {serie.adult ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Overview:</strong> {serie.overview}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Release Date:</strong> {serie.first_air_date}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Vote Average:</strong> {serie.vote_average}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Vote Count:</strong> {serie.vote_count}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SerieDetailsModal;
