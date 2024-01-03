import {configureStore} from "@reduxjs/toolkit"
import newAddedMenberReducer from "./Property/AddingMemberDataSlice/AddingMemberDataSlice.js"
import newAddedCoupanReducer from "./Property/AddingCoupanDataSlice/AddingCoupanDataSlice.js"
import newTestasPrimaryReducer from "./Property/AddingLastTestData/AddingLastTestData.js"
import newDisountAndAdvanceReducer from "./Property/DiscountAndAdvanceDataSlice/DiscountAndAdvanceDataSlice.js"
import newAllEntriesReducer from "./Property/AllEntriesDataSlice/AllEntriesDataSlice.js"
export default configureStore({
    reducer:{
      newAddedMenber:newAddedMenberReducer,
      newAddedCoupan:newAddedCoupanReducer,
      newTestasPrimary:newTestasPrimaryReducer,
      newDisountAndAdvance:newDisountAndAdvanceReducer,
      newAllEntries:newAllEntriesReducer
    }
})