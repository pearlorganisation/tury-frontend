import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import {
  addPartner,
  deletePartner,
  getAllPartners,
  getSinglePartner,
  updatePartner,
} from "../actions/partnerAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  partnerInfo: [],
  partner: {},
  pagination: {},
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // getting partners
      .addCase(getAllPartners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPartners.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        console.log(action.payload, "action.payload");
        toast.error(action.payload, { position: "top-right" });
      })
      .addCase(getAllPartners.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.partnerInfo = action.payload.data;
        state.pagination = action.payload.pagination;
        toast.success("All Partners recieved", { position: "top-right" });
      })

      // get single partner

      .addCase(getSinglePartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSinglePartner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload, { position: "top-right" });
      })
      .addCase(getSinglePartner.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.partner = action.payload.data;
        toast.success("Single Partner recieved", { position: "top-right" });
      })

      // add parter

      .addCase(addPartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPartner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload, { position: "top-right" });
      })
      .addCase(addPartner.fulfilled, (state) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        toast.success("Partner created Successfully", {
          position: "top-right",
        });
      })

      // delete partner
      .addCase(deletePartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePartner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload, { position: "top-right" });
      })
      .addCase(deletePartner.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;

        state.partnerInfo = state.teamInfo.filter(
          (partner) => partner._id !== action.meta.arg
        );
        toast.success("Partner deleted Successfully", {
          position: "top-right",
        });
      })

      // update partner

      .addCase(updatePartner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePartner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload, { position: "top-right" });
      })
      .addCase(updatePartner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.partner = action.payload;

        toast.success("Partner updated successfully", {
          position: "top-right",
        });
      });
  },
});

export default partnersSlice.reducer;
