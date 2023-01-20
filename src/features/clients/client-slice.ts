import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

interface ClientState {
      id: string;
      surname: string;
      firstName: string;
}

// const initialState: ClientState[] = [{ id: "", surname: "", firstName: "" }];
const initialState: ClientState[] = [];

type payloadClient = {
  id: string;
  surname: string;
  firstName: string;
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient: {
      reducer(state, action: PayloadAction<payloadClient>) {
        state.push(action.payload);
      },
      prepare(firstName: string, surname: string) {
        const id = nanoid();
        return {
          payload: {
            id,
            surname,
            firstName,
          },
        };
      },
    },
  },
});

export const {addClient} = clientSlice.actions;
export default clientSlice.reducer;
