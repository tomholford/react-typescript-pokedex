import APIListResponseItem from './api_list_response_item';

export default interface APIListResponse {
  count: number;
  next: string;
  prvious: string;
  results: Array<APIListResponseItem>;
}
