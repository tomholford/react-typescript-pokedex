import APITypeDetail from "./api_type_detail";

// there are other fields here, but don't care about them for now
export default interface APIDetailResponse {
  types: APITypeDetail[]
}
