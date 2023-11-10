import {configureStore} from "@reduxjs/toolkit"
import newAddedMenberReducer from "./Property/AddingMemberDataSlice/AddingMemberDataSlice.js"
import newAddedCoupanReducer from "./Property/AddingCoupanDataSlice/AddingCoupanDataSlice.js"
export default configureStore({
    reducer:{
      newAddedMenber:newAddedMenberReducer,
      newAddedCoupan:newAddedCoupanReducer
    }
})