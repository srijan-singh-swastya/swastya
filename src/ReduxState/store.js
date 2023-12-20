import {configureStore} from "@reduxjs/toolkit"
import newAddedMenberReducer from "./Property/AddingMemberDataSlice/AddingMemberDataSlice.js"
import newAddedCoupanReducer from "./Property/AddingCoupanDataSlice/AddingCoupanDataSlice.js"
import newTestasPrimaryReducer from "./Property/AddingLastTestData/AddingLastTestData.js"
export default configureStore({
    reducer:{
      newAddedMenber:newAddedMenberReducer,
      newAddedCoupan:newAddedCoupanReducer,
      newTestasPrimary:newTestasPrimaryReducer
    }
})