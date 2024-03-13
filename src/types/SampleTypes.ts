export interface SampleDetail {
  comment: string;
  keyword: string;
}

export interface SampleRow {
  no: string;
  type: string;
  risk01: string;
  risk02: string;
  result: SampleDetail;
}

export interface SampleRows {
  [key: string]: SampleRow;
}
